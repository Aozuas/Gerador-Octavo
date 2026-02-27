'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, FileText, CheckCircle2, Copy, ArrowLeftRight, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ComoUsar() {
    const [copiado, setCopiado] = useState(false);

    const textoTeste = `Sua História Começa Aqui
========================

Este é um exemplo completo de como formatar seu texto para o Gerador Octavo. O Markdown é uma linguagem simples de usar.

---

A Arte da Diagramação
---------------------

A diagramação de um livreto octavo exige **precisão** e *delicadeza*. Veja os elementos essenciais:

1. Margens limpas
2. Tipografia legível
3. Páginas fluidas

### Uma nota importante

> "O design não é apenas o que parece e o que se sente. Design é como funciona." 
> — Steve Jobs

---

Tabela de Especificações

| Elemento | Descrição |
|----------|-----------|
| Formato | A4 Paisagem (Dividido em 8) |
| Dobra | Cruzada Oitavada |
| Páginas | 16 por caderno |

***

Para criar uma linha horizontal como a de cima, basta digitar três asteriscos (***). 
`;

    const copiarTextoTeste = () => {
        navigator.clipboard.writeText(textoTeste);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] py-16 font-sans text-neutral-900 selection:bg-neutral-200">
            <div className="max-w-3xl mx-auto w-full px-6">

                {/* Navigation */}
                <Button variant="link" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors mb-10 px-0 h-auto" asChild>
                    <Link href="/">
                        <ArrowLeft className="w-4 h-4" />
                        Voltar ao Gerador
                    </Link>
                </Button>

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
            </div>
        </div>
    );
}
