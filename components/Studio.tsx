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
    return (
<section
      className="relative w-full h-screen flex flex-col overflow-hidden"
      style={{ background: '#FDF8EC' }}
    >  
      <style dangerouslySetInnerHTML={{ __html: `
        .studio-hero-center {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          pointer-events: none;
          z-index: 10;
        }
        .studio-hero-heading {
          font-family: var(--font-display), serif;
          font-weight: 800 !important;
          line-height: 0.85;
          text-align: center;
          margin: 0 !important;
          color: #516856;
          font-size: clamp(5rem, 15vw, 15rem);
        }
      `}} />

      {/* Spacer to offset the fixed navbar */}
      <div style={{ height: '100px', width: '100%' }} />

      {/* giant type - centered in the remaining space */}
      <div className="studio-hero-center">
        <h1 className="studio-hero-heading">
          Slay <span className="italic">Bold</span>
        </h1>
      </div>

        {/* Bottom footer row */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between items-end p-8 md:p-12 text-[#516856] opacity-40">
            <div className="flex flex-col gap-1">
            <p className="font-sans text-[10px] uppercase tracking-widest">Slay The Strategy</p>
            <p className="font-sans text-[10px] uppercase tracking-widest">Strategy / Creative</p>
            </div>
            <p className="font-sans text-[10px] uppercase tracking-widest">Est. 2026</p>
        </div>

        </section>
    );
}

// ─── about ─────────────────────────────────────────────────────────────────

function StudioAbout() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

        // ── Headings: clip-path reveal ──────────────────────────────────────
        const lines = sectionRef.current.querySelectorAll<HTMLElement>('.sa-line');
        gsap.set(lines, { clipPath: 'inset(0 100% 0 0)', opacity: 0 });
        lines.forEach((line) => {
            gsap.to(line, {
                clipPath: 'inset(0 0% 0 0)',
                opacity: 1,
                duration: 1.1,
                ease: 'power3.out',
                scrollTrigger: { trigger: line, start: 'top 85%' },
            });
        });

        // ── Images: clip-path + scale reveal ───────────────────────────────
        const imgWrappers = sectionRef.current.querySelectorAll<HTMLElement>('.sa-img');
        gsap.set(imgWrappers, { clipPath: 'inset(100% 0 0 0)' });
        imgWrappers.forEach((wrap) => {
            const img = wrap.querySelector('img');
            if (img) gsap.set(img, { scale: 1.2 });
            const tl = gsap.timeline({
                scrollTrigger: { trigger: wrap, start: 'top 85%' },
            });
            tl.to(wrap, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power3.inOut' });
            if (img) tl.to(img, { scale: 1, duration: 1.2, ease: 'power3.inOut' }, 0);
        });

        // ── Body text: slide up ─────────────────────────────────────────────
        const bodies = sectionRef.current.querySelectorAll<HTMLElement>('.sa-body-inner');
        gsap.set(bodies, { y: '110%' });
        bodies.forEach((el) => {
            gsap.to(el, {
                y: '0%',
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 92%' },
            });
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative w-full" style={{ background: '#516856', color: '#FDF8EC' }}>

            <style>{`
                .sa-line        { clip-path: inset(0 100% 0 0); opacity: 0; }
                .sa-img         { clip-path: inset(100% 0 0 0); }
                .sa-img img     { transform: scale(1.2); }
                .sa-body-inner  { transform: translateY(110%); }
            `}</style>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col">

                {/* ── ROW 1: Content Left | Image Right ── */}
                <div className="flex flex-col md:flex-row items-stretch border-b border-[#FDF8EC]/10">
                    {/* Left: Heading */}
                    <div className="flex-1 md:pr-8 py-12 md:py-16 flex items-center md:border-r border-[#FDF8EC]/10">
                        <h2
                            className="sa-line font-display font-normal leading-[0.9]"
                            style={{ fontSize: 'clamp(2.5rem,6vw,6rem)' }}
                        >
                            Concept Driven
                        </h2>
                    </div>

                    {/* Right: Image */}
                    <div className="flex-1 md:pl-8 py-8 flex items-center">
                        <div className="sa-img w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                            <img
                                draggable="false"
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                                alt="Team Collaboration"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>

                {/* ── ROW 2: Image Left | Content Right ── */}
                <div className="flex flex-col md:flex-row items-stretch border-b border-[#FDF8EC]/10">
                    {/* Left: Image */}
                    <div className="flex-1 md:pr-8 py-8 flex items-center md:border-r border-[#FDF8EC]/10 order-2 md:order-1">
                        <div className="sa-img w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '3/4' }}>
                            <img
                                draggable="false"
                                src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=800&q=80"
                                alt="Visual Culture"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 md:pl-8 py-12 md:py-16 flex flex-col justify-center gap-10 order-1 md:order-2">
                        <h2
                            className="sa-line font-display font-normal leading-[0.9]"
                            style={{ fontSize: 'clamp(2.5rem,6vw,6rem)' }}
                        >
                            Visual Culture
                        </h2>
                        <div className="overflow-hidden pb-[0.15em]">
                            <p className="sa-body-inner font-body text-[#FDF8EC]/60 leading-relaxed text-sm md:text-base max-w-[36ch]">
                                Slay The Strategy is a creative agency rooted in ambition and working everywhere
                                that matters. We believe great social media is not decoration — it is infrastructure.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── ROW 3: Content Left | Image Right ── */}
                <div className="flex flex-col md:flex-row items-stretch">
                    {/* Left: Content */}
                    <div className="flex-1 md:pr-8 py-12 md:py-16 flex flex-col justify-center gap-10 md:border-r border-[#FDF8EC]/10">
                        <h2
                            className="sa-line font-display font-normal leading-[0.9]"
                            style={{ fontSize: 'clamp(2.5rem,6vw,6rem)' }}
                        >
                            Found Online
                        </h2>
                        <div className="overflow-hidden pb-[0.15em]">
                            <p className="sa-body-inner font-body text-[#FDF8EC]/60 leading-relaxed text-sm md:text-base max-w-[42ch]">
                                From brand strategy to the final reel, we handle it in-house. Clients range from
                                early-stage founders to established names ready to own their digital presence.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="flex-1 md:pl-8 py-8 flex items-center">
                        <div className="sa-img w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                            <img
                                draggable="false"
                                src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80"
                                alt="Found Online"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* ── IDEAS IN MOTION banner ── */}
            <div
                className="relative w-full overflow-hidden flex items-center justify-center"
                style={{ height: '40vw', maxHeight: '520px', minHeight: '220px', background: '#3d5040' }}
            >
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
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
            const onResize = () => { measure(); ScrollTrigger.refresh(); };
            window.addEventListener('resize', onResize, { passive: true });
            ScrollTrigger.refresh();

            return () => {
                st.kill();
                ScrollTrigger.removeEventListener('refreshInit', onRefreshInit);
                window.removeEventListener('resize', onResize);
            };
        });

        mm.add('(max-width: 999px)', () => {
            gsap.set(header, { clearProps: 'all' });
            gsap.set(cards, { clearProps: 'all', opacity: 1 });
            ScrollTrigger.refresh();
        });
    }, { scope: sectionRef });

    return (
        <>
            <style>{`
                @media (max-width: 999px)  { .sws-team-desktop { display: none !important; } }
                @media (min-width: 1000px) { .sws-team-mobile  { display: none !important; } }
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
                    <h2 style={{ margin: '2.5% 0 0 0', fontSize: '50vw', lineHeight: '100%', fontFamily: 'var(--font-display), serif', fontWeight: 400, color: '#516856', whiteSpace: 'nowrap', userSelect: 'none' }}>
                        Meet The Obsessives
                    </h2>
                </div>

                {team.map((m, i) => (
                    <div key={m.name} className="sws-card" ref={el => { cardRefs.current[i] = el; }}>
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
                            <Link href="/contact" style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FDF8EC', textDecoration: 'none' }}>
                                Work With Us →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* MOBILE */}
            <div className="sws-team-mobile" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%', padding: '6rem 1.5rem', background: '#FDF8EC' }}>
                <h2 style={{ fontFamily: 'var(--font-display), serif', fontSize: 'clamp(2.5rem,10vw,4rem)', fontWeight: 400, color: '#516856', marginBottom: '1rem', lineHeight: 0.95 }}>
                    Minds at Work
                </h2>
                {team.map((m) => (
                    <div key={m.name} style={{ background: '#3d5040', borderRadius: '1rem', overflow: 'hidden' }}>
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

const CLIENT_LOGOS = [
    { name: 'Avarna',              img: '/logo/avarna.png' },
    { name: 'Acyuta',              img: '/logo/acyuta.png' },
    { name: 'Cellexa',             img: '/logo/cellexa.png' },
    { name: 'Ginni Parmar',        img: '/logo/ginni_parmar.png' },
    { name: 'Infamous Talents',    img: '/logo/infamous_talents.png' },
    { name: 'Maple',               img: '/logo/maple.png' },
    { name: 'Mahru Stories',       img: '/logo/mahru_stories.png' },
    { name: 'Perspective Studio',  img: '/logo/perspective_studio.png' },
    { name: 'Claw Nails',          img: '/logo/claw_nails.png' },
    { name: 'Kapoma',              img: '/logo/kapoma.jpg' },
    { name: 'Luxx Spas',           img: '/logo/luxx_spas.png' },
    { name: 'Orange',              img: '/logo/orange.png' },
    { name: 'Orient',              img: '/logo/orient.png' },
];

function LogoMarqueeRow({ reverse = false }: { reverse?: boolean }) {
    const rowRef = useRef<HTMLDivElement>(null);
    const copies = Array.from({ length: 6 }, (_, ci) =>
        CLIENT_LOGOS.map((cl, li) => ({ ...cl, key: `${ci}-${li}` }))
    ).flat();

    useEffect(() => {
        const row = rowRef.current;
        if (!row) return;

        const BASE = 0.6, MAX_BOOST = BASE * 10, BOOST_SCALE = 0.055;
        const IDLE_MS = 95, RAMP_SPEED = 10.5, KICK_EPS = 0.02, KICK_LERP = 0.65;
        const dir = reverse ? 1 : -1;

        let x = 0, currentBoost = BASE, targetBoost = BASE;
        let lastChangeAt = performance.now(), lastTickAt = performance.now();
        let rafId: number;

        const p3 = (t: number) => 1 - Math.pow(1 - t, 3);

        const tick = () => {
            const now = performance.now();
            const dt = Math.min((now - lastTickAt) / 1000, 0.05);
            lastTickAt = now;
            if (now - lastChangeAt > IDLE_MS) targetBoost = BASE;
            currentBoost += (targetBoost - currentBoost) * p3(Math.min(1, dt * RAMP_SPEED));
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
            const delta = Math.min(Math.abs(e.deltaY) || Math.abs(e.deltaX), 120);
            const desired = Math.min(BASE + delta * BOOST_SCALE, MAX_BOOST);
            targetBoost = desired;
            lastChangeAt = now;
            if (Math.abs(currentBoost - BASE) < KICK_EPS) currentBoost = BASE + (desired - BASE) * KICK_LERP;
            lastTickAt = now;
        };
        window.addEventListener('wheel', onWheel, { passive: true });
        return () => { cancelAnimationFrame(rafId); window.removeEventListener('wheel', onWheel); };
    }, [reverse]);

    return (
        <div className="w-full overflow-hidden">
            <div ref={rowRef} className="flex items-center w-max will-change-transform">
                {copies.map((cl) => (
                    <div
                        key={cl.key}
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{ width: 'clamp(280px,35vw,450px)', height: 'clamp(150px,18vw,250px)', padding: '1rem 2rem' }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            draggable="false"
                            src={cl.img}
                            alt={cl.name}
                            className="w-full h-full object-contain transition-all duration-500 hover:scale-110 cursor-pointer mix-blend-multiply"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

function StudioClients() {
    return (
        <section className="relative w-full py-24 overflow-hidden" style={{ background: '#FDF8EC', color: '#516856' }}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
                <div className="flex flex-col md:flex-row items-stretch">
                    {/* Left Side: Label + Heading */}
                    <div className="flex-1 md:pr-8 py-4 md:border-r border-[#516856]/10">
                        <p className="font-body text-[10px] uppercase tracking-widest text-[#516856]/50 mb-4">Clients</p>
                        <h2 className="font-display font-normal leading-[0.9]" style={{ fontSize: 'clamp(2.5rem,6vw,6rem)' }}>
                            <WordSlide text="Brands We Have Shaped" />
                        </h2>
                    </div>
                    {/* Right Side: Body Text aligned to bottom */}
                    <div className="flex-1 md:pl-8 py-4 flex items-end">
                        <p className="font-body text-sm text-[#516856]/70 leading-relaxed max-w-[42ch]">
                            Over the years we have built lasting relationships with clients across fashion,
                            technology, culture, and commerce. We don&apos;t just deliver work — we deliver work
                            that performs, persists, and gets remembered.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <LogoMarqueeRow reverse={false} />
                <LogoMarqueeRow reverse={true} />
            </div>
        </section>
    );
}

// ─── page root ─────────────────────────────────────────────────────────────

export function StudioContent() {
    return (
        <div className="bg-[#516856] min-h-screen">
            <div className="relative z-10 w-full bg-[#516856] rounded-b-[2.5rem] shadow-2xl">
                <StudioHero />
                <StudioAbout />
                <StudioTeam />
                <StudioClients />
            </div>
            <Footer />
        </div>
    );
}