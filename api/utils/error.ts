export const errorHandler = (message: string) => {
    const error = new Error();
    error.message = message;
    return error;
  };