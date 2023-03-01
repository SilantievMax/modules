class Orders {
  title = "";
  orders = "";
  price = "";
  quantity = "";
  description = "";
  #arrResult = [];
  #str;

  constructor(str) {
    this.#str = str;
  }
  getArr() {
    const arr = ["contains", "starts", "ends", "<", "=", ">", "<=", ">="];
    for (let i = 0; i < arr.length; i++) {
      if (this.#str.indexOf(arr[i]) != -1) {
        this.#arrResult.push(arr[i]);
      }
    }
    return this.#arrResult;
  }
}

const arrOrders = [];

const str1 = "name-contains-fd&price-=2&quantity->5&description-ends-abc";
const str2 = "name-starts-fd&quantity=-5";

const orders1 = new Orders(str1);
const orders2 = new Orders(str2);

arrOrders.push(orders1);
arrOrders.push(orders2);

console.log(orders1.getArr());
console.log(orders2.getArr());
