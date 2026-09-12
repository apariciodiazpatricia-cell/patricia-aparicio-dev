import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, Sparkles, User, X, Trash2 } from 'lucide-react';
import { sendChatMessage } from '../services/api';
import { portfolioData } from '../data/portfolioData';
import { useCv } from '../context/CvContext';

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { cvText, isCvLoaded, cvFileName } = useCv();

  const initialMountRef = useRef(true);

  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: `¡Hola! 👋 Soy **Patri AI**, asistente de **Patri Aparicio** potenciado por **Google Gemini 2.5 Flash**.

Tengo sincronizado su **CV oficial**, proyectos y stack. Pregúntame sobre su experiencia en **React**, diseño en **Figma/Stitch**, backend o disponibilidad.

¿Qué deseas explorar hoy?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend = inputMessage) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isTyping) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const responseText = await sendChatMessage(trimmed, messages, cvText);
      
      const botReply = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botReply]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          sender: 'bot',
          text: 'Error en la conexión. Por favor intenta de nuevo o escribe a **apariciodiazpatricia@gmail.com**.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: 'Historial reiniciado. ¿En qué más puedo orientarte sobre Patri Aparicio?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const formatMessageText = (content) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
      return (
        <p key={i} className={line.startsWith('- ') || line.startsWith('* ') ? 'pl-3 my-1' : 'my-1'}>
          {parts.map((part, pIndex) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIndex} className="font-bold text-[#00FF66]">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
              const textMatch = part.match(/\[(.*?)\]/);
              const urlMatch = part.match(/\((.*?)\)/);
              if (textMatch && urlMatch) {
                return (
                  <a
                    key={pIndex}
                    href={urlMatch[1]}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#00FF66] hover:underline font-bold"
                  >
                    {textMatch[1]}
                  </a>
                );
              }
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      {/* Botón flotante trigger */}
      <div className="fixed bottom-6 right-6 z-50 font-mono">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 bg-black hover:bg-[#111] text-white px-4 py-3 rounded-2xl shadow-[0_0_25px_rgba(0,255,102,0.4)] border-2 border-[#00FF66] transition-all duration-300 transform hover:scale-105 cursor-pointer"
            aria-label="Abrir asistente de IA"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-[#00FF66]/10 border border-[#00FF66] flex items-center justify-center text-[#00FF66]">
                <Bot className="w-5 h-5 animate-pulse" />
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00FF66] rounded-full animate-ping"></span>
            </div>

            <div className="text-left hidden sm:block">
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Patri AI</span>
                <span className="text-[9px] text-black bg-[#00FF66] px-1 py-0.2 rounded font-bold">2.5 Flash</span>
              </div>
              <p className="text-[10px] text-[#00FF66]">&gt; prompt_me</p>
            </div>
          </button>
        )}
      </div>

      {/* Ventana de chat flotante */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[430px] h-[580px] max-h-[85vh] bg-black/95 backdrop-blur-md rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border-2 border-[#00FF66]/70 flex flex-col overflow-hidden font-mono text-white animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Header del Chat */}
          <div className="bg-[#101010] px-4 py-3 flex items-center justify-between border-b border-[#222]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-black border border-[#00FF66] flex items-center justify-center text-[#00FF66]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-xs text-white flex items-center gap-1.5">
                  Patri AI Assistant
                  <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></span>
                </h3>
                <p className="text-[9px] text-[#00FF66]">Google Gemini 2.5 Flash API</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-[#222] transition cursor-pointer"
                title="Limpiar chat"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-[#222] transition cursor-pointer"
                title="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cuerpo de Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-black/60 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded bg-[#00FF66]/20 border border-[#00FF66]/40 flex-shrink-0 flex items-center justify-center mt-1 text-[#00FF66]">
                    <Sparkles className="w-3 h-3" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#181818] text-white border border-[#333] rounded-br-none'
                      : 'bg-[#0f1a13] text-gray-200 border border-[#00FF66]/30 rounded-bl-none'
                  }`}
                >
                  <div>
                    {formatMessageText(msg.text)}
                  </div>
                  <div className="text-[9px] mt-1 text-right text-gray-500 font-mono">
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded bg-[#222] flex-shrink-0 flex items-center justify-center mt-1 text-gray-300">
                    <User className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-[#00FF66] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
                <span>Patri AI está procesando...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Preguntas Sugeridas Rápidas (Multi-línea para que ningún botón quede cortado) */}
          <div className="bg-[#0e0e0e] border-t border-[#222] p-2.5">
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto no-scrollbar">
              {portfolioData.suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="px-2.5 py-1 rounded-lg bg-black border border-[#2a2a2a] hover:border-[#00FF66] text-gray-300 hover:text-[#00FF66] text-[11px] font-mono transition cursor-pointer shadow-sm hover:bg-[#141414]"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <div className="p-3 bg-[#111] border-t border-[#222] flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pregunta sobre proyectos, stack, CV..."
              disabled={isTyping}
              className="flex-1 bg-black border border-[#333] focus:border-[#00FF66] text-white text-xs px-3.5 py-2.5 rounded-xl outline-none transition font-mono"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isTyping}
              className="p-2.5 rounded-xl bg-black border border-[#00FF66] text-[#00FF66] hover:bg-[#00FF66] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition shadow-md cursor-pointer flex-shrink-0"
              aria-label="Enviar mensaje"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
