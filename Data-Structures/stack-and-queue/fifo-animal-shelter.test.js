/* eslint-disable quotes */
const AnimalShelter = require("./fifo-animal-shelter");

describe("fifo-animal-shelter", () => {
  it("should enqueue", () => {
    const shelter = new AnimalShelter();
    shelter.enqueue("cat");
    shelter.enqueue("dog");

    expect(shelter.count).toEqual(2);
  });
  it("should dequeue", () => {
    const shelter = new AnimalShelter();
    shelter.enqueue("cat");
    shelter.enqueue("dog");
    expect(shelter.dequeue("cat")).toEqual("cat");

    expect(shelter.dequeue("dog")).toEqual("dog");
  });
});
