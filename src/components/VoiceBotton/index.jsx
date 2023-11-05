import * as React from "react";
import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const CharacterImage = () => {
  const [normalAudio, setNormalAudio] = useState(null);
  const [specialAudio, setSpecialAudio] = useState(null);

  const data = useStaticQuery(graphql`
  query fetchSounds{
    normal: file(relativePath: { eq: "shake.m4a" }) {
      publicURL
    }
    special: file(relativePath: { eq: "dontmove.m4a" }) {
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
    const isSpecial = Math.floor(Math.random() * 10) + 1 === 1;
    const audio = isSpecial ? specialAudio : normalAudio;
    if (audio) {
      audio.play();
    }
  };

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
    <>
      <button
        onClick={playSound}
        style={buttonStyle}
      >
      </button>
    </>
  );
};

export default CharacterImage;
