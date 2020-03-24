import React from 'react';
import { shallow } from 'enzyme';
import Footer from './';

describe('<Footer>', () => {
  it('it renders the expected tree', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })
})
