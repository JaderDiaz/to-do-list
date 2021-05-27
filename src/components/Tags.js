import {useContext} from "react";
import {TodoListContext} from "../TodoListContext";

function Tags() {

    const { onAddTags } = useContext(TodoListContext);
      
    return (
        <div className="row border-bottom pb-2">
            <div className="col-8">
                <input className="form-control form-control-sm" type="text" id="input-tag"/>
            </div>
            <div className="col">
                <button className="btn btn-outline-dark btn-sm"
                   onClick={onAddTags}>Agregar Categoría</button>
            </div>
        </div>
    );
}
export default Tags
