import { ParseValueReturn } from "../types";

export const parseValue = (value: string): ParseValueReturn => {
  if (value === "true") return true;
  if (value === "false") return false;
  const num = Number(value);
  return isNaN(num) ? value : num;
};
