'use client';
import { useRef, useEffect, Fragment } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─── shared helpers ────────────────────────────────────────────────────────

function WordSlide({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const words = text.split(' ');
    return (
        <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
            {words.map((w, i) => (
                <span key={i} className="overflow-hidden inline-block pb-[0.2em] -mb-[0.2em]">
                    <motion.span
                        className="inline-block"
                        initial={{ y: '110%' }}
                        animate={inView ? { y: 0 } : { y: '110%' }}
                        transition={{ duration: 0.85, delay: delay + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {w}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

// ─── team data ─────────────────────────────────────────────────────────────

const team = [
    {
        name: 'Dipani',
        role: 'Founder & Brand Strategist',
        bio: 'Architect of brand voices. Dipani turns raw ambition into social-media empires that convert attention into loyalty.',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
    },
    {
        name: 'Content Studio',
        role: 'Visual & Copy Direction',
        bio: 'Every post is a chapter. Our studio shapes scroll-stopping visuals and copy that make audiences stop, feel, and follow.',
        img: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=600&q=80',
    },
    {
        name: 'Growth Lab',
        role: 'Performance & Analytics',
        bio: 'Data without soul is just numbers. We blend analytics with intuition to scale brands that already have something worth saying.',
        img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        name: 'Campaign Studio',
        role: 'Campaigns & Paid Media',
        bio: 'Every scroll is a chance. We design campaigns that stop thumbs, start conversations, and move product.',
        img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    },
    {
        name: 'Analytics Desk',
        role: 'Growth & Data Intelligence',
        bio: 'Numbers with a story. We translate raw data into clear actions that compound into lasting brand equity.',
        img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
];

const CARD_TRANSFORMS: [number[], number[]][] = [
    [[10, 50, -10, 10], [20, -10, -45, 20]],
    [[0, 47.5, -10, 15], [-25, 15, -45, 30]],
    [[0, 52.5, -10, 5], [15, -5, -40, 60]],
    [[0, 50, 30, -80], [20, -10, 60, 5]],
    [[0, 55, -15, 30], [25, -15, 60, 95]],
];

// ─── hero ──────────────────────────────────────────────────────────────────

function StudioHero() {
    const heroRef = useRef(null);

    useGSAP(() => {
        gsap.to('.studio-reveal-word', {
            y: '0%',
            duration: 1,
            ease: 'power4.out',
            stagger: 0.1,
        });
    }, { scope: heroRef });

    return (
        <section className="studio-hero" ref={heroRef}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .studio-hero {  
                    padding: 0 2.5rem;
                    width: 100%;
                    margin: 0 auto;
                    position: relative;
                    z-index: 10;
                    background-color: #f7f2e6;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .studio-title-container {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    padding-bottom: 0;
                    padding-top: 200px; 
                    margin-bottom: 0; 
                    width: 100%;
                }

                .studio-divider {
                    width: 100%;
                    margin-top: 4rem;
                }

                .studio-title {
                    font-size: 16vw;
                    font-weight: 900;
                    line-height: 0.6;
                    letter-spacing: -0.04em;
                    margin: 0;
                    display: flex;
                    align-items: flex-start;
                    color: #516856;
                    font-family: 'Montserrat', sans-serif;
                }

                .studio-reveal-wrap {
                    overflow: hidden;
                    display: inline-block;
                    padding-top: 0.2em;
                    padding-bottom: 0.2em;
                    margin-top: -0.2em;
                    margin-bottom: -0.2em;
                }
                .studio-reveal-word {
                    display: inline-block;
                    will-change: transform;
                    transform: translateY(100%);
                }
                `
            }} />
            <div className="studio-title-container">
                <h1 className="studio-title">
                    <span className="studio-reveal-wrap">
                        <span className="studio-reveal-word">Studio</span>
                    </span>
                </h1>
            </div>
            <div className="studio-divider" />
        </section>
    );
}
// ─── team cards ────────────────────────────────────────────────────────────

function StudioTeam() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const section = sectionRef.current;
        const header = headerRef.current;
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
        if (!section || !header || !cards.length) return;

        const mm = gsap.matchMedia();

        mm.add('(min-width: 1000px)', () => {
            gsap.set(cards, { opacity: 0 });

            let stickyHeight = 0;
            let maxTranslate = 0;
            let cardStartX = 25;
            let cardEndX = -650;

            const measure = () => {
                stickyHeight = window.innerHeight * 5;
                maxTranslate = Math.max(0, header.offsetWidth - window.innerWidth);
                const cardWidth = cards[0]?.getBoundingClientRect().width || 325;
                const scale = window.innerWidth / 1920;
                const required = Math.abs((-650 / 100) * cardWidth) * 1.25 * Math.max(1, scale);
                cardStartX = 25;
                cardEndX = -(required / cardWidth) * 100;
            };

            measure();

            const st = ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: () => `+=${stickyHeight}px`,
                pin: true,
                pinSpacing: true,
                scrub: true,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    gsap.set(header, { x: -progress * maxTranslate });
                    cards.forEach((card, index) => {
                        const delay = index * 0.1125;
                        const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));
                        if (cardProgress > 0) {
                            const yPos = CARD_TRANSFORMS[index][0];
                            const rotations = CARD_TRANSFORMS[index][1];
                            const cardX = gsap.utils.interpolate(cardStartX, cardEndX, cardProgress);
                            const yProgress = cardProgress * 3;
                            const yIndex = Math.min(Math.floor(yProgress), yPos.length - 2);
                            const yInterp = yProgress - yIndex;
                            const cardY = gsap.utils.interpolate(yPos[yIndex], yPos[yIndex + 1], yInterp);
                            const cardRotation = gsap.utils.interpolate(rotations[yIndex], rotations[yIndex + 1], yInterp);
                            gsap.set(card, { xPercent: cardX, yPercent: cardY, rotation: cardRotation, opacity: 1 });
                        } else {
                            gsap.set(card, { opacity: 0 });
                        }
                    });
                },
            });

            const onRefreshInit = () => measure();
            ScrollTrigger.addEventListener('refreshInit', onRefreshInit);

            return () => {
                st.kill();
                ScrollTrigger.removeEventListener('refreshInit', onRefreshInit);
            };
        });

        mm.add('(max-width: 999px)', () => {
            gsap.set(header, { clearProps: 'all' });
            gsap.set(cards, { clearProps: 'all', opacity: 1 });

            // Animate mobile stacked cards text on scroll
            const mobileCards = document.querySelectorAll('.sws-team-mobile > div');
            mobileCards.forEach((card) => {
                const txt = card.querySelectorAll('.text');
                gsap.to(txt, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    }
                });
            });
        });
    }, { scope: sectionRef });

    return (
        <>
            <style>{`
                @media (max-width: 999px)  { .sws-team-desktop { display: none !important; } }
                @media (min-width: 1000px) { .sws-team-mobile  { display: none !important; } }
                .sws-team-mobile .text {
                    opacity: 0;
                    transform: translateY(30px);
                }
                .sws-card {
                    position: absolute; top: 10%; left: 100%; z-index: 2;
                    width: 325px; height: 500px; padding: 0.75rem;
                    background: #3d5040; border-radius: 1rem;
                    will-change: transform; overflow: hidden; opacity: 0;
                }
                .sws-card-img { width: 100%; height: 200px; overflow: hidden; border-radius: 0.5rem; }
                .sws-card-img img { width: 100%; height: 100%; object-fit: cover; }
                .sws-card-body {
                    display: flex; flex-direction: column; justify-content: space-between;
                    width: 100%; height: calc(500px - 200px - 1.5rem);
                    padding: 1rem; color: #FDF8EC;
                }
            `}</style>

            {/* DESKTOP */}
            <div
                ref={sectionRef}
                className="sws-team-desktop"
                style={{ position: 'relative', width: '100%', height: '100svh', overflow: 'hidden', background: '#FDF8EC' }}
            >
                <div
                    ref={headerRef}
                    style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '290vw', height: '100svh', willChange: 'transform' }}
                >
                    <h2 style={{ margin: '2.5% 0 0 0', fontSize: '50vw', lineHeight: '100%', fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: '#516856', whiteSpace: 'nowrap', userSelect: 'none' }}>
                        Meet The Obsessives
                    </h2>
                </div>

                {team.map((m, i) => (
                    <div key={m.name} className="sws-card" ref={el => { cardRefs.current[i] = el; }}>
                        <div className="sws-card-img">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img draggable="false" loading="eager" src={m.img} alt={m.name} />
                        </div>
                        <div className="sws-card-body">
                            <div>
                                <p className="text" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.75rem', fontWeight: 400, lineHeight: 1.1 }}>{m.name}</p>
                                <p className="text" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginTop: '0.25rem' }}>{m.role}</p>
                            </div>
                            <p className="text" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', lineHeight: 1.6, opacity: 0.7 }}>{m.bio}</p>
                            <Link className="text" href="/contact" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FDF8EC', textDecoration: 'none' }}>
                                Work With Us →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* MOBILE */}
            <div className="sws-team-mobile" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%', padding: '6rem 1.5rem', background: '#FDF8EC' }}>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(2.5rem,10vw,4rem)', fontWeight: 400, color: '#516856', marginBottom: '1rem', lineHeight: 0.95 }}>
                    Minds at Work
                </h2>
                {team.map((m) => (
                    <div key={m.name} style={{ background: '#3d5040', borderRadius: '1rem', overflow: 'hidden' }}>
                        <div style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img draggable="false" loading="eager" src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '1.25rem', color: '#FDF8EC', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <p className="text" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.5rem', fontWeight: 400 }}>{m.name}</p>
                            <p className="text" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5 }}>{m.role}</p>
                            <p className="text" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', lineHeight: 1.6, opacity: 0.7 }}>{m.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

type StudioRowItem = {
    name: string;
    image: string;
    recognitions: string[];
};

function StudioRow({ item, isLast }: { item: StudioRowItem; isLast?: boolean }) {
    return (
        <div className="studio-row">
            {/* Top border divider */}
            <div className="studio-row-divider" />

            <div className="studio-row-inner">

                {/* LEFT — index + category + large name */}
                <div className="studio-row-left">
                    <p className="studio-row-name text">{item.name}</p>
                </div>

                {/* CENTER — portrait image */}
                <div className="studio-row-center">
                    <img
                        draggable="false"
                        loading="eager"
                        src={item.image}
                        alt={item.name}
                        className="studio-row-img"
                    />
                </div>

                {/* RIGHT — two columns: recognitions + scope */}
                <div className="studio-row-left">
                    <div className="studio-row-col">
                        {item.recognitions.map((r, i) => (
                            <p key={i} className="studio-row-col-item text">{r}</p>
                        ))}
                    </div>

                </div>
            </div>

            {/* Bottom border on last row */}
            {isLast && <div className="studio-row-divider" />}
        </div>
    );
}

const STUDIO_DATA: StudioRowItem[] = [
    {
        name: 'Concept Driven',
        image: '/Studio/studio1.jpg',
        recognitions: [''],
    },
    {
        name: 'Visual Culture',
        image: '/Studio/studio2.jpg',
        recognitions: ['Slay The Strategy is a creative agency rooted in', 'ambition and working everywhere that matters.', 'We believe great social media is not decoration','— it is infrastructure.'],
    },
    {
        name: 'Found Online ',
        image: '/Studio/studio3.jpg',
        recognitions: ['From brand strategy to the final reel, we handle', 'it in-house. Our clients range from early-stage', 'founders to established names ready to own','their digital presence.'],
    },
];

function StudioInfoRow() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        const rows = containerRef.current.querySelectorAll('.studio-row');
        rows.forEach((row) => {
            const textElements = row.querySelectorAll('.text');
            gsap.to(textElements, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: row,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                }
            });
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="studio-info-section">
            <style dangerouslySetInnerHTML={{ __html: `
                .studio-info-section {
                    width: 100%;
                    padding: 0 2.5rem;
                    background: #f7f2e6;
                }

                .studio-row {
                    width: 100%;
                }

                .studio-row .text {
                    opacity: 0;
                    transform: translateY(30px);
                }

                .studio-row-divider {
                    width: 100%;
                    height: 1px;
                    background-color: #516856;
                    opacity: 0.35;
                }

                .studio-row-inner {
                    display: grid;
                    grid-template-columns: 2fr 1.4fr 1.6fr;
                    align-items: center;
                    gap: 0;
                    padding: 3rem 0;
                }

                /* LEFT */
                .studio-row-left {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 2.5rem;
                    padding-right: 2rem;
                }

                .studio-row-meta {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }

                .studio-row-index {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 0.08em;
                    color: #516856;
                    opacity: 0.5;
                }

                .studio-row-category {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 0.7rem;
                    font-weight: 500;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #516856;
                    opacity: 0.45;
                }

                .studio-row-name {
                    font-family: 'Montserrat', sans-serif;
                    font-size: clamp(2.2rem, 4.5vw, 5rem);
                    font-weight: 400;
                    line-height: 0.95;
                    color: #516856;
                    letter-spacing: -0.03em;
                    margin: 0;
                }

                /* CENTER */
                .studio-row-center {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .studio-row-img {
                    width: 100%;
                    max-width: 340px;
                    height: 240px;
                    object-fit: cover;
                    display: block;
                    border-radius: 1.5rem;
                }

                /* RIGHT */
                .studio-row-right {
                    display: flex;
                    gap: 2rem;
                    justify-content: flex-end;
                    align-items: flex-start;
                    padding-left: 2rem;
                }

                .studio-row-col {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    min-width: 140px;
                }

                .studio-row-col-label {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 0.6rem;
                    font-weight: 600;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: #516856;
                    opacity: 0.4;
                    margin-bottom: 0.5rem;
                }

                .studio-row-col-item {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #516856;
                    opacity: 1;
                    line-height: 1.5;
                }

                @media (max-width: 900px) {
                    .studio-info-section { padding: 0 1.25rem; }
                    .studio-row-inner {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                        padding: 2rem 0;
                    }
                    .studio-row-name { font-size: clamp(2rem, 8vw, 3rem); }
                    .studio-row-img { max-width: 100%; height: 200px; }
                    .studio-row-right { justify-content: flex-start; }
                }
            ` }} />
            {STUDIO_DATA.map((row, index) => (
                <StudioRow
                    key={index}
                    item={row}
                    isLast={index === STUDIO_DATA.length - 1}
                />
            ))}
        </div>
    );
}
// ─── page root ─────────────────────────────────────────────────────────────

export function StudioContent() {
    return (
        <div className="bg-[#FDF8EC] min-h-screen">
            <div className="relative z-10 w-full bg-[#FDF8EC]">
                <StudioHero />
                <StudioInfoRow />
                <StudioTeam />
            </div>
            <Footer />
        </div>
    );
}