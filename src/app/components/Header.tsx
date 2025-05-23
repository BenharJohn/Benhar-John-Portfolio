
'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';

export default function Header() {
  const [time, setTime] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateClock = () => {
      const melbourneTime = new Date().toLocaleTimeString('en-AU', {
        timeZone: 'Australia/Melbourne',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTime(melbourneTime.replace(' ', '').toUpperCase());
    };
    updateClock(); // Initial call
    const intervalId = setInterval(updateClock, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="w-full border-b border-black/10 bg-background text-foreground dark:border-white/10 sticky top-0 z-50 font-display">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 text-xs tracking-widest uppercase">
        <Link href="/" className="hover:opacity-75 transition-opacity">
          <span className="font-bold">[BENHAR JOHN]</span>
        </Link>
        {/* Added flex-1 to nav and justify-center for its internal items */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-x-6 lg:gap-x-8 text-sm tracking-widest">
          <a href="#work" className="hover:opacity-75 transition-opacity">WORK ©</a>
          <a href="#about" className="hover:opacity-75 transition-opacity">ABOUT</a>
          <a href="#contact" className="hover:opacity-75 transition-opacity">REACH OUT</a>
        </nav>
        <div className="flex items-center gap-x-4">
          {isClient && time && (
            <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs">
              MEL [AU] {time}
            </span>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
