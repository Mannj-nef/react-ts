// INTERFACES
{
  interface IUser {
    id: string;
    name: string;
    age: number;
    student: boolean;
  }

  const interfaces_user: IUser = {
    id: "32ir44",
    name: "Quan",
    age: 20,
    student: true,
  };
}
// ENUM
{
  enum Role {
    ADMIN,
    USER,
  }
  const enum_user: { role: Role } = {
    role: Role.ADMIN,
  };
}
// TUPLE
{
  const id: number = 1;
  const name: string = "quan";

  const tuple_employee: [string, number] = ["quan", 1];

  // TUPLE CUSTOM USESTATE
  {
    const useState2 = (value: string): [string, (v: string) => void] => {
      let a = value;
      const handleSetvalue = (v: string): void => {
        a = v;
      };

      return [a, handleSetvalue];
    };

    const [valueStr, setValurStr] = useState2("quan");

    setValurStr("mquan");
  }
}

// ANY
{
  const name: any = 1234;
}

//  UNOIN
{
  //  TUser có thể có type là string hoặc 1 mảng có value là string
  type TUser = string[] | string;

  const data: number | string = "05/01";

  const user: TUser = ["quan"];
}

// LITERAL
{
  type TAge = 18 | 20 | "20";
  // literal bắt buộc các value phải là các giá trị trong type đã khai báo

  const age: TAge = 20;
}

// UNKNOW
//  type không bết => có thể gán cho 1 value có type bất kì, nhưng phải kiểm tra rồi mới sử dụng

// NERVER TYPES
{
  // content no value
  // return type of a function throw error
  //  type nerver là khi mà các giá trị khai báo trong đó sẽ không bao giờ xảy ra, không bao giờ được đọc, thường viết cho function throw ra 1 cái lỗi hoặc 1 function chạy vô tận không có điểm dừng, không có return

  function raiseError(err: string) {
    throw new Error(err);
  }
}

// FUNCTION
{
  // function => return  number
  function sum(a: number, b: number): number {
    return a + b;
  }

  //   void => function không return
  function voidFn(a: number, b: number): void {}

  //   FUNCTION OVERLOADING
  {
    function fnOverloading(arg1: string, arg2: string): string;
    function fnOverloading(arg1: number, arg2: number): number;
    function fnOverloading(arg1: string[], arg2: number[]): (string | number)[];
    function fnOverloading(arg1: any, arg2: any): any {
      const isString = arg1 === "string" && arg2 === "string";
      const isNumber = arg1 === "number" && arg2 === "number";

      const result = arg1 + arg2;

      const checkResult = isString
        ? (result as string)
        : isNumber
        ? (result as Number)
        : (result as (string | number)[]);

      return checkResult;
    }
  }

  //   ARROR FUNCTION
  const addString = (arg1: string, arg2: string): string => {
    return `${arg1}, ${arg2}`;
  };
  // DEFAULT PARAMETERS
  const addNumber = (arg1: number = 5, arg2: number = 10): number => {
    return arg1 + arg2;
  };
  //   UNION TYPE
  const format = (
    month: string | number,
    day: string | number,
    yearn: string | number
  ): string | number => {
    return `${day}, ${month} , ${yearn}`;
  };
  //   VOID FUNCTION
  const loopVoidFn = (arg1: string, arg2: string): void => {
    console.log(`${arg1}, ${arg2}`);
  };
  // PROMISE FUNCTION
  {
    const fetchData = (url: string): Promise<void> => {
      return Promise.resolve();
    };
    // REST PARAMETERS FUNCTION
    const infor = (id: string, ...rest: string[]) => {
      return rest;
    };
  }

  // CALLBACK FUNCTION
  {
    type TCallback = () => number;
    const fnCallback = (value: number, callback: () => TCallback): void => {
      callback();
    };
  }

  // FUNCTION AS TYPE
  // FUNCTION PARAMS WITH PARAMS
  {
    type TUpdateArray = (n: number) => number;
    const handleUpdateArray = (
      numbers: number[],
      update: TUpdateArray
    ): number[] => {
      return numbers.map((item) => update(item));
    };
  }

  // FUNCTION RETURN FUNCTION
  {
    const handleValue = (
      value: number,
      callBackHandle: (n: number) => number
    ) => {
      return callBackHandle(value);
    };

    function multiplyValue(value: number): number {
      return value * 2;
    }

    // console.log(handleValue(8, multiplyValue));
  }
}

// INTERSECTION
{
  interface Iintersection_user {
    id: string;
    name?: string;
  }
  interface Iintersection_email {
    email: string;
    password: string;
  }

  type User = Iintersection_user & Iintersection_email;

  const quan: User = {
    id: "asfd12",
    name: "Mquan",
    email: "quan@gmail.com",
    password: "2313",
  };
}

//  GENERIC TYPES
{
  // Sử dụng generic để tạo các function, interface, class... có tính linh động, tái sử dụng cao

  // Sử dụng generic khi mà các các type(kiểu dữ liệu) là đa dạng, có thể là bất kì kiểu gì: string, number, obj..., nó sẽ dựa vào input đầu vào để định nghĩa riêng cho các type sử dụng kiểu generic đó

  type SetvalueType<Type> = [Type, <StateType>(v: StateType) => void];

  function useState<T>(value: T): SetvalueType<T> {
    return [value, () => {}];
  }

  function ranker<RankerType>(
    items: RankerType[],
    ranker: (v: RankerType) => number
  ) {
    const ranks = items.map((item) => ranker(item));
    ranks.sort((a, b) => a - b);
    return ranks;
  }

  const [value, setValue] = useState("");
  // console.log(value);
  // console.log(ranker([1, 3, 2], (v: number) => v * 5));

  // setValue([]);

  // KEYOF
  const devices = [
    {
      name: "iphone",
      price: 100,
    },
    {
      name: "ipad",
      price: 200,
    },
  ];

  function getDevicesKeys<T, U extends keyof T>(items: T[], dataKey: U) {
    const result = items.map((item) => item[dataKey]);

    return result;
  }

  console.log(getDevicesKeys(devices, "namef"));
}

// UTILITY TYPE
{
  // Partial<Type>
  // Nó sẽ set các type từ required sang optional
  {
    interface Todo {
      title: string;
      desc: string;
    }

    type PartialTodo = Partial<Todo>;
    const todo: PartialTodo = {
      title: "",
    };
  }

  // Required<Type>
  // Ngược lại với Partial, sẽ set các type từ optinal sang required
  {
    interface Props {
      a?: number;
      b?: number;
    }
    type RequiredProps = Required<Props>;
    const obj: RequiredProps = {
      a: 0,
      b: 1,
    };
  }

  // Readonly<Type>
  // Readonly type chỉ cho phép định nghĩa chứ không cho phép gán hay sửa lại giá trị của biến đó
  {
    interface ReadonlyTodo {
      title: string;
    }
    const readonlyTodo: Readonly<ReadonlyTodo> = { title: "hello" };
    readonlyTodo.title = "hi";
  }

  // Record<Key, Type>
  // Record chỉ cho phép các property co type và key đã định nghĩa
  {
    interface CatInfo {
      age: number;
      breed: string;
    }
    type CatName = "miffy" | "boris" | "mirdred";

    const cats: Record<CatName, CatInfo> = {
      miffy: { age: 10, breed: "" },
      boris: { age: 12, breed: "" },
      mirdred: { age: 12, breed: "" },
    };
    cats.miffy;
  }

  // Pick<Type, Key>
  // Chỉ cho phép các properti là các key đã truyền vào bên trong Pick
  {
    interface Todo {
      title: string;
      descriprion: string;
    }
    type TodoPreview = Pick<Todo, "title">;
    const todo: TodoPreview = {
      title: "",
    };
  }

  // Omit<Type, keys>
  // Ngược lại của Pick sẽ thoả mãn tất cả các properti trong type đã được khai báo, ngoại trừ các keys đã định nghĩa trong Omit
  {
    interface Todo {
      title: string;
      desctiption: string;
      completed: boolean;
    }
    type TodoOmit = Omit<Todo, "desctiption">;
    const todo: TodoOmit = {
      title: "",
      completed: true,
    };
  }

  // Exclude<UnionType, ExcludeMembers>
  // Loại trừ các UnionType giống với excludeMembers
  {
    type T1 = Exclude<"a" | "b", "a">;
    type T2 = Exclude<() => void, Function>;
    type T3 = Exclude<string | (() => void), Function>;
    type T4 = Exclude<"a" | (() => void), Function>;
  }

  // Extract<Type, Union>
  // Ngược lại với exclude extract sẽ trả ra các type trùng với vế Union phía sau
  {
    type T0 = Extract<string | number, string>;
    type T1 = Extract<"a" | "b", "a">;
  }

  // NonNullable<Type>
  // Loại trừ các type là null và undefined
  {
    type T0 = NonNullable<string | number | undefined>;
    type T1 = NonNullable<0 | "1" | undefined>;
  }
}
