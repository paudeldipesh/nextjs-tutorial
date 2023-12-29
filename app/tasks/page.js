import { TaskFormCustom, TaskList } from "@/components";

export default function TasksPage() {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskList />
    </div>
  );
}
