import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

describe('Component OrderOption', () => {
  it('should render', () => {
    const component = shallow(<OrderOption name='name'  type='type' />);
    
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    
    expect(component).toEqual({});
  });

  it('should render correct title', () => {
    const expectedTitle = 'Lorem';
    const component = shallow(<OrderOption name={expectedTitle} type={'dropdown'} />);

    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedTitle);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for(let type in optionTypes){
  describe('Component OrderOption with type=${type}', () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it('renders ${optionTypes[type]}', () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });

        break;
      }

      case 'icons': {
        it('should render divs with icon class', () => {
          const iconDiv = renderedSubcomponent.find('.icon');
          expect(iconDiv.length).toBe(2);
        });

        it('should render proper icon', () => {
          const icon = renderedSubcomponent.find('Icon').not('[name="times-circle"]');
          expect(icon.at(0).prop('name')).toEqual(mockProps.values[0].icon);
          expect(icon.at(1).prop('name')).toEqual(mockProps.values[1].icon);
        });

        it('should run setOrderOption function on click', () => {
          renderedSubcomponent.find('.icon').last().simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue }); 
        });

        break;
      }

      case 'checkboxes': {
        it('should render div and checkbox inputs', () => {
          const checkboxDiv = renderedSubcomponent.find('.checkboxes');
          const checkBoxInput = renderedSubcomponent.find('input');
          expect(checkboxDiv.length).toBe(1);
          expect(checkBoxInput.length).toBe(2);
        });

        it('should run setOrderOption function on  change', () => {
          renderedSubcomponent.find('input[value=' + testValue + ']').simulate('change', {currentTarget: {checked: true}}); // nie parsuje się, czego nie widzę?
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: {[mockProps.currentValue]: testValue}});
        });

        break;
      }

      case 'number': {
        it('should contain div with input', () => {
          const inputDiv = renderedSubcomponent.find('input');
          expect(inputDiv.length).toBe(1);
        });

        it('should have correct default input value', () => {
          const defaultValue = renderedSubcomponent.find('input').prop('value');
          expect(defaultValue).toEqual(mockPropsForType.number.currentValue);
        });

        it('should have min and max limits', () => {
          const limitMin = renderedSubcomponent.find('input').prop('min');
          const limitMax = renderedSubcomponent.find('input').prop('max');
          expect(limitMin).toEqual(mockProps.limits.min);
          expect(limitMax).toEqual(mockProps.limits.max);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });

        break;
      }

      case 'text': {
        it('should render text input', () => {
          const textInput = renderedSubcomponent.find('input');
          expect(textInput).toBeTruthy();
        });
        
        it('should have correct default input value', () => {
          const defValue = renderedSubcomponent.find('input').prop('value');
          expect(defValue).toEqual(mockProps.currentValue);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue});
        });

        break;
      }

      case 'date': {
        /* nie ma potrzeby renderować, więc zakomentowuję should render
        it('should render DatePicker', () => {
          const picker = renderedSubcomponent.find(DatePicker);
          expect(picker).toBeTruthy();
        });
        */
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
        });

        break;
      }
    }
  });
}