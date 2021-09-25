import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedAddress = '/trip/abc';
    const expectedId = 'abc';
    const link = shallow(<TripSummary id={expectedId} />);
    const renderedAddress = link.find('.link').prop('to');
    expect(renderedAddress).toEqual(expectedAddress);
  });

  it('should render correct image', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'Lorem';
    const image = shallow(<TripSummary image={expectedSrc} name={expectedAlt} />);
    expect(image.find('.image').prop('src', 'alt')).toEqual(expectedSrc, expectedAlt);
  });

  it('should render props correctly', () => {
    const component = shallow(<TripSummary name='Drama' cost='Ramad' days='Amadr' />);
    expect(component).toBeTruthy();
  });

  it('should throw error when a prop is missing', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});