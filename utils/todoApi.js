const BASE_URL = "http://localhost:3000";

export const getTodos = async () => {
  const res = await fetch(`${BASE_URL}/api/todos`, { next: { revalidate: 0 } });

  if (!res.ok) {
    console.log("error");
  }

  return res.json();
};

export const addTodo = async (title) => {
  const res = await fetch(`${BASE_URL}/api/todos`, {
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
