import { v4 as uuid } from "uuid";

interface Task {
  id: string;
  task: string;
}

export default () => {
  const taskList = useState<Task[]>("tasks", () => []);

  const addTask = (label: string) => {
    const id = uuid();

    taskList.value.push({
      id,
      task: label,
    });
  };

  const removeTask = (taskId: string) =>
    (taskList.value = taskList.value.filter((task) => task.id !== taskId));

  const editTask = (taskId: string, newLabel: string) => {
    taskList.value = taskList.value.map((task) =>
      task.id === taskId ? { ...task, task: newLabel } : task
    );
  };

  const getTask = (id) => taskList.value.filter((t) => t.id == id);

  return {
    taskList,
    addTask,
    removeTask,
    editTask,
    getTask,
  };
};
