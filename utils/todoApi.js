export const getTodos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    console.log("error");
  }

  return res.json();
};

export const addTodo = async (title) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`, {
    next: { revalidate: 0 },
    method: "POST",
    body: JSON.stringify({ title }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (res.ok) {
    console.log(await res.json());
  }
};
