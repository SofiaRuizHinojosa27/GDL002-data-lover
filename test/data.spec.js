require('../src/data.js');
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
