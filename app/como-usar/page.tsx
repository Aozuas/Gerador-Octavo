'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, FileText, CheckCircle2, Copy, ArrowLeftRight, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ComoUsar() {
    const [copiado, setCopiado] = useState(false);

    const textoTeste = `# Lugares  
![Teste](https://picsum.photos/400/300) 
# Passageiros
---
23/02 *Segunda-feira*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
24/02 *terça-feira*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
25/02 *quarta-feira*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
26/02 *quinta-feira*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
27/02 *sexta-feira*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
28/02 *sábado*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
01/03 *DOMINGO*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
02/03 *Segunda-feira*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
03/03 *terça-feira*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
04/03 *quarta-feira*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
05/03 *quinta-feira*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
06/03 *sexta-feira*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
07/03 *sábado*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
08/03 *DOMINGO*  
**◔ TASKS**
***
***
**▤ NOTES**
***
***  
**🟇 JOY**
***
***
**◬ MOOD**
***
***
---
## Checklist das 2 Semanas
- [X] Não fiz Exercícios
- [ ] Li algum livro?
- [ ] Pratiquei desenho?
- [ ] Entreguei as Encomendas?

`;

    const copiarTextoTeste = () => {
        navigator.clipboard.writeText(textoTeste);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] py-16 font-sans text-neutral-900 selection:bg-neutral-200">
            <div className="max-w-3xl mx-auto w-full px-6">

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600 mb-4">
                        <BookOpen className="w-3.5 h-3.5" /> Documentação
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
                        Como usar o Gerador Octavo
                    </h1>
                    <p className="text-neutral-500 text-lg leading-relaxed">
                        Aprenda a criar seu livreto passo a passo, utilizando marcações simples para um resultado profissional impresso em páginas A4.
                    </p>
                </div>

                {/* Content Section */}
                <div className="space-y-12">

                    {/* Section 0: Guia Rápido */}
                    <section className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-200/60 border-t-4 border-t-neutral-900">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-900 text-white text-xs">★</span>
                            Guia Rápido
                        </h2>

                        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-neutral-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="text-xs font-bold">1</span>
                                </div>
                                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-neutral-50 border border-neutral-100 shadow-sm">
                                    <h3 className="font-bold text-neutral-800 mb-1">Escolha o título</h3>
                                    <p className="text-sm text-neutral-600">Dê um nome ao seu projeto no campo "Título do Livreto".</p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-neutral-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="text-xs font-bold">2</span>
                                </div>
                                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-neutral-50 border border-neutral-100 shadow-sm">
                                    <h3 className="font-bold text-neutral-800 mb-1">Ajuste a Tipografia</h3>
                                    <p className="text-sm text-neutral-600">Selecione o tipo, tamanho da fonte e o alinhamento do texto.</p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-neutral-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="text-xs font-bold">3</span>
                                </div>
                                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-neutral-50 border border-neutral-100 shadow-sm">
                                    <h3 className="font-bold text-neutral-800 mb-1">Formato e Tamanho</h3>
                                    <p className="text-sm text-neutral-600 mb-2">Selecione o modelo do livreto e o tamanho do papel.</p>
                                    <ul className="text-xs text-neutral-600 list-disc pl-4 space-y-1 mb-2">
                                        <li><strong>Octavo:</strong> Padrão, com 16 páginas</li>
                                        <li><strong>Quarto:</strong> Duas dobras simples, com 8 páginas</li>
                                        <li><strong>Fanzine:</strong> 8 páginas, impresso apenas de um lado permitindo no verso imprimir um belo pôster!</li>
                                    </ul>
                                    <p className="text-xs text-neutral-500 italic">Após selecionar o modelo, escolha entre o tamanho base A4 ou o grande A3.</p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-neutral-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="text-xs font-bold">4</span>
                                </div>
                                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-neutral-50 border border-neutral-100 shadow-sm">
                                    <h3 className="font-bold text-neutral-800 mb-1">Preencha o Miolo</h3>
                                    <p className="text-sm text-neutral-600">Digite o conteúdo, faça o upload de um texto TXT/MD ou simplesmente teste colando o texto de exemplo no final desta página.</p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="text-xs font-bold">5</span>
                                </div>
                                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-blue-50 border border-blue-100 shadow-sm">
                                    <h3 className="font-bold text-blue-900 mb-1">Imprima seu Livreto</h3>
                                    <p className="text-sm text-blue-800">Clique no botão principal para gerar seu PDF em formato A4 frente e verso.</p>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Section 1: O Básico */}
                    <section className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-200/60">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 text-neutral-800 text-xs">1</span>
                            A Quebra de Páginas
                        </h2>
                        <p className="text-neutral-600 mb-4 leading-relaxed">
                            O segredo do livreto Octavo está em saber onde cada página termina. Como o modelo divide uma folha A4 em 16 partes (8 na frente, 8 no verso), você precisa sinalizar a quebra de cada página.
                        </p>
                        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                            <p className="text-sm text-neutral-700 mb-3">Para criar uma nova página, digite exatamente três hífens em uma linha vazia:</p>
                            <code className="block bg-white p-4 border border-neutral-200 rounded text-center text-lg tracking-widest font-bold text-neutral-800">
                                ---
                            </code>
                        </div>
                        <div className="mt-4 flex gap-2 items-start text-sm text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-200/50">
                            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                            <p>O Gerador suporta o limite de <strong>exatamente 16 páginas</strong> por impressão. Se você passar disso, o conteúdo excedente não será impresso.</p>
                        </div>
                    </section>

                    {/* Section 2: O Conversor */}
                    <section className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-200/60">
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 text-neutral-800 text-xs">2</span>
                                O Conversor de Texto
                            </h2>
                            <Button variant="secondary" size="sm" className="h-7 text-xs font-semibold rounded-full px-3 gap-1.5" asChild>
                                <Link href="/conversor">
                                    <ArrowLeftRight className="w-3.5 h-3.5" /> Acessar Conversor
                                </Link>
                            </Button>
                        </div>
                        <p className="text-neutral-600 mb-6 leading-relaxed">
                            Você não precisa decorar nenhum código! Criamos um Conversor Especial para você. Basta colar o seu texto (mesmo que ele venha com negritos e cursivas do Microsoft Word) na caixa da esquerda, e ele irá cuspir o texto limpo do lado direito.
                        </p>

                        <h3 className="text-sm font-bold text-neutral-800 mb-3 uppercase tracking-wider">O que cada botão faz:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                                <div className="p-2 bg-white rounded border border-neutral-200 shadow-sm"><strong className="font-serif">B</strong></div>
                                <div>
                                    <div className="text-sm font-bold text-neutral-900">Negrito</div>
                                    <div className="text-xs text-neutral-500">Ex: **Texto forte**</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                                <div className="p-2 bg-white rounded border border-neutral-200 shadow-sm"><em className="font-serif">I</em></div>
                                <div>
                                    <div className="text-sm font-bold text-neutral-900">Itálico</div>
                                    <div className="text-xs text-neutral-500">Ex: *Texto suave*</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                                <div className="p-2 bg-white rounded border border-neutral-200 shadow-sm font-bold text-xs">H1</div>
                                <div>
                                    <div className="text-sm font-bold text-neutral-900">Título Principal</div>
                                    <div className="text-xs text-neutral-500">Ex: # Capítulo 1</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                                <div className="p-2 bg-white rounded border border-neutral-200 shadow-sm font-bold text-xs">H2</div>
                                <div>
                                    <div className="text-sm font-bold text-neutral-900">Sub-título</div>
                                    <div className="text-xs text-neutral-500">Ex: ## Seção Um</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Laboratório */}
                    <section className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-200/60 border-t-4 border-t-neutral-900">
                        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-900 text-white text-xs">3</span>
                            Faça um Teste
                        </h2>
                        <p className="text-neutral-600 mb-6 leading-relaxed">
                            Copie o texto pronto abaixo. Vá até o <strong>Gerador de Octavo</strong>, clique no botão "Conteúdo do Miolo" e cole o texto lá dentro para ver a mágica da diagramação acontecer em tempo real nas folhas 3D.
                        </p>
                        <p className="text-neutral-600 mb-6 leading-relaxed">
                            O Markdown também suporta <strong>Caracteres ASCII</strong> (como formas geométricas, setas e símbolos) para você ilustrar suas páginas de forma analógica. Elaboramos um guia rápido com os caracteres mais úteis para você copiar e colar diretamente no Miolo.{' '}
                            <Link href="/ascii" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-flex items-center gap-1 group">
                                Ver Tabela ASCII
                                <ArrowLeftRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        </p>

                        <div className="relative group">
                            <div className="absolute top-3 right-3">
                                <Button
                                    size="sm"
                                    variant={copiado ? "outline" : "outline"}
                                    onClick={copiarTextoTeste}
                                    className={`flex items-center gap-1.5 h-7 text-xs transition-all active:scale-95 ${copiado
                                        ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100'
                                        : 'bg-white/80 backdrop-blur-sm shadow-sm opacity-0 group-hover:opacity-100 focus:opacity-100'
                                        }`}
                                >
                                    {copiado ? (
                                        <><CheckCircle2 className="w-3.5 h-3.5" /> Copiado!</>
                                    ) : (
                                        <><Copy className="w-3.5 h-3.5" /> Copiar Texto de Teste!</>
                                    )}
                                </Button>
                            </div>
                            <textarea
                                readOnly
                                value={textoTeste}
                                className="w-full h-80 p-5 bg-[#FAFAFA] border border-neutral-200 rounded-xl font-mono text-[13px] text-neutral-700 resize-none focus:outline-none focus:ring-4 focus:ring-neutral-900/5 transition-all"
                            />
                        </div>
                    </section>

                </div>

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

            </div>
        </div>
    );
}
