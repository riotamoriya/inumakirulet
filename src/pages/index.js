import * as React from "react";
import { useEffect } from "react";
import image from './inumaki.jpg'; // 画像ファイルをインポート
import sound from './shake.mp3'; // メインの音声ファイルをインポート
import specialSound from './dontmove.mp3'; // 特別な音声ファイルをインポート


const IndexPage = () => {
  // 音声を再生する関数
  const playSound = () => {
    // 100回に1回の割合で異なる音声ファイルを選択
    const isSpecial = Math.floor(Math.random() * 100) + 1 === 1;
    const audio = new Audio(isSpecial ? specialSound : sound);
    audio.play();
  };

  // スクロールを禁止するためのエフェクト
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;  
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = originalStyle;
  }, []);

  // ボタンのスタイル
  const buttonStyle = {
    width: '20vh',
    height: '10vh',
    fontSize: '2vw',
    backgroundColor: '#007bff', // 鮮やかな青色
    color: 'white',
    border: 'none',
    borderRadius: '10%', // 角を少し丸める
    boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)', // 軽い影を追加
    outline: 'none',
    cursor: 'pointer',
    transition: 'transform 0.1s ease', // 押したときの動きを滑らかに
  };



  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', padding: '5vh 0' }}>
      {/* 画像を中央に配置 */}
      <div style={{ marginBottom: '5vh' }}> {/* 画像とボタンの間隔を調整 */}
        <img src={image} alt="Descriptive Alt Text" style={{ width: '50vh', height: '50vh' }} />
      </div>
      
      {/* ボタンを中央に配置 */}
      <div>
        <button
          onClick={playSound}
          style={buttonStyle}
        >
        </button>
      </div>
    </main>
  );
};

export default IndexPage;
