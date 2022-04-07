import { useState } from "react";
import React from "react";
import Add from "./Addtodo";

function ItemList() {
  const [items, setitems] = useState([
    { name: "item 1", done: false },
    { name: "item 2", done: false },
    { name: "item 3", done: false },
  ]);

  const done = (index) => {
    const doneItem = [...items];
    doneItem[index].done = !doneItem[index].done;
    setitems(doneItem);
  };

  const AddTask = (newTask) => {
    const newItems = [...items];
    newItems.push({ name: newTask, done: false });
    setitems(newItems);
  };

  const Delete = (index) => {
    // setitems({
    //   todos: items.todos.splice(index, 1),
    //   ...items,
    // });
    const deleteItem = [...items];
    deleteItem.splice(index, 1);
    setitems(deleteItem);
  };

  return (
    <>
      <Add AddTask={AddTask} />
      <table className="container table table-dark w-50 bg-dark text-light my-3 text-center">
        <thead>
          <tr className="fw-bold">
            <td>Done</td>
            <td>To-Do</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => {
                      done(index);
                    }}
                  />
                </td>
                <td className={item.done === true ? "doneText" : ""}>
                  {item.name}
                </td>
                <td>
                  {/* <i
                    onClick={() => Delete(index)}
                    className="fa fa-trash text-danger cursor-pointer"
                    aria-hidden="true"
                  /> */}
                  <button
                    onClick={() => Delete(index)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ItemList;
