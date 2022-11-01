const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('counter test', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('names test', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('age average test', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('location test', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('popularity test', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('availability test', () => {
    expect(handlerElephants('availability')).toContain('Sunday');
  });
  it('empty parameter test', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('invalid parameter test', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('random value test', () => {
    expect(handlerElephants('random value')).toBeNull();
  });
});
