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

    expect(instance.aSuma()).toEqual(2);
  });

  it("should return 43", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    jest.spyOn(instance, "sumar2numeros").mockResolvedValue(1);
    const num1 =41;
    const num2=2;
    expect(instance.sumar2numeros(num1, num2)).toBe(43);
  });

  it("should return 260", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    jest.spyOn(instance, "sumar2numeros");
    const F = 500;
    expect(instance.FtoC(F)).toBe(260);
  });


});
