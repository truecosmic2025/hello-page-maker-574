import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  endTime?: Date;
  urgent?: boolean;
}

export const CountdownTimer = ({ endTime, urgent = false }: CountdownTimerProps) => {
  const getEndTime = () => {
    if (endTime) return endTime.getTime();
    // Store end time in localStorage to persist across page reloads
    const stored = localStorage.getItem('countdown-end-time');
    if (stored) {
      const storedTime = parseInt(stored);
      if (storedTime > Date.now()) return storedTime;
    }
    // Set new end time 24 hours from now
    const newEndTime = Date.now() + (24 * 60 * 60 * 1000);
    localStorage.setItem('countdown-end-time', newEndTime.toString());
    return newEndTime;
  };

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const end = getEndTime();
    const difference = end - now;

    if (difference <= 0) {
      // Reset timer when it reaches 0
      const newEndTime = now + (24 * 60 * 60 * 1000);
      localStorage.setItem('countdown-end-time', newEndTime.toString());
      return {
        hours: 24,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg backdrop-blur border ${
      urgent 
        ? "bg-red-500/10 border-red-500/30 animate-pulse" 
        : "bg-primary/10 border-primary/30"
    }`}>
      <Clock className={`w-5 h-5 ${urgent ? "text-red-400" : "text-primary"}`} />
      <div className="flex items-center gap-2 font-mono text-lg font-bold">
        <div className="flex flex-col items-center">
          <span className={urgent ? "text-red-400" : "text-primary"}>{formatNumber(timeLeft.hours)}</span>
          <span className="text-xs text-muted-foreground">hrs</span>
        </div>
        <span className={urgent ? "text-red-400" : "text-primary"}>:</span>
        <div className="flex flex-col items-center">
          <span className={urgent ? "text-red-400" : "text-primary"}>{formatNumber(timeLeft.minutes)}</span>
          <span className="text-xs text-muted-foreground">min</span>
        </div>
        <span className={urgent ? "text-red-400" : "text-primary"}>:</span>
        <div className="flex flex-col items-center">
          <span className={urgent ? "text-red-400" : "text-primary"}>{formatNumber(timeLeft.seconds)}</span>
          <span className="text-xs text-muted-foreground">sec</span>
        </div>
      </div>
    </div>
  );
};
