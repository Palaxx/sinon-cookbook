import sumDefault, { sum } from "./math";
import sumCommonJs from "./commonJsWrapper";
export function executeSum(a: number, b: number): number {
  return sum(a, b);
}

export function executeSumWithDefault(a: number, b: number): number {
  return sumDefault(a, b);
}

export function executeSumWithCommonJs(a: number, b: number): number {
  return sumCommonJs(a, b);
}
