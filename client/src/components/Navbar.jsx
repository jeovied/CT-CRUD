import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { isAuthenticated, logOut, user } = useAuth();

    return (
        <nav className="bg-zinc-700 flex text-white mb-3 justify-between items-center py-5 px-5">
            <Link
                to={isAuthenticated ? "/tasks" : "/"}
                className="text-2xl flex w-full font-bold uppercase italic"
            >
                Reservation System
            </Link>
            <ul className="flex justify-center w-full gap-x-8">
                {isAuthenticated ? (
                    <div className="flex w-full justify-end gap-2">
                        <li className="flex text-center items-center font-semibold">
                            Welcome
                            <span className="capitalize ml-2">
                                {user.username}
                            </span>
                        </li>
                        <li className="flex mx-1 text-center justify-center items-center font-semibold">
                            <Link
                                to="/add-task"
                                className="bg-orange-500 text-black px-4 py-1"
                            >
                                Add reservation
                            </Link>
                        </li>
                        <li className="flex w-min text-center items-center font-semibold">
                            <Link
                                to="/"
                                className="bg-indigo-500 px-4 py-1"
                                onClick={() => logOut()}
                            >
                                Logout
                            </Link>
                        </li>
                    </div>
                ) : (
                    <div className="flex w-full justify-end gap-5">
                        <li>
                            <Link
                                to="/login"
                                className="bg-indigo-500 px-4 py-1"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className="bg-indigo-500 px-4 py-1"
                            >
                                Register
                            </Link>
                        </li>
                    </div>
                )}
            </ul>

            {}
        </nav>
    );
};

export default Navbar;
