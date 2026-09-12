# 🚀 Guía de Despliegue y Puesta en Producción // Patri Aparicio Portfolio

Este documento proporciona los pasos necesarios para desplegar el Frontend en **Vercel** y el Backend en **Render / Railway**.

---

## 🌐 1. Despliegue del Frontend en Vercel

Vercel es la plataforma recomendada para el despliegue del cliente React + Vite debido a su velocidad de compilación, CDN global y soporte nativo para Single Page Applications.

### Pasos para el despliegue:
1. Conecta tu cuenta de **GitHub** con [Vercel](https://vercel.com/).
2. Importa el repositorio `mi-portafolio`.
3. Configura los parámetros del proyecto:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. (Opcional) Si cuentas con un backend desplegado en Render o Railway, añade la variable de entorno:
   - `VITE_BACKEND_URL=https://tu-backend.onrender.com`
5. Haz clic en **Deploy**.

---

## 🖥️ 2. Despliegue del Backend en Render

Para habilitar la IA de Google Gemini en un servidor activo 24/7:

### Pasos en Render:
1. Regístrate en [Render.com](https://render.com/).
2. Crea un nuevo **Web Service** conectado a tu repositorio de GitHub.
3. Configura los campos:
   - **Name:** `patri-aparicio-backend`
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
4. Añade las **Environment Variables:**
   - `PORT=5000`
   - `GEMINI_API_KEY=tu_api_key_de_google_gemini`
5. Despliega el servicio.

---

## ⚡ 3. Configuración para SPA Routing (Evitar 404 en rutas internas)

Para garantizar que cualquier recarga en rutas de Vite funcione sin errores en Vercel, el proyecto incluye soporte directo para reescrituras a `index.html`.

Si se utiliza un archivo `vercel.json` en la raíz:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 📊 4. Verificación Post-Despliegue

Una vez completado el despliegue:
* [x] Comprueba que todos los enlaces a GitHub, LinkedIn y demos funcionan correctamente.
* [x] Verifica que la pista de Pac-Man se mantenga fija (`fixed`) en la parte superior sin tapar el contenido.
* [x] Abre el asistente conversacional **Patri AI** y realiza preguntas de prueba.
* [x] Prueba la descarga y previsualización del Curriculum Vitae en PDF.
