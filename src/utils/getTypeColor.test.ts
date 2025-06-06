import { getTypeColor } from './getTypeColor';
import { colors } from './colors';

describe('getTypeColor', () => {
  it('returns the correct color for known types', () => {
    expect(getTypeColor('fire')).toBe(colors.fire);
    expect(getTypeColor('water')).toBe(colors.water);
    expect(getTypeColor('electric')).toBe(colors.electric);
    expect(getTypeColor('grass')).toBe(colors.grass);
    expect(getTypeColor('fairy')).toBe(colors.fairy);
  });

  it('returns the default color for an unknown type', () => {
    expect(getTypeColor('unknownType')).toBe('#A8A878');
  });

  it('returns the default color for a falsy value', () => {
    expect(getTypeColor('')).toBe('#A8A878');
    // @ts-expect-error: testing undefined input
    expect(getTypeColor(undefined)).toBe('#A8A878');
    // @ts-expect-error: testing null input
    expect(getTypeColor(null)).toBe('#A8A878');
  });
});
