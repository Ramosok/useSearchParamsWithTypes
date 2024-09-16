import { useSearchParams } from 'react-router-dom'
import { parseValue } from "./utils/parseValue";
import {ParamTypes, SearchParamsAccessor, UpdateSearchParamsFn} from "./types";

export const useSearchParamsWithTypes = <T extends ParamTypes>(): readonly [ SearchParamsAccessor<T>, UpdateSearchParamsFn ] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const get = <K extends keyof T>(key: K): T[K] | null => {
        const value = searchParams.get(key as string);
        return value !== null ? (parseValue(value) as T[K]) : null;
    };

    const set = <K extends keyof T>(key: K, value: T[K]): void => {
        const newSearchParams = new URLSearchParams(searchParams);
        if (value === undefined || value === null) {
            newSearchParams.delete(key as string);
        } else {
            newSearchParams.set(key as string, String(value));
        }
    };

    const has = (key: keyof T): boolean => searchParams.has(key as string);

    const toString = (): string => searchParams.toString();

    return [{ get, set, has, toString }, setSearchParams] as const;
};