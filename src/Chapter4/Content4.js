import React, { useContext, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import content1 from './images/cap4-01-desk.png';
import content2 from './images/cap4-02-desk.png';
import content3 from './images/cap4-03-desk.png';
import content4 from './images/cap4-04-desk.png';
import mobileContent1 from './images/cap4-01-mob.png';
import mobileContent2 from './images/cap4-02-mob.png';
import mobileContent3 from './images/cap4-03-mob.png';
import mobileContent4 from './images/cap4-04-mob.png';
import startExpl from '../components/images/start-expl.svg';
import collagedog from './images/collage-dog-small.gif';
import collageelephant from './images/collage-elephant-small.gif';
import { AppContext } from '../appContext';
import { isMobileWithTablet } from '../constants';

const Content4 = ({ history, activeIndex }) => {
  const context = useContext(AppContext);
  const [reload, setReload] = useState(false)

  const changeSection = (section) => {
    if (isMobileWithTablet) {
      context.setSelectedView(section)
    } else {
      history.push({
        search: "?" + new URLSearchParams({ section: section }).toString()
      })
    }
  }

  useEffect(() => {
    if (activeIndex === 4) {
      setReload(true)
      setTimeout(() => {
        setReload(false)
      }, 2000)
    }

    return () => {
    }
  }, [activeIndex])

  return (
    <div className='w-100 read'>
      <h4 className={`tl fw6 mv0 ph4 ${reload ? 'transition-in' : ''}`}>Chapter 4</h4>
      <h1 className={`tl fw7 mt0 ph4 ${reload ? 'transition-in' : ''}`}>Dreams that connect us</h1>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          Another aspect we were interested in was exploring the networks of dreams: how do the dreams’s subjects – whose meaning people look for on Google – connect different languages? For this reason we visualized the dreams that connect us by year.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <LazyLoadImage
          alt={'Chapter 4 first paragraph'}
          effect="opacity"
          threshold={150}
          src={isMobileWithTablet ? mobileContent1 : content1}
          width='100%' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          The dreams’s subjects that connect more languages are the ones that more consistently appeared in our explorations: snakes and falling teeth. But there are also other subjects that often connected the languages, such as <span className='highlights'>being pregnant, dogs</span> and <span className='highlights'>fishes.</span>
        </p>
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <div className='w-100 flex justify-center items-center'>
          <LazyLoadImage
            alt={'dna'}
            effect="opacity"
            threshold={150}
            src={collagedog}
            height={170} />
        </div>
        <h2 className='mt3 mb0'>Connecting dreams</h2>
      </div>
      <div className='w-100 tc mt5'>
        <LazyLoadImage
          alt={'Chapter 4 second paragraph'}
          effect="opacity"
          threshold={150}
          src={isMobileWithTablet ? mobileContent2 : content2}
          width='100%' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          There are subjects that connected a specific language with the other ones in more than one year: such as <span className='highlights'>crying</span>, that linked Arabic to English and Portuguese in 2018 and to Spanish and French in 2015.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <h2 className='mv5'>Dreaming about crying</h2>
        <LazyLoadImage
          alt={'Chapter 4 third paragraph'}
          effect="opacity"
          threshold={150}
          src={isMobileWithTablet ? mobileContent3 : content3}
          width='100%' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          We also found unique connections between couple of languages: such as dreaming about <span className='highlights'>toads</span>, that linked Portuguese and Spanish in 2015 and 2017.
        </p>
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <div className='w-100 flex justify-center items-center'>
          <LazyLoadImage
            alt={'elephant'}
            effect="opacity"
            threshold={150}
            src={collageelephant}
            height={110} />
        </div>
        <h2 className='mt3 mb0'>Unique connections</h2>
      </div>
      <div className='w-100 tc mt5'>
        <LazyLoadImage
          alt={'Chapter 4 fourth paragraph'}
          effect="opacity"
          threshold={150}
          src={isMobileWithTablet ? mobileContent4 : content4}
          width='100%' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          Are you curious to explore the networks? Go to our dreams explorer!
        </p>
      </div>
      <div className='w-100 tc pb4 flex items-center flex-column'>
        <div className='flex flex-column items-center ph4 pv3' style={{ marginBottom: '50px' }}>
          <div className='raleway explore-text' onClick={() => changeSection('explore')}>EXPLORE CHAPTER 4</div>
          <div className='explore-icon' onClick={() => changeSection('explore')}>
            <div className='explore-icon-circle'></div>
            <img className='explore-icon-base svg-hover' alt={'Explore chapter 4'} src={startExpl} width={36} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content4;
