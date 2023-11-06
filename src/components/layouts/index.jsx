import React from 'react';
import { useEffect } from "react";
import './global.css';

const Layouts = (props) => {
  
  useEffect(() => {
    // スクロールを禁止する
    const disableScroll = e => e.preventDefault();
    document.body.style.overflow = 'hidden';
    document.addEventListener('touchmove', disableScroll, { passive: false });
  
    // このエフェクトのクリーンアップ関数
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('touchmove', disableScroll);
    };
  }, []);

  return (
    <>
      {props.children}
    </>
  );
};

export default Layouts;
