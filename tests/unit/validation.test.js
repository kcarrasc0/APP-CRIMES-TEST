import { isValidDate } from "../../src/utils/dateUtils.js";

describe("Validação de campos obrigatórios", () => {

  test("campo de data não pode ser vazio", () => {
    expect(isValidDate("")).toBe(false);
  });

  test("data inválida deve falhar", () => {
    expect(isValidDate("2025-99-99")).toBe(false);
  });

});
