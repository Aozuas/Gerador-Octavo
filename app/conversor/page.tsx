'use client';

import React, { useState, useRef } from 'react';
import TurndownService from 'turndown';
import Link from 'next/link';

export default function Conversor() {
  const [markdown, setMarkdown] = useState('');
  const [copiado, setCopiado] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  const handleConverter = () => {
    if (editorRef.current) {
      // Pega o HTML invisível que o navegador gerou quando você colou o texto rico
      const html = editorRef.current.innerHTML;
      
      // Configura o motor para gerar um Markdown limpo
      const turndownService = new TurndownService({ 
        headingStyle: 'atx',
        hr: '***',
        bulletListMarker: '-'
      });
      
      const resultado = turndownService.turndown(html);
      setMarkdown(resultado);
      setCopiado(false);
    }
  };

  const copiarParaAreaDeTransferencia = () => {
    navigator.clipboard.writeText(markdown);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-10 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        
        <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Conversor de Texto</h1>
            <p className="text-gray-600 text-sm mt-1">Cole textos do Word ou Google Docs para transformar em Markdown puro.</p>
          </div>
          <Link 
            href="/" 
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-2 bg-gray-50 px-4 py-2 rounded border border-gray-200"
          >
            ← Voltar ao Gerador
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lado Esquerdo: Onde o usuário cola o texto do Word */}
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700 mb-2">1. Cole o texto formatado aqui:</label>
<div 
              ref={editorRef}
              contentEditable
              onInput={handleConverter}
              className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black overflow-y-auto text-sm bg-white"
            />
          </div>

          {/* Lado Direito: Onde sai o Markdown pronto */}
          <div className="flex flex-col relative">
            <div className="flex justify-between items-end mb-2">
              <label className="block text-sm font-bold text-gray-700">2. Resultado em Markdown:</label>
              {markdown && (
                <button 
                  onClick={copiarParaAreaDeTransferencia}
                  className="text-xs font-bold px-3 py-1 rounded bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  {copiado ? 'Copiado!' : 'Copiar Texto'}
                </button>
              )}
            </div>
            <textarea
              readOnly
              value={markdown}
              className="w-full h-96 p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 font-mono text-sm resize-none focus:outline-none"
              placeholder="O código Markdown aparecerá aqui automaticamente..."
            />
          </div>
        </div>

      </div>
    </div>
  );
}