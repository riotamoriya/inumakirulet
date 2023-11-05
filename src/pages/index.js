import * as React from "react";
import { useEffect } from "react";
import './global.css';

import CharacterImage from "../components/CharacterImage";
import VoiceBotton from '../components/VoiceBotton';

const IndexPage = () => {

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
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', padding: '5vh 0' }}>
      {/* 画像を中央に配置 */}
      <CharacterImage />
      {/* ボタンを中央に配置 */}
      <VoiceBotton />
    </main>
  );
};

export default IndexPage;

export const Head = () => {
  <>
    <title>おにぎりの具</title>
    <meta name="description" content="おにぎりの具" />
  </>
}