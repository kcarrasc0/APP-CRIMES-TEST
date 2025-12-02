import { isCrimeTypeValid, applyFilters } from "../../src/utils/filterUtils.js";

const mockData = [
  { data: "2025-11-10", tipo: "Furto" },
  { data: "2025-11-15", tipo: "Roubo" },
  { data: "2025-11-18", tipo: "Agressão" },
];

describe("Validação de Filtros", () => {

  test("deve validar tipo de crime válido", () => {
    expect(isCrimeTypeValid("Furto")).toBe(true);
  });

  test("deve invalidar tipo inexistente", () => {
    expect(isCrimeTypeValid("Invasão Alienígena")).toBe(false);
  });

  test("deve aplicar filtros corretamente", () => {
    const filtered = applyFilters(mockData, {
      inicio: "2025-11-09",
      fim: "2025-11-12",
      tipoCrime: "Furto"
    });

    expect(filtered.length).toBe(1);
  });

});
