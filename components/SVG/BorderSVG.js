import React from 'react';
import { SvgXml } from 'react-native-svg';

const BorderSVG = ({ size, fill }) => {
  const svg = `<svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="0.75" y1="0.75" x2="0.749999" y2="24.25" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  
  `;

  const SvgComponent = () => (
    <SvgXml xml={svg} width={size} height={30} fill={fill} />
  );
  return <SvgComponent />;
};

export default BorderSVG;
