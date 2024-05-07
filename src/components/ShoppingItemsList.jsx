import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItems } from '../features/shoppingListSlice'

const ShoppingItemsList = () => {
    const itemsList = useSelector((state)=>state.shoppingList)
    console.log(itemsList);

    const dispatch =  useDispatch()

  return (
    <div><h2>ShoppingItemsList</h2>
        <ol>
            {itemsList.map(item=><li key={item.id}>
                <span>{item.title}</span>
                <button onClick={()=>dispatch(removeItems(item.id))}>Remove</button>
            </li>)}
        </ol>
    </div>
  )
}

export default ShoppingItemsList