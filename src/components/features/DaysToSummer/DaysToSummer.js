import React from 'react';
import PropTypes from 'prop-types';

class DaysToSummer extends React.Component {
  constructor(){
    super();

    // tu chcę, żeby się mieliło co dobę
    setInterval(() => {
      this.forceUpdate();
    }, 1000 * 60 * 60 * 24
    );
  }
  
  static propTypes = {
    daysInfo: PropTypes.string,
    oneDayInfo: PropTypes.string,
  }

  static defaultProps = {
    daysInfo: ' days to summer!',
    oneDayInfo: ' day to summer!',
  }

  // tu dopasowuję info do daty
  getInfo(){
    const currentTime = new Date();
    const month = new Date(Date.UTC(currentTime.getUTCMonth()));
    const day = new Date(Date.UTC(currentTime.getUTCDate()));
    const dateCode = (month + 1) + day;

    if(dateCode >= 621 && dateCode <= 923){
      return null; // lato, więc nic się nie pojawia, a najlepiej jak wykminię, żeby cały div się nie renderował
    } else if(dateCode == 620){
      return this.props.oneDayInfo; // jeden dzień do lata
    } else{
      return this.props.daysInfo; // nie-lato
    }
  }

  // tu odliczam dni
  getCountdown(){
    // błyskotliwa funkcja, na którą jeszcze nie mogę wpaść
  }
  
  // tu sobie renderuję
  render(){
    const info = this.getInfo();
    const countdown = this.getCountdown();
    return(
      <div className='component'>
        <div className='summerInfo'>
          {/*tu będę miała wynik obliczania i stosowne info jeśli kiedykolwiek wymyślę obliczanie i jak to połączyć */}
          {countdown}{info}
        </div>
      </div>
    );
  }
}

export default DaysToSummer;