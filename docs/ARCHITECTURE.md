# 🏛️ Arquitectura del Sistema // Patri Aparicio Portfolio

Este documento detalla la arquitectura técnica, el flujo de datos y las decisiones de diseño implementadas en el portafolio profesional de **Patri Aparicio**.

---

## 🧭 1. Visión General de la Arquitectura

El sistema está construido como una **Single Page Application (SPA)** de alto rendimiento en el cliente con un microservicio backend en **Node.js/Express** para el procesamiento seguro de Inteligencia Artificial.

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

---

## 🧩 2. Patrón de Diseño y Estado Global

### 2.1 Context API (`CvContext.jsx`)
Para evitar el *prop drilling* y permitir que cualquier componente acceda y actualice la información del Curriculum Vitae oficial:
* **Estado global:**
  - `cvText`: Almacena el contenido textual parseado del CV.
  - `isCvLoaded`: Booleano que indica si el CV está activo y listo para ser consultado.
  - `cvFileName`: Nombre del archivo PDF oficial (`patri-aparicio-cv.pdf`).
* **Persistencia:** Almacenamiento seguro en `localStorage` con captura de límites de cuota para sesiones continuas.
* **Integración con IA:** Cada mensaje enviado a través del chatbot envía automáticamente el estado actual de `cvText` al backend o al motor local.

### 2.2 Estrategia de Renderizado & Rendimiento
* **Componentes Funcionales con Hooks:** Uso estricto de `useState`, `useEffect`, `useRef` y `useContext`.
* **Zero Rerender Overhead:** Animaciones cinemáticas ejecutadas mediante aceleración por hardware con CSS Keyframes y Canvas API, evitando ejecuciones redundantes de JavaScript en el hilo principal.
* **Optimización de Assets:** Reproducción de vídeo con `muted`, `loop`, `playsInline` y carga diferida (`preload="metadata"`).

---

## 🔐 3. Seguridad & Variables de Entorno

* **Ocultamiento de Credenciales:** La `GEMINI_API_KEY` reside exclusivamente en el entorno del servidor (`server/.env`), nunca es expuesta en los bundles compilados del frontend.
* **CORS Configurado:** El backend permite peticiones controladas desde el origen del cliente en local (`localhost:5173`) y dominios autorizados en producción.
* **Protección contra Inyecciones en Prompt:** El System Prompt establece instrucciones inmutables que impiden revelar información confidencial o desviarse del perfil profesional de Patri Aparicio.

---

## 📊 4. Flujo de Ejecución del Chatbot

1. El usuario introduce una pregunta o pulsa una sugerencia rápida en `PortfolioAssistant.jsx`.
2. Se envía la consulta al servicio `src/services/api.js` (`sendChatMessage`).
3. Si el servidor backend está disponible:
   - Se realiza una llamada `POST` a `http://localhost:5000/api/chat` con `{ message, history, cvText }`.
   - El servidor invoca a **Google Gemini 2.5 Flash** con el System Prompt oficial.
   - Si Gemini responde con éxito, se devuelve el texto formateado en Markdown.
4. Si el servidor no está disponible (modo offline o despliegue estático):
   - El cliente intercepta el error de red de forma transparente.
   - Activa `getLocalSmartResponse(message, cvText)`.
   - Evalúa patrones clave (quién es, proyectos, stack, formación backend, Figma, disponibilidad, contacto).
   - Devuelve una respuesta precisa, cálida y sin errores de conexión.
