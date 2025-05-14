import { beforeEach, test } from "node:test";
import Pino from "pino";
import { stub, restore } from "sinon";

beforeEach(() => {
  restore();
});

test.skip("Stub an external dependency", () => {
  const stubbedPino = stub(Pino);

  const logger = Pino({ level: "info" });
  logger.info("Hello");
  console.log(stubbedPino);
});
