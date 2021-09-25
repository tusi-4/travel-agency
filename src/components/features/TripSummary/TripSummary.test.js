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
});