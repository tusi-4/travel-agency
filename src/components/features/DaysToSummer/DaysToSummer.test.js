import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

/*
const select = {
  summerInfo: '.summerInfo',
};

const mockProps = {
  daysInfo: ' days',
  oneDayInfo: ' day',
};
*/

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  /*
  // tu chyba próbuję oszukiwać i napisać tak, żeby mi przeszło
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


const checkInfoAtCountdown = (days, expectedInfo) => {
  it(`should show correct info at ${days}`, () => {
    global.Date = mockDate(`${days}`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedInfo = component.find(select.summerInfo).text();
    expect(renderedInfo).toEqual(expectedInfo);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date and summer Info', () => {
  checkInfoAtCountdown(1, '1' + mockProps.oneDayInfo);
  checkInfoAtCountdown(2, '2' + mockProps.daysInfo);
  checkInfoAtCountdown(240, '240' + mockProps.daysInfo);
});
*/
});