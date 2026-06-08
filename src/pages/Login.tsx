import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "../api/authApi";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-md border border-white/30">
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Employee Management
        </h1>

        <p className="text-center text-white/80 mb-8">
          Login to continue
        </p>

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="space-y-4"
        >
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email")}
              className="w-full p-3 rounded-xl outline-none bg-white text-gray-800"
            />

            <p className="text-red-200 text-sm mt-1">
              {errors.email?.message}
            </p>
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter Password"
              {...register("password")}
              className="w-full p-3 rounded-xl outline-none bg-white text-gray-800"
            />

            <p className="text-red-200 text-sm mt-1">
              {errors.password?.message}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-purple-700 font-bold py-3 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;