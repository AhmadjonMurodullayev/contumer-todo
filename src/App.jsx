import { useForm } from "react-hook-form";
import { CardWrapper } from "./components/card-wrapper";
import { TodoProviderWrapper } from "./providers/todo-provider/todo-provider";
import React from "react";
import { ADD_USER } from "./providers/todo-provider/todo-types";
import { nanoid } from "nanoid";

function App() {
  const { register, handleSubmit, reset } = useForm();
  const { dispatch } = React.useContext(TodoProviderWrapper);

  const submit = (data) => {
    dispatch({ type: ADD_USER, value: { ...data, id: nanoid() } });
    reset();
  };

  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">
            First Name
          </label>
          <input
            {...register("user_name")}
            id="user_name"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter first name"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
      <CardWrapper />
    </div>
  );
}

export default App;
