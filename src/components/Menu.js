import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';
import { isMobile } from 'react-device-detect';

const Menu = ({ history }) => {
  const context = useContext(AppContext);
  const actualPath = history.location.pathname;

  const goTo = path => {
    context.toggleMenu();
    history.push(path);
  };

  const closeMenu = () => {
    context.toggleMenu();
  };

  return (
    <div
      className={`menu w-100 flex flex-column justify-around fixed top-0 bottom-0 left-0 right-0 ${
        context.menuOpen ? 'open' : 'close'
      }`}
    >
      <div
        className='w-100'
        style={{ maxWidth: isMobile ? '100%' : '75%', margin: '0 auto' }}
      >
        <div
          className='w-100 flex items-center ph4 mv4 mv0-ns'
          onClick={() => goTo('/')}
        >
          <div
            className='white tl'
            style={{
              fontSize: '44px',
              fontWeight: 'bold',
              marginBottom: isMobile ? 0 : '30px'
            }}
          >
            HOME
          </div>
        </div>
        <div
          className='w-100 flex flex-column justify-center ph4 pointer mv4 mv0-ns'
          onClick={() => goTo('/chapter1')}
          style={{ marginBottom: isMobile ? 0 : '30px' }}
        >
          <div
            className='white tl'
            style={{ fontSize: isMobile ? '14px' : '28px' }}
          >
            CHAPTER 1
          </div>
          <div
            className={`${
              actualPath === '/chapter1' ? 'menu-selected' : ''
            } white tl relative`}
            style={{ fontSize: isMobile ? '28px' : '48px' }}
          >
            The Shapes of our Dreams
          </div>
        </div>
        <div
          className='w-100 flex flex-column justify-center ph4 pointer mv4 mv0-ns'
          onClick={() => goTo('/chapter2')}
          style={{ marginBottom: isMobile ? 0 : '30px' }}
        >
          <div
            className='white tl'
            style={{ fontSize: isMobile ? '14px' : '28px' }}
          >
            CHAPTER 2
          </div>
          <div
            className={`${
              actualPath === '/chapter2' ? 'menu-selected' : ''
            } white tl relative`}
            style={{ fontSize: isMobile ? '28px' : '48px' }}
          >
            The Worlds We Dream of
          </div>
        </div>
        <div
          className='w-100 flex flex-column justify-center ph4 pointer mv4 mv0-ns'
          onClick={() => goTo('/chapter3')}
          style={{ marginBottom: isMobile ? 0 : '30px' }}
        >
          <div
            className='white tl'
            style={{ fontSize: isMobile ? '14px' : '28px' }}
          >
            CHAPTER 3
          </div>
          <div
            className={`${
              actualPath === '/chapter3' ? 'menu-selected' : ''
            } white tl relative`}
            style={{ fontSize: isMobile ? '28px' : '48px' }}
          >
            A Time for Dreams
          </div>
        </div>
        <div
          className='w-100 flex flex-column justify-center ph4 pointer mv4 mv0-ns'
          onClick={() => goTo('/chapter4')}
          style={{ marginBottom: isMobile ? 0 : '30px' }}
        >
          <div
            className='white tl'
            style={{ fontSize: isMobile ? '14px' : '28px' }}
          >
            CHAPTER 4
          </div>
          <div
            className={`${
              actualPath === '/chapter4' ? 'menu-selected' : ''
            } white tl relative`}
            style={{ fontSize: isMobile ? '28px' : '48px' }}
          >
            The Dreams that Connect Us
          </div>
        </div>
        {isMobile && (
          <div
            className='w-100 flex items-center ph4 mv4 mv0-ns'
            onClick={() => goTo('/about')}
            style={{ marginBottom: isMobile ? 0 : '30px' }}
          >
            <div
              className='white tl'
              style={{ fontSize: isMobile ? '28px' : '48px' }}
            >
              About
            </div>
          </div>
        )}
        {isMobile && (
          <div className='w-100 flex items-center ph4 mv4 mv0-ns'>
            <div
              className='white tl'
              style={{ fontSize: isMobile ? '28px' : '48px' }}
            >
              Share
            </div>
          </div>
        )}
        <div className='w-100 flex items-center ph4 mv4 mv0-ns'>
          <div
            className='read-close pointer'
            onClick={closeMenu}
            style={{
              right: isMobile ? '50%' : '25px',
              top: isMobile ? 'auto' : '25px',
              bottom: isMobile ? '20px' : 'auto',
              left: 'auto',
              zIndex: 999
            }}
          >
            <img
              src={'/images/close-white.svg'}
              alt='Close menu icon'
              width={30}
              className='pointer'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Menu);
