import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginUser } from "../api/authApi";

const loginSchema = z.object({
  email: z
    .string()
    .email("Enter valid email"),

  password: z
    .string()
    .min(
      6,
      "Password must be at least 6 characters"
    ),
});

type LoginFormData =
  z.infer<typeof loginSchema>;

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver:
      zodResolver(loginSchema),
  });

  const onSubmit = async (
    data: LoginFormData
  ) => {
    const response =
      await loginUser(data);

    localStorage.setItem(
      "token",
      response.accessToken
    );

    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
      />

      <p>{errors.email?.message}</p>

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
      />

      <p>
        {errors.password?.message}
      </p>

      <button
        onClick={handleSubmit(
          onSubmit
        )}
      >
        Login
      </button>
    </div>
  );
}

export default Login;