import Link from 'next/link';
import Image from 'next/image';

export default function BreveHistoria() {
    return (
        <main className="min-h-screen bg-neutral-100 py-10 font-sans">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200">

                {/* Navegação e Cabeçalho */}
                <header className="border-b border-gray-100 pb-8 mb-10">
                    <div className="flex justify-between items-start mb-6">
                        <Link href="/" className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-2 bg-gray-50 px-4 py-2 rounded border border-gray-200">
                            ← Voltar ao Gerador
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                        Uma Breve História dos Formatos
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                        Entenda de onde vêm os nomes Octavo, Quarto e Fanzine, como a dobradura define a experiência de leitura e quando escolher cada um para o seu projeto impresso.
                    </p>
                </header>

                {/* A Era da Prensa Manual */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-gray-400">★</span> A Era da Prensa Manual
                    </h2>
                    <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
                        <p>
                            Antes da padronização dos papéis que usamos hoje (como a série A4 e A3), os livros eram categorizados dependendo de quantas vezes uma única e grande folha de papel impressa era dobrada para formar os cadernos (as folhas finais).
                        </p>
                        <p>O tamanho final de um livro era inteiramente determinado pelas dobras da folha original:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Folio:</strong> A folha grande dobrada apenas uma vez (2 folhas, 4 páginas). Eram livros colossais, reservados para enciclopédias e bíblias.</li>
                            <li><strong>Quarto:</strong> A folha dobrada duas vezes (4 folhas, 8 páginas). Um tamanho médio.</li>
                            <li><strong>Octavo:</strong> A folha dobrada três vezes (8 folhas, 16 páginas). O livro de bolso da antiguidade.</li>
                        </ul>
                        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6 bg-gray-50 p-4 rounded-r">
                            "A magia dos livros físicos reside na fisicalidade da dobra. Até o final do século XIX, leitores dedicados mantinham uma faca de abrir páginas consigo para cortar individualmente as dobras seladas dos cadernos e desvelar o texto, criando assim uma relação pessoal e íntima com o livro recém-comprado."
                        </blockquote>
                    </div>
                </section>

                {/* OCTAVO */}
                <section className="mb-16 pt-8 border-t border-gray-100">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Octavo (8vo)</h2>
                        <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">O Padrão Clássico de Bolso (16 Páginas)</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Extremamente popular entre os séculos XVI e XIX pela transportabilidade e barateamento da literatura. Se tornou o tamanho padrão para colocar na prateleira da biblioteca. Na famosa obra <em>Emma</em>, de Jane Austen, personagens inclusive detestavam a grosseria espalhafatosa dos enormes <em>Quartos</em>, clamando que homens inteligentes compactavam seus pensamentos num simples mas elegante <em>Octavo</em>.
                            </p>
                            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mt-6">
                                <h3 className="font-bold text-blue-900 mb-2">Quando Escolher no Gerador?</h3>
                                <p className="text-sm text-blue-800">
                                    Sendo o mais eficiente na distribuição do layout, o Octavo é o formato nativo do nosso projeto. Escolha-o para diagramar <strong>zines com muito conteúdo textual, livretos densos de literatura, guias, minicontos, compêndios e diários de bordo</strong> que se beneficiam das 16 páginas formadas após refilar e grampear o papel horizontalmente ao meio.
                                </p>
                            </div>
                        </div>

                        {/* Diagrama e Dados Técnicos */}
                        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                            <div className="w-full aspect-[4/3] bg-white border border-gray-300 border-dashed rounded mb-4 flex items-center justify-center text-gray-400 text-sm">
                                {/* Aqui entrará o seu <Image src="/diagrama-octavo.jpg" /> */}
                                [ Imagem: Diagrama do Octavo ]
                            </div>
                            <ul className="text-sm text-gray-600 space-y-2 mb-4">
                                <li><strong className="text-gray-900">Folha:</strong> 1 (A4)</li>
                                <li><strong className="text-gray-900">Páginas:</strong> 16 (8 de cada lado)</li>
                                <li><strong className="text-gray-900">Dobras:</strong> 3 perpendiculares</li>
                            </ul>
                            <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-200 pt-3">
                                O formato mais complexo. Exige três dobras perpendiculares. Note que a fileira superior de páginas é impressa de cabeça para baixo para garantir a orientação correta após a dobra final.
                            </p>
                        </div>
                    </div>
                </section>

                {/* QUARTO */}
                <section className="mb-16 pt-8 border-t border-gray-100">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Quarto (4to)</h2>
                        <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">A Verticalidade Artística (8 Páginas)</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                No formato Quarto, a orientação do papel gira para Retrato (Vertical). Com isso, aplicam-se apenas duas dobras: uma na largura e uma na altura, criando 8 páginas de leitura altivas e largas. Os quartos foram vitais na era moderna. Eram usados para jornais e folhetins, roteiros de teatro originais (edições históricas de Shakespeare, conhecidas como "The First Quartos"), encartes ricos em ilustrações calcográficas e livros de viagens do século XIX.
                            </p>
                            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mt-6">
                                <h3 className="font-bold text-blue-900 mb-2">Quando Escolher no Gerador?</h3>
                                <p className="text-sm text-blue-800">
                                    Por oferecer folhas maiores e dispostas na vertical, o Quarto é a pedida perfeita para <strong>zines com fotografias e arte em alta resolução, manuais grandes para uso em bancada de trabalho, portfólios visuais em página dupla</strong> ou quando o conteúdo precisar de espaço em branco (respiro) entre as linhas, algo difícil de se fazer no diminuto Octavo.
                                </p>
                            </div>
                        </div>

                        {/* Diagrama e Dados Técnicos */}
                        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                            <div className="w-full aspect-[4/3] bg-white border border-gray-300 border-dashed rounded mb-4 flex items-center justify-center text-gray-400 text-sm">
                                [ Imagem: Diagrama do Quarto ]
                            </div>
                            <ul className="text-sm text-gray-600 space-y-2 mb-4">
                                <li><strong className="text-gray-900">Folha:</strong> 1 (A4)</li>
                                <li><strong className="text-gray-900">Páginas:</strong> 8 (4 de cada lado)</li>
                                <li><strong className="text-gray-900">Dobras:</strong> 2 (Vertical e depois Horizontal)</li>
                            </ul>
                            <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-200 pt-3">
                                A folha A4 é dividida apenas em 4 seções de cada lado, totalizando 8 páginas. A imposição é direta e simples, exigindo apenas uma dobra cruzada.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FANZINE */}
                <section className="mb-8 pt-8 border-t border-gray-100">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Fanzine</h2>
                        <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">A Revolução Prática do DIY (8 Páginas)</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                A história dos zines (Fan-Magazines) acompanha as publicações alternativas das décadas de 70, em especial o crescimento da cena Punk e movimentos como o Riot Grrrl. O *One-Page Zine* não utiliza costura. Através de um único e genial "rasgo" na intersecção central da página dobrada 4 vezes, o documento dobra sobre sim mesmo e instantaneamente vira uma brochura sequencial.
                            </p>
                            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mt-6">
                                <h3 className="font-bold text-blue-900 mb-2">Quando Escolher no Gerador?</h3>
                                <p className="text-sm text-blue-800">
                                    Escolha o formato Fanzine (Paisagem) para apostar na cultura DIY (<em>Do It Yourself</em>). Ideal para <strong>manifestos com texto urgente, cartilhas de distribuição massiva, ou impressões baratas de um só lado da folha.</strong> Graças a essa característica, a área traseira intocada serve em dobro: quando o zine for todo desdobrado, ele expõe um impressionante pôster oculto no verso.
                                </p>
                            </div>
                        </div>

                        {/* Diagrama e Dados Técnicos */}
                        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                            <div className="w-full aspect-[4/3] bg-white border border-gray-300 border-dashed rounded mb-4 flex items-center justify-center text-gray-400 text-sm">
                                [ Imagem: Diagrama do Fanzine ]
                            </div>
                            <ul className="text-sm text-gray-600 space-y-2 mb-4">
                                <li><strong className="text-gray-900">Folha:</strong> 1 (A4)</li>
                                <li><strong className="text-gray-900">Páginas:</strong> 8 (Face Única)</li>
                                <li><strong className="text-gray-900">Dobras:</strong> Vertical e Horizontal</li>
                                <li><strong className="text-gray-900">Corte:</strong> Central Horizontal</li>
                            </ul>
                            <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-200 pt-3">
                                Usa a mesma imposição gradeada do Octavo, mas exige um corte cirúrgico no centro (intersecção das dobras) permitindo que o caderno se "abra" e seja refoldado sem uso de costura ou grampo.
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            {/* Rodapé */}
            <footer className="max-w-4xl mx-auto mt-8 text-center text-sm text-gray-500 pb-10">
                Desenvolvido por <span className="font-semibold">Aleph Ozuas</span> para a <a href="https://corrupiola.com.br" target="_blank" rel="noopener noreferrer" className="font-bold text-black hover:underline transition-all">Corrupiola</a>.
            </footer>
        </main>
    );
}
