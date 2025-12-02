export function isCrimeTypeValid(type) {
  const validTypes = ["Furto", "Roubo", "Agressão", "Homicídio"];
  return validTypes.includes(type);
}

export function applyFilters(data, filters) {
  return data.filter(item => {
    const dateCheck =
      new Date(item.data) >= new Date(filters.inicio) &&
      new Date(item.data) <= new Date(filters.fim);

    const typeCheck =
      filters.tipoCrime ? item.tipo === filters.tipoCrime : true;

    return dateCheck && typeCheck;
  });
}
