import { Input } from "../Main";
import { RecoverableError } from "../test-exports";
import { getFederatedContentRoot } from "./Utils";
// TODO: avoid circular dependencies between Main and
// This file (or any other file.

type PlaceholderResponse = {
  columns: string[];
  data: { key: string; value: string; }[];
  limit: number;
  offset: number;
  total: number;
};

export const combineWithFederalPlaceholders = async (
  input: Input
): Promise<Map<string, string>> => {
  const { placeholders, miloConfig } = input;
  const { locale } = miloConfig;
  const origin = getFederatedContentRoot();
  const url = `${origin}${locale.prefix}/federal/globalnav/placeholders.json`;
  const [
    cloudPlaceholders,
    federalPlaceholders
  ] = await Promise.all([
    placeholders,
    getFederalPlaceholders(url)
  ]);
  // if two keys are the same, cloudPlaceholders will be preferred
  return new Map([...federalPlaceholders, ...cloudPlaceholders]);
};

const getFederalPlaceholders = async (
  url: string
): Promise<Map<string, string>> => {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new RecoverableError(`Federal placeholders not found at ${url}`);
    const obj = parseResponse(await response.json());
    if (obj instanceof RecoverableError)
      throw obj;
    return new Map(obj.data.map(({ key, value }) => [key, value]));
  } catch (e) {
    if (e instanceof RecoverableError) {
      console.error(e.message);
    } else {
      // @ts-expect-error errors usually have a message
      const err = new RecoverableError(e.message);
      console.error(err.message);
    }
    return new Map([]);
  }
};

const parseResponse = (
  obj: unknown
): PlaceholderResponse | RecoverableError => {
  try {
    // For now, all we really care about is the
    // data field, though we could check everything
    const {
      data,
    } = obj as PlaceholderResponse;
    const validData = data.every(({ key, value }) => {
      return typeof key === "string"
        && typeof value === "string";
    });
    if (!validData)
      throw new Error("data is not valid");
    return obj as PlaceholderResponse;
  } catch (e) {
    // @ts-expect-error errors usually have a message
    const err = new RecoverableError(e.message);
    return err;
  }
}
