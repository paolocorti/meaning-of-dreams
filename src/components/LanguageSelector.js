import React from 'react';

import './Selector.scss';

const LanguageSelector = ({ languages, selected, onSelect }) => {
  return (
    <div
      className='w-100 flex justify-center items-center relative'
      style={{ marginTop: '10px', height: '40px' }}
    >
      <div className='flex relative' style={{ width: '280px' }}>
        {languages.map((value, index) => {
          return (
            <div
              key={index}
              className={`langEl`}
              onClick={() => onSelect(index)}
            >
              {value}
            </div>
          );
        })}
        <div
          className='langEl-selected'
          style={{ left: `${selected * 35 - 2}px` }}
        />
      </div>
    </div>
  );
};

export default LanguageSelector;
