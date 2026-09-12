import { GoogleGenAI } from '@google/genai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY || '';

// Inicializar cliente Gemini
let genAI = null;
let googleGenAI = null;

if (apiKey) {
  try {
    googleGenAI = new GoogleGenAI({ apiKey });
  } catch (e) {
    console.warn('GoogleGenAI (@google/genai) init warning:', e.message);
  }
  try {
    genAI = new GoogleGenerativeAI(apiKey);
  } catch (e) {
    console.warn('GoogleGenerativeAI init warning:', e.message);
  }
}

/**
 * Genera el System Prompt oficial para Patri AI Assistant
 */
export function buildSystemPrompt(cvText = '') {
  return `
Eres Patri AI Assistant, el asistente conversacional oficial del portfolio profesional de Patricia Aparicio Díaz (nombre visible: Patri Aparicio).

TU MISIÓN:
Permitir a los reclutadores, líderes técnicos y visitantes conocer a fondo la experiencia, proyectos, formación, stack tecnológico y habilidades de Patri Aparicio mediante respuestas naturales, precisas y profesionales.

DATOS PRINCIPALES DE PATRI APARICIO:
- Nombre completo: Patricia Aparicio Díaz (Nombre visible: Patri Aparicio)
- Rol / Título: Desarrolladora Frontend Junior (especializada en React & JavaScript)
- Estado actual: Actualmente NO es Full Stack todavía; es Frontend Junior y está inmersa en un bootcamp intensivo de más de 600 horas de desarrollo web para completar su formación y convertirse en Full Stack en breve.
- Especialidad: React, JavaScript moderno, Testing automatizado (Vitest, React Testing Library, Jest), maquetación UI/UX con Tailwind CSS y CSS moderno, diseño y prototipado con Figma y Stitch, React Router, Vite, consumo de APIs REST.
- Herramientas de diseño, testing y flujo: Vitest, React Testing Library, Figma, Stitch (UI generativa y diseño rápido), Git, GitHub, Vercel.
- Ubicación: Sevilla, España (disponible para trabajo remoto o híbrido).
- Enlaces oficiales:
  * GitHub: https://github.com/apariciodiazpatricia-cell
  * LinkedIn: https://linkedin.com/in/patriciaapariciodiaz
  * Vercel: https://vercel.com/apariciodiazpatricia-cells-projects
  * Email: apariciodiazpatricia@gmail.com
- Disponibilidad: Inmediata para incorporarse como Frontend Junior en empresas o proyectos (modalidad remota o híbrida).

PROYECTOS DESTACADOS EN EL PORTFOLIO:
1. WORLD CUP 2026:
   - Aplicación React para la Copa del Mundo 2026 (Demo: https://world-cup2026-sigma-weld.vercel.app/).
   - Consumo de APIs deportivas, estadísticas dinámicas en tiempo real, navegación con React Router y componentes modulares.
2. HABITATCODE:
   - Plataforma inmobiliaria moderna orientada a estudiantes.
   - Desarrollada en React basada fielmente en sistemas de diseño Figma, 100% responsive, filtros dinámicos.
3. VALHALLA DEL CHATARRERO:
   - Comercio electrónico inmersivo con estética post-apocalíptica.
   - Componentes React avanzados, APIs externas, tiempo meteorológico en tiempo real (OpenWeather API) y experiencia visual interactiva.
4. LA BUHARDILLA RETRO:
   - Comercio electrónico interactivo de temática vintage con catálogo de artículos de las décadas de los 60, 70 y 80.
   - Desarrollada en React, consume una API propia para operaciones CRUD completas (artículos y gestión de usuarios) e integra la API meteorológica (Meteo API) en tiempo real para adaptar la atmósfera visual.

${cvText ? `INFORMACIÓN OFICIAL DEL CV DE PATRI APARICIO:\n\"\"\"\n${cvText}\n\"\"\"\n` : ''}

NORMAS Y DIRECTRICES OBLIGATORIAS:
1. Responde SIEMPRE en español de forma fluida, cordial y profesional.
2. Mantén un tono cercano, seguro y honesto. No inventes experiencia ni certificaciones que no figuren en los datos o en el CV.
3. Si la información solicitada no existe, indícalo claramente e invita al usuario a contactar directamente con Patri por LinkedIn o email.
4. Prioriza siempre los datos obtenidos del CV cuando esté disponible.
5. Mantén respuestas breves, estructuradas y fáciles de leer (usa viñetas cuando sea apropiado).
6. Recomienda visitar los proyectos en el portfolio o los enlaces de GitHub/Vercel cuando sea relevante para la pregunta.
`.trim();
}

/**
 * Procesa la consulta del usuario con Google Gemini
 */
export async function getGeminiResponse(message, history = [], cvText = '') {
  const systemInstruction = buildSystemPrompt(cvText);

  // Si no hay API KEY configurada en el servidor, usamos el motor de respuestas contextuales de fallback
  if (!apiKey) {
    return generateSmartFallback(message, cvText);
  }

  try {
    // 1. Intentar con @google/genai (Gemini 2.5 Flash)
    if (googleGenAI) {
      const response = await googleGenAI.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nPregunta del usuario: ${message}` }] }
        ]
      });
      if (response && response.text) {
        return response.text;
      }
    }
  } catch (err1) {
    console.warn('Fallo con gemini-2.5-flash vía @google/genai, intentando alternativa:', err1.message);
  }

  try {
    // 2. Intentar con @google/generative-ai (Gemini 1.5 Flash / 2.0 Flash)
    if (genAI) {
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        systemInstruction: systemInstruction
      });

      const formattedHistory = history.slice(-6).map(h => ({
        role: h.sender === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }]
      }));

      const chat = model.startChat({ history: formattedHistory });
      const result = await chat.sendMessage(message);
      const text = result.response.text();
      if (text) return text;
    }
  } catch (err2) {
    console.error('Error al llamar a Google Gemini API:', err2);
  }

  // Fallback inteligente garantizado
  return generateSmartFallback(message, cvText);
}

/**
 * Generador de respuestas de respaldo inteligente y contextual
 */
function generateSmartFallback(query, cvText = '') {
  const q = query.toLowerCase();

  if (q.includes('quién es') || q.includes('quien es') || q.includes('sobre patri') || q.includes('present') || q.includes('perfil')) {
    return `¡Hola! Soy **Patri AI**, asistente de **Patri Aparicio** (Patricia Aparicio Díaz). 

Patri es **Frontend Developer** especializada en **React**, JavaScript moderno y diseño de interfaces reactivas con Tailwind CSS. Además, cuenta con formación continua en backend (Node.js, Express) e integración de APIs de IA como Google Gemini.

¿Te gustaría conocer sus proyectos, sus tecnologías o cómo contactar con ella?`;
  }

  if (q.includes('tecnolog') || q.includes('stack') || q.includes('lenguaje') || q.includes('herramienta')) {
    return `**Stack Tecnológico de Patri Aparicio:**

- **Frontend Core**: React (18/19), JavaScript ES6+, HTML5 semántico, Modern CSS.
- **Estilos & UI**: Tailwind CSS, diseño responsive, micro-interacciones, diseño basado en Figma.
- **Routing & Tooling**: React Router, Vite, Git/GitHub.
- **Backend & APIs**: Node.js, Express, REST APIs, OpenWeather API, Google Gemini 2.5 Flash API.
- **Deploy**: Vercel, Render, Railway.`;
  }

  if (q.includes('proyecto') || q.includes('portfolio') || q.includes('trabajo') || q.includes('desarroll')) {
    return `Patri ha desarrollado 4 proyectos principales de alto nivel:

1. 🏆 **WORLD CUP 2026**: App React con consumo de APIs deportivas y estadísticas dinámicas.
2. 🏡 **HABITATCODE**: Plataforma inmobiliaria para estudiantes, responsive y fiel al diseño Figma.
3. ⚡ **VALHALLA DEL CHATARRERO**: E-commerce temático con integración meteorológica en tiempo real y UI inmersiva.
4. 🕹️ **LA BUHARDILLA RETRO**: E-commerce vintage (60s, 70s, 80s) con API propia CRUD (artículos/usuarios) y Meteo API en vivo.

¡Puedes verlos en detalle en la sección de **Proyectos** de este portfolio!`;
  }

  if (q.includes('experiencia') || q.includes('trayectoria') || q.includes('react')) {
    return `Patri cuenta con una sólida experiencia en **React** construyendo aplicaciones modulares, componentes reutilizables, gestión de estado y consumo de APIs externas.

Tiene un enfoque riguroso en **código limpio, accesibilidad y rendimiento**. Actualmente está expandiendo sus competencias hacia el backend con Node.js y la inteligencia artificial generativa.`;
  }

  if (q.includes('contacto') || q.includes('email') || q.includes('correo') || q.includes('linkedin') || q.includes('github') || q.includes('telefono')) {
    return `Puedes contactar directamente con Patri a través de:

- 📧 **Email**: [apariciodiazpatricia@gmail.com](mailto:apariciodiazpatricia@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/patriciaapariciodiaz](https://linkedin.com/in/patriciaapariciodiaz)
- 🐙 **GitHub**: [github.com/apariciodiazpatricia-cell](https://github.com/apariciodiazpatricia-cell)
- 🚀 **Vercel**: [vercel.com/apariciodiazpatricia-cells-projects](https://vercel.com/apariciodiazpatricia-cells-projects)

¡Está disponible para conversar sobre nuevas oportunidades!`;
  }

  if (q.includes('disponible') || q.includes('trabajar') || q.includes('contratar') || q.includes('incorpor')) {
    return `¡Sí! **Patri Aparicio está disponible de forma inmediata** para incorporarse como **Frontend Junior** a equipos de desarrollo (modalidad remota o híbrida desde Sevilla, España). Además, actualmente se encuentra cursando un bootcamp intensivo de más de 600 horas para convertirse en **Full Stack en breve**.`;
  }

  if (cvText && (q.includes('cv') || q.includes('currículum') || q.includes('estudio') || q.includes('formaci'))) {
    return `Patri tiene su CV cargado y sincronizado. Según su perfil, cuenta con sólida especialización en Frontend (React, JavaScript ES6+, Tailwind CSS, Figma & Stitch) y está completando un bootcamp intensivo de más de 600 horas para expandir sus competencias a Full Stack. Puedes descargar su CV completo directamente desde la sección **CV** del portfolio.`;
  }

  return `Gracias por tu pregunta sobre el portfolio de **Patri Aparicio**. Patri es Frontend Developer Junior especializada en React y consumo de APIs. Puedes explorar sus proyectos destacados en la web, descargar su CV o escribirle a [apariciodiazpatricia@gmail.com](mailto:apariciodiazpatricia@gmail.com). ¿En qué más puedo ayudarte?`;
}
