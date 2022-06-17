  function avg(arr) {
    let all = 0;
    arr.forEach(val => { 
      all = all + val;
    });
    all = all / arr.length;
    return all;
  }
  function min(arr) {
    let smallest = 999;
    arr.forEach(val => {
     if(val < smallest) {
      smallest = val;
     }
    })
    return smallest;

  }
  function max(arr) {
    let biggest = 0;
    arr.forEach(val => {
      if(val > biggest) {
       biggest = val;
      }
    })
    return biggest;
  }
  function length(arr) {
    return arr.length;
  }
  const analArray = {
    avg,
    min,
    max,
    length
  }
  module.exports = analArray;