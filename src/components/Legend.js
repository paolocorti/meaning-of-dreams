import React, { useContext } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';
import legendMob from './how-to-mob.png';
import legend from './how-to-desk.png';
import gotIt from './images/got-it.svg'
import { isMobile } from 'react-device-detect';

const Legend = ({ history, location }) => {
  const context = useContext(AppContext);
  const { pathname } = location;

  const goTo = path => {
    context.toggleLegend();
    history.push(path);
  };

  const closeLegend = () => {
    localStorage.setItem('legendSeen', true);
    context.toggleLegend();
  };

  return (
    <div
      className={`legend w-100 flex flex-column justify-around fixed top-0 bottom-0 left-0 right-0 ${
        context.legendOpen ? 'open' : 'close'
        }`}
      onClick={closeLegend}
    >
      <div
        className='read-close-legend pointer'
        onClick={closeLegend}
        style={{
          zIndex: 999,
        }}
      >
        <img
          alt='Close menu icon'
          src={gotIt}
          width={isMobile ? 140 : 180}
          style={{
            boxShadow: '3px 4px 12px 1px #65628e',
            borderRadius: '14px'
          }}
        />
      </div>
      <img
        alt='Legend'
        src={isMobile ? legendMob : legend}
        style={{ position: 'absolute', width: '100%', top: 0 }}
      />

      {/* <div className='w-100 flex items-center ph4'>
        <div className='white tl'>
          <img
            src={'/images/close-white.svg'}
            alt='Close menu icon'
            width={30}
          />
        </div>
      </div> */}
    </div>
  );
};

export default withRouter(Legend);
