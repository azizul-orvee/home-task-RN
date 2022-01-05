import React from 'react';
import { SvgXml } from 'react-native-svg';

const LocationSVG = ({ size, fill }) => {
  const svg = `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.00001 0C3.13402 0 0 3.03781 0 6.78516C0 8.03836 0.253062 9.33271 0.979271 10.2656L7.00001 18L13.0207 10.2656C13.6803 9.41827 14 7.92028 14 6.78516C14 3.03781 10.866 0 7.00001 0ZM7.00001 3.9298C8.62667 3.9298 9.94576 5.20842 9.94576 6.78514C9.94576 8.3619 8.62667 9.6405 7.00001 9.6405C5.37334 9.6405 4.05426 8.3619 4.05426 6.78516C4.05426 5.20842 5.37334 3.9298 7.00001 3.9298Z" fill="#282828"/>
  </svg>
  `;

  const SvgComponent = () => (
    <SvgXml xml={svg} width={size} height={size} fill={fill} />
  );
  return <SvgComponent />;
};

export default LocationSVG;
