import { revalidatePath } from "next/cache";
import Form from "../../components/Form";
import * as todoApi from "../../utils/todoApi";
import { redirect } from "next/navigation";

const CreateTodo = () => {
  const addNewTodo = async (title) => {
    "use server";
    await todoApi.addTodo(title);
    revalidatePath("/");
    redirect("/");
  };

  return (
    <div>
      <Form addNewTodo={addNewTodo} />
    </div>
  );
};
export default CreateTodo;
