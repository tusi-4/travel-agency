import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedAddress = '/trip/abc';
    const expectedId = 'abc';
    const link = shallow(<TripSummary id={expectedId} image={''} name={''} cost={''} days={123} tags={[]} />);
    const renderedAddress = link.find('.link').prop('to');
    expect(renderedAddress).toEqual(expectedAddress);
  });

  it('should render correct image', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'Lorem';
    const image = shallow(<TripSummary id={''} image={expectedSrc} name={expectedAlt} cost={''} days={123} tags={[]} />);
    expect(image.find('img').prop('src', 'alt')).toEqual(expectedSrc, expectedAlt);
  });

  it('should render props correctly', () => {
    const component = shallow(<TripSummary id={''} image={''} name='Drama' cost='Ramad' days={123} tags={[]} />);
    expect(component).toBeTruthy();
  });

  it('should throw error when a prop is missing', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should contain a tags array', () => {
    const component = shallow(<TripSummary image={''} name={''} cost={''} days={123} tags={['ene', 'due', 'rike']} />);
    expect(component.find('.tag').at(0).text()).toEqual('ene');
    expect(component.find('.tag').at(1).text()).toEqual('due');
    expect(component.find('.tag').at(2).text()).toEqual('rike');
  });
  
  it('should not render div if tags prop is false', () => {
    const tagsDiv = shallow(<TripSummary image={''} name={''} cost={''} days={123} tags={[]} />);
    expect(tagsDiv.find('.tag').exists()).toEqual(false);
  });
});