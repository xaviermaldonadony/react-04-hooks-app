import { useEffect, useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setligth] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) return;
    const intervalId = setInterval(() => {
      console.log('setInterval called');
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      // console.log('cleanup effect');
      clearInterval(intervalId);
    };
  }, [countdown, light]);

  useEffect(() => {
    if (countdown > 0) return;

    if (countdown === 0) {
      setCountdown(5);

      if (light === 'red') {
        setligth('green');
        return;
      }

      if (light === 'yellow') {
        setligth('red');
        return;
      }

      if (light === 'green') {
        setligth('yellow');
        return;
      }
      return;
    }
  }, [countdown, light]);

  return {
    // props
    countdown,
    light,
    colors,
    // computed
    percentage: (countdown / 5) * 100,
    greenLight: light === 'green' ? colors[light] : 'bg-gray-500',
    redLight: light === 'red' ? colors[light] : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors[light] : 'bg-gray-500',

    // Methods
  };
};
