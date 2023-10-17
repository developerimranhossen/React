import { useState } from "react";


function App() {

  const [newItem, setNewItem] = useState('')
  const [items, setItem] = useState([])

 function addItem() {
  if(!newItem) {
    alert("please add new items")
    return; // return false; একই কথা তবে vanilla javascript-এ এমন ক্ষেত্রে return false;-ই লিখতে হয়।
  }
  const randomId = {
    id: Date.now(),
    value: newItem
  }

  setItem(oldItem => [...oldItem, randomId])
  setNewItem('') 
 }
 console.log(newItem);
 console.log(items);
  return (
    <>
    <h1>Todo App</h1>
    <input type="text"
    placeholder="add new items"
    value={newItem}
    onChange={e => setNewItem(e.target.value)}
     />
     <button onClick={addItem}>Add</button>
     <ul>
      {items.map(eachItem => {
        return(
          <li key={eachItem.id}>{eachItem.value}</li>
        )
      })}
     </ul>
    </>
  );
}

export default App;
