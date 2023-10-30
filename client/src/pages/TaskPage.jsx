import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

const TaskPage = () => {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className="flex flex-wrap sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center items-center">
            {tasks
                .slice(0)
                .reverse()
                .map((task) => (
                    <TaskCard task={task} key={task._id} />
                ))}
        </div>
    );
};

export default TaskPage;
