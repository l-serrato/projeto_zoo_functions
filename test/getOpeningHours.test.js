const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const open = 'The zoo is open';
  const closed = 'The zoo is closed';
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
  it('Tuesday test2', () => {
    expect(getOpeningHours('Tuesday', '07:00-PM')).toBe(closed);
  });
  it('Wednesday test', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe(open);
  });
  it('Wednesday test2', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closed);
  });
  it('Thursday test', () => {
    expect(getOpeningHours('Thursday', '10:00-AM')).toBe(open);
  });
  it('Thursday test2', () => {
    expect(getOpeningHours('Thursday', '10:00-PM')).toBe(closed);
  });
  it('Friday test', () => {
    expect(getOpeningHours('Friday', '10:00-AM')).toBe(open);
  });
  it('Friday test2', () => {
    expect(getOpeningHours('Friday', '10:00-PM')).toBe(closed);
  });
  it('Saturday test', () => {
    expect(getOpeningHours('Saturday', '09:00-AM')).toBe(open);
  });
  it('Saturday test2', () => {
    expect(getOpeningHours('Saturday', '11:00-PM')).toBe(closed);
  });
  it('Sunday test', () => {
    expect(getOpeningHours('Sunday', '09:00-AM')).toBe(open);
  });
  it('Sunday test2', () => {
    expect(getOpeningHours('Sunday', '09:00-PM')).toBe(closed);
  });
  it('Day test', () => {
    expect(getOpeningHours('Thu', '10:00-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('AM/PM test', () => {
    expect(getOpeningHours('Friday', '09:00-ZM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Saturday test', () => {
    expect(getOpeningHours('Saturday', 'C9:00-AM')).toThrow(new Error('The hour should represent a number'));
  });
  it('12 hours test', () => {
    expect(getOpeningHours('Saturday', '13:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('minutes test', () => {
    expect(getOpeningHours('Saturday', '09:60-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
});
