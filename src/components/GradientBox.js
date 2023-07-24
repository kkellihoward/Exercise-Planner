import React from 'react';
import './GradientBox.css'; // Create the corresponding CSS file

const GradientBox = () => {
  return (
  <>
    <div class="bg">
      <div className='text'>
        <h1 className='title'>Let's Get Active!</h1>
        <p className='subtext'>Find the perfect workout for you. Find, plan, save your workouts, and get inspired by Excercise Please today!
        </p>
      </div>
    <div class="mountain">
      <div class="mountain-top">
        <div class="mountain-cap-1"></div>
        <div class="mountain-cap-2"></div>
        <div class="mountain-cap-3"></div>
      </div>
    </div>
    <div class="mountain-two">
      <div class="mountain-top">
        <div class="mountain-cap-1"></div>
        <div class="mountain-cap-2"></div>
        <div class="mountain-cap-3"></div>
      </div>
    </div>
   <div class="mountain-three">
    <div class="mountain-top">
      <div class="mountain-cap-1"></div>
      <div class="mountain-cap-2"></div>
      <div class="mountain-cap-3"></div>
    </div>
  </div>
  <div class="cloud"></div>
</div>
</>
  );
};

export default GradientBox;