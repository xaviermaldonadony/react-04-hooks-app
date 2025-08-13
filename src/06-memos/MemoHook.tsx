import { MySubTitle } from './ui/MySubTitle';
import { MyTitle } from './ui/MyTitle';
import { useCallback, useState } from 'react';

// second example
// const handleMyAPICall = (myValue: string) => {
//   console.log('calling aPI', myValue);
// };

export const MemoHook = () => {
  const [title, setTitle] = useState('Hello');
  const [subTitle, setSubTitle] = useState('World');

  const handleMyAPICall = useCallback(() => {
    console.log('calling aPI', subTitle);
  }, [subTitle]);

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1 className='text-2xl font-thin text-white'>MemoApp</h1>

      <MyTitle title={title} />
      <MySubTitle subTitle={subTitle} callMyApi={handleMyAPICall} />
      {/* <MySubTitle
        subTitle={subTitle}
        // creating an anonymous function, so function creates a new reference in memory
        callMyApi={() => handleMyAPICall(subTitle)}
      /> */}

      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={() => setTitle('Hello ' + new Date().getTime())}
      >
        Change title
      </button>
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={() => setSubTitle('World')}
      >
        Cange subTitle
      </button>
    </div>
  );
};
