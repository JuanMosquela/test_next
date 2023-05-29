import { revalidatePath } from "next/cache";
import Form from "../../components/Form";
import * as todoApi from "../../utils/todoApi";

const CreateTodo = () => {
  const addNewTodo = async (title) => {
    "use server";
    await todoApi.addTodo(title);
    revalidatePath("/");
  };

  return (
    <div>
      <Form addNewTodo={addNewTodo} />
    </div>
  );
};
export default CreateTodo;
