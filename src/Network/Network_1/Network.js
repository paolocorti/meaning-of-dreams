import React, { useState } from 'react';
import NetworkLines from './NetworkLines';
import NetworkLanguages from './NetworkLanguages';
import NetworkTexts from './NetworkTexts';
import NetworkCircles from './NetworkCircles';
import { isMobile } from 'react-device-detect';

const languageLabel = {
  EN: 'English',
  AR: 'Arabic',
  SP: 'Spanish',
  FR: 'French',
  PO: 'Portuguese',
  RU: 'Russian',
  JP: 'Japanese',
  IN: 'Indonesian'
};

const Network1 = ({ year }) => {
  const [selected, setSelected] = useState('');
  const svgHeight = isMobile ? window.innerHeight * 0.6 : window.innerHeight * 0.6;
  const svgWidth = svgHeight;

  const selectedCallback = language => {
    const selection = language === selected ? '' : language;
    setSelected(selection);
  };

  return (
    <div className='flex w-100 justify-center items-center flex-column'>
      <div className='mt0 value absolute' style={{ fontSize: '22px', opacity: 1, top: '-20px' }}>
        {selected ? languageLabel[selected] : 'All the languages'} - {year}
      </div>
      <svg
        className='viz'
        x='0px'
        y='0px'
        viewBox='0 0 430 430'
        width={svgWidth}
        height={svgHeight}
        style={{ border: '0px solid rgba(0,0,0,1)' }}
      >
        <NetworkLines selected={selected} />
        <NetworkCircles selected={selected} setSelected={selectedCallback} />
        <NetworkLanguages selected={selected} />
        <NetworkTexts selected={selected} />
      </svg>
    </div>
  );
};

export default Network1;
