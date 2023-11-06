import * as React from "react";
import CharacterImage from "../components/CharacterImage";
import VoiceBotton from '../components/VoiceBotton';

const IndexPage = () => {
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

export const Head = () => (
  <>
    <title>狗巻棘確率機</title>
    <meta name="description" content="狗巻棘確率機" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    {/* Open Graph / Facebook */}
    <meta property="og:title" content="狗巻棘確率機" />
    <meta property="og:description" content="狗巻棘確率機" />
    <meta property="og:image" content="https://riotamoriya.github.io/inumakirulet/inumaki.jpg" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://riotamoriya.github.io/inumakirulet/" />
    {/* Twitter */}
    <meta name="twitter:card" content="狗巻棘確率機" />
    <meta name="twitter:title" content="狗巻棘確率機" />
    <meta name="twitter:description" content="狗巻棘確率機" />
    <meta name="twitter:image" content="https://riotamoriya.github.io/inumakirulet/inumaki.jpg" />
  </>
);