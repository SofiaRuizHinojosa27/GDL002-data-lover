require('../src/data.js');

const injuries = require('../src/data/injuries/injuries.json');


describe('accidenteMoto', () => {
  it('should be an array', () => {
    expect(typeof injuries).toBe('array');
  });

//  it('returns `example`', () => {
 //   expect(example()).toBe('example');
  //});//
//});//
