const People = require("../src/people.class");
const { expect } = require("chai");

describe("interacting with people class", function () {
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
