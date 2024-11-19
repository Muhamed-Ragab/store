export const tryCatch = async <T, E extends new (...args: unknown[]) => Error>(
  promise: Promise<T>,
  customError?: E,
): Promise<[undefined, T] | [InstanceType<E>]> => {
  return promise
    .then(data => [undefined, data] as [undefined, T])
    .catch(error => {
      if (!customError || error instanceof customError) {
        return [error];
      }

      if (error instanceof Error) {
        return [
          new customError(404, error.message, {
            stack: error.stack,
          }),
        ];
      }

      return [
        new Error('An unexpected error occurred. Please try again later.', {
          cause: error,
        }),
      ];
    });
};
