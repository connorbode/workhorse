var chai = require('chai');
var expect = chai.expect;
var Phase = require('./phase');
var PhaseSet = require('./phase-set');

describe('PhaseSet', () => {

  var phase_props,
      phase_2_props,
      phase,
      phase2,
      set;

  beforeEach(() => {
    phase_props = {
      name: 'test', 
      duration: 1000
    };
    phase_2_props = {
      name: 'test2',
      duration: 1000
    };
    phase = new Phase(phase_props);
    phase2 = new Phase(phase_2_props);
    set = new PhaseSet();
  });

  it('adds a phase', () => {
    set.add(phase);
    set.add(phase2);
    expect(set.length).to.equal(2);
    expect(set[0]).to.deep.equal(phase_props);
    expect(set[1]).to.deep.equal(phase_2_props);
  });

  it('removes a phase', () => {
    set.push(phase);
    set.push(phase2);
    set.remove(phase);
    expect(set.length).to.equal(1);
    expect(set[0]).to.deep.equal(phase_2_props);
  });
});