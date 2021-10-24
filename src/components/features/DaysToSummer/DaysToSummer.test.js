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

const today = Date; // jeszcze nie wiem gdzie użyć
//mockuję miesiąc
const mockMonth = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getMonth();
  }
};
// mockuję dzień
const mockDay = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getDate();
  }
};

// ZACZYNA SIĘ BEZSENS (KIERUNEK MYŚLENIA JEST OD DOŁU DO GÓRY)
// funkcja biorąca dateCode, który powstaje z połączenia mockowanych miesiąca i dnia i oczekiwanego info
const checkInfoAtDate= (dateCode, expectedInfo) => {
  // przygotowuję dateCode
  const dateCode = (mockMonth(`${month}`) + 1) + '' + mockDay(`${day}`);
  // tu sama nie wiem co chcę
  const component = shallow(<DaysToSummer />);
  const renderedDateCode = compo
};

// a tu już pięknie wszystko czeka na mielenie
describe('Component DaysToSummer with mockedDate and summer Info', () => {
  checkInfoAtDate(101, '171 days to summer!');
  checkInfoAtDate(517, '35 days to summer!');
  checkInfoAtDate(620, '1 day to summer!');
  checkInfoAtDate(621, ''); // a może raczej tu powinien być null zamiast ''?
  checkInfoAtDate(923, '');
  checkInfoAtDate(1024, '240 days to summer!');
  checkInfoAtDate(1231, '172 days to summer!');
});
// PS. Tak, z jakiegoś powodu chcę wszędzie wpychać dateCode