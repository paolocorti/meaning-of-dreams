import React, { useContext, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import content1 from './images/cap1-01-desk.png';
import content2 from './images/cap1-02-desk.png';
import content3 from './images/cap1-03-desk.png';
import content4 from './images/cap1-04-desk.png';
import content5 from './images/cap1-05-desk.png';
import content1a from './images/cap1_01a-desk.jpg';
import mobileContent1 from './images/cap1-01-mob.png';
import mobileContent2 from './images/cap1-02-mob.png';
import mobileContent3 from './images/cap1-03-mob.png';
import mobileContent4 from './images/cap1-04-mob.png';
import mobileContent5 from './images/cap1-05-mob.png';
import mobileContent1a from './images/cap1_01a-mob.jpg';
import snake from './images/snake-small.gif';
import teeth from './images/tooth.gif';
import collagefox from './images/collage-fox-small.gif';
import collagecamel from './images/collage-camel-small.gif';
import luggage from './images/luggage-small.gif';
import startExpl from '../components/images/start-expl.svg';
import { AppContext } from '../appContext';
import { isMobileWithTablet } from '../constants';
import NavigationBar from '../components/NavigationBar';

const Content1 = ({ history, activeIndex }) => {
  const context = useContext(AppContext);
  const [reload, setReload] = useState(true);

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
    let timer;
    if (activeIndex === 1) {
      setReload(true);
      timer = setTimeout(() => {
        setReload(false);
      }, 2000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    };
  }, [activeIndex]);

  return (
    <div className='w-100 read'>
      {!isMobileWithTablet && (
        <NavigationBar
          content={true}
          history={history}
          activeIndex={activeIndex}
        />
      )}
      <h4 className={`tl fw6 mv0 ph4 ${reload ? 'transition-in' : ''}`}>
        Chapter 1
      </h4>
      <h1 className={`tl fw7 mt0 ph4 ${reload ? 'transition-in' : ''}`}>
        The Shapes of our Dreams
      </h1>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          How do we search for the meaning of our dreams on Google? We have
          explored the related queries to the question{' '}
          <span className='highlights'>What does it mean to dream about</span>{' '}
          in different languages to see which dream subjects users look for most.
          We discovered that we share some recurring dreams.
        </p>
      </div>
      <div className='w-100 tc mt4'>
        <img src={isMobileWithTablet ? mobileContent1 : content1} />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          We studied the results of queries like{' '}
          <span className='highlights'>
            What does it mean to dream about..., Why do I dream about...,
            Meaning of dreaming...
          </span>{' '}
          in seven languages from 2009 to 2019. We started from the top spoken languages and we selected
          the ones for which we have found enough data to explore the topic.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <LazyLoadImage
          alt={'Chapter 1 second paragraph'}
          effect="opacity"
          threshold={150}
          src={isMobileWithTablet ? mobileContent1a : content1a}
          width='100%'
        />
        {/* <img src={isMobileWithTablet ? mobileContent1a : content1a} /> */}
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          There are some subjects whose meaning people consistently look for in different languages:
          dreaming about <span className='highlights'>snakes</span> and{' '}
          <span className='highlights'>falling or broken teeth</span> for instance.
        </p>
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <LazyLoadImage
          alt={'Dreaming about snakes'}
          effect="opacity"
          threshold={150}
          src={snake}
          height={130}
        />
        <h2 className='mv3 mb5'>Dreaming about snakes</h2>
      </div>
      <div className='w-100 tc mt4'>
        <LazyLoadImage
          alt={'Chapter 1 third paragraph'}
          effect="opacity"
          threshold={150}
          src={isMobileWithTablet ? mobileContent2 : content2}
          width='100%'
        />
        {/* <img src={isMobileWithTablet ? mobileContent2 : content2} /> */}
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <LazyLoadImage
          alt={'teeth'}
          effect="opacity"
          threshold={150}
          src={teeth}
          height={160}
        />
        <h2 className='mv3 mb5'>Dreaming about falling teeth</h2>
      </div>
      <div className='w-100 tc mt4'>
        <LazyLoadImage
          alt={'Chapter 1 fourth paragraph'}
          effect="opacity"
          threshold={150}
          src={isMobileWithTablet ? mobileContent3 : content3}
          width='100%'
        />
        {/* <img src={isMobileWithTablet ? mobileContent3 : content3} /> */}
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <div className='w-100 flex justify-center items-end flex-wrap'>
          <LazyLoadImage
            alt={'cabbage'}
            effect="opacity"
            threshold={150}
            src={collagecamel}
            height={180}
          />
        </div>
        <p className='lh-copy'>
          On the other hand, there are unique subjects that only appeared
          exploring specific languages: dreaming about{' '}
          <span className='highlights'>picking mushrooms</span> only appeared in Russian,
          dreaming about <span className='highlights'>camels</span> in Arabic,
          dreaming about <span className='highlights'>garlic</span> in
          Portuguese, about <span className='highlights'>iguanas</span> in
          Spanish, and about <span className='highlights'>fox</span> in English.
        </p>
      </div>

      <div className='w-100 tc mt5 flex flex-column items-center'>
        <div className='w-100 flex justify-center items-end flex-wrap'>
          <LazyLoadImage
            alt={'camel'}
            effect="opacity"
            threshold={150}
            src={collagefox}
            height={180}
          />
        </div>
        <h2 className='mv3 mb5'>Unique subjects</h2>
      </div>
      <div className='w-100 tc mt4'>
        <LazyLoadImage
          alt={'Chapter 1 fifth paragraph'}
          effect="opacity"
          threshold={150}
          src={isMobileWithTablet ? mobileContent4 : content4}
          width='100%'
        />
        {/* <img src={isMobileWithTablet ? mobileContent4 : content4} /> */}
      </div>

      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          And then we’ve found interesting data exploring subjects with peaks in
          the search interest over the years. In 2016, the related query with the highest value in Arabic was{' '}
          <span className='highlights'>traveling</span>.
          We've further explored the trends throughout the years in Chapter 3.
        </p>
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <div className='w-100 flex justify-center items-end'>
          <LazyLoadImage
            alt={'luggage'}
            effect="opacity"
            threshold={150}
            src={luggage}
            height={140}
          />
        </div>
        <h2 className='mv3 mb5'>Peaks over the year</h2>
      </div>

      <div className='w-100 tc mt4'>
        <LazyLoadImage
          alt={'Chapter 1 sixth paragraph'}
          effect="opacity"
          threshold={150}
          src={isMobileWithTablet ? mobileContent5 : content5}
          width='100%'
        />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          Are you curious to explore the dreams by year and language? We’ve
          designed a dream explorer!{' '}
        </p>
      </div>

      <div className='w-100 tc pb4 flex items-center flex-column'>
        <div
          className='flex flex-column items-center ph4 pv3'
          style={{ marginBottom: '50px' }}
        >
          <div
            className='raleway explore-text'
            onClick={() => changeSection('explore')}>EXPLORE CHAPTER 1</div>
          <div
            className='explore-icon'
            onClick={() => changeSection('explore')}
          >
            <div className='explore-icon-circle'></div>
            <img
              className='explore-icon-base svg-hover'
              src={startExpl}
              width={36}
            />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Content1;
