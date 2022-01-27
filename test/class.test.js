const People = require("../src/people.class");
const { expect } = require("chai");
const sinon = require("sinon");

describe.skip("interacting with people class", function () {
  const person = new People("Yamah", "Skating");

  it("person name equal Yamah", function () {
    expect(person.name).to.equal("Yamah");
  });

  it("person hobby equal Skating", function () {
    expect(person.hobby).to.equal("Skating");
  });

  it("introduce person", function () {
    expect(person.sayHi()).to.be.equal("Hello I am Yamah and I like Skating");
  });

  it("return person's post", async function () {
    expect(await person.getPost(1)).to.haveOwnProperty("title");
  });
});

describe("spy on function call", function () {
  const person = new People("Gbemu", "Swimming");
  const spy = sinon.spy(person, "sayHi");

  it("call sayHi() only once", function () {
    person.sayHi("Coders");
    expect(spy.calledOnce).to.be.true;
  });

  it("call sayHi() with argument 'Coders'", function () {
    expect(spy.calledWith("Coders")).to.be.true;
  });
});

describe("api calls", function () {
  const person = new People("Gbemu", "Swimming");
  const postsStub = sinon.stub(person, "getPost");
  postsStub.withArgs(4).returns({
    id: 4,
    title: "Gbemu at grammy awards",
    message:
      "Sint exercitation ea culpa magna dolore irure ex eu cupidatat irure."
  });

  it("mock result for api call", function () {
    expect(person.getPost(4)).to.haveOwnProperty("message");
  });
});
