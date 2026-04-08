'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc?: string;
  title?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  // Get the section's top offset to anchor scroll correctly mid-page
  const getSectionTop = () => sectionRef.current?.offsetTop ?? 0;

  useEffect(() => {
    const handleWheel = (e: Event) => {
      const we = e as unknown as { deltaY: number; preventDefault: () => void };
      const sectionTop = getSectionTop();
      const scrollY = window.scrollY;

      // Only intercept when user is at this section
      if (Math.abs(scrollY - sectionTop) > 80 && !mediaFullyExpanded) return;

      if (mediaFullyExpanded && we.deltaY < 0 && scrollY <= sectionTop + 5) {
        setMediaFullyExpanded(false);
        we.preventDefault();
      } else if (!mediaFullyExpanded) {
        we.preventDefault();
        const scrollDelta = we.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
        else if (newProgress < 0.75) { setShowContent(false); }
      }
    };

    const handleTouchStart = (e: Event) => {
      const te = e as unknown as { touches: { clientY: number }[] };
      setTouchStartY(te.touches[0].clientY);
    };

    const handleTouchMove = (e: Event) => {
      if (!touchStartY) return;
      const te = e as unknown as { touches: { clientY: number }[]; preventDefault: () => void };
      const touchY = te.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      const sectionTop = getSectionTop();
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - sectionTop) > 80 && !mediaFullyExpanded) return;

      if (mediaFullyExpanded && deltaY < -20 && scrollY <= sectionTop + 5) {
        setMediaFullyExpanded(false);
        te.preventDefault();
      } else if (!mediaFullyExpanded) {
        te.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
        else if (newProgress < 0.75) { setShowContent(false); }
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);

    const handleScroll = () => {
      const sectionTop = getSectionTop();
      if (!mediaFullyExpanded && window.scrollY !== sectionTop) {
        // Only snap if user just arrived at this section
        const diff = Math.abs(window.scrollY - sectionTop);
        if (diff > 0 && diff < 120) {
          window.scrollTo({ top: sectionTop, behavior: 'instant' });
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = () => setIsMobileState(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div ref={sectionRef} className="overflow-x-hidden bg-surface">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* Background */}
          {bgImageSrc && (
            <motion.div
              className="absolute inset-0 z-0 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 - scrollProgress }}
              transition={{ duration: 0.1 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bgImageSrc}
                alt="Background"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/60" />
            </motion.div>
          )}

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* Expanding media box */}
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 60px rgba(0,0,0,0.5)',
                  borderRadius: scrollProgress < 0.9 ? '12px' : '0px',
                }}
              >
                {mediaType === 'video' ? (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                      disablePictureInPicture
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/50"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 0.6 - scrollProgress * 0.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={mediaSrc} alt={title || ''} className="w-full h-full object-cover" />
                    <motion.div
                      className="absolute inset-0 bg-black/50"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.4 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
              </div>

              {/* Floating scroll hint */}
              <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
                {scrollToExpand && (
                  <p
                    className="text-xs uppercase tracking-[0.2em] text-on-surface/50 font-light text-center"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {scrollToExpand}
                  </p>
                )}
              </div>

              {/* Title split */}
              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface transition-none"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-on-surface/35 transition-none"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </motion.h2>
              </div>
            </div>

            {/* Revealed content after full expansion */}
            <motion.div
              className="flex flex-col w-full px-6 md:px-16 py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
