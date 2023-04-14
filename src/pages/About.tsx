import React from 'react';
import Header from '../components/Header';

type Props = {};

export default function About({}: Props) {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800 flex flex-col items-center">
      <Header />
      <h1 className=" mt-32 text-3xl animate-bounce">
        This is the "About" page, it's just showing the different routes!
      </h1>
    </main>
  );
}
