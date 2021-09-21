import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({tripCost, options, setOrderOption, id}) => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption
          {...option} 
          currentValue={options[option.id]}
          setOrderOption={setOrderOption}
          setOptionValue={value => setOrderOption({[id]: value})}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} tripOptions={options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  id: PropTypes.object,
};

export default OrderForm;