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
  const y = b.split("").reverse();
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

export const division = (num, den) => {

};
