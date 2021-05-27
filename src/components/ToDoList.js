import { useState } from "react";

import ToDoListTitle from "./ToDoListTitle";
import ToDoListItem from "./ToDoListItem";
import Tags from "./Tags";
import Filter from "./Filter";
import { TodoListContext } from "../TodoListContext";

function ToDoList() {
   const originList = () => {
      return JSON.parse(window.localStorage.getItem("ToDoListData") || "[]");
   };
   const originTags = () => {
      return JSON.parse(window.localStorage.getItem("ToDoListTags") || "[]");
   };

   const [data, setFullData] = useState(originList);
   const [tags, setFullTags] = useState(originTags);
   const [filters, setFilters] = useState({ tag: "", text: "" });

   const setTags = (data) => {
      setFullTags(data);
      window.localStorage.setItem("ToDoListTags", JSON.stringify(data));
   };

   const onAddTags = () => {
      const input = document.getElementById("input-tag");
      setTags([...tags, input.value]);
      input.value = "";
   };

   const onChangeTag = (e) => {
      setFilters({
         ...filters,
         tag: e.target.value,
      });
   };

   const onChangeText = (e) => {
      setFilters({
         ...filters,
         text: e.target.value,
      });
   };

   const onChangeItem = (e, i) => {
      let oldItem = data[i];
      if (e.target.type === "text") {
         oldItem.text = e.target.value;
      }
      if (e.target.type === "checkbox") {
         oldItem.status = e.target.checked;
      }
      if (e.target.type === "select-one") {
         oldItem.tag = e.target.value;
      }
      setData(data.map((item, k) => (i === k ? oldItem : item)));
   };

   const onDelete = (i) => {
      setData(data.filter((item, k) => k !== i));
   };
   const setData = (data) => {
      setFullData(data);
      window.localStorage.setItem("ToDoListData", JSON.stringify(data));
   };

   const getData = () => {
      return data.filter((item) => {
         let show = true;
         if (filters.tag) show = item.tag === filters.tag;
         if (filters.text) show = item.text.indexOf(filters.text) > -1;
         return show;
      });
   };

   const onClick = () => {
      setData([
         ...data,
         {
            status: false,
            text: "",
            tag: "",
         },
      ]);
   };

   const valueContex = {
      getData,
      setFullData,
      tags,
      setFullTags,
      filters,
      setFilters,
      setTags,
      onAddTags,
      onChangeTag,
      onChangeText,
      onChangeItem,
      onDelete,
   };

   return (
      <TodoListContext.Provider value={valueContex}>
         <div className="to-do-list">
            <ToDoListTitle title="Mis Notas" />
            <Tags />
            <Filter />
            <ToDoListItem />
            <div className="row border-top pt-2 mt-4">
               <div className="col text-end">
                  <button className="btn btn-outline-dark" onClick={onClick}>
                     📃 Agregar
                  </button>
               </div>
            </div>
         </div>
      </TodoListContext.Provider>
   );
}

export default ToDoList;
