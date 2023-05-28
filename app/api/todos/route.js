import { NextResponse } from "next/server";
import Todo from "../../../models/todo";
import { connectToDB } from "../../../utils/db";

export const GET = async () => {
  try {
    await connectToDB();
    const todos = await Todo.find({});

    if (!todos) {
      return console.log("error");
    }

    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (error) {
    return new Error(error);
  }
};

export const POST = async (req) => {
  try {
    await connectToDB();

    const { title } = await req.json();

    console.log(title);

    const newTodo = new Todo({
      title,
    });

    await newTodo.save();
    console.log(newTodo);

    return new Response(JSON.stringify(newTodo), { status: 200 });
  } catch (error) {
    return new Error(error);
  }
};
