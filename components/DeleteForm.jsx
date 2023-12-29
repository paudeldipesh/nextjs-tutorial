"use client";
import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-xs btn-error capitalize" disabled={pending}>
      {pending ? "pending..." : "delete"}
    </button>
  );
};

export default function DeleteForm({ id }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
}
