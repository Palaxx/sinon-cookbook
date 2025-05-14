import { stub, restore } from "sinon";
import { beforeEach, test } from "node:test";
import { equal } from "node:assert";

import * as myMathModule from "../src/math";
import {
  executeSum,
  executeSumWithDefault,
  executeSumWithCommonJs,
} from "../src/sample";
import * as sumCommonJs from "../src/commonJsWrapper";

beforeEach(() => {
  restore();
});
test("Sum should works as expected", () => {
  equal(executeSum(1, 2), 3);
  equal(executeSumWithDefault(1, 2), 3);
  equal(executeSumWithCommonJs(1, 2), 3);
});

test("Stub an internal module when named export", () => {
  const stubbedMethod = stub(myMathModule, "sum");
  stubbedMethod.returns(99);
  equal(executeSum(1, 2), 99);
});

test("Stub an internal module when default export", () => {
  const stubbedMethod = stub(myMathModule, "default");
  stubbedMethod.returns(88);
  equal(executeSumWithDefault(1, 2), 88);
});

test("Stub an internal commonjs module when exported function", () => {
  const stubbedMethod = stub(sumCommonJs, "default");
  stubbedMethod.returns(12);
  // executeSumWithCommonJs(1, 2);
  equal(executeSumWithCommonJs(1, 2), 12);
});
