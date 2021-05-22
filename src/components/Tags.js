function Tags({tags, setFullTags}) {

    const setTags = (data) => {
        setFullTags(data)
        window.localStorage.setItem('ToDoListTags', JSON.stringify(data));
    }

    const onAddTags = _ => {
        const input = document.getElementById('input-tag');
        setTags([...tags, input.value])
        input.value = '';
    }

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