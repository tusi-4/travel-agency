import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';
import {formatTime} from '../../../utils/formatTime';

class HappyHourAd extends React.Component {
  constructor(){
    super();

    setInterval(() => {
      this.forceUpdate();
    }, 1000
    );
  }
  
  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  }

  static defaultProps = {
    title: 'HAPPY HOUR',
    promoDescription: 'Super funky blabla!',
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
    const countdownTime = this.getCountdownTime();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <div className={styles.promoDescription}>{(countdownTime > 23 * 60 * 60) ? this.props.promoDescription : formatTime(countdownTime)}</div>
      </div>
    );
  }
}

export default HappyHourAd;