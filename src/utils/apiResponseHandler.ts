export const getApiResponseData = <
  T
>(
  response: {
    data: T;
  }
): T => {
  return response.data;
};