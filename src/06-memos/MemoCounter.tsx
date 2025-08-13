import { useMemo } from 'react';
import { useCounter } from '@/03-examples/useCounter';

const heavyStuff = (iterationNumber: number) => {
  console.time('Heavy_stuff_started');

  for (let index = 0; index < iterationNumber; index++) {
    console.log('going ..... ');
  }

  console.timeEnd('Heavy_stuff_started');

  return `${iterationNumber} iterations `;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40_000);
  const { counter: counter2, increment: increment2 } = useCounter(10);

  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Memo - useMemo -{myHeavyValue}</h1>
      <hr />

      <h4>Counter:{counter}</h4>
      <h4>Counter:{counter2}</h4>
      <button
        className='bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer'
        onClick={increment}
      >
        +1
      </button>
      <button
        className='bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer'
        onClick={increment2}
      >
        +1 - Conter2
      </button>
    </div>
  );
};
