import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, setOptionValue, currentValue}) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value.id}>
        <input
          type='checkbox'
          value={value.id}
          // checked, ktore bedzie prawdziwe, jesli to id znajduje sie w tablicy currentValue
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        />
        {value.name} ({value.price})
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.array,
};

export default OrderOptionCheckboxes;