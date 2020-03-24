import React from 'react';
import { shallow } from 'enzyme';
import Layout from './';

describe('<Layout>', () => {
  it('it renders the expected tree', () => {
    const wrapper = shallow(<Layout />)
    expect(wrapper).toMatchSnapshot()
  })
})
