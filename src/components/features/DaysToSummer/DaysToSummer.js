import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';

class DaysToSummer extends React.Component {
  constructor(){
    super();

    setInterval(() => {
      this.forceUpdate();
    }, 1000 * 60 * 60 * 24
    );
  }

  static propTypes = {
    summerInfo: PropTypes.string,
    daysInfo: PropTypes.string,
    oneDayInfo: PropTypes.string,
  }

  static defaultProps = {
    daysInfo: ' days to summer!',
    oneDayInfo: ' day to summer!',
  }

  getCountdown(){
    const today = new Date();
    const summer = new Date(today.getUTCFullYear()+1, 5, 21);
    return Math.round(Math.abs((today.getTime() - summer.getTime()) / (1000 * 60 * 60 * 24)));
  }

  getInfo(){
    const today = new Date();
    const month = new Date(Date.UTC(today.getUTCMonth()));
    const day = new Date(Date.UTC(today.getUTCDate()));
    const dateCode = (month + 1) + day;

    if(dateCode >= 621 && dateCode <= 923){
      return null;
    } else if(dateCode == 620){
      return this.props.oneDayInfo;
    } else{
      return this.props.daysInfo;
    }
  }

  render(){
    const countdown = this.getCountdown();
    const info = this.getInfo();
    return(
      <div className={styles.component}>
        {info != null &&
          <div className={styles.summerInfo}>
            {countdown}
            {info}
          </div>
        }

      </div>
    );
  }
}

export default DaysToSummer;