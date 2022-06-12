import * as React from 'react';
import './style.css';

export default function App() {
  const list = [1, 2, 3, 0];
  const half = Math.ceil(list.length / 2);
  const firstHalf = list.splice(0, half);
  const secondHalf = list.splice(-half);

  let compareFirstCount = firstHalf.reduce(function (prev, nxt) {
    return prev + nxt;
  });
  let compareSectCount = secondHalf.reduce(function (prev, next) {
    return prev + next;
  });
  console.log('add da', compareFirstCount);
  console.log('add d1a', compareSectCount);

  console.log('oj', firstHalf);
  console.log('oj', secondHalf);

  if (compareFirstCount === compareSectCount) {
    return true;
  } else {
    console.log('okay');
  }
  let s1 = 'aabcc';
  let s2 = 'adcaa';

  let convert = s2.split('');
  console.log(convert);
  let count = 0;
  const arr = [];

  for (let str of s1) {
    console.log('str data here', str);
    let index = convert.findIndex((s) => s === str);
    if (index >= 0) {
      console.log('inex ', index);
      arr.push(index);
      console.log(arr);
      count++;
      convert.splice(index, 1);
      console.log(count);
    }
  }
  return count;
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
