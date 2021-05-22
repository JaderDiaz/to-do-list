function Item({ onChangeItem,onDelete, status, text, index, tag, tags }) {
    return (
        <div className="form-check to-do-list-item" >
            <input className="form-check-input" onChange={onChangeItem} type="checkbox" defaultChecked={status}/>
            <select className="form-control w-25 mx-2" onChange={onChangeItem} value={tag}>
                <option value="">-</option>
                {
                    tags.map((item, i) => <option value={item} key={i} >{item}</option>)
                }
            </select>
            <input className="form-control" onChange={onChangeItem} type="text" value={text} />
            <span className="action-delete" onClick={onDelete}>🔥</span>
        </div>
    );
}

export default Item;