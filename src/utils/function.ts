export interface ICoordinate {
  x: number;
  y: number;
}

export function parseCoordinate(obj: ICoordinate): ICoordinate;
export function parseCoordinate(arg1: any, arg2?: any): ICoordinate {
  let coord = {
    x: arg1 as number,
    y: arg2 as number,
  };
  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as ICoordinate),
    };
  } else {
    let coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}
