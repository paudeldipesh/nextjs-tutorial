"use client";
import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item capitalize"
      disabled={pending}
    >
      {pending ? "Please wait..." : "create task"}
    </button>
  );
};

const initialState = {
  message: null,
};

export default function TaskFormCustom() {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "failed") {
      toast.error("There was an error.");
      return;
    }
    if (state.message) {
      toast.success("Task created.");
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here..."
          name="content"
          required
          autoComplete="off"
        />
        <SubmitButton />
      </div>
    </form>
  );
}
