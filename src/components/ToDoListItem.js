import Item from "./Item";

function ToDoListItem({ data, tags, setData }) {

    const onChangeItem = (e, i) => {
        let oldItem = data[i];
        if (e.target.type === 'text') {
            oldItem.text = e.target.value;
        }
        if (e.target.type === 'checkbox') {
            oldItem.status = e.target.checked;
        }
        if (e.target.type === 'select-one') {
            oldItem.tag = e.target.value;
        }
        setData(data.map((item, k) => (i === k ? oldItem : item)))
    }

    const onDelete = (i) => {
        setData(data.filter((item, k) => (k !== i) ));
    }

    return (
        <>
            {
                data.map((item, i) =>
                    <Item {...item} tags={tags} key={i} onChangeItem={(e) => onChangeItem(e, i)} onDelete={() => onDelete(i)}/>
                )
            }
        </>
    );
}

export default ToDoListItem;