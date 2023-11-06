import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';


// ボタンのスタイル
const buttonStyle = {
  padding: '1rem 2rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#FFF',
  background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
  border: 'none',
  borderRadius: '50px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  cursor: 'pointer',
  outline: 'none',
  transition: 'background-color 0.3s ease-in-out, transform 0.2s ease',
};

// ホバースタイル
const buttonHoverStyle = {
  backgroundColor: '#ff8e53', // ホバー時の背景色
  transform: 'scale(1.05)',
  boxShadow: '0 4px 20px 0 rgba(255, 105, 135, .5)',
};


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

  // ホバー状態の管理
  const [isHovered, setIsHovered] = useState(false);
  // ボタンにホバー状態を適用する関数
  const applyHoverStyle = (hoverState) => {
    setIsHovered(hoverState);
  };

  // クエリ部分は変わらず...
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
    <>
      <button
        onClick={playSound}
        onMouseEnter={() => applyHoverStyle(true)}
        onMouseLeave={() => applyHoverStyle(false)}
        style={isHovered ? {...buttonStyle, ...buttonHoverStyle} : buttonStyle}
      >
        {/* Play Sound */}
      </button>
    </>
  );
};

export default CharacterImage;
