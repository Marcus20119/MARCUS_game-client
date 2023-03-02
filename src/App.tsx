import React from 'react';
import Heading from '~/components/Heading/Heading';
import Board from './components/Board/Board';
import KeyBoard from './components/KeyBoard/KeyBoard';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-zinc-800">
      <Heading
        as="h1"
        text="Wordle"
        className="text-[2.65rem] text-white font-semibold"
      />
      <Board />
      <KeyBoard />
    </div>
  );
}

export default App;
