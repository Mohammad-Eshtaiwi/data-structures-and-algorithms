/* eslint-disable quotes */
const Queue = require("./queue");

class AnimalShelter {
  constructor() {
    this.shelter = new Queue();
    this.dog = 0;
    this.cat = 0;
    this.count = 0;
  }

  enqueue(animal) {
    try {
      if (animal !== "dog" && animal !== "cat")
        throw Error("you can only adopts cat or dog");

      this[animal]++;
      this.count++;
      return this.shelter.enqueue(animal);
    } catch (error) {
      return error.message;
    }
  }
  dequeue(pref = "W/E") {
    try {
      if (this.count === 0) throw Error("the shelter is empty");
      if (pref !== "dog" && pref !== "cat")
        throw Error("you can take  cat or dog");
      console.log(pref);
      if (!this[pref]) throw Error(`there are no ${pref}s to adapts`);

      let current = this.shelter.front;
      let lastAnimal;
      if (current.value === pref) lastAnimal = current;

      while (current.next !== null) {
        if (current.next.value === pref) lastAnimal = current;
        current = current.next;
      }

      if (lastAnimal.value === pref && lastAnimal === this.shelter.front) {
        this.shelter.front = lastAnimal.next;
        this[pref]--;
        this.count--;

        return lastAnimal.value;
      }
      let result = lastAnimal.next.value;
      lastAnimal.next = lastAnimal.next.next;
      this.count--;
      this[pref]--;
      return result;
    } catch (error) {
      return error.message;
    }
  }
}
const shelter = new AnimalShelter();

shelter.enqueue("dog");
shelter.enqueue("dog");
shelter.enqueue("cat");
shelter.enqueue("dog");
shelter.enqueue("cat");
// shelter.enqueue("cat");

// console.log("__dequeue__", shelter.dequeue("cat"));

// console.log("__dequeue__", shelter.dequeue("dog"));
// console.log("__dequeue__", shelter.dequeue("dog"));
// console.log("__dequeue__", shelter.dequeue("dog"));
// console.log("__dequeue__", shelter.dequeue("dog"));
// console.log("__dequeue__", shelter.dequeue("cat"));
// console.log("__dequeue__", shelter.dequeue("cat"));
// console.log("__dequeue__", shelter.dequeue("cat"));
// console.log(shelter.dequeue("cat"));
// shelter.dequeue("cat");

console.log("__shelter", shelter.shelter);
console.log(shelter.dog);

module.exports = AnimalShelter;
