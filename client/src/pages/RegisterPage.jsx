import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signUp(values);
    });

    return (
        <div className="flex flex-col justify-center items-center h-[80vh]">
            <h4 className="font-bold my-4 text-4xl">Register</h4>
            <div className="bg-white flex flex-col justify-center items-center p-2 rounded-md border-2 w-2/5 h-2/5 border-zinc-500">
                {registerErrors.map((error, i) => (
                    <div
                        key={i}
                        className="bg-red-500 m-1 p-1 w-10/12 text-white text-center"
                    >
                        {error}
                    </div>
                ))}
                <form onSubmit={onSubmit} className="flex flex-col w-4/5">
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("username", { required: true })}
                        className="bg-zinc-700 text-white text-center px-4 py-2 my-2 rounder-md"
                    />
                    {errors.username && (
                        <p className="text-red-500 text-center">
                            Username is required
                        </p>
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                        className="bg-zinc-700 text-white text-center px-4 py-2 my-2 rounder-md"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-center">
                            Email is required
                        </p>
                    )}
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                        className="bg-zinc-700 text-white text-center px-4 py-2 my-2 rounder-md"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-center">
                            Password is required
                        </p>
                    )}
                    <button
                        className="flex items-center w-2/5 justify-center self-center border-2 border-black p-2 mt-4 rounded-md"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
