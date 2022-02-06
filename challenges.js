// https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript

var fibonacci = function (n, cache = []) {
    console.log(cache);
    if (n == 0 || n == 1) cache.push(n);
    if (n == 0 || n == 1) return n;
    const found = cache.find((element) => element > n);
    if (found) {
      console.log('found => ', found);
      return found;
    } else {
      let process = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
      console.log('process =>', process);
      cache.push(process);
      return process;
    }
  };
  
  console.log(fibonacci(2));
  