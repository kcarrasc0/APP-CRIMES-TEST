export function isValidDate(dateString) {
  if (!dateString) return false;
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

export function isDateRangeValid(start, end) {
  if (!isValidDate(start) || !isValidDate(end)) return false;
  return new Date(start) <= new Date(end);
}
