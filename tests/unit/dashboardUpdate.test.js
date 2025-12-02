import { applyFilters } from "../../src/utils/filterUtils.js";

describe("Atualização do Dashboard", () => {

  test("dashboard deve atualizar quando filtros retornarem dados", () => {
    const result = applyFilters(
      [{ data: "2025-11-10", tipo: "Furto" }],
      { inicio: "2025-11-01", fim: "2025-11-20", tipoCrime: "Furto" }
    );

    expect(result.length).toBeGreaterThan(0);
  });

});
