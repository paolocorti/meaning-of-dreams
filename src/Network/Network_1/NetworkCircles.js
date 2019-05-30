import React from 'react';
import petal1 from '../1C70124E3B71B787.png';
import petal2 from '../1C70124E3B71B785.png';
import petal3 from '../1C70124E3B71B784.png';
import petal4 from '../1C70124E3B71B78B.png';
import petal5 from '../1C70124E3B71B77D.png';
import petal6 from '../1C70124E3B71B77C.png';
import petal7 from '../1C70124E3B71B77B.png';
import '../Network.scss';

const NetworkCircles = ({ selected, setSelected }) => {
  return (
    <g id="circles">
      <image style={{ cursor: 'pointer', opacity: 0.5, enableBackground: 'new' }} width="192" height="192" xlinkHref={petal1} transform="matrix(0.235 0 0 0.235 232.6282 111.0258)" >
      </image>
      <image style={{ cursor: 'pointer', opacity: 0.5, enableBackground: 'new' }} width="192" height="192" xlinkHref={petal2} transform="matrix(0.235 0 0 0.235 288.0681 354.1458)">
      </image>
      <image style={{ cursor: 'pointer', enableBackground: 'new' }} width="192" height="192" xlinkHref={petal3} transform="matrix(0.235 0 0 0.235 176.9482 354.1458)" onClick={() => setSelected('PO')}>
      </image>
      <image style={{ cursor: 'pointer', opacity: 0.5, enableBackground: 'new' }} width="192" height="196" xlinkHref={petal4} transform="matrix(0.2332 0 0 0.2332 107.7625 267.0938)">
      </image>
      <image style={{ cursor: 'pointer', enableBackground: 'new' }} width="192" height="192" xlinkHref={petal5} transform="matrix(0.2344 0 0 0.2344 132.3681 159.2057)" onClick={() => setSelected('SP')}>
      </image>
      <image className='pointer' style={{ cursor: 'pointer', enableBackground: 'new' }} width="192" height="192" xlinkHref={petal6} transform="matrix(0.2338 0 0 0.2338 332.7082 159.2658)" onClick={() => setSelected('EN')}>
      </image >
      <image style={{ cursor: 'pointer', enableBackground: 'new' }} width="192" height="188" xlinkHref={petal7} transform="matrix(0.2368 0 0 0.2368 357.0125 267.6838)" onClick={() => setSelected('FR')}>
      </image>
      <g>
        <circle class="st3" cx="155.2" cy="182.1" r="22" style={{ opacity: selected === 'SP' || selected === 'EN' || selected === 'FR' || selected === 'PO' ? 1 : 0 }} />
        <circle class="st3" cx="355" cy="182.1" r="22" style={{ opacity: selected === 'EN' || selected === 'PO' || selected === 'SP' ? 1 : 0 }} />
        <circle class="st3" cx="380.2" cy="290" r="22" style={{ opacity: selected === 'FR' || selected === 'SP' ? 1 : 0 }} />
        <circle class="st3" cx="199.6" cy="376.8" r="22" style={{ opacity: selected === 'PO' || selected === 'EN' || selected === 'SP' ? 1 : 0 }} />
      </g>
    </g >
  );
};

export default NetworkCircles;