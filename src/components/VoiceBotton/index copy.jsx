import * as React from "react";
import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';


// // ボタンのスタイル
// const buttonStyle = {
//   width: '20vh',
//   height: '10vh',
//   fontSize: '2vw',
//   backgroundColor: '#007bff', // 鮮やかな青色
//   color: 'white',
//   border: 'none',
//   borderRadius: '10%', // 角を少し丸める
//   boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)', // 軽い影を追加
//   outline: 'none',
//   cursor: 'pointer',
//   transition: 'transform 0.1s ease', // 押したときの動きを滑らかに
// };

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
  const playSound = () => {
    const isSpecial = Math.floor(Math.random() * 100) + 1 === 1;
    const audio = isSpecial ? specialAudio : normalAudio;
    if (audio) {
      audio.play();
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
        Play Sound
      </button>
    </>
  );
};

export default CharacterImage;
