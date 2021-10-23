import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  summerInfo: '.summerInfo',
};

/*
const mockProps = {
  daysInfo: 'days',
  oneDayInfo: 'day',
};
*/

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render info div', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.summerInfo)).toEqual(true);
  });
});

// SERIA BŁYSKOTLIWYCH TESTÓW, KTÓRE POWINNY POJAWIĆ SIĘ PRZED KODEM, NO TRUDNO.

/* do remontu
const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args){
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkInfoAtDate = (date, expectedInfo) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedDate = component.find(select.summerInfo).text();
    expect(renderedDate).toEqual(expectedInfo);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkInfoAtDate('19-06', mockProps.daysInfo);
  checkInfoAtDate('20-06', mockProps.oneDayInfo);
  checkInfoAtDate('24-09', mockProps.daysInfo);
});
*/