function sum(a: number, b: number): number {
  return a + b;
}

test('soma de 1 + 2 deve ser 3', () => {
  expect(sum(1, 2)).toBe(3);
});