'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─── shared helpers ────────────────────────────────────────────────────────

function SlideUp({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <div ref={ref} className={`overflow-hidden pb-[0.2em] -mb-[0.2em] ${className}`}>
            <motion.div
                initial={{ y: '105%' }}
                animate={inView ? { y: 0 } : { y: '105%' }}
                transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
}

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

// per-card [yPercent keyframes] and [rotation keyframes] — matches original team-cards.js
const CARD_TRANSFORMS: [number[], number[]][] = [
    [[10, 50, -10, 10], [20, -10, -45, 20]],
    [[0, 47.5, -10, 15], [-25, 15, -45, 30]],
    [[0, 52.5, -10, 5], [15, -5, -40, 60]],
    [[0, 50, 30, -80], [20, -10, 60, 5]],
    [[0, 55, -15, 30], [25, -15, 60, 95]],
];



// ─── hero ──────────────────────────────────────────────────────────────────

function StudioHero() {
    return (
        <section
            className="relative w-full h-[70vh] flex flex-col items-center justify-center overflow-hidden"
            style={{ background: 'var(--cream, #FDF8EC)' }}
        >
            {/* giant type */}
            <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none mt-16">
                <h1
                    className="font-display font-normal leading-[0.85] text-center"
                    style={{ fontSize: 'clamp(5rem, 15vw, 15rem)', color: '#516856' }}
                >
                    Slay <span className="italic">Bold</span>
                </h1>
            </div>

            {/* footer meta */}
            <div className="absolute bottom-0 left-0 z-20 w-full flex justify-between items-end p-8 md:p-10 text-[#516856] opacity-60">
                <div className="flex flex-col sm:flex-row gap-0 sm:gap-16">
                    <div>
                        <p className="font-body text-[10px] uppercase tracking-widest mb-1">Slay The Strategy</p>
                        <p className="font-body text-[10px] uppercase tracking-widest">Strategy / Creative</p>
                    </div>
                </div>
                <p className="font-body text-[10px] uppercase tracking-widest">Est. 2026</p>
            </div>
        </section>
    );
}

// ─── about ─────────────────────────────────────────────────────────────────

function StudioAbout() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const lines = sectionRef.current?.querySelectorAll('.sa-line');
        if (!lines) return;
        lines.forEach((line) => {
            gsap.fromTo(
                line,
                { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
                {
                    clipPath: 'inset(0 0% 0 0)',
                    opacity: 1,
                    duration: 1.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: line,
                        start: 'top 85%',
                        invalidateOnRefresh: true,
                    },
                }
            );
        });

        const imgs = sectionRef.current?.querySelectorAll('.sa-img');
        if (!imgs) return;
        imgs.forEach((img, i) => {
            gsap.fromTo(
                img,
                { clipPath: 'inset(100% 0 0 0)', scale: 1.08 },
                {
                    clipPath: 'inset(0% 0 0 0)',
                    scale: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: img,
                        start: 'top 85%',
                        invalidateOnRefresh: true,
                    },
                }
            );
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative w-full" style={{ background: '#516856', color: '#FDF8EC' }}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col">

                {/* ── ROW 1: Concept Driven + image ── */}
                <div className="flex flex-col md:flex-row items-stretch gap-0 border-b border-[#FDF8EC]/10">
                    {/* Headline */}
                    <div className="flex-[3] flex items-center py-12 md:py-16 border-r border-[#FDF8EC]/10 pr-8">
                        <h2 className="sa-line font-display font-normal leading-[0.9]" style={{ fontSize: 'clamp(2.5rem,6vw,6rem)' }}>
                            Concept Driven
                        </h2>
                    </div>
                    {/* Image */}
                    <div className="flex-[2] pl-8 py-8 flex items-center">
                        <div className="sa-img w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img draggable="false"
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                                alt="Concept"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                            />
                        </div>
                    </div>
                </div>

                {/* ── ROW 2: image + Visual Culture ── */}
                <div className="flex flex-col md:flex-row items-stretch gap-0 border-b border-[#FDF8EC]/10">
                    {/* Image left */}
                    <div className="flex-[2] pr-8 py-8 flex items-center border-r border-[#FDF8EC]/10">
                        <div className="sa-img w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '3/4' }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img draggable="false"
                                src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=800&q=80"
                                alt="Visual Culture"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                            />
                        </div>
                    </div>
                    {/* Content right */}
                    <div className="flex-[3] pl-8 py-12 md:py-16 flex flex-col justify-between gap-10">
                        <h2 className="sa-line font-display font-normal leading-[0.9]" style={{ fontSize: 'clamp(2.5rem,6vw,6rem)' }}>
                            Visual Culture
                        </h2>
                        <SlideUp delay={0.2}>
                            <p className="font-body text-[#FDF8EC]/60 leading-relaxed text-sm md:text-base max-w-[36ch]">
                                Slay The Strategy is a creative agency rooted in ambition and working everywhere
                                that matters. We believe great social media is not decoration — it is infrastructure.
                            </p>
                        </SlideUp>
                    </div>
                </div>

                {/* ── ROW 3: Found Online + image + text ── */}
                <div className="flex flex-col md:flex-row items-stretch gap-0">
                    {/* Headline */}
                    <div className="flex-[3] flex flex-col justify-between py-12 md:py-16 border-r border-[#FDF8EC]/10 pr-8 gap-10">
                        <h2 className="sa-line font-display font-normal leading-[0.9]" style={{ fontSize: 'clamp(2.5rem,6vw,6rem)' }}>
                            Found Online
                        </h2>
                        <SlideUp delay={0.15}>
                            <p className="font-body text-[#FDF8EC]/60 leading-relaxed text-sm md:text-base max-w-[36ch]">
                                From brand strategy to the final reel, we handle it in-house. Our clients range from
                                early-stage founders to established names ready to own their digital presence.
                            </p>
                        </SlideUp>
                    </div>
                    {/* Image right */}
                    <div className="flex-[2] pl-8 py-8 flex items-center">
                        <div className="sa-img w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img draggable="false"
                                src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80"
                                alt="Found Online"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* IDEAS IN MOTION banner */}
            <div
                className="relative w-full overflow-hidden flex items-center justify-center mt-0"
                style={{ height: '40vw', maxHeight: '520px', minHeight: '220px', background: '#3d5040' }}
            >
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle at 30% 50%, #FDF8EC 0%, transparent 60%),
                              radial-gradient(circle at 75% 60%, #8aad8e 0%, transparent 55%)`,
                    }}
                />
                <h2
                    className="relative z-10 font-display font-normal text-center leading-[0.85] select-none"
                    style={{ fontSize: 'clamp(3rem,10vw,9rem)', color: '#FDF8EC' }}
                >
                    <WordSlide text="Ideas In Motion" />
                </h2>
            </div>
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

        // ── DESKTOP (≥1000px) ──────────────────────────────────────────────────
        mm.add('(min-width: 1000px)', () => {
            // hide all cards initially
            gsap.set(cards, { opacity: 0 });

            let stickyHeight = 0;
            let maxTranslate = 0;
            let cardStartX = 25;
            let cardEndX = -650;

            const measure = () => {
                stickyHeight = window.innerHeight * 5;
                const headerWidth = header.offsetWidth;
                maxTranslate = Math.max(0, headerWidth - window.innerWidth);

                let cardWidth = 325;
                if (cards[0]) {
                    const r = cards[0].getBoundingClientRect();
                    cardWidth = r.width || 325;
                }
                const standardTravel = Math.abs((-650 / 100) * cardWidth);
                const scale = window.innerWidth / 1920;
                const required = standardTravel * 1.25 * Math.max(1, scale);
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
            const onResize = () => { measure(); ScrollTrigger.refresh(); };
            window.addEventListener('resize', onResize, { passive: true });

            ScrollTrigger.refresh();

            return () => {
                st.kill();
                ScrollTrigger.removeEventListener('refreshInit', onRefreshInit);
                window.removeEventListener('resize', onResize);
            };
        });

        // ── MOBILE (<1000px) ───────────────────────────────────────────────────
        mm.add('(max-width: 999px)', () => {
            gsap.set(header, { clearProps: 'all' });
            gsap.set(cards, { clearProps: 'all', opacity: 1 });
            ScrollTrigger.refresh();
        });
    }, { scope: sectionRef });

    return (
        <>
            {/* ── DESKTOP sticky section ─────────────────────────────────────── */}
            <style>{`
        @media (max-width: 999px) { .sws-team-desktop { display: none !important; } }
        @media (min-width: 1000px) { .sws-team-mobile  { display: none !important; } }
        .sws-card {
          position: absolute;
          top: 10%;
          left: 100%;
          z-index: 2;
          width: 325px;
          height: 500px;
          padding: 0.75rem;
          background-color: #3d5040;
          border-radius: 1rem;
          will-change: transform;
          overflow: hidden;
        }
        .sws-card-img { width: 100%; height: 200px; overflow: hidden; border-radius: 0.5rem; }
        .sws-card-img img { width: 100%; height: 100%; object-fit: cover; }
        .sws-card-body {
          display: flex; flex-direction: column;
          justify-content: space-between;
          width: 100%; height: calc(500px - 200px - 0.75rem * 2);
          padding: 1rem;
          color: #FDF8EC;
        }
      `}</style>

            <div
                ref={sectionRef}
                className="sws-team-desktop"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100svh',
                    overflow: 'hidden',
                    background: '#FDF8EC',
                }}
            >
                {/* giant scrolling header */}
                <div
                    ref={headerRef}
                    style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        width: '290vw',
                        height: '100svh',
                        willChange: 'transform',
                    }}
                >
                    <h2
                        style={{
                            margin: '2.5% 0 0 0',
                            fontSize: '50vw',
                            lineHeight: '100%',
                            fontFamily: 'var(--font-display), serif',
                            fontWeight: 400,
                            color: '#516856',
                            whiteSpace: 'nowrap',
                            userSelect: 'none',
                        }}
                    >
                        Meet The Obsessives
                    </h2>
                </div>

                {/* cards — absolutely positioned, animated by GSAP */}
                {team.map((m, i) => (
                    <div
                        key={m.name}
                        id={`sws-card-${i + 1}`}
                        className="sws-card"
                        ref={el => { cardRefs.current[i] = el; }}
                    >
                        <div className="sws-card-img">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img draggable="false" src={m.img} alt={m.name} />
                        </div>
                        <div className="sws-card-body">
                            <div>
                                <p style={{ fontFamily: 'var(--font-display), serif', fontSize: '1.75rem', fontWeight: 400, lineHeight: 1.1 }}>{m.name}</p>
                                <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginTop: '0.25rem' }}>{m.role}</p>
                            </div>
                            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.8rem', lineHeight: 1.6, opacity: 0.7 }}>{m.bio}</p>
                            <Link href="/contact" style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Work With Us →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── MOBILE stacked section ─────────────────────────────────────── */}
            <div
                className="sws-team-mobile"
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    width: '100%',
                    padding: '6rem 1.5rem',
                    background: '#FDF8EC',
                }}
            >
                <h2
                    style={{
                        fontFamily: 'var(--font-display), serif',
                        fontSize: 'clamp(2.5rem,10vw,4rem)',
                        fontWeight: 400,
                        color: '#516856',
                        marginBottom: '1rem',
                        lineHeight: 0.95,
                    }}
                >
                    Minds at Work
                </h2>
                {team.map((m) => (
                    <div
                        key={m.name}
                        style={{
                            background: '#3d5040',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            width: '100%',
                        }}
                    >
                        <div style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img draggable="false" src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '1.25rem', color: '#FDF8EC', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <p style={{ fontFamily: 'var(--font-display), serif', fontSize: '1.5rem', fontWeight: 400 }}>{m.name}</p>
                            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5 }}>{m.role}</p>
                            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.85rem', lineHeight: 1.6, opacity: 0.7 }}>{m.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

// ─── clients ───────────────────────────────────────────────────────────────

// alternating border-radius values — matches the Lemon Bureau reference
const CELL_RADII = ['0.75rem', '5rem'];

// client logo cells: icon SVG + name
const CLIENT_LOGOS = [
    { name: 'Avarna', img: '/logo/avarna.png', svg: null },
    { name: 'Acyuta', img: '/logo/acyuta.png', svg: null },
    { name: 'Cellexa', img: '/logo/cellexa.png', svg: null },
    { name: 'Ginni Parmar', img: '/logo/ginni_parmar.png', svg: null },
    { name: 'Infamous Talents', img: '/logo/infamous_talents.png', svg: null },
    { name: 'Maple', img: '/logo/maple.png', svg: null },
    { name: 'Mahru Stories', img: '/logo/mahru_stories.png', svg: null },
    { name: 'Perspective Studio', img: '/logo/perspective_studio.png', svg: null },
    { name: 'Claw Nails', img: '/logo/claw_nails.png', svg: null },
    { name: 'Kapoma', img: '/logo/kapoma.jpg', svg: null },
    { name: 'Luxx Spas', img: '/logo/luxx_spas.png', svg: null },
    { name: 'Orange', img: '/logo/orange.png', svg: null },
    { name: 'Orient', img: '/logo/orient.png', svg: null }
];

function LogoCell({ client, rowIndex, itemIndex }: { client: typeof CLIENT_LOGOS[0]; rowIndex: number; itemIndex: number }) {
    return (
        <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{
                width: 'clamp(280px, 35vw, 450px)',
                height: 'clamp(150px, 18vw, 250px)',
            }}
        >
            {client.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img draggable="false"
                    src={client.img}
                    alt={client.name}
                    className="w-full h-full object-contain transition-all duration-500 ease-out hover:scale-110 cursor-pointer mix-blend-multiply"
                    style={{ transform: 'scale(1.2)' }}
                />
            ) : null}
        </div>
    );
}

function LogoMarqueeRow({ rowIndex, reverse = false }: { rowIndex: number; reverse?: boolean }) {
    const rowRef = useRef<HTMLDivElement>(null);
    // 6 copies to ensure seamless loop
    const copies = Array.from({ length: 6 }, (_, ci) =>
        CLIENT_LOGOS.map((cl, li) => ({ ...cl, key: `${ci}-${li}`, itemIndex: li }))
    ).flat();

    useEffect(() => {
        const row = rowRef.current;
        if (!row) return;

        const BASE = 0.6;
        const MAX_BOOST = BASE * 10;
        const BOOST_SCALE = 0.055;
        const IDLE_MS = 95;
        const RAMP_SPEED = 10.5;
        const KICK_EPS = 0.02;
        const KICK_LERP = 0.65;
        const dir = reverse ? 1 : -1;

        let x = 0;
        let currentBoost = BASE;
        let targetBoost = BASE;
        let lastChangeAt = performance.now();
        let lastTickAt = performance.now();
        let rafId: number;

        const power3Out = (t: number) => 1 - Math.pow(1 - t, 3);

        const tick = () => {
            const now = performance.now();
            const dt = Math.min((now - lastTickAt) / 1000, 0.05);
            lastTickAt = now;

            if (now - lastChangeAt > IDLE_MS) targetBoost = BASE;

            const t = Math.min(1, dt * RAMP_SPEED);
            const eased = power3Out(t);
            currentBoost += (targetBoost - currentBoost) * eased;
            currentBoost = Math.max(BASE, Math.min(MAX_BOOST, currentBoost));

            x += dir * currentBoost;
            const half = row.scrollWidth / 2;
            if (Math.abs(x) >= half) x = reverse ? -half + 1 : 0;
            row.style.transform = `translateX(${x}px)`;
            rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);

        const onWheel = (e: WheelEvent) => {
            const now = performance.now();
            const rawDelta = Math.abs(e.deltaY) || Math.abs(e.deltaX);
            const delta = Math.min(rawDelta, 120);
            const desired = Math.min(BASE + delta * BOOST_SCALE, MAX_BOOST);
            targetBoost = desired;
            lastChangeAt = now;
            if (Math.abs(currentBoost - BASE) < KICK_EPS) {
                currentBoost = BASE + (desired - BASE) * KICK_LERP;
            }
            lastTickAt = now;
        };

        window.addEventListener('wheel', onWheel, { passive: true });
        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('wheel', onWheel);
        };
    }, [reverse]);

    return (
        <div className="w-full overflow-hidden">
            <div ref={rowRef} className="flex items-center w-max will-change-transform" style={{ gap: '0' }}>
                {copies.map((cl) => (
                    <LogoCell key={cl.key} client={cl} rowIndex={rowIndex} itemIndex={cl.itemIndex} />
                ))}
            </div>
        </div>
    );
}

function StudioClients() {
    return (
        <section className="relative w-full py-24" style={{ background: '#FDF8EC', color: '#516856', overflow: 'hidden' }}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
                <div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16">
                    <div className="flex-[1.25]">
                        <SlideUp>
                            <p className="font-body text-[10px] uppercase tracking-widest text-[#516856]/50 mb-4">Clients</p>
                        </SlideUp>
                        <h2 className="font-display font-normal leading-[0.9]" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)' }}>
                            <WordSlide text="Brands We Have Shaped" />
                        </h2>
                    </div>
                    <div className="flex-[1.5] pb-2">
                        <SlideUp delay={0.1}>
                            <p className="font-body text-sm text-[#516856]/70 leading-relaxed max-w-[42ch]">
                                Over the years we have built lasting relationships with clients across fashion,
                                technology, culture, and commerce. We don&apos;t just deliver work — we deliver work
                                that performs, persists, and gets remembered.
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* row 1 → left, row 2 → right */}
            <div className="flex flex-col" style={{ gap: '0' }}>
                <LogoMarqueeRow rowIndex={0} reverse={false} />
                <LogoMarqueeRow rowIndex={1} reverse={true} />
            </div>
        </section>
    );
}

// ─── page root ─────────────────────────────────────────────────────────────

export function StudioContent() {
    return (
        <div className="bg-[#516856] min-h-screen">
            {/* Main Content Container with Reveal Margin */}
            <div className="relative z-10 w-full bg-[#516856] rounded-b-[2.5rem] shadow-2xl mb-[100svh]">
                <StudioHero />
                <StudioAbout />
                <StudioTeam />
                <StudioClients />
            </div>

            {/* Sticky Reveal Footer */}
            <div className="fixed bottom-0 left-0 w-full h-[100svh] z-0 pointer-events-none">
                <div className="w-full h-full pointer-events-auto">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
