const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const open = 'The zoo is open';
  it('no parameter test', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Monday test', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Tuesday test', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(open);
  });
  it('Wednesday test', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe(open);
  });
  it('Thursday test', () => {
    expect(getOpeningHours('Thursday', '10:00-AM')).toBe(open);
  });
  it('Friday test', () => {
    expect(getOpeningHours('Friday', '10:00-AM')).toBe(open);
  });
  it('Saturday test', () => {
    expect(getOpeningHours('Saturday', '09:00-AM')).toBe(open);
  });
  it('Sunday test', () => {
    expect(getOpeningHours('Sunday', '09:00-AM')).toBe(open);
  });
});
