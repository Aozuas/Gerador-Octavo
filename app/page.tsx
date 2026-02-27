'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { ArrowLeftRight, Printer, Sparkles, BookOpen, Upload } from 'lucide-react';

export default function GeradorOctavo() {
  const [textoLongo, setTextoLongo] = useState('');
  const [tituloLivro, setTituloLivro] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const [tamanhoFonte, setTamanhoFonte] = useState(11);
  const [familiaFonte, setFamiliaFonte] = useState('font-serif');
  const [alinhamento, setAlinhamento] = useState('text-justify');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const paginasFrente = [5, 12, 9, 8, 4, 13, 16, 1];
  const paginasVerso = [7, 10, 11, 6, 2, 15, 14, 3];

  // Carregar do LocalStorage
  useEffect(() => {
    const savedText = localStorage.getItem('octavo_texto');
    const savedTitle = localStorage.getItem('octavo_titulo');

    if (savedText) setTextoLongo(savedText);
    if (savedTitle) setTituloLivro(savedTitle);

    setIsLoaded(true);
  }, []);

  // Salvar no LocalStorage (só salva se já carregou)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('octavo_texto', textoLongo);
      localStorage.setItem('octavo_titulo', tituloLivro);
    }
  }, [textoLongo, tituloLivro, isLoaded]);

  // Handler de Upload de Arquivo
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        // Preserva o que já existe ou substitui? Vamos concatenar com quebra de linha se já tiver texto
        setTextoLongo(prev => prev ? prev + '\n\n' + content : content);
      }
    };
    reader.readAsText(file);

    // Limpa o input para permitir upload do mesmo arquivo mais de uma vez seguida
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const fatiarTextoManual = (texto: string) => {
    const pedacosRaw = texto.split('---').map(p => p.trim());
    const pedacos = Array(16).fill('');
    for (let i = 0; i < 16; i++) {
      if (pedacosRaw[i]) pedacos[i] = pedacosRaw[i];
    }
    return {
      conteudo: pedacos,
      totalPreenchidas: pedacosRaw.filter(p => p.length > 0).length
    };
  };

  const { conteudo, totalPreenchidas } = fatiarTextoManual(textoLongo);

  const RenderSheet = ({ paginas, titulo, isLast = false }: { paginas: number[], titulo: string, isLast?: boolean }) => (
    <div className={`w-[297mm] h-[210mm] bg-white border border-neutral-200 mx-auto mb-16 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-sm print:shadow-none print:mb-0 print:border-none print:rounded-none flex flex-col relative overflow-hidden transition-all duration-300 ${isLast ? '' : 'print:break-after-page'}`}>
      <div className="absolute top-3 left-3 text-[10px] font-medium tracking-widest text-neutral-400 print:hidden uppercase">{titulo}</div>
      <div className="grid grid-cols-4 grid-rows-2 w-full h-full">
        {paginas.map((num, i) => {
          const isUpsideDown = i < 4;
          const textoDaPagina = conteudo[num - 1];

          return (
            <div
              key={num}
              className={`border border-dashed border-neutral-200 flex flex-col relative overflow-hidden
                ${isUpsideDown ? 'rotate-180' : ''}
              `}
            >
              <div className="flex-1 flex flex-col p-5 h-full overflow-hidden">

                <div className="text-[8px] text-neutral-400 text-center uppercase tracking-widest mb-3 border-b border-neutral-100 pb-1 font-sans shrink-0 transition-colors">
                  {tituloLivro || 'Título do Livreto'}
                </div>

                <div
                  className={`flex-1 overflow-y-auto print:overflow-hidden leading-relaxed text-neutral-800 ${familiaFonte} ${alinhamento} scrollbar-thin scrollbar-thumb-neutral-200`}
                  style={{ fontSize: `${tamanhoFonte}px` }}
                >
                  {textoDaPagina ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({ node, ...props }) => <h1 className="text-xl font-bold mb-3 mt-2 leading-tight tracking-tight" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-lg font-bold mb-2 mt-2 leading-tight tracking-tight" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-base font-bold mb-2 mt-2 leading-tight tracking-tight" {...props} />,
                        p: ({ node, ...props }) => <p className="mb-3" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-3 marker:text-neutral-400" {...props} />,
                        ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-3 marker:text-neutral-400" {...props} />,
                        blockquote: ({ node, ...props }) => <blockquote className="border-l-2 border-neutral-800 pl-3 italic text-neutral-600 mb-3" {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-semibold text-neutral-900" {...props} />,
                        em: ({ node, ...props }) => <em className="italic" {...props} />,
                        del: ({ node, ...props }) => <del className="line-through text-neutral-400" {...props} />,
                        hr: ({ node, ...props }) => <hr className="my-4 border-t border-neutral-200" {...props} />,
                        a: ({ node, ...props }) => <a className="text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900 transition-all underline-offset-2" target="_blank" rel="noopener noreferrer" {...props} />,
                        img: ({ node, ...props }) => (
                          <span className="flex justify-center my-3">
                            <img className="max-w-full h-auto max-h-40 object-contain grayscale print:grayscale-0 rounded" {...props} alt={props.alt || "Imagem do livro"} />
                          </span>
                        ),
                        table: ({ node, ...props }) => <div className="mb-3 overflow-hidden rounded border border-neutral-200"><table className="w-full text-[0.9em] border-collapse bg-white" {...props} /></div>,
                        th: ({ node, ...props }) => <th className="border-b border-neutral-200 bg-neutral-50/50 px-3 py-2 font-semibold text-neutral-900 text-left" {...props} />,
                        td: ({ node, ...props }) => <td className="border-b border-neutral-100 px-3 py-2" {...props} />,
                        code: ({ node, className, children, ...props }) => {
                          const match = /language-(\w+)/.exec(className || '')
                          const isInline = !match && !String(children).includes('\n')
                          return isInline ? (
                            <code className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded-md font-mono text-[0.85em] border border-neutral-200/50" {...props}>{children}</code>
                          ) : (
                            <pre className="bg-[#fafafa] p-3 rounded-lg overflow-x-auto mb-3 font-mono text-[0.85em] border border-neutral-200 text-neutral-800">
                              <code className={className} {...props}>{children}</code>
                            </pre>
                          )
                        }
                      }}
                    >
                      {textoDaPagina}
                    </ReactMarkdown>
                  ) : (
                    <span className="text-neutral-300 italic flex items-center justify-center mt-10 font-sans text-xs select-none">Página em branco</span>
                  )}
                </div>

                <div className="text-[10px] text-center font-bold text-neutral-400 mt-3 border-t border-neutral-100 pt-1 font-sans shrink-0">
                  {num}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FAFAFA] py-16 print:bg-white print:py-0 font-sans text-neutral-900 selection:bg-neutral-200">

      <div className="max-w-4xl mx-auto mb-16 print:hidden">

        {/* Header Section */}
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-600 mb-4 transition-all hover:bg-neutral-200/50">
              <Sparkles className="w-3.5 h-3.5" /> Open Source Tool
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-3">Gerador de Octavo Editorial</h1>
            <p className="text-neutral-500 text-sm sm:text-base max-w-xl leading-relaxed">Controle preciso com suporte a 100% da sintaxe Markdown. Crie livretos octavos perfeitos para diagramação manual.</p>
          </div>

          <Link
            href="/conversor"
            className="group flex items-center gap-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:border-neutral-300 hover:text-neutral-900 transition-all active:scale-[0.98]"
          >
            <ArrowLeftRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            <span>Word para Markdown</span>
          </Link>
        </div>

        {/* Main Card */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-200/60 ring-1 ring-black/[0.02]">

          {/* Syntax Guide Context Box */}
          <div className="bg-[#fafafa] border border-neutral-200/80 rounded-xl p-5 mb-10">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-neutral-500" />
              <h3 className="text-sm font-semibold text-neutral-700">Guia Rápido de Sintaxe</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[13px] text-neutral-600">
              <div>
                <strong className="block mb-2 font-semibold text-neutral-800">Básico</strong>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><code className="bg-white border border-neutral-200 px-1.5 py-0.5 rounded-md font-mono text-xs shadow-sm">---</code> <span className="text-neutral-500">Nova Página</span></li>
                  <li className="flex items-center gap-2"><code className="bg-white border border-neutral-200 px-1.5 py-0.5 rounded-md font-mono text-xs shadow-sm">**Negrito**</code></li>
                  <li className="flex items-center gap-2"><code className="bg-white border border-neutral-200 px-1.5 py-0.5 rounded-md font-mono text-xs shadow-sm">*Itálico*</code></li>
                </ul>
              </div>
              <div>
                <strong className="block mb-2 font-semibold text-neutral-800">Estrutura</strong>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><code className="bg-white border border-neutral-200 px-1.5 py-0.5 rounded-md font-mono text-xs shadow-sm"># Título</code></li>
                  <li className="flex items-center gap-2"><code className="bg-white border border-neutral-200 px-1.5 py-0.5 rounded-md font-mono text-xs shadow-sm">- Lista</code></li>
                  <li className="flex items-center gap-2"><code className="bg-white border border-neutral-200 px-1.5 py-0.5 rounded-md font-mono text-xs shadow-sm">&gt; Citação</code></li>
                </ul>
              </div>
              <div>
                <strong className="block mb-2 font-semibold text-neutral-800">Mídia & Extras</strong>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><code className="bg-white border border-neutral-200 px-1.5 py-0.5 rounded-md font-mono text-xs shadow-sm">![Alt](URL)</code> <span className="text-neutral-500">Imagem</span></li>
                  <li className="flex items-center gap-2"><code className="bg-white border border-neutral-200 px-1.5 py-0.5 rounded-md font-mono text-xs shadow-sm">[Link](URL)</code></li>
                  <li className="flex items-center gap-2"><code className="bg-white border border-neutral-200 px-1.5 py-0.5 rounded-md font-mono text-xs shadow-sm">| Tabela |</code></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Title Input */}
            <div>
              <label className="block text-sm font-semibold text-neutral-800 mb-2">Título do Livreto</label>
              <input
                type="text"
                placeholder="Ex: Diário de Bordo..."
                value={tituloLivro}
                onChange={(e) => setTituloLivro(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-900 transition-all font-medium text-neutral-900 placeholder:text-neutral-400 shadow-sm"
              />
            </div>

            {/* Typography Controls */}
            <div className="bg-[#fafafa] p-1.5 rounded-xl border border-neutral-200/80 flex flex-col md:flex-row gap-1 shadow-sm">
              <div className="flex-1 p-2.5 rounded-lg hover:bg-neutral-100/50 transition-colors">
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-2 px-1">Tipografia</label>
                <select
                  value={familiaFonte}
                  onChange={(e) => setFamiliaFonte(e.target.value)}
                  className="w-full bg-transparent border-0 p-1 text-sm font-medium focus:ring-0 cursor-pointer text-neutral-800"
                >
                  <option value="font-serif">Serifada (Clássica)</option>
                  <option value="font-sans">Sem Serifa (Moderna)</option>
                  <option value="font-mono">Monoespaçada (Código)</option>
                </select>
              </div>

              <div className="hidden md:block w-px bg-neutral-200/80 my-2"></div>

              <div className="flex-1 p-2.5 rounded-lg hover:bg-neutral-100/50 transition-colors">
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-2 px-1">Tamanho</label>
                <div className="flex items-center px-1">
                  <input
                    type="number"
                    min="8"
                    max="18"
                    value={tamanhoFonte}
                    onChange={(e) => setTamanhoFonte(Number(e.target.value))}
                    className="w-16 bg-transparent border-0 p-0 text-sm font-medium focus:ring-0 text-neutral-800"
                  />
                  <span className="text-neutral-400 text-xs ml-1">px</span>
                </div>
              </div>

              <div className="hidden md:block w-px bg-neutral-200/80 my-2"></div>

              <div className="flex-1 p-2.5 rounded-lg hover:bg-neutral-100/50 transition-colors">
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-2 px-1">Alinhamento</label>
                <select
                  value={alinhamento}
                  onChange={(e) => setAlinhamento(e.target.value)}
                  className="w-full bg-transparent border-0 p-1 text-sm font-medium focus:ring-0 cursor-pointer text-neutral-800"
                >
                  <option value="text-justify">Justificado</option>
                  <option value="text-left">À Esquerda</option>
                  <option value="text-center">Centralizado</option>
                </select>
              </div>
            </div>

            {/* Content Textarea */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <div className="flex items-center gap-4">
                  <label className="block text-sm font-semibold text-neutral-800">Conteúdo do Miolo</label>

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 bg-white border border-neutral-200 px-2.5 py-1 rounded-md hover:bg-neutral-50 hover:text-neutral-900 transition-colors shadow-sm"
                    title="Carregar arquivo .txt ou .md local"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Upload .txt
                  </button>
                  <input
                    type="file"
                    accept=".txt,.md"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                  />
                </div>

                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-colors ${totalPreenchidas > 16 ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'}`}>
                  {totalPreenchidas}/16 Páginas
                </span>
              </div>
              <textarea
                className={`w-full h-[400px] p-5 bg-white border ${totalPreenchidas > 16 ? 'border-red-300 focus:ring-red-500/10 focus:border-red-500' : 'border-neutral-200 focus:ring-neutral-900/5 focus:border-neutral-900'} rounded-xl focus:outline-none focus:ring-4 transition-all resize-y font-mono text-[13px] leading-relaxed text-neutral-700 shadow-sm`}
                placeholder="Escreva seu conteúdo em Markdown (use '---' para quebrar página)..."
                spellCheck="false"
                value={textoLongo}
                onChange={(e) => setTextoLongo(e.target.value)}
              />
              {totalPreenchidas > 16 && (
                <p className="text-red-500 text-xs mt-3 flex items-center gap-1.5 font-medium animate-in slide-in-from-top-1 fade-in duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                  Atenção: Você ultrapassou o limite do Octavo (16 páginas). O conteúdo extra será ignorado na montagem.
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-8 mt-8 border-t border-neutral-100">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-neutral-900 text-white px-8 py-3.5 rounded-xl hover:bg-neutral-800 hover:shadow-lg hover:-translate-y-0.5 transition-all font-semibold active:scale-95"
            >
              <Printer className="w-4 h-4" />
              Imprimir Livreto
            </button>
          </div>
        </div>
      </div>

      <RenderSheet paginas={paginasFrente} titulo="Folha 1 - FRENTE" />
      <RenderSheet paginas={paginasVerso} titulo="Folha 1 - VERSO" isLast={true} />

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-16 print:hidden flex flex-col items-center justify-center text-sm text-neutral-400 pb-12">
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

    </main>
  );
}