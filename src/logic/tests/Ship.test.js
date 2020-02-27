import Ship from '../Ship.js';

describe('ship', () => {
  let ship;
  beforeEach(() => {
    ship = Ship(0, 4, 'horizontal');
  })

  it('has an id', () => {
    expect(ship.id).toBe(0);
  })

  it('has a length', () => {
    expect(ship.length).toBe(4);
  })

  it('has a direction', () => {
    expect(ship.direction).toBe('horizontal');
  })

  it('records a hit', () => {
    ship.hit(0);
    expect(ship.positions[0]).not.toBe(null);
  })

  it('isSunk returns false when not sunk', () => {
    ship.hit(2);
    expect(ship.isSunk()).toBe(false);
  })

  it('isSunk returns true when all spots hit', () => {
    for (let i = 0; i < 4; i++) {
      ship.hit(i);
    }
    expect(ship.isSunk()).toBe(true);
  })
})
