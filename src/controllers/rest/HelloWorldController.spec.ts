import { PlatformTest } from "@tsed/common";
import { HelloWorldController } from "./HelloWorldController";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance).toBeInstanceOf(HelloWorldController);
  });

  it("should return hello", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance.aFunction()).toEqual("hello");
  });

  it("should return 2", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance.Suma1_1()).toEqual(2);
  });

  it("should return 20", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    jest.spyOn(instance, "sum2num");
    const num1 =15;
    const num2 = 5;
    expect(instance.sum2num(num1, num2)).toBe(20);
  });

  it("should return 10", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    jest.spyOn(instance, "res2num");
    const num1 =15;
    const num2=5;
    expect(instance.res2num(num1, num2)).toBe(10);
  });

  it("should return 75", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    jest.spyOn(instance, "mul2num");
    const num1 =15;
    const num2 = 5;
    expect(instance.mul2num(num1, num2)).toBe(75);
  });

  it("should return 3", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    jest.spyOn(instance, "div2num");
    const num1 =15;
    const num2=5;
    expect(instance.div2num(num1, num2)).toBe(3);
  });


});
