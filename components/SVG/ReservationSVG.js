import React from 'react';
import { SvgXml } from 'react-native-svg';

const ReservationSVG = ({ size, fill }) => {
  const svg = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="15" height="15" rx="3" fill="#282828"/>
  <path d="M5.68 13.072C5.448 13.072 5.26 13.004 5.116 12.868C4.98 12.724 4.912 12.532 4.912 12.292V5.272C4.912 5.04 4.976 4.86 5.104 4.732C5.24 4.604 5.424 4.54 5.656 4.54H8.608C9.512 4.54 10.216 4.768 10.72 5.224C11.224 5.672 11.476 6.304 11.476 7.12C11.476 7.936 11.224 8.572 10.72 9.028C10.216 9.484 9.512 9.712 8.608 9.712H6.46V12.292C6.46 12.532 6.388 12.724 6.244 12.868C6.108 13.004 5.92 13.072 5.68 13.072ZM8.416 8.524C9.48 8.524 10.012 8.06 10.012 7.132C10.012 6.204 9.48 5.74 8.416 5.74H6.46V8.524H8.416Z" fill="white"/>
  </svg>
  
    `;

  const SvgComponent = () => (
    <SvgXml xml={svg} width={size} height={size} fill={fill} />
  );
  return <SvgComponent />;
};

export default ReservationSVG;
