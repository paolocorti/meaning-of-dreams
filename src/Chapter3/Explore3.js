import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import interestOverTime from '../data/interestOverTime.json';
import '../Explore.scss';
import howtoread3 from './cap3-leg-desk.svg';
import howtoreadMobile3 from './cap3-leg-mob.svg';
import Trend from '../Trend';
import categories from '../data/categories.json';
import { years } from '../constants';
import TopicSelector from '../components/TopicSelector.js';
import { isMobile } from 'react-device-detect';
import NavigationBar from '../components/NavigationBar';

const Explore3 = ({ history, activeIndex }) => {
  // const yearData = interestOverTime.filter(d =>
  //   d.formattedTime.includes('2018')
  // );
  const [howToRead, setHowToRead] = useState(false);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [note, setNote] = useState(null);

  const toggleNote = text => {
    if (note) {
      setNote(null);
    } else {
      setNote(text);
    }
  };

  const toggleHowToRead = () => {
    setHowToRead(!howToRead);
  };


  const activateNote = text => {
    setNote(text);
  }

  const deactivateNote = text => {
    setNote(null);
  }

  const onSelectYear = index => {
    setSelectedYearIndex(index);
  };

  const groupedByCountry = values(groupBy(categories, 'language'));
  const groupedByCountryKeys = Object.keys(groupBy(categories, 'language'));
  const groupedByYearAndCountry = groupedByCountry.map(val => {
    return values(groupBy(val, 'year'));
  });
  const selectedCategories =
    groupedByYearAndCountry[selectedLanguageIndex][selectedYearIndex];

  const topics = interestOverTime.map(v => v[0].topic);

  const upIndex = () => {
    const newIndex = selectedIndex > 1 ? selectedIndex - 1 : 0
    setSelectedIndex(newIndex)
  }

  const downIndex = () => {
    const newIndex = selectedIndex < topics.length - 1 ? selectedIndex + 1 : topics.length - 1
    setSelectedIndex(newIndex)
  }

  return (
    <div className='explore3' style={{ paddingTop: isMobile ? 0 : 60 }}>
      {
        !isMobile && (
          <NavigationBar history={history} activeIndex={activeIndex} />
        )
      }
      {
        !isMobile && activeIndex === 3 && (
          <div className='noteBox ph4' style={{ right: note ? '0px' : '-12.5%', transition: '.5s right' }}>
            {/* <div className='noteBox-close' style={{ cursor: 'pointer' }} onClick={() => toggleNote('')}>
              <img
                src={'/images/close-white.svg'}
                alt='Close menu icon'
                width={20}
              />
            </div> */}
            {note}
          </div>
        )
      }
      <div className='w-100 h-100 flex flex-column justify-center items-center relative'>
        <div
          className='w-100 fixed'
          style={{
            zIndex: howToRead ? 200 : -1,
            background: 'linear-gradient(#efe2e1, #ebf5f5)',
            top: howToRead ? (isMobile ? 0 : 50) : '-100%',
            height: 'calc(100vh - 50px)',
            display: howToRead ? 'block' : 'none',
          }}
        >
          <div style={{
            backgroundImage: `url(${isMobile ? howtoreadMobile3 : howtoread3})`,
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
            height: 'calc(100% - 40px)',
            marginTop: '40px'
          }}>
          </div>

          <div className='read-close' onClick={() => toggleHowToRead()}>
            <img className='pointer' src={'/images/close.svg'} alt='Close menu icon' width={30} />
          </div>
        </div>
        <div
          className='w-100 ph4 flex flex-column justify-center items-center ios-fix'
          style={{ height: '125px' }}
        >
          {/* <h4 className='tl fw6 mv0'>Chapter 3</h4> */}
          <h1 className='tc fw5 mv0' style={{ fontSize: '21px' }}>
            Dreams’ subjects: interest over time
          </h1>
          {
            isMobile ?
              (
                <TopicSelector topics={topics} onSwipe={setSelectedIndex} />

              ) : (
                <div style={{ width: '340px', display: 'flex', alignItems: 'center' }}>
                  <img className='pointer mt3' onClick={upIndex} src={'/images/arrow-up.svg'} style={{ height: 40, opacity: selectedIndex > 0 ? 1 : 0, pointerEvents: selectedIndex > 0 ? 1 : 0, cursor: selectedIndex > 0 ? 'pointer' : 'default' }} />
                  <TopicSelector topics={topics} onSwipe={setSelectedIndex} selectedIndex={selectedIndex} />
                  <img className='pointer mt3' onClick={downIndex} src={'/images/arrow-down.svg'} style={{ height: 40, opacity: selectedIndex < topics.length - 1 ? 1 : 0, pointerEvents: selectedIndex < topics.length - 1 ? 1 : 0, cursor: selectedIndex < topics.length - 1 ? 'pointer' : 'default' }} />
                </div>
              )
          }
        </div>
        <div
          className='w-100 flex flex-column relative tc ios-fix'
          style={{ height: 'calc(100% - 125px)' }}
        >
          <div
            className='flex flex-column justify-center items-center'
            style={{ height: '70%', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '0 auto' }}
          >
            <Trend
              data={interestOverTime[selectedIndex]}
              toggleNote={setNote}
              noteActive={note}
              activateNote={activateNote}
              deactivateNote={deactivateNote}
            />
          </div>
          <div
            className='flex flex-column relative justify-start items-center ph4 mt2'
            style={{ height: '30%', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '45px auto' }}
          >
            <div
              className='tc raleway mt2'
              style={{ fontSize: isMobile ? '11px' : '16px', lineHeight: isMobile ? '13px' : '20px' }}
            >
              Click on the arrows or use the keyboard arrows to change the dream.
            </div>
            <div
              className='raleway mt3 fw7 pointer'
              style={{
                fontSize: '14px',
                color: '#43449a',
                letterSpacing: '1px'
              }}
              onClick={toggleHowToRead}
            >
              HOW TO READ IT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore3;
