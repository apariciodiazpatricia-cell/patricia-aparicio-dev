# 🧪 Guía de Testing Automatizado // Patri Aparicio Portfolio

Este documento detalla la estrategia, arquitectura y ejecución del conjunto de pruebas automatizadas del proyecto.

---

## 🎯 1. Estrategia de Testing

El proyecto adopta una estrategia de calidad basada en pruebas unitarias y de integración sobre componentes, fuentes de datos y servicios API.

```
┌──────────────────────────────────────────────────────────────────┐
│                       SUITE DE TESTING                           │
├──────────────────────────────────────────────────────────────────┤
│  ⚡ Vitest 5.0 (Runner ultrarrápido integrado con Vite)          │
│  ⚛️ React Testing Library & JSDOM (Pruebas de Componentes)       │
│  🔍 Validación de Esquemas de Datos & Enlaces de Proyectos      │
│  🛡️ Verificación de Fallback IA & Consistencia de Respuestas    │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📁 2. Archivos de Test Implementados

### 2.1 `src/tests/portfolioData.test.js`
* **Propósito:** Garantizar la integridad de los datos de perfil, habilidades, enlaces y proyectos.
* **Pruebas ejecutadas:**
  - `should contain official profile details for Patri Aparicio`: Verifica nombre, email oficial y ubicación.
  - `should include 4 main featured projects with required fields`: Comprueba que los 4 proyectos principales (`world-cup-2026`, `habitatcode`, `valhalla-chatarrero`, `buhardilla-retro`) existen, tienen título, descripción, etiquetas y repositorio GitHub válido.
  - `should include testing and core competencies in skills`: Valida que las habilidades de React, JavaScript y Testing (Vitest) estén presentes.
  - `should contain valid suggested questions for AI chatbot`: Valida la presencia de sugerencias contextuales.

### 2.2 `src/tests/api.test.js`
* **Propósito:** Verificar el correcto funcionamiento del cliente HTTP y el motor de *Smart Fallback*.
* **Pruebas ejecutadas:**
  - `should return a valid intelligent response for identity query`: Evalúa respuestas sobre el perfil de Patri.
  - `should respond with stack details on technology questions`: Valida que la respuesta mencione React, Testing y Tailwind CSS.
  - `should respond with availability information on hiring questions`: Confirma que se exprese disponibilidad inmediata como Frontend Junior.
  - `should fetch weather or return default fallback for Sevilla`: Prueba la respuesta de la API meteorológica.

### 2.3 `src/tests/components.test.jsx`
* **Propósito:** Evaluar el renderizado y la accesibilidad de componentes UI clave.
* **Pruebas ejecutadas:**
  - `should render HeroRobot scout drone correctly`: Verifica la presencia del dron explorador y su texto de escaneo.
  - `should render ApiWidget developer quotes`: Verifica que el widget de citas dev se monte y muestre citas técnicas.

---

## 🚀 3. Ejecución de Tests

### Modo Ejecución Única (CI/CD):
```bash
npm run test
```

### Modo Watch (Desarrollo Activo):
```bash
npx vitest
```

### Resultado Oficial:
```text
 ✓ src/tests/portfolioData.test.js (4 tests)
 ✓ src/tests/api.test.js (4 tests)
 ✓ src/tests/components.test.jsx (2 tests)

 Test Files  3 passed (3)
      Tests  10 passed (10)
```
