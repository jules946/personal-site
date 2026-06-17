'use client';
import { useEffect, useRef } from 'react';

const FONT_SIZE = 'clamp(15rem, 40vh, 35rem)';
const SPEED = 50;        // seconds per full cycle — lower = faster
const DIRECTION = 'reverse'; // 'normal' = up, 'reverse' = down

function Ticker({ position }: { position: 'left' | 'right' }) {
    const innerRef = useRef<HTMLDivElement>(null);
    const isLeft = position === 'left';

    useEffect(() => {
        const inner = innerRef.current;
        if (!inner) return;
        const copy = inner.firstElementChild as HTMLElement;
        if (!copy) return;

        const measure = () => {
            const h = copy.getBoundingClientRect().height;
            if (h > 0) {
                inner.style.setProperty('--scroll-height', `${-h}px`);
                inner.style.animation = `vertical-scroll ${SPEED}s linear infinite ${DIRECTION}`;
            }
        };

        document.fonts.ready.then(measure);
    }, []);

    const textStyle: React.CSSProperties = {
        writingMode: 'vertical-rl',
        transform: isLeft ? 'rotate(180deg)' : 'none',
        fontSize: FONT_SIZE,
        letterSpacing: '-0.05em',
        lineHeight: 1,
        display: 'block',
        whiteSpace: 'nowrap',
    };

    return (
        <div
            className="hidden lg:block fixed top-0 h-screen overflow-hidden pointer-events-none"
            style={{ [isLeft ? 'left' : 'right']: 0 }}
        >
            <div ref={innerRef}>
                <span className="font-black uppercase text-white" style={textStyle}>Julius&nbsp;&nbsp;Manowski&nbsp;&nbsp;</span>
                <span className="font-black uppercase text-white" style={textStyle}>Julius&nbsp;&nbsp;Manowski&nbsp;&nbsp;</span>
            </div>
        </div>
    );
}

export default function VerticalName({ side }: { side: 'left' | 'right' | 'both' }) {
    return (
        <>
            {(side === 'left' || side === 'both') && <Ticker position="left" />}
            {(side === 'right' || side === 'both') && <Ticker position="right" />}
        </>
    );
}
