import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { scaleTime, scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { Animate } from 'react-move';
import { easeQuadOut } from 'd3-ease';
import { AreaClosed, LinePath } from '@vx/shape';
import { curveMonotoneX } from '@vx/curve';
import { AxisBottom } from '@vx/axis';
import { Group } from '@vx/group';
import { isMobileWithTablet } from '../constants';

import './Trend.scss';

const x = d => {
  return moment(d.time);
};
const y = d => {
  return d.value
};

const Trend = ({ data, toggleNote, activateNote, deactivateNote, id, activeIndex }) => {
  const [show, setShow] = useState(false);
  const [pathLength, setPathLength] = useState(4400);
  useEffect(() => {
    let peak = data[0].hasPeak || false
    let peakData = data.find(d => d.peak)
    const note = peakData ? peakData.note : null
    if (peak) {
      activateNote(note)
    } else {
      deactivateNote()
    }
  }, [data])

  useEffect(() => {
    setShow(false)
    setTimeout(() => {
      setShow(true)
    }, 500)
  }, [id])

  useEffect(() => {
    setShow(false)
    setTimeout(() => {
      setShow(true)
    }, 1000)
  }, [activeIndex])

  const svgWidth = isMobileWithTablet ? window.innerWidth * 0.8 : window.innerWidth * 0.75;
  const svgHeight = isMobileWithTablet ? window.innerWidth * 0.6 : window.innerHeight * 0.5;
  const trendHeight = svgHeight - 30;
  const startDate = moment('2009-01-01');
  const endDate = moment('2019-12-01');

  const scaleX = scaleTime()
    .domain([startDate, endDate])
    .range([0, svgWidth - 40]);

  const max = extent(data, d => d.value)[1];

  const scaleY = scaleLinear()
    .domain([0, max])
    .range([0, trendHeight]);

  const scaleY2 = scaleLinear()
    .domain([max, 0])
    .range([0, trendHeight]);

  const parsedData = data.filter((d, i) => {
    if (i % 12 === 0) {
      return d;
    }
  });

  return (
    <div className='mt3'>
      <svg
        className='viz'
        x='0px'
        y='0px'
        width={svgWidth}
        height={svgHeight}
        style={{
          border: '0px solid rgba(0,0,0,0.2)',
          margin: 'auto'
        }}
      >
        <defs>
          <linearGradient
            id='trendGradient'
            x1='0%'
            y1='0%'
            x2='0%'
            y2='100%'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0%' stopColor='rgb(242,219,218)' stopOpacity='1' />
            <stop offset='70%' stopColor='rgb(255,246,245)' stopOpacity={0.5} />
            <stop offset='100%' stopColor='rgb(255,246,245)' stopOpacity={0} />
          </linearGradient>


        </defs>
        <g transform={`translate(16, 10)`}>
          {parsedData.map((d, i) => {
            const date = moment(d.time);
            const value = d.value;

            const startAnimation = trendHeight;

            return (
              <g key={i}>
                <Animate
                  show={show}
                  start={() => ({
                    y2: startAnimation
                  })}
                  enter={() => ({
                    y2: [trendHeight - scaleY(value)],
                    timing: { duration: 1000, ease: easeQuadOut, delay: 500 }
                  })}
                  update={() => ({
                    y2: [trendHeight - scaleY(value)],
                    timing: { duration: 1000, ease: easeQuadOut, delay: 500 }
                  })}
                  leave={() => ({
                    y2: [0],
                    timing: { duration: 0 }
                  })}
                >
                  {state => {
                    const { y2 } = state;
                    return (
                      <line
                        id={`line-${i}`}
                        x1={scaleX(date)}
                        y1={trendHeight}
                        x2={scaleX(date)}
                        y2={y2}
                        stroke={'#8d4538'}
                        strokeWidth={0.5}
                        strokeDasharray='4 2'
                      />
                    );
                  }}
                </Animate>
              </g>
            );
          })}
        </g>
        <g transform={`translate(16, 10)`}>
          <Animate
            show={show}
            start={() => ({
              j: 0,
              timing: { duration: 300, ease: easeQuadOut }
            })}
            enter={() => ({
              j: [1],
              timing: { duration: 1000, ease: easeQuadOut, delay: 500 }
            })}
            update={() => ({
              j: [1],
              timing: { duration: 1000, ease: easeQuadOut, delay: 500 }
            })}
            leave={() => ({
              j: [0],
              timing: { duration: 0 }
            })}
          >
            {state => {
              const { j } = state;
              return (
                <AreaClosed
                  data={data}
                  x={d => scaleX(x(d))}
                  y={d => scaleY2(y(d))}
                  y0={svgHeight - 30}
                  yScale={scaleY2}
                  fill={'url(#trendGradient)'}
                  fillOpacity={j}
                  strokeWidth={0}
                  curve={curveMonotoneX}
                // strokeDasharray={5000}
                // strokeDashoffset={j}
                />
              );
            }}
          </Animate>
        </g>
        <g transform={`translate(16, 10)`}>
          <Animate
            show={show}
            start={() => ({
              j: pathLength,
              o: 0,
            })}
            enter={() => ({
              j: [0],
              o: [1],
              timing: { duration: 1400, delay: 0, ease: easeQuadOut }
            })}
            update={() => ({
              j: [0],
              o: [1],
              timing: { duration: 1400, ease: easeQuadOut }
            })}
            leave={() => ({
              j: [pathLength],
              o: [0],
              timing: { duration: 0 }
            })}
          >
            {state => {
              const { j, o } = state;
              return (
                <LinePath
                  data={data}
                  innerRef={(node) => {
                    if (node) {
                      setPathLength(node.getTotalLength())
                    }
                  }}
                  x={d => scaleX(x(d))}
                  y={d => scaleY2(y(d))}
                  stroke={'#b36762'}
                  strokeWidth={isMobileWithTablet ? 0.5 : 1}
                  curve={curveMonotoneX}
                  strokeDasharray={pathLength}
                  strokeDashoffset={j}
                  opacity={o}
                />
              );
            }}
          </Animate>
        </g>
        {
          <g transform={`translate(16, 15)`}>
            {data.map((d, i) => {
              const date = moment(d.time);
              const value = d.value;

              if (d.peak) {
                return (
                  <g key={i} onClick={() => toggleNote(d.note)}>
                    <circle
                      id={`circle-${i}`}
                      cx={scaleX(date)}
                      cy={trendHeight - scaleY(value)}
                      fill={'#43449a'}
                      r={4}
                    />
                    <circle
                      id={`circle-${i}`}
                      cx={scaleX(date)}
                      cy={trendHeight - scaleY(value)}
                      stroke={'#43449a'}
                      fill={'transparent'}
                      r={10}
                    />
                    <text
                      dx={isMobileWithTablet ? scaleX(date) + 20 : scaleX(date) - 20}
                      dy={trendHeight - scaleY(value) + 2}
                      textAnchor={isMobileWithTablet ? 'start' : 'end'}
                    >
                      {date.format('MMMM YYYY')}
                    </text>
                  </g>
                );
              }
            })}
          </g>
        }

        <g transform={`translate(21, 8)`}>
          <AxisBottom
            top={trendHeight - 10}
            left={0}
            scale={scaleX}
            numTicks={isMobileWithTablet ? 4 : 8}
            label='Time'
          >
            {axis => {
              const tickLabelSize = 14;
              const tickRotate = 0;
              const tickColor = '#000';
              const axisCenter =
                (axis.axisToPoint.x - axis.axisFromPoint.x) / 2;
              return (
                <g className='my-custom-bottom-axis'>
                  {axis.ticks.map((tick, i) => {
                    const tickX = tick.to.x;
                    const tickY = tick.to.y + tickLabelSize + axis.tickLength;
                    return (
                      <Group
                        key={`vx-tick-${tick.value}-${i}`}
                        className={'vx-axis-tick'}
                      >
                        <text
                          transform={`translate(${tickX}, ${tickY}) rotate(${tickRotate})`}
                          fontSize={tickLabelSize}
                          textAnchor='middle'
                          fill={tickColor}
                        >
                          {tick.formattedValue}
                        </text>
                      </Group>
                    );
                  })}
                </g>
              );
            }}
          </AxisBottom>
        </g>
      </svg>
    </div>
  );
};

export default Trend;
