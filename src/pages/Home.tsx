import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/countSlice';
import { RootState } from '../app/store';

type Props = {};

export default function Home({}: Props) {
  const [local, setLocal] = useState<number>(0);
  const globalCount = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <main className="min-h-screen w-full bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800 flex flex-col items-center">
        <Header />
        <h1 className=" mt-16 text-4xl animate-bounce">
          Full-stack React application template!
        </h1>
        <section className="my-16 text-xl flex flex-col gap-8">
          <p className=" max-w-sm text-center">
            This template is utilizing React, Redux, React-Router, TypeScript,
            TailwindCSS, Node, Express, Mongoose, PostgresQL, and Webpack.
          </p>
          <p className=" max-w-sm text-center">
            A complete boilerplate package without the mess of create-react-app.
          </p>
        </section>

        <hr className="border-slate-500 w-3/4 " />

        <section className="flex flex-col items-center my-16">
          <h2 className="text-3xl">State Management:</h2>
          <div className="flex gap-16 my-8">
            <div className="flex flex-col items-center gap-3">
              <p className="text-xl">Update State Locally With useState:</p>
              <button
                onClick={() => setLocal((prev) => prev + 1)}
                className=" bg-slate-500 h-10 w-10 flex justify-center items-center rounded hover:scale-105 transition-all text-3xl"
              >
                +
              </button>
              <p className="text-3xl">{local}</p>
              <button
                onClick={() => setLocal((prev) => prev - 1)}
                className=" bg-slate-500 h-10 w-10 flex justify-center items-center rounded hover:scale-105 transition-all text-3xl"
              >
                -
              </button>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-xl">
                Update State Globally With Redux Toolkit:
              </p>
              <button
                onClick={() => dispatch(increment())}
                className=" bg-slate-500 h-10 w-10 flex justify-center items-center rounded hover:scale-105 transition-all text-3xl"
              >
                +
              </button>
              <p className="text-3xl">{globalCount}</p>
              <button
                onClick={() => dispatch(decrement())}
                className=" bg-slate-500 h-10 w-10 flex justify-center items-center rounded hover:scale-105 transition-all text-3xl"
              >
                -
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
