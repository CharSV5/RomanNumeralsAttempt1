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

test('turns 4 to IV', () => {
    expect(kata.translate(4)).toBe('IV')
});

test('turns 9 to IX', () => {
    expect(kata.translate(9)).toBe('IX')
});

test('turns 17 to XVII', () => {
    expect(kata.translate(17)).toBe('XVII')
});

test('turns 44 to XLIV', () => {
    expect(kata.translate(44)).toBe('XLIV')
});

test('turns 132 to CXXXII', () => {
    expect(kata.translate(132)).toBe('CXXXII')
});

test('turns 490 to CDXC', () => {
    expect(kata.translate(490)).toBe('CDXC')
});

test('turns 1554 to MDLIV', () => {
    expect(kata.translate(1554)).toBe('MDLIV')
});

test('turns 2999 to MMCMXCIX', () => {
    expect(kata.translate(2999)).toBe('MMCMXCIX')
});




