import { useContext } from "react";
import { TodoListContext } from "../TodoListContext";
import Item from "./Item";

function ToDoListItem() {
   const { getData, tags, onChangeItem, onDelete } = useContext(
      TodoListContext
   );

   return (
      <>
         {getData().map((item, i) => (
            <Item
               {...item}
               tags={tags}
               key={i}
               onChangeItem={(e) => onChangeItem(e, i)}
               onDelete={() => onDelete(i)}
            />
         ))}
      </>
   );
}

export default ToDoListItem;
