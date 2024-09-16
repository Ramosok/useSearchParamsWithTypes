import { NavigateOptions, URLSearchParamsInit } from "react-router-dom";

export type ParamTypes = Record<
  string,
  string | number | boolean | null | undefined
>;

export interface SearchParamsAccessor<T extends ParamTypes> {
  set<K extends keyof T>(key: K, value: T[K]): void;
  get<K extends keyof T>(key: K): T[K] | null;
  toString(): string;
  has(key: keyof T): boolean;
}

export type UpdateSearchParamsFn = (
  nextInit?:
    | URLSearchParamsInit
    | ((prev: URLSearchParams) => URLSearchParamsInit),
  navigateOpts?: NavigateOptions,
) => void;

export type ParseValueReturn = string | number | boolean;
