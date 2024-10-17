import React, { useContext, useState } from "react";
import { TodoProviderWrapper } from "../providers/todo-provider/todo-provider";
import { DELETE_USER, EDIT_USER } from "../providers/todo-provider/todo-types";

export const CardWrapper = () => {
  const { data, dispatch } = useContext(TodoProviderWrapper);
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const deleteItem = (id) => {
    dispatch({ type: DELETE_USER, id });
  };

  const editItem = (id) => {
    const userToEdit = data.users.find((user) => user.id === id);
    if (userToEdit) {
      setEditingId(id);
      setEditInput(userToEdit.id); 
    }
  };

  const saveEdit = (id) => {
    dispatch({ type: EDIT_USER, payload: { id, id: editInput } }); 
    setEditingId(null);
    setEditInput("");
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <table className="table-auto w-full text-left border-collapse border border-gray-300 shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border border-gray-300 px-6 py-3">ID</th>
            <th className="border border-gray-300 px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.users?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-6 py-3">
                {editingId === item.id ? (
                  <input
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    className="border p-1"
                  />
                ) : (
                  item.id
                )}
              </td>
              <td className="border border-gray-300 px-6 py-3 flex gap-2">
                {editingId === item.id ? (
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                    onClick={() => saveEdit(item.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={() => editItem(item.id)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => deleteItem(item.id)}
                >
                  O'chirish
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
