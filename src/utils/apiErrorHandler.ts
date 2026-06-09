export const getApiErrorMessage = (
  error: unknown
): string => {
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in error
  ) {
    const apiError = error as {
      response?: {
        data?: {
          message?: string;
        };
      };
    };

    return (
      apiError.response?.data?.message ||
      "Something went wrong"
    );
  }

  return "Something went wrong";
};