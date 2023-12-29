import Link from "next/link";
import { DeleteForm } from ".";
import { getAllTasks } from "@/utils/actions";

export default async function TaskList() {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;
  }

  return (
    <ul className="mt-8">
      {tasks.map(({ id, content, completed }) => (
        <li
          key={id}
          className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
        >
          <h2
            className={`text-lg capitalize ${
              completed ? "line-through" : null
            }`}
          >
            {content}
          </h2>

          <div className="flex gap-6 items-center">
            <Link
              href={`/tasks/${id}`}
              className="btn btn-accent btn-xs capitalize"
            >
              edit
            </Link>
            <DeleteForm id={id} />
          </div>
        </li>
      ))}
    </ul>
  );
}
