import { isCrimeTypeValid } from "../../src/utils/filterUtils.js";

describe("Validação de tipo de crime", () => {

  test("deve reconhecer 'Roubo' como válido", () => {
    expect(isCrimeTypeValid("Roubo")).toBe(true);
  });

});
