import { InsertEmoticon } from "@material-ui/icons";
import React, { useState } from "react";
import Form from "./form";
import List from "./list";

const App = () => {
  let [list, setList] = useState({
    item: '',
  })
  //  change item 
  let eventChange = (e) => {
    const { name, value } = e.target;
    setList((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }
  //sub item
  let [items, setItems] = useState([])
  let subEvent = (e) => {
    setItems((oldItem) => {
      return [...oldItem, list.item]
    })
  }
  // delete item
  let delItem = (id) => {
    console.log("deleted")
   setItems((oldValue)=>{
        return oldValue.filter((elem,index)=>{
            return id !== index;
        })
   })
  }
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-9 col-md-4">
          <div className="card">
            <h1 className="text-center mt-4">ToDo App</h1>
            <div className="card-body">

              <Form
                click={subEvent}
                change={eventChange}
                name="item"
                value={list.item}
              />
              <ul className="mt-5">
                {items.map((elem, index) => {
                  return (
                    <List
                      key = {index}
                      id = {index}
                      click={delItem}
                      listitem={elem}
                    />)
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
