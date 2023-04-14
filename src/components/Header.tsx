import React from 'react';
import { Link, Outlet } from 'react-router-dom';

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <header className="flex text-xl w-full shadow-sm shadow-slate-600 h-14 justify-center items-center gap-52 ">
        <p className="hover:scale-105 transition-all cursor-pointer">
          <Link to="/">Home</Link>
        </p>
        <p className="hover:scale-105 transition-all cursor-pointer">
          <Link to="/about">About</Link>
        </p>
      </header>
      <Outlet />
    </>
  );
}
