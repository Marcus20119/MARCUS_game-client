export type GetSingleType<TObj, TProp extends keyof TObj> = TObj[TProp];

export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;
