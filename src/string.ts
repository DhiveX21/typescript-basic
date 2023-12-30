let produk1: string;
produk1 = "ini adalah string";

let produk2: number;
produk2 = 2;

let produk3: boolean;
produk3 = true;

let produk4: number[];
produk4 = [1, 2, 3, 4];

let produk4_2: (number | string)[];
produk4_2 = [1, 2, 3, 4, "string"];

let produk4_1: Array<number | string>;
produk4_1 = [1, 2, 3, 4, "awdkokod"];

let produk4_3: (number | string | Object)[];
produk4_3 = [1, true, { produk4_3: 1 }];

let produk4_4: Array<number | string | Object>;
produk4_4 = [1, true, { produk4_3: 1 }];

interface arrayOfObject {
  id: number;
  name: string;
  object: arrayOfObjectChild;
}

interface arrayOfObjectChild {
  id: number;
  childName: string;
  childGrade: number;
  is_active: boolean;
}

let produk5_5: Array<arrayOfObject>;
produk5_5 = [
  {
    id: 1,
    name: "Test Name",
    object: {
      id: 1,
      childName: "test Child",
      childGrade: 2,
      is_active: true,
    },
  },
];
