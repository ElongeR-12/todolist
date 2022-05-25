import React from 'react'

const Todo = ({todo}) => {
  return (
    <div>
        <p>
          <input
            type="checkbox"
            defaultChecked={todo?.state}
          />
         <span>{todo?.title}</span>
        </p>
    </div>
  )
}

export default Todo