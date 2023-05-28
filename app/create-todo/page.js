import Form from "../../components/Form";
import * as todoApi from "../../utils/todoApi";

const CreateTodo = () => {
  const addNewTodo = async (title) => {
    "use server";
    await todoApi.addTodo(title);
  };

  return (
    <div>
      <Form addNewTodo={addNewTodo} />
    </div>
  );
};
export default CreateTodo;
