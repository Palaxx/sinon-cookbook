import { beforeEach, describe, test } from "node:test";
import { equal } from "node:assert";
import * as Pino from "pino";
import * as PinoWrapped from "../src/pinoWrapper";
import { stub, restore } from "sinon";

beforeEach(() => {
  restore();
});

describe("Stub an external common js dependency need a wrapper", () => {
  test("When no wrapper is used an error is thrown", () => {
    try {
      stub(Pino, "pino");
    } catch (e) {
      equal(
        (e as Error).message.includes(
          "Descriptor for property pino is non-configurable and non-writable"
        ),
        true
      );
    }
  });

  test("Using a wrapper it should be easily possibile", () => {
    const stubbedMethod = stub(PinoWrapped, "default");
    PinoWrapped.default();
    equal(stubbedMethod.calledOnce, true);
  });
});
