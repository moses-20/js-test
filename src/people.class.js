const Axios = require("axios");

class People {
  constructor(name, hobby) {
    this.name = name;
    this.hobby = hobby;
  }

  sayHi() {
    return `Hello I am ${this.name} and I like ${this.hobby}`;
  }

  async getPost(num) {
    let resp = await Axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts/${num}`
    });

    if (resp) {
      return await resp.data;
    }

    return { error: "no post" };
  }
}

module.exports = People;
