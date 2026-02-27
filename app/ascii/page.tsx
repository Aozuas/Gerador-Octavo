'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface AsciiItem {
    char: string;
    name: string;
}

interface AsciiCategory {
    title: string;
    items: AsciiItem[];
}

const asciiData: AsciiCategory[] = [
    {
        title: "Marcadores e Balas",
        items: [
            { char: "•", name: "Bala Redonda" },
            { char: "◦", name: "Bala Vazada" },
            { char: "▪", name: "Quadrado Preenchido" },
            { char: "▫", name: "Quadrado Vazado" },
            { char: "▸", name: "Triângulo R" },
            { char: "◂", name: "Triângulo L" },
            { char: "❖", name: "Losango Triplo" },
            { char: "✦", name: "Estrela Brilhante" },
        ]
    },
    {
        title: "Checklists e Status",
        items: [
            { char: "✓", name: "Certinho (Check)" },
            { char: "✗", name: "X (Cross)" },
            { char: "☐", name: "Caixa Vazia" },
            { char: "☑", name: "Caixa Marcada" },
            { char: "☒", name: "Caixa com X" },
            { char: "◔", name: "Relógio (1/4)" },
            { char: "◑", name: "Relógio (1/2)" },
            { char: "◕", name: "Relógio (3/4)" },
        ]
    },
    {
        title: "Setas e Direcionamento",
        items: [
            { char: "→", name: "Seta Direita" },
            { char: "←", name: "Seta Esquerda" },
            { char: "↑", name: "Seta Cima" },
            { char: "↓", name: "Seta Baixo" },
            { char: "➔", name: "Seta Cheia" },
            { char: "⇒", name: "Seta Dupla R" },
            { char: "⇔", name: "Seta Bidirecional" },
            { char: "➤", name: "Seta Triângulo" },
        ]
    },
    {
        title: "Símbolos e Decoração",
        items: [
            { char: "★", name: "Estrela Sólida" },
            { char: "☆", name: "Estrela Linha" },
            { char: "♥", name: "Coração" },
            { char: "✿", name: "Flor" },
            { char: "♪", name: "Nota Musical" },
            { char: "✂", name: "Tesoura" },
            { char: "✎", name: "Lápis" },
            { char: "✉", name: "Envelope" },
        ]
    },
    {
        title: "Geometria Minimalista",
        items: [
            { char: "▲", name: "Triângulo Cima" },
            { char: "▼", name: "Triângulo Baixo" },
            { char: "◆", name: "Losango Sólido" },
            { char: "◇", name: "Losango Vazado" },
            { char: "■", name: "Bloco Sólido" },
            { char: "□", name: "Bloco Linha" },
            { char: "●", name: "Círculo Cheio" },
            { char: "○", name: "Círculo Vazado" },
        ]
    },
    {
        title: "Miscelânea (Notas & Diário)",
        items: [
            { char: "▤", name: "Linhas (Notes)" },
            { char: "🟇", name: "Estrela Joy" },
            { char: "◬", name: "Triângulo Mood" },
            { char: "☀", name: "Sol" },
            { char: "☁", name: "Nuvem" },
            { char: "☽", name: "Lua Crescente" },
            { char: "☂", name: "Guarda-chuva" },
            { char: "☠", name: "Caveira" },
        ]
    }
];

export default function AsciiGuide() {
    const [copiadoId, setCopiadoId] = useState<string | null>(null);

    const handleCopy = (char: string, id: string) => {
        navigator.clipboard.writeText(char);
        setCopiadoId(id);
        setTimeout(() => setCopiadoId(null), 1500);
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] py-16 font-sans text-neutral-900 selection:bg-neutral-200">
            <div className="max-w-4xl mx-auto w-full px-6">

                {/* Navigation */}
                <Button variant="link" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors mb-10 px-0 h-auto" asChild>
                    <Link href="/como-usar">
                        <ArrowLeft className="w-4 h-4" />
                        Voltar para "Como Usar"
                    </Link>
                </Button>

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-600 mb-4">
                        <span className="font-mono bg-white px-1.5 rounded text-[10px] shadow-sm">Alt</span> + <span className="font-mono bg-white px-1.5 rounded text-[10px] shadow-sm">Code</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
                        Tabela de Caracteres Especiais
                    </h1>
                    <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">
                        Símbolos ASCII e Unicode são perfeitos para diagramar seu livreto sem precisar de imagens pesadas. Clique em qualquer símbolo abaixo para copiar para a área de transferência.
                    </p>
                </div>

                {/* Content Section */}
                <div className="space-y-10">
                    {asciiData.map((category, catIndex) => (
                        <section key={catIndex} className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-neutral-200/60">
                            <h2 className="text-lg font-bold mb-6 text-neutral-800 border-b border-neutral-100 pb-3">
                                {category.title}
                            </h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {category.items.map((item, itemIndex) => {
                                    const uniqueId = `${catIndex}-${itemIndex}`;
                                    const isCopied = copiadoId === uniqueId;

                                    return (
                                        <Button
                                            key={uniqueId}
                                            variant="outline"
                                            className={`h-16 flex flex-col items-center justify-center gap-1.5 transition-all shadow-sm group ${isCopied
                                                    ? 'bg-green-50/50 border-green-200 hover:bg-green-50 hover:text-green-800'
                                                    : 'bg-[#fafafa] hover:bg-white hover:shadow-md hover:border-neutral-300'
                                                }`}
                                            onClick={() => handleCopy(item.char, uniqueId)}
                                            title={`Copiar ${item.name}`}
                                        >
                                            {isCopied ? (
                                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                            ) : (
                                                <span className="text-2xl leading-none text-neutral-800 group-hover:scale-125 transition-transform duration-300">
                                                    {item.char}
                                                </span>
                                            )}

                                            <span className={`text-[10px] uppercase tracking-wider font-semibold ${isCopied ? 'text-green-700' : 'text-neutral-400 group-hover:text-neutral-600'}`}>
                                                {isCopied ? 'Copiado!' : item.name}
                                            </span>
                                        </Button>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>

            </div >
        </div >
    );
}
