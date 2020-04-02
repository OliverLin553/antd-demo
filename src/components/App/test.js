import React from 'react';
import { shallow } from 'enzyme';
import { App } from './';

describe('<App />', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      children: 'children',
      actions: {
        resources: {
          fetch: jest.fn(),
        }
      }
    };

    wrapper = shallow(<App {...props} />)
  });

  it('it renders the expected tree', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
