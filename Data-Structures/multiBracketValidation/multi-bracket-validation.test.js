/* eslint-disable quotes */
const MultiBracketValidation = require("./multi-bracket-validation");

/* eslint-disable quotes */
describe("multi-bracket-validation", () => {
  it("should  return true if balanced", () => {
    expect(
      new MultiBracketValidation("{}{Code}[Fellows](())").validate()
    ).toEqual(true);
    expect(
      new MultiBracketValidation("()[[Extra Characters]]").validate()
    ).toEqual(true);
  });
  it("should  return false if not balanced", () => {
    expect(new MultiBracketValidation("[({}]").validate()).toEqual(false);
    expect(new MultiBracketValidation("(](").validate()).toEqual(false);
  });
});
