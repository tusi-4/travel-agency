import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice.js';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import settings from '../../../data/settings.js';

const sendOrder = (options, tripCost, tripId, tripName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    countryCode,
  };

  if (options.name === '' || options.contact === '') {
    alert('Please fill the form correctly');
    return;
  }

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, options, setOrderOption, id, tripId, tripName, countryCode}) => (
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
      <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, countryCode)}>Order now!</Button>
    </Col>
  </Row>
  
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  id: PropTypes.object,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;