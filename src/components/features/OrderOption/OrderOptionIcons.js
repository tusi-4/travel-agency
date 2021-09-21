import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon.js';
import {formatPrice} from '../../../utils/formatPrice.js';

const OrderOptionIcons = ({values, required, setOptionValue, currentValue}) => (
  <div className={styles.component}>
    {required ? false : (
      <div
        className={styles.icon}
        onClick={() => setOptionValue('')}
      >
        <Icon name='times-circle' />
        <span>none</span>
      </div>
    )}
    {values.map(value => (
      <div
        className={currentValue == value.id ? styles.iconActive : styles.icon}
        key={value.id}
        onClick={value => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;