export const summation = (a, b) => {
  let x = String(a);
  let y = "" + b;
  let remains = 0;
  let result = "";
  while (x.length >= y.length ? x.length > 0 : y.length > 0) {
    const sum = (!!x ? +x.slice(x.length - 1) : 0) + (!!y ? +y.slice(y.length - 1) : 0) + remains;
    if (sum > 9) {
      remains = 1;
    } else {
      remains = 0;
    }
    result += String(sum).slice(-1);
    x = x.slice(0, -1);
    y = y.slice(0, -1);
  }
  return remains ? remains + result.split("").reverse().join("") : result.split("").reverse().join("");
};

export const subtraction = (a, b) => {
  let x = String(a);
  let y = "" + b;
  let remains = 0;
  let result = "";
  while (x.length >= y.length ? x.length > 0 : y.length > 0) {
    let sum = 0;
    if (+(x.slice(x.length - 1) - remains) === +y.slice(y.length - 1)) {
      sum = 0;
      remains = 0;
    } else if (+x.slice(x.length - 1) <= +y.slice(y.length - 1)) {
      sum = (!!x ? +x.slice(x.length - 1) + 10 : 9) - (!!y ? +y.slice(y.length - 1) : 0) - remains;
      remains = 1;
    } else {
      sum = (!!x ? +x.slice(x.length - 1) : 0) - (!!y ? +y.slice(y.length - 1) : 0) - remains;

      remains = 0;
    }
    result += String(sum).slice(-1);
    x = x.slice(0, -1);
    y = y.slice(0, -1);
  }
  console.log(+a - +b);
  const result2 = remains ? remains + result.split("").reverse().join("") : result.split("").reverse().join("");
  return result2[0] === "0" ? result2.slice(1) : result2;
};

export const multiplications = (a, b) => {
  const x = a.split("").reverse();
  const y = b
    .split("")
    .reverse()
    .filter((i) => i != ".");
  const result = [];

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      const m = x[i] * y[j];
      result[i + j] = result[i + j] ? result[i + j] + m : m;
    }
  }

  for (let i = 0; i < result.length; i++) {
    const num = result[i] % 10;
    const move = Math.floor(result[i] / 10);
    result[i] = num;

    if (result[i + 1]) result[i + 1] += move;
    else if (move != 0) result[i + 1] = move;
  }

  return result.reverse().join("");
};

export const division = (a, b) => {
  let half1 = a;
  let half2 = b;
  let count = 0;
  let count2 = 0;
  let x = a;
  let y = b;


  while (!Number.isFinite(x * y)) {
    half1 = multiplications(half1, "0.5");
    count++;
    x =
      half1[0] === "0"
        ? half1.slice(1, half1.length - count) + "." + half1.slice(half1.length - count)
        : half1.slice(0, half1.length - count) + "." + half1.slice(half1.length - count);
    half2 = multiplications(half2, "0.5");
    count2++;
    y =
      half2[0] === "0"
        ? half2.slice(1, half2.length - count2) + "." + half2.slice(half2.length - count2)
        : half2.slice(0, half2.length - count2) + "." + half2.slice(half2.length - count2);
  }

  return x / y

  // for (let i = 0; i <= 3; i++) {
  //   half1 = multiplications(half1, "0.5");
  //   count++;
  //   x =
  //     half1[0] === "0"
  //       ? half1.slice(1, half1.length - count) + "." + half1.slice(half1.length - count)
  //       : half1.slice(0, half1.length - count) + "." + half1.slice(half1.length - count);
  // }

  // for (let i = 0; i <= 3; i++) {
  //   half2 = multiplications(half2, "0.5");
  //   count2++;
  //   y =
  //     half2[0] === "0"
  //       ? half2.slice(1, half2.length - count2) + "." + half2.slice(half2.length - count2)
  //       : half2.slice(0, half2.length - count2) + "." + half2.slice(half2.length - count2);
  // }

  // console.log(half2);
  // const resultMulti = result.reverse().join("");
  // const sss = resultMulti[0] === "0" ? resultMulti.slice(1, resultMulti.length - 1) + "." + resultMulti.slice(resultMulti.length - 1) : resultMulti;

  // let quotient = Array(x.length).fill(0);

  // const result = multiplications(a, "0.5");
  // console.log(result)

  // for (let i = x.length - 1; i >= 0; i--) {
  //   let temp = x[i];
  //   let j = quotient.length - 1;

  //   while (temp > 0 && j >= 0) {
  //     let product = y[y.length - 1] * temp;
  //     let carry = 0;
  //     for (let i = y.length - 1; i >= 0; i--) {
  //       product += carry;
  //       carry = Math.floor(product / 10);
  //       product %= 10;
  //       product += y[i] * quotient[j];
  //       quotient[j] = Math.floor(product / 10);
  //       product %= 10;
  //     }
  //     temp = carry;
  //     j--;
  //   }
  // }

  // quotient = quotient.join("");
  // // quotient = quotient.join("").replace(/^0+(?=\d)/, "");
  // console.log(a / b);
  // return quotient;
};
