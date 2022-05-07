const sayHello = require("../module/test").sayHello;
const assert = require("assert");

describe("App test!", function () {
  it("sayHello should return hello", function (done) {
    if (sayHello(1) === "hello") {
      done();
    }
  });

  it("sayHello should return bad", function (done) {
    if (sayHello(0) === "bad") {
      done();
    }
  });
});

describe("App test with Assert", function () {
  it('sayHello should return "hello"', function () {
    assert(sayHello(1) == "hello1");
  });

  it("sayHello should return bad", function (done) {
    if (sayHello(0) === "bad") {
      done();
    }
  });
});
