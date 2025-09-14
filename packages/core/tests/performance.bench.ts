import Benchmark from "benchmark";
import { clsx } from "clsx";
import { clsx as clsxLite } from "clsx/lite";
import { cn, cx } from "../src";

const clsxSuite = new Benchmark.Suite("clsx");
const clsxLiteSuite = new Benchmark.Suite("clsx/lite");

clsxSuite
  .add("clsx", () => {
    clsx("");
    clsx("foo", "bar");
    clsx(true && "foo", false && "bar", "baz");
    clsx(false && "foo", "bar", "baz", "");
  })
  .add("jade-garden cx", () => {
    cx("");
    cx("foo", "bar");
    cx(true && "foo", false && "bar", "baz");
    cx(false && "foo", "bar", "baz", "");
  })

  // add listeners
  .on("cycle", (event: unknown) => {
    // @ts-expect-error: 'event' is of type 'unknown'
    console.log(String(event.target));
  })
  .on("complete", function () {
    // @ts-expect-error: 'this' implicitly has type 'any' because it does not have a type annotation
    console.log(`Fastest 'clsx' operation is ${this.filter("fastest").map("name")}`);
  })
  // run async
  .run({ async: true });

clsxLiteSuite
  .add("clsx/lite", () => {
    clsxLite("");
    clsxLite("foo", "bar");
    clsxLite(true && "foo", false && "bar", "baz");
    clsxLite(false && "foo", "bar", "baz", "");
  })
  .add("jade-garden cn", () => {
    cn("");
    cn("foo", "bar");
    cn(true && "foo", false && "bar", "baz");
    cn(false && "foo", "bar", "baz", "");
  })
  // add listeners
  .on("cycle", (event: unknown) => {
    // @ts-expect-error: 'event' is of type 'unknown'
    console.log(String(event.target));
  })
  .on("complete", function () {
    // @ts-expect-error: 'this' implicitly has type 'any' because it does not have a type annotation
    console.log(`Fastest 'clsx/lite' operation is ${this.filter("fastest").map("name")}`);
  })
  // run async
  .run({ async: true });
