import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, CheckCircle2, Download, RefreshCw, AlertCircle, Bot, Sparkles, Trash2 } from 'lucide-react';
import { useCv } from '../context/CvContext';
import { extractTextFromPdfFile } from '../services/pdfExtractor';
import { uploadCvFile } from '../services/api';

export default function CvSection() {
  const { cvText, isCvLoaded, cvFileName, cvUploadedAt, updateCv, clearCv } = useCv();
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const fileInputRef = useRef(null);

  const processPdfFile = async (file) => {
    if (!file || (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf'))) {
      setErrorMsg('Por favor, selecciona un archivo válido en formato PDF.');
      return;
    }

    setIsProcessing(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const extractedText = await extractTextFromPdfFile(file);
      await uploadCvFile(file);
      updateCv(extractedText, file.name, file);
      setSuccessMsg(`¡CV "${file.name}" cargado y sincronizado con Patri AI!`);
    } catch (err) {
      console.error('Error al procesar el CV:', err);
      setErrorMsg('Ocurrió un error al procesar el archivo PDF. Inténtalo de nuevo.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processPdfFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processPdfFile(e.target.files[0]);
    }
  };

  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv/patri-aparicio-cv.pdf';
    link.download = cvFileName || 'Patri_Aparicio_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-mono">
      
      {/* Header de Sección */}
      <div className="border-l-4 border-[#00FF66] pl-4 mb-12">
        <h2 className="text-3xl font-extrabold text-white">Curriculum Vitae & Contexto IA</h2>
        <p className="text-[#A0A0A0] text-sm mt-1">
          Visualiza mi currículum en PDF y consulta cualquier detalle con mi asistente conversacional.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Columna Izquierda: Visor Interactivo de CV en PDF */}
        <div className="lg:col-span-7 flex flex-col">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex-1 rounded-2xl bg-[#121212] border transition-all duration-300 flex flex-col overflow-hidden shadow-2xl ${
              isDragging
                ? 'border-[#00FF66] bg-[#00FF66]/10 scale-[1.01]'
                : 'border-[#262626] hover:border-[#00FF66]/50'
            }`}
          >
            {/* Barra de título estilo Terminal del Visor */}
            <div className="bg-black/90 border-b border-[#222] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
                <span className="text-xs font-mono text-white font-bold ml-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#00FF66]" />
                  <span>{cvFileName || 'patri-aparicio-cv.pdf'}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/30 font-bold animate-pulse">
                  ACTIVO
                </span>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-[11px] font-mono text-gray-400 hover:text-[#00FF66] px-2 py-1 rounded bg-[#1c1c1c] hover:bg-black border border-[#333] transition cursor-pointer flex items-center gap-1"
                  title="Subir o sustituir por otro archivo PDF"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span className="hidden sm:inline">Cambiar PDF</span>
                </button>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Visor de Documento PDF en Vivo con Pantalla Traslúcida Oscurecida */}
            <div className="relative w-full h-[520px] bg-black/95 flex flex-col items-center justify-center overflow-hidden group">
              <iframe
                src="/assets/cv/patri-aparicio-cv.pdf#toolbar=0&navpanes=0&scrollbar=1"
                title="Curriculum Vitae de Patricia Aparicio"
                className="w-full h-full border-none filter brightness-[0.88] contrast-[1.08]"
              />

              {/* 🕶️ Pantalla traslúcida oscura para armonizar con el estilo cyberpunk */}
              <div className="absolute inset-0 bg-black/35 pointer-events-none transition-opacity duration-300"></div>

              {/* Barra inferior de acciones rápidas sobre el visor */}
              <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-black/90 backdrop-blur-md rounded-xl border border-[#333] flex items-center justify-between text-xs text-gray-300 font-mono z-10 shadow-lg">
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
                  <span className="text-[#00FF66]">Documento PDF Oficial Sincronizado</span>
                </div>
                <a
                  href="/assets/cv/patri-aparicio-cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#1a1a1a] hover:bg-[#00FF66] text-white hover:text-black font-bold transition text-[11px] border border-[#333] flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Pantalla Completa</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Mensajes */}
            {errorMsg && (
              <div className="p-3 bg-red-950/70 border-t border-red-800 text-xs text-red-300 flex items-center gap-2 font-mono">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3 bg-emerald-950/70 border-t border-emerald-800 text-xs text-emerald-300 flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}
          </div>
        </div>

        {/* Columna Derecha: Resumen & Descarga */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          {/* Tarjeta de Estado del Contexto IA */}
          <div className="bg-[#121212] border border-[#222] rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#222] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-black border border-[#00FF66]/40 text-[#00FF66] flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">// MEMORIA CONTEXTUAL</h4>
                  <p className="text-[10px] text-[#00FF66] font-mono">Sincronización con Patri AI</p>
                </div>
              </div>
              <span className={`w-2.5 h-2.5 rounded-full ${isCvLoaded ? 'bg-[#00FF66] animate-pulse' : 'bg-gray-500'}`}></span>
            </div>

            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              Mi información profesional está <strong className="text-white">vinculada y lista</strong> para responder a cualquier consulta sobre mi perfil.
            </p>

            {isCvLoaded && cvText && (
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-mono text-gray-400">
                  <span>Información sincronizada:</span>
                  <span className="font-bold text-[#00FF66]">{cvText.length} caracteres</span>
                </div>
                <div className="p-3 bg-black border border-[#222] rounded-xl text-[11px] font-mono text-gray-300 max-h-24 overflow-y-auto leading-relaxed">
                  "{cvText.slice(0, 220)}..."
                </div>
              </div>
            )}

            {isCvLoaded && (
              <button
                onClick={clearCv}
                className="text-[11px] text-gray-400 hover:text-red-400 flex items-center gap-1 font-mono transition cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Restablecer y borrar CV</span>
              </button>
            )}
          </div>

          {/* Botón Principal de Descarga de CV */}
          <div className="p-6 bg-black border border-[#222] hover:border-[#00FF66]/40 transition duration-300 rounded-2xl shadow-[0_0_20px_rgba(0,255,102,0.1)] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#00FF66] font-bold uppercase tracking-wider">// ACCIÓN RÁPIDA</span>
                <h4 className="text-base font-bold text-white">Descargar Currículum</h4>
              </div>
              <FileText className="w-6 h-6 text-[#00FF66]" />
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Descarga una copia oficial en PDF con la experiencia, stack y proyectos de Patricia Aparicio.
            </p>

            <button
              onClick={handleDownloadCv}
              className="w-full py-3 px-5 rounded-xl bg-black border-2 border-[#00FF66] text-[#00FF66] hover:bg-[#00FF66] hover:text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition duration-300 shadow-[0_0_20px_rgba(0,255,102,0.2)] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV en PDF</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
