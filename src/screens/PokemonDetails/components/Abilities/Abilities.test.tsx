import React from 'react';
import renderer from 'react-test-renderer';
import { Abilities } from './Abilities.component';

describe('Abilities', () => {
  it('renders the section title and ability names', () => {
    const abilities = [
      { ability: { name: 'overgrow' } },
      { ability: { name: 'chlorophyll' } },
    ];
    const tree = renderer.create(<Abilities abilities={abilities} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
}); 