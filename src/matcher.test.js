test("2+2=4", () => {
  expect(2 + 2).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

/*
  - toBe プリミティブ型の比較に使う
  - toEqual オブジェクト型の比較に使う
*/

test("not", () => {
  const data1 = 1;
  const data2 = 2;
  expect(data1 + data2).not.toBe(0);
});

/*
  - toBeNull() nullとなる
  - toBeDefined definedになる(undefinedじゃない)
  - toBeUndefined undefinedになる
  - toBeTruthy truthyな値
  - toBeFalsy falsyな値
*/

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

/*
  - toBeGreaterThan(n) 引数よりも大きいか
  - toBeGreaterThanOrEqual(n) 引数よりも大きい、もしくは等しいか
  - toBeLessThan(n) 引数よりも小さいか
  - toBeLessThanOrEqual(n) 引数よりも小さい、もしくは等しいか

  ▼少数の計算は浮動小数点の影響で、toBe()ではエラーになる可能性があるため、toBeCloseToを使う
  - toBeCloseTo(n)
*/

test("numbers", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4);
});

test("floating points numbers", () => {
  const value = 0.2 + 0.1;
  expect(value).not.toBe(0.3);
  expect(value).toBeCloseTo(0.3);
});

/*
  - toMatch() 正規表現で文字とマッチするか
*/

test("string", () => {
  expect("Team").not.toMatch(/I/);
  expect("Team").toMatch(/T/);
});

/*
  - toContain 配列に含まれているか
 */

test("contain", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  expect(shoppingList).toContain("milk");
});

/*
  - toThrow() 例外を投げるとき
*/

test("throw", () => {
  const func = () => {
    throw Error("ERROR_Daze");
  };

  expect(() => func()).toThrow();
  expect(() => func()).toThrow(Error);
  expect(() => func()).toThrow("ERROR_Daze");
  expect(() => func()).toThrow(/Daze/);
});
