import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);

const TaskFormPage = () => {
    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id);
                setValue("title", task.title);
                setValue("description", task.description);
                setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
            }
        }
        loadTask();
    }, []);

    const onSubmit = handleSubmit((data) => {
        const dataValid = {
            ...data,
            date: data.date
                ? dayjs.utc(data.date).format()
                : dayjs.utc().format(),
        };

        if (params.id) {
            updateTask(params.id, dataValid);
        } else {
            createTask(dataValid);
        }
        navigate("/tasks");
    });

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h4 className="font-bold my-4 text-4xl">New Reservation</h4>
            <div className="bg-white flex flex-col justify-center items-center p-2 rounded-md border-2 w-3/5 h-3/5 border-zinc-500">
                <form onSubmit={onSubmit} className="flex flex-col w-4/5">
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("title")}
                        autoFocus
                        className="bg-zinc-700 text-white text-center px-4 py-2 my-2 rounder-md"
                    />
                    <input
                        type="date"
                        {...register("date")}
                        autoFocus
                        className="bg-zinc-700 text-white text-center px-4 py-2 my-2 rounder-md"
                    />
                    <textarea
                        rows="3"
                        maxLength={100}
                        placeholder="Description"
                        {...register("description")}
                        className="bg-zinc-700 text-white text-center px-4 py-2 my-2 rounder-md break-words"
                    ></textarea>
                    <button className="flex items-center w-2/5 justify-center self-center border-2 border-black p-2 mt-4 rounded-md">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TaskFormPage;
