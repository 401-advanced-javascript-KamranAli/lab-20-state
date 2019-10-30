import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from '../containers/RandomColor';

describe('Random Color', () => {
  it('Randomly picks a color to display', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <ColorDisplay
          backgroundColor=""
        />
      </Fragment>
    `);
  });
});
