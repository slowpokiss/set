export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(memb) {
    if (!this.members.has(memb)) {
      this.members.add(memb);
    } else {
      throw new Error('персонаж уже есть в команде');
    }
  }

  addAll(...params) {
    params.forEach((el) => {
      this.members.add(el);
    });
  }

  toArray() {
    const array = Array.from(this.members);
    return array;
  }
}
