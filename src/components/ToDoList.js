import {useState} from 'react';

import ToDoListTitle from "./ToDoListTitle";
import ToDoListItem from "./ToDoListItem"
import Tags from "./Tags";
import Filter from "./Filter";

function ToDoList() {

    const originList = () => {
        return JSON.parse(window.localStorage.getItem('ToDoListData') || '[]');
    }
    const originTags = () => {
        return JSON.parse(window.localStorage.getItem('ToDoListTags') || '[]');
    }

    const [data, setFullData] = useState(originList);
    const [tags, setFullTags] = useState(originTags);
    const [filters, setFilters] = useState({tag:'',text:''});

    const setData = (data) => {
        setFullData(data)
        window.localStorage.setItem('ToDoListData', JSON.stringify(data));
    }

    const onClick = () => {
        setData([...data, {
            status: false,
            text: '',
            tag: ''
        }]);
    }

    const getData = () => {
        return data.filter(item => {
            let show = true;
            if (filters.tag)
                show = item.tag === filters.tag
            if (filters.text)
                show = item.text.indexOf(filters.text) > -1
            return show;
        });
    }

    return (
        <div className='to-do-list'>
            <ToDoListTitle title='Mis Notas'/>
            <Tags tags={tags} setFullTags={setFullTags}/>
            <Filter tags={tags} filters={filters} setFilters={setFilters} />
            <ToDoListItem data={getData()} tags={tags}  setData={setData}/>
            <div className="row border-top pt-2 mt-4">
                <div className="col text-end">
                    <button className='btn btn-outline-dark' onClick={onClick}>
                        📃 Agregar
                    </button>
                </div>
            </div>

        </div>
    );
}

export default ToDoList;
