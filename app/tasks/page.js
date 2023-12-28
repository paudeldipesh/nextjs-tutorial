import { TaskForm, TaskList } from "@/components";

export default function TasksPage() {
  return (
    <div className="max-w-lg">
      <TaskForm />
      <TaskList />
    </div>
  );
}
