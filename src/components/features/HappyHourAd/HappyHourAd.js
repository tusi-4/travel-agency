import React from 'react';
// import styles from './HappyHourAd.scss';
// import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  constructor(){
    super();

    setInterval(() => {
      this.forceUpdate();
    }, 1000
    );
  }
  
  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
    
    return  Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }
  // jeśli ktoś to sobie samodzielnie napisał, to szanuję
  
  render() {
    return (
      <div>
        <h3 className='title' title='Title'></h3>
        <div className='promoDescription'>{this.getCountdownTime()}</div>
      </div>
    );
  }
}

/* komponent ma być klasowy
const HappyHourAd = () => {

};
*/

export default HappyHourAd;