const idx = require('./index');

test('encrypt', () => {
  console.log(idx.encrypt('test'));
  expect(idx.encrypt('test')).toBe('test');
})

test('decrypt', () => {
  console.log(idx.decrypt('test'));
  expect(idx.decrypt('test')).toBe('test');
})