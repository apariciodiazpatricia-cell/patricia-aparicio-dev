import { portfolioData } from '../data/portfolioData';

// URL base del backend (en desarrollo local o en producción en Render/Railway)
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Envía un mensaje al Asistente IA (Gemini 2.5 Flash en backend o fallback client-side)
 */
export async function sendChatMessage(message, history = [], cvText = '') {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

    const response = await fetch(`${API_BASE}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history,
        cvText
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      return data.reply;
    }
  } catch (error) {
    console.warn('Backend API no disponible o timeout, ejecutando motor IA local:', error.message);
  }

  // Motor de respuesta local contextual de alta precisión (Fallback garantizado)
  return getLocalSmartResponse(message, cvText);
}

/**
 * Sube un archivo PDF de CV al servidor y obtiene el texto extraído
 */
export async function uploadCvFile(file) {
  try {
    const formData = new FormData();
    formData.append('cvFile', file);

    const response = await fetch(`${API_BASE}/cv/upload`, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn('Error subiendo al servidor, procesando extracción local:', error);
  }

  return null;
}

/**
 * Consulta el clima de OpenWeather (vía backend o directo)
 */
export async function fetchWeather(city = 'Seville') {
  try {
    const res = await fetch(`${API_BASE}/weather?city=${city}`);
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    console.warn('Weather fetch error:', e);
  }

  // Fallback con datos reales de Sevilla
  return {
    city: 'Sevilla, ES',
    temp: 24,
    condition: 'Cielo Despejado',
    icon: '01d',
    humidity: 42,
    windSpeed: 10,
    isMock: true
  };
}

/**
 * Respuestas inteligentes contextuales cuando el backend no está iniciado
 */
function getLocalSmartResponse(message, cvText = '') {
  const q = message.toLowerCase();

  if (q.includes('quién es') || q.includes('quien es') || q.includes('sobre patri') || q.includes('present') || q.includes('perfil') || q.includes('hola') || q.includes('buenas')) {
    return `¡Hola! Soy **Patri AI**, asistente oficial de **Patri Aparicio** (Patricia Aparicio Díaz).

Patri es **Frontend Developer Junior** especializada en **React**, JavaScript moderno, **Testing automatizado (Vitest & React Testing Library)**, diseño en **Figma & Stitch** y consumo de APIs REST. Actualmente se encuentra cursando un **bootcamp intensivo de más de 600 horas** para convertirse en **Full Stack en breve**.

¿Qué te gustaría descubrir sobre su perfil o sus proyectos?`;
  }

  if (q.includes('tecnolog') || q.includes('stack') || q.includes('lenguaje') || q.includes('herramienta') || q.includes('testing') || q.includes('test')) {
    return `**Stack Tecnológico Principal de Patri:**

- ⚛️ **Frontend**: React (18/19), JavaScript (ES6+), React Router, Vite.
- 🧪 **Testing & QA**: Vitest, React Testing Library, Jest, Component & Unit Testing.
- 🎨 **Estilos & UI/UX**: Tailwind CSS, Modern CSS, Responsive Design, diseño con Figma y Stitch.
- 🌐 **Backend & APIs**: Node.js, Express, PostgreSQL, REST APIs, OpenWeather API, Google Gemini 2.5 Flash API.
- 🛠️ **DevOps & Control**: Git, GitHub, Vercel, Render.`;
  }

  if (q.includes('proyecto') || q.includes('portfolio') || q.includes('trabajos') || q.includes('desarroll')) {
    return `Patri ha desarrollado 4 proyectos clave en su portfolio:

1. 🏆 **WORLD CUP 2026**: App deportiva en tiempo real con estadísticas y filtros dinámicos.
2. 🏡 **HABITATCODE**: Plataforma inmobiliaria estudiantil con diseño Figma y UX adaptativo.
3. ⚡ **VALHALLA DEL CHATARRERO**: E-commerce temático con integración meteorológica en vivo.
4. 🕹️ **LA BUHARDILLA RETRO**: E-commerce vintage (60s, 70s, 80s) con API propia CRUD (artículos/usuarios) y Meteo API en vivo.

¡Puedes explorarlos con vídeos y enlaces en la sección **Proyectos**!`;
  }

  if (q.includes('react')) {
    return `Patri tiene una sólida especialización en **React**:
- Arquitectura de componentes reutilizables y limpios.
- Hooks avanzados (\`useState\`, \`useEffect\`, \`useContext\`, custom hooks).
- Navegación fluida y rutas dinámicas con **React Router**.
- Integración de APIs externas en tiempo real y optimización de rendimiento.`;
  }

  if (q.includes('ia') || q.includes('inteligencia artificial') || q.includes('gemini')) {
    return `Patri diseña e implementa integraciones completas con **Google Gemini 2.5 Flash API** mediante la librería oficial \`@google/genai\`, configurando asistentes conversacionales contextuales con system prompts personalizados, inyección de datos dinámicos y sincronización directa de su CV profesional.`;
  }

  if (q.includes('disponible') || q.includes('trabajar') || q.includes('contrat') || q.includes('incorpor')) {
    return `¡Sí! **Patri Aparicio tiene disponibilidad inmediata** para incorporarse a posiciones **Frontend Junior** en modalidad remota o presencial/híbrida (Sevilla, España). Además, actualmente cursa un bootcamp intensivo de más de 600 horas para titularse como **Full Stack**.`;
  }

  if (q.includes('contacto') || q.includes('email') || q.includes('correo') || q.includes('linkedin') || q.includes('github') || q.includes('telefono')) {
    return `Puedes contactar con Patri hoy mismo a través de:

- 📧 **Email**: [apariciodiazpatricia@gmail.com](mailto:apariciodiazpatricia@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/patriciaapariciodiaz](https://linkedin.com/in/patriciaapariciodiaz)
- 🐙 **GitHub**: [github.com/apariciodiazpatricia-cell](https://github.com/apariciodiazpatricia-cell)
- 🚀 **Vercel**: [vercel.com/apariciodiazpatricia-cells-projects](https://vercel.com/apariciodiazpatricia-cells-projects)`;
  }

  if (cvText && (q.includes('cv') || q.includes('currículum') || q.includes('estudio') || q.includes('formaci'))) {
    return `Patri tiene su CV actualizado en el portfolio. Puedes descargarlo directamente en formato PDF o consultar cualquier duda sobre su formación y competencias.`;
  }

  return `Patri Aparicio es Frontend Developer Junior especializada en React, diseño moderno y consumo de APIs. Puedes explorar sus proyectos destacados, descargar su CV o escribirle directamente a [apariciodiazpatricia@gmail.com](mailto:apariciodiazpatricia@gmail.com). ¿En qué más puedo orientarte?`;
}
