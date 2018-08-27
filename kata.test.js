const kata = require('./kata');

test('turns 1 to I', () => {
    expect(kata.translate(1)).toBe('I')
})