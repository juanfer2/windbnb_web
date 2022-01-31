import React from 'react';
import './Titles.scss';

function Title({ children }: { children: React.ReactNode }) {
  return <h1 className="title">{children}</h1>;
}

export default Title;
