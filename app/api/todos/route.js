import { NextResponse } from "next/server";
import Todo from "../../../models/todo";
import { connectToDB } from "../../../utils/db";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";

export const GET = async () => {
  try {
    await connectToDB();
    const todos = await Todo.find({});

    if (!todos) {
      return console.log("error");
    }

    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    return new Error(error);
  }
};

export const POST = async (req) => {
  try {
    await connectToDB();

    const { title } = await req.json();

    const newTodo = new Todo({
      title,
    });

    console.log(newTodo);

    await newTodo.save();

    console.log(newTodo);
    revalidateTag("todo");

    return NextResponse.json({ success: true, todo: newTodo }, { status: 200 });
  } catch (error) {
    return new Error(error);
  }
};
