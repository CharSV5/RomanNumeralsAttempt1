const kata = require('./kata');

test('turns 1 to I', () => {
    expect(kata.translate(1)).toBe('I')
});

test('turns 2 to II', () => {
    expect(kata.translate(2)).toBe('II')
});

test('turns 3 to III', () => {
    expect(kata.translate(3)).toBe('III')
});

test('turns 5 to V', () => {
    expect(kata.translate(5)).toBe('V')
});

test('turns 6 to VI', () => {
    expect(kata.translate(6)).toBe('VI')
});

test('turns 10 to X', () => {
    expect(kata.translate(10)).toBe('X')
});

test('turns 20 to XX', () => {
    expect(kata.translate(20)).toBe('XX')
});