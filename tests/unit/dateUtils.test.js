import { isValidDate, isDateRangeValid } from "../../src/utils/dateUtils.js";

describe("Validação de Datas", () => {
  
  test("deve validar uma data correta", () => {
    expect(isValidDate("2025-11-20")).toBe(true);
  });

  test("deve invalidar uma data vazia", () => {
    expect(isValidDate("")).toBe(false);
  });

  test("deve validar um range de datas correto", () => {
    expect(isDateRangeValid("2025-11-01", "2025-11-20")).toBe(true);
  });

  test("deve invalidar um range errado", () => {
    expect(isDateRangeValid("2025-12-01", "2025-11-01")).toBe(false);
  });

});
