'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export default function GeradorOctavo() {
  const [textoLongo, setTextoLongo] = useState('');
  const [tituloLivro, setTituloLivro] = useState('');
  
  const [tamanhoFonte, setTamanhoFonte] = useState(11);
  const [familiaFonte, setFamiliaFonte] = useState('font-serif');
  const [alinhamento, setAlinhamento] = useState('text-justify');
  
  const paginasFrente = [5, 12, 9, 8, 4, 13, 16, 1];
  const paginasVerso = [7, 10, 11, 6, 2, 15, 14, 3];
  

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
    <div className={`w-[297mm] h-[210mm] bg-white border border-gray-300 mx-auto mb-12 shadow-md print:shadow-none print:mb-0 print:border-none flex flex-col relative overflow-hidden ${isLast ? '' : 'print:break-after-page'}`}>
      <div className="absolute top-2 left-2 text-xs text-gray-400 print:hidden">{titulo}</div>
      <div className="grid grid-cols-4 grid-rows-2 w-full h-full">
        {paginas.map((num, i) => {
          const isUpsideDown = i < 4;
          const textoDaPagina = conteudo[num - 1];

          return (
            <div
              key={num}
              className={`border border-dashed border-gray-200 flex flex-col relative overflow-hidden
                ${isUpsideDown ? 'rotate-180' : ''}
              `}
            >
              <div className="flex-1 flex flex-col p-5 h-full overflow-hidden">
                
                <div className="text-[8px] text-gray-400 text-center uppercase tracking-widest mb-3 border-b border-gray-100 pb-1 font-sans shrink-0">
                  {tituloLivro || 'Título do Livreto'}
                </div>

                {/* Aqui está a trava de segurança visual: overflow-y-auto na tela, mas escondido na impressão */}
                <div 
                  className={`flex-1 overflow-y-auto print:overflow-hidden leading-relaxed text-gray-800 ${familiaFonte} ${alinhamento} scrollbar-thin scrollbar-thumb-gray-200`}
                  style={{ fontSize: `${tamanhoFonte}px` }}
                >
                  {textoDaPagina ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({node, ...props}) => <h1 className="text-xl font-bold mb-3 mt-2 leading-tight" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-lg font-bold mb-2 mt-2 leading-tight" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-base font-bold mb-2 mt-2 leading-tight" {...props} />,
                        p: ({node, ...props}) => <p className="mb-3" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-3" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-3" {...props} />,
                        blockquote: ({node, ...props}) => <blockquote className="border-l-2 border-gray-800 pl-3 italic text-gray-600 mb-3" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                        em: ({node, ...props}) => <em className="italic" {...props} />,
                        del: ({node, ...props}) => <del className="line-through text-gray-500" {...props} />,
                        hr: ({node, ...props}) => <hr className="my-4 border-t border-gray-300" {...props} />,
                        a: ({node, ...props}) => <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" {...props} />,
                        img: ({node, src, alt, title, ...props}) => (
                          <span className="block w-full text-center my-4 overflow-hidden">
                            <img 
                              src={src} 
                              alt={alt || "Imagem do miolo"} 
                              title={title}
                              className="max-w-full h-auto max-h-40 object-contain mx-auto grayscale print:grayscale-0" 
                            />
                          </span>
                        ),
                        table: ({node, ...props}) => <div className="mb-3 overflow-hidden"><table className="w-full text-[0.9em] border-collapse border border-gray-300" {...props} /></div>,
                        th: ({node, ...props}) => <th className="border border-gray-300 bg-gray-50 px-2 py-1 font-bold text-left" {...props} />,
                        td: ({node, ...props}) => <td className="border border-gray-300 px-2 py-1" {...props} />,
                        code: ({node, className, children, ...props}) => {
                          const match = /language-(\w+)/.exec(className || '')
                          const isInline = !match && !String(children).includes('\n')
                          return isInline ? (
                            <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-[0.9em]" {...props}>{children}</code>
                          ) : (
                            <pre className="bg-gray-100 p-2 rounded overflow-x-auto mb-3 font-mono text-[0.8em]">
                              <code className={className} {...props}>{children}</code>
                            </pre>
                          )
                        }
                      }}
                    >
                      {textoDaPagina}
                    </ReactMarkdown>
                  ) : (
                    <span className="text-gray-300 italic text-center block mt-10 font-sans text-xs">Página em branco</span>
                  )}
                </div>

                <div className="text-[10px] text-center font-bold text-gray-500 mt-3 border-t border-gray-100 pt-1 font-sans shrink-0">
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
    <main className="min-h-screen bg-neutral-100 py-10 print:bg-white print:py-0 font-sans">
      
      <div className="max-w-4xl mx-auto mb-10 print:hidden bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gerador de Octavo Editorial</h1>
        <p className="text-gray-600 mb-6">Controle preciso com suporte a 100% da sintaxe Markdown (Imagens, Tabelas, Links, etc).</p>
        
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-8 text-sm text-blue-800 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <strong className="block mb-2 font-bold">Básico:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><code className="bg-white px-1 py-0.5 rounded font-mono">---</code> Nova Página</li>
              <li><code className="bg-white px-1 py-0.5 rounded font-mono">**Negrito**</code></li>
              <li><code className="bg-white px-1 py-0.5 rounded font-mono">*Itálico*</code></li>
              <li><code className="bg-white px-1 py-0.5 rounded font-mono">~~Riscado~~</code></li>
            </ul>
          </div>
          <div>
            <strong className="block mb-2 font-bold">Estrutura:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><code className="bg-white px-1 py-0.5 rounded font-mono"># Título</code></li>
              <li><code className="bg-white px-1 py-0.5 rounded font-mono">- Lista</code></li>
              <li><code className="bg-white px-1 py-0.5 rounded font-mono">&gt; Citação</code></li>
              <li><code className="bg-white px-1 py-0.5 rounded font-mono">***</code> Linha Horizontal</li>
            </ul>
          </div>
          <div>
             <strong className="block mb-2 font-bold">Mídia & Extras:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li><code className="bg-white px-1 py-0.5 rounded font-mono">![Legenda](URL)</code> Imagem</li>
              <li><code className="bg-white px-1 py-0.5 rounded font-mono">[Texto](URL)</code> Link</li>
              <li><code className="bg-white px-1 py-0.5 rounded font-mono">| Tabela |</code></li>
            </ul>
          </div>
        </div>

        {/* Link para o Conversor */}
        <div className="mb-8 flex justify-end">
          <Link 
            href="/conversor" 
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-2 border border-gray-200 bg-gray-50 px-4 py-2 rounded shadow-sm hover:shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            Converter arquivo do Word para Markdown
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Título do Livreto</label>
            <input
              type="text"
              placeholder="Ex: Arquivo Corrupiola"
              value={tituloLivro}
              onChange={(e) => setTituloLivro(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Fonte do Miolo</label>
              <select 
                value={familiaFonte} 
                onChange={(e) => setFamiliaFonte(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black"
              >
                <option value="font-serif">Serifada</option>
                <option value="font-sans">Sem Serifa</option>
                <option value="font-mono">Monoespaçada</option>
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Tamanho (px)</label>
              <input
                type="number"
                min="8"
                max="16"
                value={tamanhoFonte}
                onChange={(e) => setTamanhoFonte(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black"
              />
            </div>
            
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Alinhamento</label>
              <select 
                value={alinhamento} 
                onChange={(e) => setAlinhamento(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black"
              >
                <option value="text-justify">Justificado</option>
                <option value="text-left">À Esquerda</option>
                <option value="text-center">Centralizado</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-2">
              <label className="block text-sm font-medium text-gray-700">Conteúdo do Miolo</label>
              <span className={`text-xs font-bold px-2 py-1 rounded ${totalPreenchidas > 16 ? 'bg-red-100 text-red-700' : 'bg-gray-200 text-gray-700'}`}>
                Páginas: {totalPreenchidas}/16
              </span>
            </div>
            <textarea
              className={`w-full h-96 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-y font-mono text-sm leading-relaxed`}
              placeholder="Digite o texto aqui..."
              value={textoLongo}
              onChange={(e) => setTextoLongo(e.target.value)}
            />
            {totalPreenchidas > 16 && (
              <p className="text-red-600 text-xs mt-2 font-medium">Atenção: Você ultrapassou as 16 páginas. O conteúdo extra não será impresso.</p>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-gray-100">
          <button
            onClick={() => window.print()}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            Gerar PDF para Impressão
          </button>
        </div>
      </div>

      <RenderSheet paginas={paginasFrente} titulo="Folha 1 - FRENTE" />
      <RenderSheet paginas={paginasVerso} titulo="Folha 1 - VERSO" isLast={true} />
      
      {/* Assinatura e Link no Rodapé */}
      <footer className="max-w-4xl mx-auto mt-8 print:hidden text-center text-sm text-gray-500 pb-10">
        Desenvolvido por <span className="font-semibold">Aleph Ozuas</span> para a <a href="https://corrupiola.com.br" target="_blank" rel="noopener noreferrer" className="font-bold text-black hover:underline transition-all">Corrupiola</a>.
      </footer>

    </main>
  );
}