import Ship from './Ship.js';

it('has a length', () => {
  const ship = Ship(0, 4, 'horizontal');
  expect(ship.length).toBe(4);
})

it('records a hit', () => {
  const ship = Ship(0, 4, 'horizontal');
  ship.hit(0);
  expect(ship.positions[0]).not.toBe(null);
})

it('isSunk returns false when not sunk', () => {
  const ship = Ship(0, 4, 'horizontal');
  ship.hit(2);
  expect(ship.isSunk()).toBe(false);
})

it('isSunk returns true when all spots hit', () => {
  const ship = Ship(0, 4, 'horizontal');
  for(let i = 0; i < 4; i++) {
    ship.hit(i);
  }
  expect(ship.isSunk()).toBe(true);
})