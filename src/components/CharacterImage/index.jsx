import * as React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CharacterImage = () => {
  const data = useStaticQuery(graphql`
    query fetchImg {
      file(relativePath: { eq: "inumaki.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED 
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  const image = getImage(data.file.childImageSharp.gatsbyImageData);
  
  // スタイルオブジェクトを定義
  const imageStyle = {
    width: '50vh',
    height: '50vh',
    // 画像を親要素に収まるように設定
    objectFit: 'cover',
    objectPosition: 'center',
  };

  return (
    <div style={{ marginBottom: '5vh' }}> {/* 画像とボタンの間隔を調整 */}
      {image && <GatsbyImage image={image} alt="狗巻棘" style={imageStyle}/>}
    </div>
  );
};


export default CharacterImage;
