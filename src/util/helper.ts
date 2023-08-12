export const Helper = {
  isNullOrUndefined: <T>(item: T | undefined | null): item is null | undefined => item === null || item === undefined,
  isTestEnvironement: () => !Helper.isNullOrUndefined(process.env.NODE_ENV) && process.env.NODE_ENV === 'test',
};
