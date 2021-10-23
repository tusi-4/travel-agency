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
  }

  getInfo(){
    const today = new Date();
    const month = today.getUTCMonth(); //no tak, to ma więcej sensu teraz
    const day = today.getUTCDate();
    const dateCode = (month + 1) + '' + day; // NO PRZECIEŻ NAMBERY, A NIE STRINGI!!! DŻIZAS!!! tylko czemu to działało w pierwszej wersji :D
    let daysLeft = '';

    if(dateCode >= 621 && dateCode <= 923){
      return null;
    } else if(dateCode == 620){
      return '1 day to summer!';
    } else if(dateCode < 620){
      const summer = new Date(today.getUTCFullYear(), 5, 21);
      daysLeft = Math.round(Math.abs((today.getTime() - summer.getTime()) / (1000 * 60 * 60 * 24)));
      return daysLeft + ' days to summer!';
    } else if(dateCode > 923){
      const summer = new Date(today.getUTCFullYear()+1, 5, 21);
      daysLeft = Math.round(Math.abs((today.getTime() - summer.getTime()) / (1000 * 60 * 60 * 24)));
      return daysLeft + ' days to summer!';
    }
  }

  render(){
    const info = this.getInfo();
    return(
      <div className={styles.component}>
        {info != null &&
          <div className={styles.summerInfo}>
            {info}
          </div>
        }
      </div>
    );
  }
}

export default DaysToSummer;