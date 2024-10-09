import _ from 'lodash'

_.mul = function(array: number[]): number {
  return array.reduce((ac, curnt) => {
    return ac * curnt;
  }, 1)
}

globalThis.MYGLOBAL = 'GLOBAL VALUE';

export default _;
