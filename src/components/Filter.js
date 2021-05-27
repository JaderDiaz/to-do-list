import { useContext } from "react";
import { TodoListContext } from "../TodoListContext";

function Filter() {
   const { tags, filters, onChangeTag, onChangeText } = useContext(
      TodoListContext
   );

   return (
      <>
         <h4 className="mt-2">Filtros</h4>
         <div className="row border-bottom pb-2">
            <select
               className="col form-control w-25 mx-2"
               defaultValue={filters.tag}
               onChange={onChangeTag}
            >
               <option value="">-</option>
               {tags.map((item, i) => (
                  <option value={item} key={i}>
                     {item}
                  </option>
               ))}
            </select>
            <input
               className="col form-control"
               type="text"
               onChange={onChangeText}
            />
         </div>
      </>
   );
}
export default Filter;
