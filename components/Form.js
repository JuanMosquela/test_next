"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

const Form = ({ addNewTodo }) => {
  const [title, setTitle] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    startTransition(() => {
      addNewTodo(title);
    });

    setTitle("");
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese us todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">add todo</button>
    </form>
  );
};
export default Form;
