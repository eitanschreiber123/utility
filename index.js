import _ from 'lodash';

const flattenEverything = (...a) => a.flat().reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenEverything(val)) : acc.concat(val), []);

const pushMultiple = (value, times) => Array.from({length: times}, (v, ) => value);

const passAll = (value, ...cond) => flattenEverything(cond).map(i => i(value)).every(i => i);

const multipleFilter = (multiple, ...number) => flattenEverything(multiple).map(i => flattenEverything(number).filter(j => j % i === 0));

const greaterFilter = (test, plus, ...value) => value.filter(i => i > test + plus);

const rangeFilter = (min, max, ...value) => value.filter(i => i > min && i < max);

const typeFilter = (type, ...test) => flattenEverything(type).map(i => test.filter(j => typeof j == i));

const vip = (cond, ...values) => values.filter(i => flattenEverything(cond).map(j => j(i)).every(i => i));

const passNumber = (number, ...predicates) => (...args) => args.filter(i => predicates.map(j => j(i)).filter(i => i).length >= number);

const paths = (initial, condition, first, second) => (...args) => {
    const allInitial = _.flow(initial), allFirst = _.flow(first), allSecond = _.flow(second), r = [];
    args.forEach(i => passAll(allInitial(i), condition) ? r.push(allFirst(allInitial(i))) : r.push(allSecond(allInitial(i))));
    return r;
}

const all = (initial, condition, first, second) => (...args) => {
  const allInitial = _.flow(initial), allFirst = _.flow(first), allSecond = _.flow(second);
  return args.every(i => passAll(allInitial(i), condition)) ? args.map(i => allFirst(allInitial(i))) : args.map(i => allSecond(allInitial(i)));
}

const any = (initial, condition, first, second, number = 1) => (...args) => {
  const allInitial = _.flow(initial), allFirst = _.flow(first), allSecond = _.flow(second);
  return args.filter(i => passAll(allInitial(i), condition)).length >= number ? args.map(i => allFirst(allInitial(i))) : args.map(i => allSecond(allInitial(i)));
}

const sameType = value => (...args) => args.filter(i => typeof i === typeof value);

const addThis = (...value) => (...args) => {
  const values = Array.from(flattenEverything(pushMultiple(value, (args.length / value.length) + value.length)));
  return args.map(i => values[args.indexOf(i)] + i);
}

const inOrder = (...functions) => (...args) => {
    const invoke = Array.from(flattenEverything(pushMultiple(functions, args.length)));
    return args.map(i => invoke[args.indexOf(i)](i));
  }

const allArgs = (...indexes) => (...args) => indexes.some(i => i === 1) ? args : args.filter((e, i) => indexes.some(j => i % j === j - 1));

const argsSkipping = (...indexes) => (...args) => Array.from({length: args.length}, (_, i) => args[chunkValues(args, indexes)[i] - 1]).filter(i => i);

const results = (...functions) => (...args) => functions.map(i => i(args));

const isNeg = value => value < 0 || (value === 0 && 1 / value === -Infinity);

const sameSign = number => (...args) => args.filter(i => isNeg(i) === isNeg(number));

const level = (fn, ...amount) => {
  if (!amount[0]) {
    amount = 2;
  }
  return (...args) => {const all = _.flow(fn);
    return chunk(args, amount).map(i => all(i));
  }}

const levelAllCondition = (initial, condition, first, second, ...amount) => {
  if (!amount[0]) {
    amount = 2;
  }
  return (...args) => {const allInitial = _.flow(initial), allFirst = _.flow(first), allSecond = _.flow(second);
    return chunk(args, amount).map(i => i.every(j => passAll(j, condition)) ? allFirst(allInitial(i)) : allSecond(allInitial(i)));
  }}

const levelAnyCondition = (initial, condition, first, second, ...amount) => {
  if (!amount[0]) {
    amount = 2;
  }
  return (...args) => {const allInitial = _.flow(initial), allFirst = _.flow(first), allSecond = _.flow(second);
    return chunk(args, amount).map(i => i.some(j => passAll(j, condition)) ? allFirst(allInitial(i)) : allSecond(allInitial(i)));
  }}
