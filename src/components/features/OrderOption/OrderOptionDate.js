import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div className={styles.component}> 
    <DatePicker 
      selected={currentValue}
      onChange={setOptionValue}
    />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.node, // jakim jestes typem babe bo nawet konsola nie wie?
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;