import type {
  LoginRequest,
  LoginResponse,
} from "../types/auth";

export const loginUser = async (
  data: LoginRequest
): Promise<LoginResponse> => {
  console.log("Login Data:", data);

  return {
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  };
};