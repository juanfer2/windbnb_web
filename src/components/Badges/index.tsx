import React from 'react';
import './Badges.scss';

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="badge">
      <span className="badge-text">{children}</span>
    </div>
  );
}

export default Badge;
