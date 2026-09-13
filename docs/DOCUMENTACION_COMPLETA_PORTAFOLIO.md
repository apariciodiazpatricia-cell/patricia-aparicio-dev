# 📚 DOCUMENTACIÓN TÉCNICA INTEGRAL
## PORTAFOLIO PROFESIONAL // PATRI APARICIO
### Desarrolladora Frontend Junior • React 19 • JavaScript ES6+ • UI/UX Design

---

## 📑 ÍNDICE GENERAL

1. [Resumen Ejecutivo y Ficha Técnica](#1-resumen-ejecutivo-y-ficha-técnica)
2. [Arquitectura del Sistema y Flujo de Datos](#2-arquitectura-del-sistema-y-flujo-de-datos)
3. [Catálogo Completo de Componentes UI](#3-catálogo-completo-de-componentes-ui)
4. [Ecosistema de APIs, Microservicios y Google Gemini 2.5](#4-ecosistema-de-apis-microservicios-y-google-gemini-25)
5. [Estrategia y Guía de Testing Automatizado](#5-estrategia-y-guía-de-testing-automatizado)
6. [Guía de Despliegue y Puesta en Producción](#6-guía-de-despliegue-y-puesta-en-producción)
7. [Proyectos Destacados del Portafolio](#7-proyectos-destacados-del-portafolio)
8. [Estructura del Repositorio de Perfil de GitHub](#8-estructura-del-repositorio-de-perfil-de-github)

---

## 1. RESUMEN EJECUTIVO Y FICHA TÉCNICA

### 1.1 Identidad Profesional
* **Desarrolladora:** Patricia Aparicio Díaz (*Patri Aparicio*)
* **Rol:** Desarrolladora Frontend Junior (con proyección Full Stack)
* **Ubicación:** Sevilla, España (Disponible para modalidad Remota o Híbrida)
* **Formación:** Bootcamp intensivo de más de 600 horas de programación web moderna.
* **Portafolio en Vivo:** [https://patricia-aparicio-dev.vercel.app/](https://patricia-aparicio-dev.vercel.app/)
* **Perfil de GitHub:** [https://github.com/apariciodiazpatricia-cell](https://github.com/apariciodiazpatricia-cell)
* **LinkedIn:** [https://linkedin.com/in/patriciaapariciodiaz](https://linkedin.com/in/patriciaapariciodiaz)

### 1.2 Stack Tecnológico Principal

| Capa | Tecnologías Clave |
| :--- | :--- |
| **Frontend Core** | React 19 / 18, JavaScript ES6+ (Vanilla JS, Promesas, Async/Await), HTML5 Semántico |
| **Estilos & Diseño** | Tailwind CSS 3.4, Vanilla CSS (Keyframes, Scanlines, Neón), Figma UI/UX, Stitch IA |
| **Herramientas & Bundler** | Vite 8.3 Turbo, Lucide Icons, ESLint, React Router SPA |
| **Testing & QA** | Vitest 5.0, React Testing Library, JSDOM, Component Mocks |
| **Backend & Microservicios** | Node.js 20.x, Express, REST APIs, Google GenAI SDK (`gemini-2.5-flash`) |
| **Bases de Datos & En formación** | PostgreSQL, SQL Relacional, Node/Express CRUD |
| **DevOps & Despliegue** | Vercel (CI/CD Automático), GitHub Actions, Git Flow |

---

## 2. ARQUITECTURA DEL SISTEMA Y FLUJO DE DATOS

El proyecto está diseñado bajo una arquitectura desacoplada de **Single Page Application (SPA)** de alto rendimiento en el cliente combinada con un microservicio backend para operaciones seguras de Inteligencia Artificial.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                CLIENTE (FRONTEND)                               │
│  React 19 + Vite 8 + Tailwind CSS                                               │
│                                                                                 │
│  ┌───────────────────────┐   ┌────────────────────────┐   ┌───────────────────┐ │
│  │   UI & Componentes    │   │      CvContext         │   │   Smart Fallback  │ │
│  │  (Matrix Cyberpunk)   │   │  (Sincronización CV)   │   │  (Motor Offline)  │ │
│  └──────────┬────────────┘   └───────────┬────────────┘   └─────────┬─────────┘ │
└─────────────┼────────────────────────────┼──────────────────────────┼───────────┘
              │ HTTP / REST                │ Inyección de Datos       │
              ▼                            ▼                          ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                SERVIDOR (BACKEND)                               │
│  Node.js + Express (Puerto 5000)                                                │
│                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │  Endpoint: POST /api/chat                                                 │  │
│  │  - Validación de Payload                                                  │  │
│  │  - Ensamblador de System Prompt con datos de perfil y CV                  │  │
│  │  - Google GenAI SDK (@google/genai) -> Modelo: gemini-2.5-flash           │  │
│  │  - Fallback a @google/generative-ai o respuestas contextuales seguras     │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Gestión de Estado Global con Context API (`CvContext.jsx`)
* **Estado global:**
  - `cvText`: Contenido textual parseado del Curriculum Vitae.
  - `isCvLoaded`: Booleano de estado de carga.
  - `cvFileName`: Archivo PDF oficial (`patri-aparicio-cv.pdf`).
* **Persistencia:** Almacenamiento en `localStorage` (`patri_cv_text`) con fallback automático al texto por defecto en `portfolioData.js`.
* **Inyección en IA:** Cada interacción con el chatbot inyecta dinámicamente el CV para asegurar respuestas 100% fidedignas sobre su trayectoria.

### 2.2 Principios de Rendimiento y UI
* **Aceleración por Hardware:** Animaciones cinemáticas mediante CSS Keyframes y Canvas API.
* **Optimización de Assets:** Vídeos responsivos con `muted`, `loop`, `playsInline` y `preload="metadata"`.
* **Seguridad de Claves:** `GEMINI_API_KEY` encapsulada en el backend, nunca visible en bundles cliente.

---

## 3. CATÁLOGO COMPLETO DE COMPONENTES UI

### 3.1 `NavbarPacman.jsx`
* **Propósito:** Barra superior fija (`fixed top-0 inset-x-0 z-50`).
* **Características:**
  - Pista animada de Pac-Man devorando pellets luminosos.
  - Resaltado en tiempo real de la sección activa mediante scroll spy.
  - Botón CTA directo al asistente virtual con indicador visual de estado (`CORE_ONLINE`).

### 3.2 `Hero.jsx`
* **Propósito:** Cabecera de impacto visual inmediato.
* **Características:**
  - Efecto de escritura a máquina (*Typewriter*) en vivo.
  - Avatar táctico holográfico con barrido de láser HUD, scanlines CRT y marcadores perimetrales.
  - Widgets integrados de clima en tiempo real (`WeatherWidget`) y frases dev (`ApiWidget`).
  - Accesos rápidos a proyectos, chatbot y descarga de CV.

### 3.3 `HeroRobot.jsx`
* **Propósito:** Dron centinela interactivo (`SCOUT_BOT`).
* **Animación:** Patrullaje horizontal cinemático de 18 segundos cruzando la pantalla en la sección *Sobre Mí*.

### 3.4 `About.jsx`
* **Propósito:** Presentación biográfica estructurada en un visor interactivo de código con 3 pestañas:
  1. `profile.json`: Metadatos de perfil.
  2. `philosophy.js`: Clase JavaScript con principios de desarrollo.
  3. `learning.log`: Trayectoria y hoja de ruta formativa.
* Tarjetas de métricas clave con estética Matrix Neón.

### 3.5 `TechStack.jsx`
* **Propósito:** Matriz interactiva de competencias técnicas en 4 cuadrantes:
  - Frontend Core (React 19, JS ES6+, Vite, HTML5).
  - Estilos & UI/UX (Tailwind CSS, Grid, Flexbox, Keyframes).
  - Herramientas, Figma & Stitch (Design Systems, Prototipado, UI Generativa).
  - Backend, IA & DevOps (Node.js, Express, PostgreSQL, Gemini API, Git/GitHub, Vercel).

### 3.6 `Projects.jsx`
* **Propósito:** Vitrina interactiva de proyectos con soporte híbrido de vídeo interactivo e imágenes de alta definición, badges de tecnologías y enlaces directos a código fuente y demos.

### 3.7 `CvSection.jsx`
* **Propósito:** Visor embebido de CV en PDF con controles de zoom, modo pantalla completa y botón de descarga directa.

### 3.8 `PortfolioAssistant.jsx`
* **Propósito:** Asistente conversacional con IA integrada (**Patri AI**). Permite realizar preguntas libres o seleccionar sugerencias rápidas.

### 3.9 `Footer.jsx` y `MatrixRain.jsx`
* Lluvia de código Matrix digital en Canvas y pie de página táctico con telemetría de entorno, copia de email en un clic y navegación rápida al inicio.

---

## 4. ECOSISTEMA DE APIS, MICROSERVICIOS Y GOOGLE GEMINI 2.5

### 4.1 Endpoint Backend: `POST /api/chat`
* **Ruta:** `http://localhost:5000/api/chat`
* **Modelo IA:** `gemini-2.5-flash` mediante `@google/genai`
* **Payload Request:**
```json
{
  "message": "¿Qué experiencia tiene Patri en React?",
  "history": [],
  "cvText": "PATRICIA APARICIO DÍAZ..."
}
```
* **System Prompt:** Configurado con directrices estrictas de rol, datos verídicos y protección contra inyección de prompts.

### 4.2 Motor de Respaldo Local (Smart Fallback Offline)
Ubicado en `src/services/api.js`, garantiza disponibilidad continua incluso sin conexión con el servidor mediante procesamiento de lenguaje natural por patrones contextuales:
- Consultas de Identidad y Trayectoria.
- Competencias y Stack Tecnológico.
- Proyectos y Enlaces de Demostración.
- Disponibilidad y Datos de Contacto.

### 4.3 APIs Externas Integradas
* **Open-Meteo / OpenWeather API:** Clima en directo de Sevilla integrado en la cabecera.
* **API Propia REST (La Buhardilla Retro):** Arquitectura CRUD completa para artículos vintage.
* **Sports Fixture API (World Cup 2026):** Estadísticas y calendarios dinámicos.

---

## 5. ESTRATEGIA Y GUÍA DE TESTING AUTOMATIZADO

### 5.1 Suite de Pruebas con Vitest
El proyecto cuenta con suites de test unitarias y de integración:

1. **`src/tests/portfolioData.test.js`:**
   - Validación de esquema de datos de Patri Aparicio.
   - Verificación de los 4 proyectos destacados y sus enlaces.
   - Comprobación de competencias clave (React, JS, Vitest, Tailwind).
2. **`src/tests/api.test.js`:**
   - Validación del motor de respuestas y fallback de IA.
   - Verificación del servicio de telemetría meteorológica.
3. **`src/tests/components.test.jsx`:**
   - Renderizado y montaje de componentes (`HeroRobot`, `ApiWidget`).

### 5.2 Comandos de Ejecución
```bash
# Ejecución única (CI/CD)
npm run test

# Modo interactivo en desarrollo
npx vitest
```

---

## 6. GUÍA DE DESPLIEGUE Y PUESTA EN PRODUCCIÓN

### 6.1 Despliegue del Frontend (Vercel)
* **Plataforma:** [Vercel](https://vercel.com/)
* **Build Command:** `npm run build`
* **Output Directory:** `dist`
* **Soporte SPA Routing:** Archivo `vercel.json` con reescrituras globales a `/index.html`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 6.2 Despliegue del Backend (Render / Railway)
* **Plataforma:** [Render](https://render.com/) (Web Service Node.js)
* **Directorio raíz:** `server`
* **Comando de inicio:** `node index.js`
* **Variables requeridas:** `PORT=5000`, `GEMINI_API_KEY=tu_api_key`

---

## 7. PROYECTOS DESTACADOS DEL PORTAFOLIO

| Proyecto | Stack Tecnológico | Demo en Vivo | Repositorio |
| :--- | :--- | :--- | :--- |
| **World Cup 2026** | React 19, JavaScript ES6+, REST APIs, React Router | [Ver Demo](https://world-cup2026-sigma-weld.vercel.app/) | [GitHub](https://github.com/apariciodiazpatricia-cell/worldCup2026) |
| **HabitatCode Inmobiliaria** | React, Tailwind CSS, Figma UI/UX, Design Systems | [Ver Demo](https://inmobiliaria-kappa-lake.vercel.app/) | [GitHub](https://github.com/apariciodiazpatricia-cell/inmobiliaria) |
| **Valhalla del Chatarrero** | React, OpenWeather API, Audio/Video FX, Cyberpunk UI | [Ver Demo](https://valhalla-del-chatarrero.vercel.app/) | [GitHub](https://github.com/apariciodiazpatricia-cell/valhalla-del-chatarrero) |
| **La Buhardilla Retro** | React, API Propia (CRUD), Meteo API, Tailwind CSS | [Ver Demo](https://la-buhardilla-retro.vercel.app/) | [GitHub](https://github.com/apariciodiazpatricia-cell/la-buhardilla-retro) |

---

## 8. ESTRUCTURA DEL REPOSITORIO DE PERFIL DE GITHUB

En el repositorio oficial de perfil (`apariciodiazpatricia-cell/apariciodiazpatricia-cell`):
* **Cabecera Pac-Man:** Gráfico vectorial de bienvenida personalizado.
* **Badges Cyberpunk:** Accesos directos a portafolio en vivo, especialidades y tecnologías.
* **Snake Game de Contribuciones:** Visualizador animado del historial de commits de GitHub.
* **Tarjeta de Contacto Matrix:** Datos directos de localización (Sevilla), LinkedIn, Gmail y portafolio en Vercel.

---
*Documentación generada oficialmente para el proyecto Patri Aparicio Portfolio © 2026.*
