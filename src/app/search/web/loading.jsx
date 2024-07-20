import React from 'react';
import './style.css';

export default function loading() {
  return (
    <>
      <div className='loader-one'>
        <div className='sub-loader'></div>
        <div className='sub-loader-one'></div>
        <div className='sub-loader-two'></div>
        <div className='sub-loader-three'></div>
      </div>

      <div className='loader-one'>
        <div className='sub-loader'></div>
        <div className='sub-loader-one'></div>
        <div className='sub-loader-two'></div>
        <div className='sub-loader-three'></div>
      </div>

      <div className='loader-one'>
        <div className='sub-loader'></div>
        <div className='sub-loader-one'></div>
        <div className='sub-loader-two'></div>
        <div className='sub-loader-three'></div>
      </div>
    </>
  );
};

