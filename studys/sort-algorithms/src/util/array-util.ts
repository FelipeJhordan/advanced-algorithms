export const assignIfEmpty = (value: any) =>
  !value || !value.length ? [] : value;
