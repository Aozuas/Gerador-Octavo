'use client';

import React, { useState, useRef } from 'react';
import TurndownService from 'turndown';
import Link from 'next/link';
import { ArrowLeft, Bold, Italic, Heading1, Heading2, List, Copy, CheckCircle2, Upload } from 'lucide-react';

export default function Conversor() {
  const [markdown, setMarkdown] = useState('');
  const [copiado, setCopiado] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const aplicarFormatacao = (comando: string, valor?: string) => {
    document.execCommand(comando, false, valor);
    editorRef.current?.focus();
    handleConverter();
  };

  const copiarParaAreaDeTransferencia = () => {
    navigator.clipboard.writeText(markdown);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string' && editorRef.current) {
        // Converte quebras de linha normais para a tag <br> ou <p> apropriadas do Rich Text
        const htmlContent = content
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;")
          .replace(/\n\n/g, '<p><br></p>')
          .replace(/\n/g, '<br>');

        // Adiciona ao final se houver algo, ou substitui se vazio
        const currentHtml = editorRef.current.innerHTML;
        editorRef.current.innerHTML = currentHtml ? currentHtml + '<p><br></p>' + htmlContent : htmlContent;

        handleConverter();
      }
    };
    reader.readAsText(file);

    // Limpa o input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-16 font-sans text-neutral-900 selection:bg-neutral-200 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto w-full bg-white p-6 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-200/60 ring-1 ring-black/[0.02] mb-8">

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-neutral-100 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">Conversor de Texto</h1>
            <p className="text-neutral-500 text-sm mt-1.5">Cole textos do Word formatados ou use a barra de ferramentas para criar o seu Markdown limpo.</p>
          </div>
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors bg-[#FAFAFA] hover:bg-neutral-100 px-4 py-2 rounded-lg border border-neutral-200 active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors" />
            Voltar ao Gerador
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Editor HTML */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-100 border border-neutral-200 text-xs">1</span>
                Edite ou cole texto rico:
              </label>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-600 bg-white border border-neutral-200 px-2 py-1 rounded-md hover:bg-neutral-50 hover:text-neutral-900 transition-colors shadow-sm"
                  title="Carregar arquivo .txt local"
                >
                  <Upload className="w-3 h-3" />
                  Upload txt
                </button>
                <input
                  type="file"
                  accept=".txt"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                />
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center gap-1 mb-0 p-1.5 bg-[#FAFAFA] border border-neutral-200 rounded-t-xl border-b-0 shadow-sm">
              <button onClick={() => aplicarFormatacao('bold')} className="p-1.5 bg-transparent rounded-md hover:bg-neutral-200/50 text-neutral-600 hover:text-neutral-900 transition-colors" title="Negrito">
                <Bold className="w-4 h-4" />
              </button>
              <button onClick={() => aplicarFormatacao('italic')} className="p-1.5 bg-transparent rounded-md hover:bg-neutral-200/50 text-neutral-600 hover:text-neutral-900 transition-colors" title="Itálico">
                <Italic className="w-4 h-4" />
              </button>

              <div className="w-px h-4 bg-neutral-200 mx-2"></div>

              <button onClick={() => aplicarFormatacao('formatBlock', 'H1')} className="px-2 py-1 bg-transparent rounded-md hover:bg-neutral-200/50 text-neutral-600 hover:text-neutral-900 font-bold text-xs transition-colors flex items-center gap-1" title="Título 1">
                <Heading1 className="w-4 h-4" />
              </button>
              <button onClick={() => aplicarFormatacao('formatBlock', 'H2')} className="px-2 py-1 bg-transparent rounded-md hover:bg-neutral-200/50 text-neutral-600 hover:text-neutral-900 font-bold text-xs transition-colors flex items-center gap-1" title="Título 2">
                <Heading2 className="w-4 h-4" />
              </button>

              <div className="w-px h-4 bg-neutral-200 mx-2"></div>

              <button onClick={() => aplicarFormatacao('insertUnorderedList')} className="p-1.5 bg-transparent rounded-md hover:bg-neutral-200/50 text-neutral-600 hover:text-neutral-900 transition-colors" title="Lista de Marcadores">
                <List className="w-4 h-4" />
              </button>
            </div>

            <div
              ref={editorRef}
              contentEditable
              onInput={handleConverter}
              className="w-full h-[400px] p-5 border border-neutral-200 rounded-b-xl focus:outline-none focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-900 overflow-y-auto text-sm leading-relaxed text-neutral-800 bg-white transition-all shadow-sm"
              style={{ minHeight: "400px" }}
            />
          </div>

          {/* Resultado Markdown */}
          <div className="flex flex-col relative">
            <div className="flex justify-between items-center mb-3 h-7">
              <label className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-100 border border-neutral-200 text-xs">2</span>
                Resultado Markdown
              </label>

              {markdown && (
                <button
                  onClick={copiarParaAreaDeTransferencia}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md transition-all active:scale-95 ${copiado
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm'
                    }`}
                >
                  {copiado ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" /> Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copiar Código
                    </>
                  )}
                </button>
              )}
            </div>

            <textarea
              readOnly
              value={markdown}
              className="w-full h-[458px] p-5 border border-neutral-200 rounded-xl bg-[#fafafa] text-neutral-600 font-mono text-[13px] leading-relaxed resize-none focus:outline-none focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-900 transition-all shadow-inner"
              placeholder="O código Markdown gerado aparecerá aqui magicamente..."
              spellCheck="false"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto flex flex-col items-center justify-center text-sm text-neutral-400 pb-12">
        <div className="flex items-center gap-1.5 mb-2">
          <span>Desenvolvido por</span>
          <span className="font-semibold text-neutral-700">Aleph Ozuas</span>
        </div>
        <div>
          <span>para a</span>{' '}
          <a href="https://corrupiola.com.br" target="_blank" rel="noopener noreferrer" className="font-bold text-neutral-900 hover:text-neutral-600 transition-colors decoration-2 underline-offset-4 hover:underline">
            Corrupiola
          </a>
        </div>
      </footer>
    </div>
  );
}