import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, HelpCircle, FileText, ArrowLeftRight, Scissors } from 'lucide-react';

export const metadata: Metadata = {
    title: 'História dos Formatos: Octavo, Quarto e Fanzine',
    description: 'Conheça as origens e a história dos principais padrões de encadernação de bolso, da antiguidade até os fanzines DIY.',
    openGraph: {
        title: 'Uma Breve História dos Formatos (Octavo, Quarto e Fanzine)',
        description: 'Entenda como funcionam as dobraduras da prensa manual clássica e quando escolher cada modelo para seu projeto impresso.',
        type: 'article',
    }
};

export default function BreveHistoria() {
    return (
        <div className="min-h-screen bg-[#FAFAFA] py-16 font-sans text-neutral-900 selection:bg-neutral-200">
            <div className="max-w-3xl mx-auto w-full px-6">

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600 mb-4">
                        <BookOpen className="w-3.5 h-3.5" /> História & Conceitos
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
                        Uma Breve História dos Formatos
                    </h1>
                    <p className="text-neutral-500 text-lg leading-relaxed">
                        Entenda de onde vêm os nomes Octavo, Quarto e Fanzine, como a dobradura define a experiência de leitura e quando escolher cada um para o seu projeto impresso.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">

                    {/* Section 0: A Era da Prensa Manual */}
                    <section className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-200/60 border-t-4 border-t-neutral-900">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-900 text-white text-xs">★</span>
                            A Era da Prensa Manual
                        </h2>
                        <p className="text-neutral-600 mb-4 leading-relaxed">
                            Antes da padronização dos papéis que usamos hoje (como a série A4 e A3), os livros eram categorizados dependendo de quantas vezes uma única e grande folha de papel impressa era dobrada para formar os cadernos (as folhas finais).
                        </p>
                        <p className="text-neutral-600 mb-4 leading-relaxed">
                            O tamanho final de um livro era inteiramente determinado pelas dobras da folha original:
                        </p>
                        <ul className="list-disc pl-5 text-neutral-600 space-y-2 mb-4">
                            <li><strong>Folio:</strong> A folha grande dobrada apenas uma vez (2 folhas, 4 páginas). Eram livros colossais, reservados para enciclopédias e bíblias.</li>
                            <li><strong>Quarto:</strong> A folha dobrada duas vezes (4 folhas, 8 páginas). Um tamanho médio.</li>
                            <li><strong>Octavo:</strong> A folha dobrada três vezes (8 folhas, 16 páginas). O livro de bolso da antiguidade.</li>
                        </ul>
                        <p className="text-neutral-600 leading-relaxed italic text-sm mt-6 border-l-2 border-neutral-200 pl-4 py-1">
                            "A magia dos livros físicos reside na fisicalidade da dobra. Até o final do século XIX, leitores dedicados mantinham uma faca de abrir páginas consigo para cortar individualmente as dobras seladas dos cadernos e desvelar o texto, criando assim uma relação pessoal e íntima com o livro recém-comprado."
                        </p>
                    </section>

                    {/* Section 1: Octavo */}
                    <section className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-200/60">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-neutral-800">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-neutral-900">Octavo</h2>
                                <p className="text-sm text-neutral-500 font-medium">O Padrão Clássico de Bolso (16 Páginas)</p>
                            </div>
                        </div>
                        <p className="text-neutral-600 mb-4 leading-relaxed">
                            Extremamente popular entre os séculos XVI e XIX pela transportabilidade e barateamento da literatura. Se tornou o tamanho padrão para colocar na prateleira da biblioteca. Na famosa obra <em>Emma</em>, de Jane Austen, personagens inclusive detestavam a grosseria espalhafatosa dos enormes <em>Quartos</em>, clamando que homens inteligentes compactavam seus pensamentos num simples mas elegante <em>Octavo</em>.
                        </p>
                        <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100/50">
                            <h3 className="text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide flex items-center gap-1.5"><HelpCircle className="w-4 h-4" /> Quando Escolher no Gerador?</h3>
                            <p className="text-sm text-blue-800 leading-relaxed">
                                Sendo o mais eficiente na distribuição do layout, o Octavo é o formato nativo do nosso projeto. Escolha-o para diagramar <strong>zines com muito conteúdo textual, livretos densos de literatura, guias, minicontos, compêndios e diários de bordo</strong> que se beneficiam das 16 páginas formadas após refilar e grampear o papel horizontalmente ao meio.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Quarto */}
                    <section className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-200/60">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-neutral-800">
                                <ArrowLeftRight className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-neutral-900">Quarto</h2>
                                <p className="text-sm text-neutral-500 font-medium">A Verticalidade Artística (8 Páginas)</p>
                            </div>
                        </div>
                        <p className="text-neutral-600 mb-4 leading-relaxed">
                            No formato Quarto, a orientação do papel gira para Retrato (Vertical). Com isso, aplicam-se apenas duas dobras: uma na largura e uma na altura, criando 8 páginas de leitura altivas e largas. Os quartos foram vitais na era moderna. Eram usados para jornais e folhetins, roteiros de teatro originais (edições históricas de Shakespeare, conhecidas como "The First Quartos"), encartes ricos em ilustrações calcográficas e livros de viagens do século XIX.
                        </p>
                        <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100/50">
                            <h3 className="text-sm font-bold text-amber-900 mb-2 uppercase tracking-wide flex items-center gap-1.5"><HelpCircle className="w-4 h-4" /> Quando Escolher no Gerador?</h3>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                Por oferecer folhas maiores e dispostas na vertical, o Quarto é a pedida perfeita para <strong>zines com fotografias e arte em alta resolução, manuais grandes para uso em bancada de trabalho, portfólios visuais em página dupla</strong> ou quando o conteúdo precisar de espaço em branco (respiro) entre as linhas, algo difícil de se fazer no diminuto Octavo.
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Fanzine */}
                    <section className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-200/60">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-neutral-800">
                                <Scissors className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-neutral-900">Fanzine</h2>
                                <p className="text-sm text-neutral-500 font-medium">A Revolução Prática do DIY (8 Páginas / Face Única)</p>
                            </div>
                        </div>
                        <p className="text-neutral-600 mb-4 leading-relaxed">
                            A história dos zines (Fan-Magazines) acompanha as publicações alternativas das décadas de 70, em especial o crescimento da cena Punk e movimentos como o Riot Grrrl. O *One-Page Zine* não utiliza costura. Através de um único e genial "rasgo" na intersecção central da página dobrada 4 vezes, o documento dobra sobre sim mesmo e instantaneamente vira uma brochura sequencial.
                        </p>
                        <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100/50">
                            <h3 className="text-sm font-bold text-emerald-900 mb-2 uppercase tracking-wide flex items-center gap-1.5"><HelpCircle className="w-4 h-4" /> Quando Escolher no Gerador?</h3>
                            <p className="text-sm text-emerald-800 leading-relaxed">
                                Escolha o formato Fanzine (Paisagem) para apostar na cultura DIY (<em>Do It Yourself</em>). Ideal para <strong>manifestos com texto urgente, cartilhas de distribuição massiva, ou impressões baratas de um só lado da folha.</strong> Graças a essa característica, a área traseira intocada serve em dobro: quando o zine for todo desdobrado por quem o recebeu, ele de repente expõe um impressionante pôster oculto no verso (que pode ser impresso antes a parte).
                            </p>
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
