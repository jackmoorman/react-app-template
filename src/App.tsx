import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

type Props = {};

export default function App({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
