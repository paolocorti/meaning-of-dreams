import React from 'react';

const BluePetal100 = ({ id, value, selectedPetal }) => {
  return (
    <g
      className={`bluepetal blupetal-${id}`}
      style={{
        opacity: selectedPetal !== null ? (selectedPetal === id ? 1 : 0.5) : 1
      }}
    >
      <g id={`bluepetal-${id}`}>        
        <path class="cls-1" style={{ fill: 'url(#blue_petal_gradient_16)' }} d="M.35,23.72c-5.76,3.38,61.3,32,131.61,30.53S259.82,24.1,262.2,18c3.38-10.13-19.27-6.13-19.27-6.13h0c-6.75.63-16.51,1.26-24.77,1.26-15.89,0-34.53-3.38-48.79-5.51L166,7c-10.63-.88-23.14-2.76-35.16-3C131,4,44.26-3.18.35,23.72Z"/><path class="cls-2" d="M29.62,16.09a94,94,0,0,1,22.9-.88,145.89,145.89,0,0,1,22.27,3.63c3.62.88,7.38,2.5,10.63,3.63A103.32,103.32,0,0,1,95.8,27.1c3.38,1.5,7,3,10.39,4.25a49.67,49.67,0,0,0,11,2.5,64,64,0,0,1-11-2.12c-3.38-.88-7-2.76-10.64-4.26-3.37-1.5-7-3-10.38-4.63a62.52,62.52,0,0,0-10.63-3.62c-7.39-2.26-14.77-3.13-22.4-3.76A91.46,91.46,0,0,0,29.5,16.71Z"/><path class="cls-2" d="M29.62,16.09a91.51,91.51,0,0,1,22.65-.88,145.89,145.89,0,0,1,22.27,3.63c3.62.88,7.38,2.5,10.63,3.63L95.55,27.1l10.39,4.25a49.67,49.67,0,0,0,11,2.5v.25a64,64,0,0,1-11-2.12c-3.63-.88-7-2.76-10.39-4.26-7-3-13.76-6.38-21-8.25a112.55,112.55,0,0,0-22.4-3.63A91,91,0,0,0,29.5,17.09h0Zm0,0v.62h0a91.52,91.52,0,0,1,22.65-1.25c7.63.63,15,1.5,22.27,3.63,7.38,1.88,14,5.13,21,8.26,3.38,1.5,7,3,10.39,4.25a67.88,67.88,0,0,0,11,2.13v.37a41.42,41.42,0,0,1-11-2.5L95.55,27.35,85.17,22.84c-3.63-1.25-7-2.75-10.63-3.62a139.2,139.2,0,0,0-22.27-3.63A76.09,76.09,0,0,0,29.62,16.09Z"/><path class="cls-2" d="M135,16.59a16,16,0,0,1,7.38,1.88c2.51,1.25,4.26,2.5,6.76,3.62a21.89,21.89,0,0,0,6.76,3c2.5.5,4.88.87,7.38,1.25a29.55,29.55,0,0,1-7.38-.88c-2.51-.62-4.63-1.88-7-2.75a38.1,38.1,0,0,0-6.76-3.38,20.83,20.83,0,0,0-7-1.5Z"/><path class="cls-2" d="M135,16.59a16,16,0,0,1,7.38,1.88l6.76,3.62a21.89,21.89,0,0,0,6.76,3l7.38,1.25v.25a29.55,29.55,0,0,1-7.38-.88c-2.51-.62-4.63-1.87-7-2.75h0a53.19,53.19,0,0,0-6.38-3.38,19.14,19.14,0,0,0-7-1.5h0Zm0,0v1.25h0a18.58,18.58,0,0,1,7,1.5,38.44,38.44,0,0,1,6.76,3.38h0c2.5.87,4.62,2.13,7,2.75a29.55,29.55,0,0,0,7.38.88v.25l-7.38-1.25a29.89,29.89,0,0,1-6.75-3l-6.76-3.62A13.42,13.42,0,0,0,135,16.59Z"/><path class="cls-2" d="M.35,24.35C51,5.7,117,16.09,166.12,21.34c23.52,2.51,52.79,7,79.31,1.88a97.15,97.15,0,0,0,12.77-3.38,12.84,12.84,0,0,0,3.62-1.5c-27.77,11.26-78.44,5.76-103.46.25-31-6.76-70.81-8.88-105-5.88-18,1.88-39,6.51-53,11.64"/><path class="cls-2" d="M.35,24.35a180.66,180.66,0,0,1,31.4-7.89,234.37,234.37,0,0,1,32.4-2.75c21.65-.62,43.29,1.25,65.06,3.38s43,4.88,64.68,7c21.39,1.87,43.66,2.5,64.43-4.63h0A13.05,13.05,0,0,0,262,18l.25.63c-10.38,4-21.39,5.51-32.4,6.13a242.85,242.85,0,0,1-33-.62c-11-.88-22-2.51-32.66-4.26a282.26,282.26,0,0,0-32.65-5.5,373.43,373.43,0,0,0-65.81-2.26,235.25,235.25,0,0,0-32.65,4A187.93,187.93,0,0,0,.35,24.35a226,226,0,0,1,32-8.51,234.08,234.08,0,0,1,33-4A362.58,362.58,0,0,1,131.34,14c11,1.25,22,3.38,32.65,5.51a282.84,282.84,0,0,0,32.65,4.25,242.85,242.85,0,0,0,33,.63,119.21,119.21,0,0,0,32.4-6.13l.25.62a17,17,0,0,1-3.62,1.5h0c-20.77,6.76-43,6.38-64.43,4.26-21.65-2.13-43-4.88-64.69-7s-43.28-4-65.05-3.38A220.15,220.15,0,0,0,32.12,17,140.24,140.24,0,0,0,.35,24.35Z"/>
      </g>
    </g>
  );
};

export default BluePetal100;