import React, { useEffect } from 'react';
import Swipe from 'react-easy-swipe';
import PetalRow from './PetalRow';

const getNumberOfPetals = n => {
  if (n < 50) {
    return 1;
  } else if (n >= 50 && n < 100) {
    return 2;
  } else if (n >= 100 && n < 3000) {
    return Math.floor(n / 100) + 2;
  } else if (n >= 3000 && n < 5000) {
    return 33;
  } else if (n >= 5000) {
    return 33;
  }
};

const Petals = ({ name, language, year, value, index }) => {
  const svgWidth = window.innerWidth * 0.7;
  let nOfPetals = getNumberOfPetals(value);

  useEffect(() => {
    nOfPetals = getNumberOfPetals(value);
  }, [value]);

  return (
    <div
      className='flex w-100 justify-center flex-column mt4'
      style={{ flex: 1 }}
    >
      <svg
        className='viz'
        x='0px'
        y='0px'
        viewBox='0 0 300 300'
        width={svgWidth}
        height={svgWidth}
        style={{ border: '0px solid rgba(0,0,0,0.2)', margin: 'auto' }}
      >
        <defs>
          <linearGradient
            id='petalGradient'
            x1='0%'
            y1='0%'
            x2='0%'
            y2='100%'
            gradientUnits='objectBoundingBox'
          >
            <stop offset='0%' stopColor='rgb(217,132,132)' stopOpacity='1' />
            <stop offset='61%' stopColor='rgb(237,207,201)' stopOpacity='1' />
            <stop offset='100%' stopColor='rgb(230,235,237)' stopOpacity='1' />
          </linearGradient>
        </defs>
        <g transform={`translate(105, 20)`}>
          {nOfPetals > 20 && (
            <PetalRow
              id={3}
              petals={nOfPetals > 20 && nOfPetals < 33 ? nOfPetals - 20 : 13}
              offset={20}
              index={`${index}-${language}-${year}`}
            />
          )}
          {nOfPetals > 9 && (
            <PetalRow
              id={2}
              petals={nOfPetals > 9 && nOfPetals < 20 ? nOfPetals - 9 : 11}
              offset={9}
              index={`${index}-${language}-${year}`}
            />
          )}
          {nOfPetals > 0 && (
            <PetalRow
              id={1}
              petals={nOfPetals > 9 ? 9 : nOfPetals}
              offset={0}
              index={`${index}-${language}-${year}`}
            />
          )}
        </g>
      </svg>
      <div className='w-100 tc'>{name}</div>
      <div className='w-100 tc mt2'>{value}</div>
    </div>
  );
};

export default Petals;