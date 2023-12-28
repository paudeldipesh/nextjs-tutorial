import { createTask } from "@/utils/actions";

const createTaskServer = async (data) => {
  "use server";
  return createTask(data);
};

export default function TaskForm() {
  return (
    <form action={createTaskServer}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here..."
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item capitalize">
          create task
        </button>
      </div>
    </form>
  );
}
