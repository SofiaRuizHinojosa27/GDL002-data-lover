require('../src/data.js');
require('../src/data/injuries/injuries.json');


describe('function yearAccident', () => {
  it('should be a function', () => {
    expect(window.datalover.yearAccident()).toBe("function");
  });
  });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });
