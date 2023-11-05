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
  // ホバー状態の管理
  const [isHovered, setIsHovered] = useState(false);

  const [normalAudio, setNormalAudio] = useState(null);
  const [specialAudio, setSpecialAudio] = useState(null);

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

  useEffect(() => {
    // Audio オブジェクトを初期化する
    setNormalAudio(new Audio(data.normal.publicURL));
    setSpecialAudio(new Audio(data.special.publicURL));
  }, [data.normal.publicURL, data.special.publicURL]);


  // 音声を再生する関数
  const playSound = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  // 特別な音を再生する確率を計算する関数
  const getAudioFile = () => {
    const isSpecial = Math.random() < 0.01; // 1% の確率で特別な音声
    return isSpecial ? data.special.publicURL : data.normal.publicURL;
  };
  // ボタンにホバー状態を適用する関数
  const applyHoverStyle = (hoverState) => {
    setIsHovered(hoverState);
  };


  return (
    <>
      <button
        onClick={() => playSound(getAudioFile())}
        onMouseEnter={() => applyHoverStyle(true)}
        onMouseLeave={() => applyHoverStyle(false)}
        style={isHovered ? {...buttonStyle, ...buttonHoverStyle} : buttonStyle}
      >
        Play Sound
      </button>
    </>
  );
};

export default CharacterImage;
