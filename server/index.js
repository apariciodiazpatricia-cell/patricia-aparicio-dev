import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pdfParse from 'pdf-parse/lib/pdf-parse.js';
import { getGeminiResponse } from './services/geminiService.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Directorios de CV
const cvUploadDir = path.join(__dirname, '..', 'src', 'assets', 'cv');
if (!fs.existsSync(cvUploadDir)) {
  fs.mkdirSync(cvUploadDir, { recursive: true });
}

// Configuración de Multer para almacenar el PDF del CV
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, cvUploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, 'patri-aparicio-cv.pdf');
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB máximo
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || file.originalname.toLowerCase().endsWith('.pdf')) {
      cb(null, true);
    } else {
      cb(new Error('Solo se permiten archivos en formato PDF'));
    }
  }
});

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Servir la carpeta de assets de CV de forma estática para descargas
app.use('/cv-files', express.static(cvUploadDir));

/**
 * Health check
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Patri Aparicio Portfolio API',
    geminiConfigured: !!process.env.GEMINI_API_KEY,
    timestamp: new Date().toISOString()
  });
});

/**
 * Endpoint de Chat con Gemini 2.5 Flash
 * POST /api/chat
 * Body: { message: string, history?: array, cvText?: string }
 */
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [], cvText = '' } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'El mensaje es obligatorio' });
    }

    const reply = await getGeminiResponse(message, history, cvText);
    res.json({ reply, timestamp: new Date().toISOString() });
  } catch (error) {
    console.error('Error en /api/chat:', error);
    res.status(500).json({
      error: 'Error procesando la consulta',
      reply: 'Ha ocurrido un error al contactar con el asistente. Por favor, intenta de nuevo o escribe directamente a apariciodiazpatricia@gmail.com.'
    });
  }
});

/**
 * Endpoint para subir y extraer texto del CV
 * POST /api/cv/upload
 */
app.post('/api/cv/upload', upload.single('cvFile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se ha adjuntado ningún archivo PDF' });
    }

    const filePath = req.file.path;
    const dataBuffer = fs.readFileSync(filePath);

    // Extracción automática del texto usando pdf-parse
    let extractedText = '';
    try {
      const pdfData = await pdfParse(dataBuffer);
      extractedText = pdfData.text ? pdfData.text.trim() : '';
    } catch (parseErr) {
      console.warn('Advertencia al parsear PDF con pdf-parse:', parseErr.message);
      extractedText = 'CV cargado correctamente en formato PDF.';
    }

    // Guardar copia del texto extraído
    const textPath = path.join(cvUploadDir, 'cv-extracted-text.txt');
    fs.writeFileSync(textPath, extractedText, 'utf-8');

    res.json({
      success: true,
      message: 'CV subido y texto extraído correctamente',
      fileName: req.file.originalname,
      savedAs: req.file.filename,
      fileSize: req.file.size,
      textLength: extractedText.length,
      extractedText: extractedText
    });
  } catch (error) {
    console.error('Error al subir CV:', error);
    res.status(500).json({ error: error.message || 'Error al procesar el archivo PDF' });
  }
});

/**
 * Endpoint para obtener el estado actual del CV cargado
 * GET /api/cv/status
 */
app.get('/api/cv/status', (req, res) => {
  try {
    const pdfPath = path.join(cvUploadDir, 'patri-aparicio-cv.pdf');
    const textPath = path.join(cvUploadDir, 'cv-extracted-text.txt');

    const hasPdf = fs.existsSync(pdfPath);
    let extractedText = '';

    if (fs.existsSync(textPath)) {
      extractedText = fs.readFileSync(textPath, 'utf-8');
    }

    res.json({
      hasCv: hasPdf,
      fileName: hasPdf ? 'patri-aparicio-cv.pdf' : null,
      text: extractedText,
      url: hasPdf ? '/assets/cv/patri-aparicio-cv.pdf' : null
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar estado del CV' });
  }
});

/**
 * Endpoint opcional de OpenWeather API proxy
 * GET /api/weather?city=Seville
 */
app.get('/api/weather', async (req, res) => {
  const city = req.query.city || 'Seville,ES';
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    // Retornar datos mock elegantes si no hay API key
    return res.json({
      city: 'Sevilla, ES',
      temp: 24,
      condition: 'Cielo Despejado',
      icon: '01d',
      humidity: 45,
      windSpeed: 12,
      isMock: true
    });
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${apiKey}`);
    if (!response.ok) throw new Error('Error al consultar OpenWeather');
    const data = await response.json();

    res.json({
      city: `${data.name}, ${data.sys.country}`,
      temp: Math.round(data.main.temp),
      condition: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6),
      isMock: false
    });
  } catch (error) {
    res.json({
      city: 'Sevilla, ES',
      temp: 24,
      condition: 'Soleado & Despejado',
      icon: '01d',
      humidity: 45,
      windSpeed: 12,
      isMock: true
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend de Patri Aparicio activo en http://localhost:${PORT}`);
});
