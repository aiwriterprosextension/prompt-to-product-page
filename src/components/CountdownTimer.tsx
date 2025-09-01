
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to Friday, Sept 5th at midnight EST
    const targetDate = new Date('2025-09-05T23:59:59-05:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
      <div className="text-center">
        <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
          Offer ends Friday, Sept 5th @ midnight EST
        </p>
        <div className="flex justify-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-red-500 dark:text-red-300">Days</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-red-500 dark:text-red-300">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-red-500 dark:text-red-300">Min</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-red-500 dark:text-red-300">Sec</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
