import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  summerInfo: '.summerInfo',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  // ten test to chyba lekkie oszustwo - omówić
  it('should render div if info is not null', () => {
    const component = shallow(<DaysToSummer />);
    const infoDiv = component.find(select.summerInfo);
    expect(infoDiv.exists()).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
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

    const component = shallow(<DaysToSummer />);
    const renderedDate = component.find(select.summerInfo).text();
    expect(renderedDate).toEqual(expectedInfo);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date and summer Info', () => {
  checkInfoAtDate('2021-09-24', '270 days to summer!');
  checkInfoAtDate('2021-12-31', '172 days to summer!');
  checkInfoAtDate('2022-01-02', '170 days to summer!');
  checkInfoAtDate('2022-05-17', '35 days to summer!');
  checkInfoAtDate('2022-06-20', '1 day to summer!');

});