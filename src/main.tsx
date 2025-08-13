import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';

// import { HooksApp } from './HooksApp';
// import { TrafficLight } from './01-useState/TrafficLight';
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
// import { TrafficLightWithHook } from './02-useEffect/TrafficlightWithHook';
// import { PokemonPage } from './03-examples/PokemonPage';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { TasksApp } from './05-useReducer/TaskApp';
// import { ScrambleWords } from './05-useReducer/ScrambleWords';
// import { MemoHook } from './06-memos/MemoHook';
// import { MemoCounter } from './06-memos/MemoCounter';
// import { InstaApp } from './07-useOptimistic/InstaApp';
import { ClientInformation } from './08-use-suspense/ClientInformation';

import { getUserAction } from './08-use-suspense/api/get-user.action';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstaApp /> */}
    <Suspense fallback={<h1>Loading..</h1>}>
      <ClientInformation getUser={getUserAction(1)} />
    </Suspense>
  </StrictMode>
);
// createRoot(document.getElementById('root')!).render(<InstaApp />);
