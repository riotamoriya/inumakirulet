import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './style.css';

const CharacterImage = () => {
  const data = useStaticQuery(graphql`
  query fetchSounds{
    normal: file(relativePath: { eq: "shake.mp3" }) {
      publicURL
    }
    special: file(relativePath: { eq: "dontmove.mp3" }) {
      publicURL
    }
  }
`);
  const [audioContext, setAudioContext] = useState(null);

  // Web Audio API用のオーディオデータ
  const [normalBuffer, setNormalBuffer] = useState(null);
  const [specialBuffer, setSpecialBuffer] = useState(null);
  
  useEffect(() => {
    // AudioContextを初期化
    const context = new (window.AudioContext || window.webkitAudioContext)();
    setAudioContext(context);

    // オーディオファイルをプリロードする関数
    const preloadAudio = async (url) => {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      return context.decodeAudioData(arrayBuffer);
    };

    // オーディオファイルをプリロード
    preloadAudio(data.normal.publicURL).then(buffer => setNormalBuffer(buffer));
    preloadAudio(data.special.publicURL).then(buffer => setSpecialBuffer(buffer));
  }, [data.normal.publicURL, data.special.publicURL]);

  // 音声を再生する関数
  const playSound = () => {
    if (audioContext && normalBuffer && specialBuffer) {
      const isSpecial = Math.random() < 0.01;
      const source = audioContext.createBufferSource();
      source.buffer = isSpecial ? specialBuffer : normalBuffer;
      source.connect(audioContext.destination);
      source.start(0);
    }
  };

  return (
    <button
      onClick={playSound}
      className="buttonStyle"
    >
      Say
    </button>
  );
};

export default CharacterImage;
