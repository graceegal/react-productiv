import React from "react";
import { v4 as uuid } from "uuid";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ todo }) {
  const { id, title, description, priority } = todo;

  // FIXME: want all ID's to have uuid's but initial todos that are passed in on
  // initial render are integers (we took the uuid functionality out of TodoApp create
  // function so thinking we need to add here?)

  // id = uuid();

  return (
    <div key={id} id={id} className="Todo">
      <div><b>{title}</b> <small>(priority: {priority})</small></div>
      <div><small>{description}.</small></div>
    </div>
  );
}

export default Todo;
