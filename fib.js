function fibIter(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i == 0) {
      arr[i] = 0;
    } else if (i == 1) {
      arr[i] = 1;
    } else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  console.log(arr);
}

function fibRec(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibRec(n - 1) + fibRec(n - 2);
  }
}
console.log(fibIter(8));

console.log("/////////////////////////");
console.log(fibRec(8));
