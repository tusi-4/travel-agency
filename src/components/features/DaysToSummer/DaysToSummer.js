import React from 'react';
//import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';

class DaysToSummer extends React.Component {
  static propTypes = {
    summerInfo: PropTypes.string,
  }

  static defaultProps = {
    summerInfo: ' days to summer!',
  }
  
  render() {
    return(
      <div className='component'>
        <div className='summerInfo'>{this.props.summerInfo}</div>
      </div>
    );
  }
}

export default DaysToSummer;

