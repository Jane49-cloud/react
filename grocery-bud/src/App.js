import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] =useState('')
  const [list,setList ] =useState(getLocalStorage())
  const[isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const[alert, setAleart] =useState({show:false, msg:'', type:""})

  useEffect(()=>{
localStorage.setItem('list', JSON.stringify(list))
  },[list])

const handleSubmit =((e)=>{
  e.preventDefault()
  if(!name){
    showAlert(true,'Please enter value',"danger")
  }  
  else if(name && isEditing){
  showAlert(true, 'item edited', 'success')
  setList(list.map((item)=>{
    if(item.id ===editId){
      return{...item, title :name }
    }
 return item
  }))
  setName('')
  setEditId(null)
  setIsEditing(false)
  }
  else{
    showAlert(true, 'item added to the list', 'success')
    const newItem ={id: new Date().getTime().toString(), title:name}
    setList([...list, newItem ])
    setName('')

  }
})

const showAlert=((show=false, msg="", type = "") =>{
  setAleart({show, type,msg})
})


const clearList = ()=>{
  showAlert(true, "Empty List" , 'danger' )
  setList([])
}
 const removeItem = (id)=>{
  showAlert(true, 'item removed', 'danger')
 setList(list.filter((item)=>item.id !==id))
  
 }
 
 const editItem =(id)=>{
const specificItem =list.find((item)=>item.id == id);
setIsEditing(true)
setEditId(id)
setName(specificItem.title)
 }

  return <section className="section-center">
<form className='grocery-form' onSubmit ={handleSubmit}>
  {alert.show && <Alert {...alert} removeAlert={showAlert} list ={list} ></Alert>}
  <h3>grocery bud</h3>
  <div className="form-control">
    <input type="text" className='grocery' placeholder='eg eggs' onChange={(e)=>setName(e.target.value)} />
    <button className='submit-btn' type='submit' > {isEditing ? "edit" :'Submit'} </button>
   
  </div>
</form>
{list.length> 0 &&
  <div  className='grocery-container'>
      <List items = {list} removeItem ={removeItem} editItem ={editItem} ></List>
      <button className="clear-btn" onClick={clearList}>clear items </button>
    </div>
}
    
  </section>
}

export default App
