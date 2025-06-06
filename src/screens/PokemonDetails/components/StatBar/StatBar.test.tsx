import React from 'react';
import renderer from 'react-test-renderer';
import { StatBar } from './StatBar.component';

describe('StatBar', () => {
  it('renders the bar with correct width and color', () => {
    const tree = renderer.create(<StatBar value={100} color="#4CAF50" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
}); 