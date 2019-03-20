import React, { useState } from 'react';
import Swipe from 'react-easy-swipe';
import { groupBy } from 'lodash';
import Petals from '../Petals';
import topics from '../data/topics.json';
import '../Explore.scss';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';

const Explore2 = ({ history }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  const onSwipeRight = () => {
    const newIndex =
      selectedIndex < selectedTopics[0].length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
  };

  const onSwipeLeft = () => {
    const newIndex =
      selectedIndex > 0 ? selectedIndex - 1 : selectedTopics[0].length - 1;
    setSelectedIndex(newIndex);
  };

  const onSelectLanguage = index => {
    setSelectedIndex(0);
    setSelectedLanguageIndex(index);
  };

  const onSelectYear = index => {
    setSelectedIndex(0);
    setSelectedYearIndex(index);
  };

  const goToChapter1 = () => {
    history.push(`/chapter1`);
  };

  const groupedByCountry = groupBy(topics, 'language');
  const groupedByCountryValues = Object.values(groupedByCountry);
  const groupedByCountryKeys = Object.keys(groupedByCountry);
  const years = [
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018
  ];

  const groupedByYearAndCountry = groupedByCountryValues.map(values => {
    return Object.values(groupBy(values, 'year'));
  });

  const languageIndex = groupedByCountryKeys[selectedLanguageIndex];

  const selectedTopicsByLanguage =
    groupedByYearAndCountry[selectedLanguageIndex] || [];

  const selectedTopics = selectedTopicsByLanguage.filter(v => {
    return v[0].year === years[selectedYearIndex];
  });

  const topic = (selectedTopics[0] && selectedTopics[0][selectedIndex]) || {};

  return (
    <div className='explore1'>
      <div className='w-100 flex flex-column justify-center pa2 relative'>
        <LanguageSelector
          languages={groupedByCountryKeys}
          onSelect={onSelectLanguage}
          selected={selectedLanguageIndex}
        />
        <YearsSelector
          years={years}
          onSelect={onSelectYear}
          selected={selectedYearIndex}
        />
        <div className='left-tap' onClick={() => onSwipeLeft()} />

        {topic.value ? (
          <Petals
            value={topic.value}
            name={topic.subject}
            language={topic.language}
            year={topic.year}
            index={selectedIndex}
          />
        ) : (
          <div
            className='w-100 flex justify-center items-center pa4'
            style={{ flex: 1, height: '400px' }}
          >
            NO DATA AVAILABLE
          </div>
        )}
        <div className='right-tap' onClick={() => onSwipeRight()} />
        <div
          className='w-100 flex justify-center items-center pa4'
          onClick={() => goToChapter1()}
          style={{ flex: 1 }}
        >
          <div className=''>READ CHAPTER 1</div>
        </div>
      </div>
    </div>
  );
};

export default Explore2;