import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('UI test #home', () => {
  it('shoule have title', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
