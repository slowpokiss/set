import Team from '../src/index';

test('Set contains expected value', () => {
  const team = new Team();
  team.add('value1');
  expect(team.members).toContain('value1');
});

test('Error to expected value', () => {
  expect(() => {
    const team = new Team();
    team.add(1);
    team.add(1);
  }).toThrow('персонаж уже есть в команде');
});

test('Set contains expected values', () => {
  const team = new Team();
  team.addAll('value1', 'value2', 'value3');
  team.toArray();
  const result = team.toArray();
  expect(result).toStrictEqual(['value1', 'value2', 'value3']);
});
