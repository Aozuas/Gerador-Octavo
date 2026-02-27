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
      const html = editorRef.current.innerHTML;
      
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

  // Função mágica que aplica a formatação nativa do navegador
  const aplicarFormatacao = (comando: string, valor?: string) => {
    document.execCommand(comando, false, valor);
    editorRef.current?.focus(); // Mantém o cursor piscando no editor
    handleConverter(); // Força a atualização do Markdown instantaneamente
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
            <p className="text-gray-600 text-sm mt-1">Cole textos formatados ou use a barra de ferramentas para criar o seu Markdown.</p>
          </div>
          <Link 
            href="/" 
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-2 bg-gray-50 px-4 py-2 rounded border border-gray-200"
          >
            ← Voltar ao Gerador
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lado Esquerdo: Editor com Barra de Ferramentas */}
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700 mb-2">1. Edite ou cole o texto aqui:</label>
            
            {/* Barra de Ferramentas */}
            <div className="flex flex-wrap gap-2 mb-0 p-2 bg-gray-50 border border-gray-300 rounded-t-lg border-b-0">
              <button onClick={() => aplicarFormatacao('bold')} className="px-3 py-1 font-bold bg-white border border-gray-200 rounded hover:bg-gray-100 shadow-sm transition-colors" title="Negrito">B</button>
              <button onClick={() => aplicarFormatacao('italic')} className="px-3 py-1 italic bg-white border border-gray-200 rounded hover:bg-gray-100 shadow-sm transition-colors" title="Itálico">I</button>
              <div className="w-px bg-gray-300 mx-1"></div>
              <button onClick={() => aplicarFormatacao('formatBlock', 'H1')} className="px-3 py-1 font-bold text-sm bg-white border border-gray-200 rounded hover:bg-gray-100 shadow-sm transition-colors" title="Título 1">H1</button>
              <button onClick={() => aplicarFormatacao('formatBlock', 'H2')} className="px-3 py-1 font-bold text-sm bg-white border border-gray-200 rounded hover:bg-gray-100 shadow-sm transition-colors" title="Título 2">H2</button>
              <div className="w-px bg-gray-300 mx-1"></div>
              <button onClick={() => aplicarFormatacao('insertUnorderedList')} className="px-3 py-1 text-sm bg-white border border-gray-200 rounded hover:bg-gray-100 shadow-sm transition-colors flex items-center gap-1" title="Lista">
                <span>≡</span> Lista
              </button>
            </div>

            <div 
              ref={editorRef}
              contentEditable
              onInput={handleConverter}
              className="w-full h-[324px] p-4 border border-gray-300 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-black overflow-y-auto text-sm bg-white leading-relaxed"
            />
          </div>

          {/* Lado Direito: Onde sai o Markdown pronto */}
          <div className="flex flex-col relative">
            <div className="flex justify-between items-end mb-2">
              <label className="block text-sm font-bold text-gray-700">2. Resultado em Markdown:</label>
              {markdown && (
                <button 
                  onClick={copiarParaAreaDeTransferencia}
                  className="text-xs font-bold px-3 py-1 rounded bg-black text-white hover:bg-gray-800 transition-colors shadow-sm"
                >
                  {copiado ? 'Copiado!' : 'Copiar Texto'}
                </button>
              )}
            </div>
            {/* Ajustei a altura para parear perfeitamente com a barra de ferramentas + editor */}
            <textarea
              readOnly
              value={markdown}
              className="w-full h-[374px] p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 font-mono text-sm resize-none focus:outline-none"
              placeholder="O código Markdown aparecerá aqui automaticamente..."
            />
          </div>
        </div>

      </div>
    </div>
  );
}