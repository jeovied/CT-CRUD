import React from "react";
import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);

const TaskCard = ({ task }) => {
    const { deleteTask } = useTasks();

    return (
        <div className="bg-zinc-800 max-w-md w-full h-[30vh] p-10 rounded-md">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-center text-white text-2xl font-bold">
                    {task.title}
                </h1>
                <p className="text-center flex justify-center items-center overflow-hidden break-words text-slate-300">
                    {task.description}
                </p>
                <p className="text-center text-white">
                    {dayjs(task.date).utc().format("DD/MM/YYYY")}
                </p>
                <div className="mt-4 flex w-full justify-between items-center">
                    <button
                        className="text-center text-white m-2 px-4 py-2 flex justify-between items-center border border-zinc-500 rounded-md"
                        onClick={() => deleteTask(task._id)}
                    >
                        Delete
                    </button>
                    <Link
                        to={`/tasks/${task._id}`}
                        className="text-center text-white m-2 px-4 py-2 flex justify-between items-center border border-zinc-500 rounded-md"
                    >
                        Edit
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
