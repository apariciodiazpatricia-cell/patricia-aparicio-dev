# 🌐 Referencia de APIs y Microservicios // Patri Aparicio Portfolio

Este documento detalla todas las APIs, microservicios, endpoints y motores de respuesta utilizados en el ecosistema del portafolio.

---

## 📡 1. Microservicio Backend (`/api/chat`)

El servidor Express (`server/index.js`) expone un endpoint REST para la gestión del chatbot con Google Gemini.

### `POST /api/chat`
* **URL:** `http://localhost:5000/api/chat` (o dominio en producción)
* **Headers:** `Content-Type: application/json`
* **Payload Request:**
```json
{
  "message": "¿Qué experiencia tiene Patri en React?",
  "history": [
    { "sender": "bot", "text": "¡Hola! Soy Patri AI..." }
  ],
  "cvText": "PATRICIA APARICIO DÍAZ...\nPerfil: Desarrolladora Frontend Junior..."
}
```
* **Respuesta Exitosa (`200 OK`):**
```json
{
  "response": "Patri tiene una sólida experiencia en **React 19 / 18** construyendo interfaces modulares, custom hooks y consumo de APIs...",
  "status": "success",
  "model": "gemini-2.5-flash"
}
```
* **Respuesta de Error / Fallback (`200 OK` controlado):**
```json
{
  "response": "Patri tiene amplia experiencia en React...",
  "status": "fallback"
}
```

---

## 🤖 2. Pipeline de Google Gemini 2.5 Flash

### SDKs utilizados:
1. **`@google/genai` (Oficial):** SDK de última generación para invocar modelos `gemini-2.5-flash`.
2. **`@google/generative-ai` (Fallback):** SDK complementario como respaldo secundario.

### Estructura del System Prompt (`buildSystemPrompt`):
```javascript
// server/services/geminiService.js
export function buildSystemPrompt(cvText = '') {
  return `
Eres Patri AI Assistant, el asistente conversacional oficial del portfolio profesional de Patricia Aparicio Díaz (Patri Aparicio).

DATOS PRINCIPALES DE PATRI APARICIO:
- Nombre completo: Patricia Aparicio Díaz (Nombre visible: Patri Aparicio)
- Rol / Título: Desarrolladora Frontend Junior (especializada en React & JavaScript)
- Estado actual: Actualmente es Frontend Junior y está inmersa en un bootcamp intensivo de más de 600 horas de desarrollo web para completar su formación y convertirse en Full Stack en breve.
- Especialidad: React, JavaScript moderno, Tailwind CSS, Figma, Stitch, React Router, Vite, APIs REST.
- Ubicación: Sevilla, España (remoto / híbrido).
- Disponibilidad: Inmediata para puestos de Frontend Junior.

PROYECTOS:
1. WORLD CUP 2026 (Demo: https://world-cup2026-sigma-weld.vercel.app/)
2. HABITATCODE (Inmobiliaria para estudiantes, Figma design)
3. VALHALLA DEL CHATARRERO (E-commerce post-apocalíptico + OpenWeather API)
4. LA BUHARDILLA RETRO (E-commerce vintage 60s/70s/80s con API propia CRUD y Meteo API)

${cvText ? `DATOS EXTRAÍDOS DEL CV:\n"""\n${cvText}\n"""\n` : ''}

NORMAS:
- Responde siempre en español, con tono cercano, profesional y seguro.
- Prioriza los datos del CV cuando estén disponibles.
- No inventes certificaciones o experiencia no listada.
  `.trim();
}
```

---

## 🛡️ 3. Motor de Smart Fallback Local (`src/services/api.js`)

Cuando la aplicación corre en modo puramente estático o el backend no responde, la función `getLocalSmartResponse(message, cvText)` procesa la consulta mediante coincidencia de patrones semánticos:

* **Preguntas de Identidad:** `¿Quién es Patri?`, `perfil`, `presentación` -> Devuelve resumen completo de su rol Frontend Junior y formación hacia Full Stack.
* **Preguntas de Stack:** `tecnologías`, `stack`, `herramientas` -> Devuelve el radar tecnológico clasificado por capas.
* **Preguntas de Proyectos:** `proyectos`, `portfolio`, `trabajos` -> Lista los 4 proyectos destacados con sus características clave.
* **Preguntas de Disponibilidad:** `disponible`, `trabajar`, `contratar` -> Confirma disponibilidad inmediata para puestos Frontend Junior.
* **Preguntas de Contacto:** `email`, `linkedin`, `github` -> Ofrece los enlaces directos a sus perfiles.
* **Preguntas sobre el CV:** `cv`, `currículum`, `estudios` -> Valida la sincronización del CV y recomienda su descarga en PDF.

---

## ⛅ 4. APIs Externas Integradas en Proyectos

### 4.1 OpenWeather / Open-Meteo API
* **Propósito:** Telemetría meteorológica en tiempo real para Sevilla.
* **Datos consumidos:** Temperatura en °C, descripción del cielo, código de icono, humedad y velocidad del viento.
* **Implementación:** `fetchWeatherByCity(cityName)` en `src/services/api.js` con fallback estático seguro.

### 4.2 API Propia REST (La Buhardilla Retro)
* **Propósito:** Control total del inventario vintage y gestión de usuarios.
* **Endpoints:**
  - `GET /api/items`: Listado de artículos de los años 60, 70 y 80.
  - `POST /api/items`: Creación de nuevos productos.
  - `PUT /api/items/:id`: Actualización de stock y precios.
  - `DELETE /api/items/:id`: Eliminación de artículos.
  - `POST /api/auth/users`: Gestión de sesiones y perfiles de usuario.

### 4.3 Sports & Tournament Data API (World Cup 2026)
* **Propósito:** Alimentar el árbol de grupos y calendarios de partidos.
* **Datos consumidos:** Puntos, partidos jugados, diferencias de goles y clasificación de selecciones en vivo.
