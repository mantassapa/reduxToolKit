import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addItems, addAsync } from '../features/shoppingListSlice'


const AddItems = () => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()

    const handleAddItem =(e)=>{
        e.preventDefault()

        // dispatch(addItems(inputValue))
        dispatch(addAsync(inputValue))
        setInputValue('')
    }

  return (
    <div>
        <h2>AddItems</h2>
        <form onSubmit={handleAddItem}>
            <label>Item:</label>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    
    </div>
  )
}

export default AddItems