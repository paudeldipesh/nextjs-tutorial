import { createTask } from "@/utils/actions";

export default function TaskForm() {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here..."
          name="content"
          required
          autoComplete="off"
        />
        <button type="submit" className="btn btn-primary join-item capitalize">
          create task
        </button>
      </div>
    </form>
  );
}
