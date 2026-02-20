'use client';

import { useState, useEffect } from 'react';

type TimeUnitProps = {
  value: number;
  label: string;
};

const TimeUnit = ({ value, label }: TimeUnitProps) => (
  <div className="flex flex-col items-center justify-center bg-secondary/70 rounded-2xl p-4 md:p-8 w-24 h-24 md:w-32 md:h-32 shadow-lg">
    <span className="text-4xl md:text-6xl font-bold text-primary">{value}</span>
    <span className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">{label}</span>
  </div>
);

type CountdownProps = {
  targetDate: Date;
};

export function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set initial value on client mount to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-2 md:gap-4 lg:gap-8">
      <TimeUnit value={timeLeft.days} label="Días" />
      <TimeUnit value={timeLeft.hours} label="Horas" />
      <TimeUnit value={timeLeft.minutes} label="Minutos" />
      <TimeUnit value={timeLeft.seconds} label="Segundos" />
    </div>
  );
}
