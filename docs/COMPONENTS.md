# 🧩 Catálogo de Componentes // Patri Aparicio Portfolio

Este documento recoge la documentación técnica detallada de cada componente React que conforma la interfaz del portafolio.

---

## 📑 Índice de Componentes

1. [NavbarPacman (`NavbarPacman.jsx`)](#1-navbarpacman)
2. [Hero (`Hero.jsx`)](#2-hero)
3. [HeroRobot (`HeroRobot.jsx`)](#3-herorobot)
4. [About (`About.jsx`)](#4-about)
5. [TechStack (`TechStack.jsx`)](#5-techstack)
6. [Projects (`Projects.jsx`)](#6-projects)
7. [CvSection (`CvSection.jsx`)](#7-cvsection)
8. [Contact (`Contact.jsx`)](#8-contact)
9. [Footer (`Footer.jsx`)](#9-footer)
10. [PortfolioAssistant (`PortfolioAssistant.jsx`)](#10-portfolioassistant)
11. [WeatherWidget (`WeatherWidget.jsx`)](#11-weatherwidget)
12. [ApiWidget (`ApiWidget.jsx`)](#12-apiwidget)
13. [MatrixRain (`MatrixRain.jsx`)](#13-matrixrain)

---

### 1. `NavbarPacman.jsx`
* **Ubicación:** `src/components/NavbarPacman.jsx`
* **Propósito:** Barra de navegación superior fija en el viewport (`fixed top-0 inset-x-0 z-50`).
* **Características:**
  - Pista interactiva de Pac-Man con animación continua (`pacmanRunway`).
  - Detección de scroll para iluminar las píldoras de energía y marcar la sección activa.
  - Indicador de estado en tiempo real con efecto ping (`CORE_ONLINE`).
  - Navegación suave (*Smooth scroll*) hacia `#hero`, `#about`, `#stack`, `#projects`, `#cv` y `#contact`.
  - Botón CTA de apertura del asistente conversacional con insignia de notificación.

### 2. `Hero.jsx`
* **Ubicación:** `src/components/Hero.jsx`
* **Props:** `onOpenAssistant` (Función que abre el modal de Patri AI).
* **Características:**
  - Efecto máquina de escribir (*Typewriter*) que escribe en tiempo real `Desarrolladora Frontend Junior`.
  - Integración del widget de clima compacto y widget de citas de programación (`ApiWidget`).
  - Avatar holográfico táctico con:
    * Capa de **scanlines CRT** interlineadas.
    * Haz de láser en barrido descendente continuo (`hud-laser-line`).
    * Marcadores HUD militares en las 4 esquinas.
    * Chips flotantes de React 19 y Gemini 2.5 Flash.
  - Botones de acción principales: Chatear con Patri AI, Ver Proyectos y Acceso directo a CV.

### 3. `HeroRobot.jsx`
* **Ubicación:** `src/components/HeroRobot.jsx`
* **Propósito:** Dron cibernético autónomo (`[-O_O-] SCOUT_BOT >> inspecting about_me...`).
* **Animación:** CSS Keyframes `patrolAboutFull` con recorrido transversal completo de pantalla a pantalla (18 segundos, interpolación suave).
* **Ubicación en la UI:** Situado en la cabecera de la sección **Sobre Mí**.

### 4. `About.jsx`
* **Ubicación:** `src/components/About.jsx`
* **Características:**
  - Bloque interactivo de código con 3 pestañas dinámicas:
    * `profile.json`: Estructura de datos JSON con nombre, rol, bootcamp y stack.
    * `philosophy.js`: Clase orientada a objetos que define los principios de código limpio y cero fricción.
    * `learning.log`: Objeto con el sprint actual de aprendizaje (+600h bootcamp hacia Full Stack).
  - Cuadrícula de estadísticas clave con tono gris Matrix (`bg-[#141414] border-[#262626]`).

### 5. `TechStack.jsx`
* **Ubicación:** `src/components/TechStack.jsx`
* **Estructura:** Grid 2x2 organizado en 4 cuadrantes clave:
  1. **Frontend Core:** React 19/18, JavaScript ES6+, Vite, HTML5 Semántico.
  2. **Estilos & UI/UX:** Tailwind CSS, CSS Grid/Flexbox, Responsive Design.
  3. **Diseño, Figma & Stitch:** Prototipado en Figma, UI Generativa rápida en Stitch, Design Systems.
  4. **Backend, IA & DevOps:** Node.js, Express, PostgreSQL, Google Gemini API, Git/GitHub, Vercel.

### 6. `Projects.jsx`
* **Ubicación:** `src/components/Projects.jsx`
* **Características:**
  - Soporte híbrido para tarjetas con vídeo de alta resolución o imagen (`object-top` para visualización íntegra de banners).
  - Badges temáticos en neón.
  - Enlaces directos a repositorios de GitHub y despliegues en Vercel.
  - Proyectos incluidos: *World Cup 2026*, *HabitatCode*, *Valhalla del Chatarrero* y *La Buhardilla Retro*.

### 7. `CvSection.jsx`
* **Ubicación:** `src/components/CvSection.jsx`
* **Características:**
  - Visor embebido en iframe de `patri-aparicio-cv.pdf` con overlay traslúcido antirreflejos.
  - Botón de apertura de modal a pantalla completa con controles de zoom y cierre.
  - Botón de descarga directa del archivo PDF.
  - Telemetría de estado y sincronización con el contexto global.

### 8. `PortfolioAssistant.jsx`
* **Ubicación:** `src/components/PortfolioAssistant.jsx`
* **Propósito:** Chatbot flotante interactivo **Patri AI**.
* **Características:**
  - Mensaje de bienvenida unificado y cálido.
  - Historial de mensajes en tiempo real con scroll automático.
  - Botones de preguntas frecuentes en diseño envolvente (*flex-wrap*).
  - Indicador de mecanografía (*typing indicator*) con animación de pulsos.
  - Conexión con `src/services/api.js`.

### 9. `Footer.jsx`
* **Ubicación:** `src/components/Footer.jsx`
* **Características:**
  - Droide patrullero secundario en cabecera del footer.
  - Botón de copiado rápido de correo electrónico con feedback visual instantáneo.
  - Simulador de ping de red y telemetría de entorno.
  - Botón interactivo de retorno rápido a la parte superior (`▲ TOP`).

### 10. `MatrixRain.jsx`
* **Ubicación:** `src/components/MatrixRain.jsx`
* **Propósito:** Fondo animado con efecto de lluvia digital Matrix en HTML5 Canvas con caracteres katakana, hexadecimales y código JavaScript moderno.
