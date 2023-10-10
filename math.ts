// This is a schema for writing programs that evaluate expressions.

export const API = {
  // Add two numbers
  add(x: number, y: number): number {
    return x + y;
  },
  // Subtract two numbers
  sub(x: number, y: number): number {
    return x - y;
  },
  // Multiply two numbers
  mul(x: number, y: number): number {
    return x * y;
  },
  // Divide two numbers
  div(x: number, y: number): number {
    return x / y;
  },
  // Negate a number
  neg(x: number): number {
    return -x;
  },
  // Identity function
  id(x: number): number {
    return x;
  },
};
