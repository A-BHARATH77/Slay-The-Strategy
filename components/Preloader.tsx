// @ts-nocheck
import React from 'react';

export default function Preloader() {
  return (
    <div className="preloader" style={{ pointerEvents: 'none' }}>
  <div className="preloader_content">
    <div className="preloader_line" />
    <div className="preloader__shapes">
      <div className="preloader__fill-top" />
      <div className="preloader__fill-bottom" />
    </div>
  </div>
</div>

  );
}
