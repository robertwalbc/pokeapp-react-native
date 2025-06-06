import React from 'react';
import renderer from 'react-test-renderer';
import { Stats } from './Stats.component';

describe('Stats', () => {
  it('renders the section title and stat rows', () => {
    const stats = [
      { base_stat: 45, stat: { name: 'hp' } },
      { base_stat: 49, stat: { name: 'attack' } },
    ];
    const tree = renderer.create(<Stats stats={stats} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
}); 