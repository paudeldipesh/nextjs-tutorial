import Link from "next/link";
import { getTask } from "@/utils/actions";
import { EditForm } from "@/components";

export default async function SingleTaskPage({ params }) {
  const task = await getTask(params.id);

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent capitalize">
          back to task
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
}
