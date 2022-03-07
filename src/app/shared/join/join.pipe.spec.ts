import {JoinPipe} from './join.pipe';

describe('JoinPipe', () => {
  it('create an instance', () => {
    const pipe = new JoinPipe();
    expect(pipe).toBeTruthy();
  });
  it('transform', () => {
    const pipe = new JoinPipe();
    expect(pipe.transform(['test', 'test2'], '|')).toEqual('test|test2');
  })
});
