'use client';
import { useRouter } from 'next/navigation';
import { useRef, useCallback, useEffect, useId } from 'react';

export default function FillLink({ href, children }: { href: string; children: string }) {
    const router = useRouter();
    const svgRef = useRef<SVGSVGElement>(null);
    const textRef = useRef<SVGTextElement>(null);
    const stop1Ref = useRef<SVGStopElement>(null);
    const stop2Ref = useRef<SVGStopElement>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const progressRef = useRef(0);
    const rafRef = useRef<number | null>(null);
    const hoveringRef = useRef(false);
    const rawId = useId();
    const gradId = `g${rawId.replace(/[^a-z0-9]/gi, '')}`;

    useEffect(() => {
        const svg = svgRef.current;
        const text = textRef.current;
        if (!svg || !text) return;

        document.fonts.ready.then(() => {
            const b = text.getBBox();
            if (b.width === 0) return;

            svg.setAttribute('viewBox', `${b.x} ${b.y} ${b.width} ${b.height}`);

            // Wait a frame for the SVG to reflow with the new viewBox
            requestAnimationFrame(() => {
                const rect = svg.getBoundingClientRect();
                const W = Math.ceil(rect.width);
                const H = Math.ceil(rect.height);
                if (W === 0 || H === 0) return;

                // Scale: how many CSS pixels per SVG user unit
                const scale = H / b.height;

                const canvas = document.createElement('canvas');
                canvas.width = W;
                canvas.height = H;

                const ctx = canvas.getContext('2d', { willReadFrequently: true });
                if (!ctx) return;

                const fontFamily = window.getComputedStyle(svg).fontFamily;
                ctx.font = `900 ${100 * scale}px ${fontFamily}`;
                ctx.letterSpacing = `${-5 * scale}px`;
                ctx.textBaseline = 'alphabetic';
                ctx.fillStyle = 'black';

                // Baseline position in canvas pixels
                const baselineX = -b.x * scale;
                const baselineY = -b.y * scale;
                ctx.fillText(children.toUpperCase(), baselineX, baselineY);

                canvasRef.current = canvas;
            });
        });
    }, [children]);

    useEffect(() => () => {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    }, []);

    const tick = useCallback(() => {
        progressRef.current = hoveringRef.current
            ? Math.min(100, progressRef.current + 0.7)   // fill speed
            : Math.max(0, progressRef.current - 0.4);    // drain speed

        const pct = `${progressRef.current}%`;
        stop1Ref.current?.setAttribute('offset', pct);
        stop2Ref.current?.setAttribute('offset', pct);

        if (progressRef.current > 0 || hoveringRef.current) {
            rafRef.current = requestAnimationFrame(tick);
        } else {
            rafRef.current = null;
        }
    }, []);

    const isOverLetter = useCallback((clientX: number, clientY: number): boolean => {
        const canvas = canvasRef.current;
        const svg = svgRef.current;
        if (!canvas || !svg) return false;

        const rect = svg.getBoundingClientRect();
        const x = Math.round(clientX - rect.left);
        const y = Math.round(clientY - rect.top);

        if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return false;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return false;

        return ctx.getImageData(x, y, 1, 1).data[3] > 32;
    }, []);

    const onMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
        const over = isOverLetter(e.clientX, e.clientY);
        hoveringRef.current = over;
        if (svgRef.current) svgRef.current.style.cursor = over ? 'pointer' : 'default';
        if ((over || progressRef.current > 0) && rafRef.current === null) {
            rafRef.current = requestAnimationFrame(tick);
        }
    }, [isOverLetter, tick]);

    const onMouseLeave = useCallback(() => {
        hoveringRef.current = false;
        if (svgRef.current) svgRef.current.style.cursor = 'default';
        if (progressRef.current > 0 && rafRef.current === null) {
            rafRef.current = requestAnimationFrame(tick);
        }
    }, [tick]);

    const onClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
        const isTouch = window.matchMedia('(hover: none)').matches;
        if (isTouch || isOverLetter(e.clientX, e.clientY)) router.push(href);
    }, [isOverLetter, router, href]);

    return (
        <svg
            ref={svgRef}
            viewBox="0 -90 100 90"
            style={{ height: 'clamp(4rem, 14vw, 13rem)', width: 'auto', display: 'block', overflow: 'visible', cursor: 'default', outline: 'none', userSelect: 'none' }}
            aria-label={children}
            role="link"
            tabIndex={0}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            onKeyDown={(e) => { if (e.key === 'Enter') router.push(href); }}
        >
            <defs>
                <linearGradient id={gradId} x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
                    <stop ref={stop1Ref} offset="0%" stopColor="white" />
                    <stop ref={stop2Ref} offset="0%" stopColor="black" />
                </linearGradient>
            </defs>
            <text
                ref={textRef}
                x="0"
                y="0"
                fill={`url(#${gradId})`}
                pointerEvents="none"
                fontFamily="inherit"
                fontWeight="900"
                fontSize="100"
                letterSpacing="-5"
                style={{ textTransform: 'uppercase' }}
            >
                {children}
            </text>
        </svg>
    );
}
