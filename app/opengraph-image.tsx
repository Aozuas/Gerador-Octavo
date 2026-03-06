import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Gerador Octavo - Modelos disponíveis: Quarto, Octavo e Fanzine';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FAFAFA',
                    fontFamily: 'sans-serif',
                    backgroundImage: 'radial-gradient(circle at 25px 25px, #e5e5e5 2%, transparent 0%), radial-gradient(circle at 75px 75px, #e5e5e5 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '72px', fontWeight: 800, color: '#171717', margin: 0, letterSpacing: '-0.05em' }}>
                        Gerador Octavo
                    </h1>
                    <p style={{ fontSize: '32px', color: '#525252', marginTop: '16px', margin: 0 }}>
                        Diagramação manual elegante e precisa.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '48px', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Quarto */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '240px',
                        height: '320px',
                        backgroundColor: '#ffffff',
                        border: '2px solid #e5e5e5',
                        borderRadius: '16px',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    }}>
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.5">
                            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                            <path d="M4 12h16"></path>
                            <path d="M12 4v16"></path>
                        </svg>
                        <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#171717', marginTop: '24px' }}>Quarto</h2>
                    </div>

                    {/* Octavo */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '260px',
                        height: '340px',
                        backgroundColor: '#171717',
                        borderRadius: '16px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    }}>
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                            <path d="M4 10h16"></path>
                            <path d="M4 14h16"></path>
                            <path d="M10 4v16"></path>
                            <path d="M14 4v16"></path>
                        </svg>
                        <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#ffffff', marginTop: '24px' }}>Octavo</h2>
                    </div>

                    {/* Fanzine */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '240px',
                        height: '320px',
                        backgroundColor: '#ffffff',
                        border: '4px dashed #a3a3a3',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    }}>
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.5">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#171717', marginTop: '24px' }}>Fanzine</h2>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
