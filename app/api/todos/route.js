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

    await newTodo.save();

    return NextResponse.json(newTodo, { status: 200 });
  } catch (error) {
    return new Error(error);
  }
};
