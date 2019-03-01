require('../src/data.js');
<<<<<<< HEAD
const INJURIES= require(../src/injuries/injuries.json);

describe('INJURIES', () => {
  it('should be an object', () => {
    expect(typeof INJURIES).toBe('object');
});
});

describe('function yearAccident', () = > {
  it('should return yearAccident 1960', () =>{
    expect(window.datalover.yearAccident(INJURIES)[0]).toEqual({"Automovil":"sin datos", "Bicicleta":"sin datos", })
  })
})

//  it('returns `example`', () => {
 //   expect(example()).toBe('example');
  //});//
//});//
=======
const INJURIES= require('../src/data/injuries/injuries.json');

describe('injuries', () => {
  it('should be an object', () => {
    expect(typeof INJURIES).toBe('object');
  });
  });

describe('function yearAccident', () => {
  it('should return yearAccident 1960', () => {
    expect(window.datalover.yearAccident(INJURIES)[0]).toEqual({"Automovil": "sin datos", "Bicicleta": "sin datos", "Motocicleta": "sin datos", "Year": "1960"});
  });
  });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });
>>>>>>> 060841274206313939243f1e02284f73a59a0991
