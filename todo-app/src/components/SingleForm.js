import React from 'react'

const SingleForm = ( { actionText, submitAction } ) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        submitAction(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          { actionText }
        </button>
      </form>
    </div>
  )
}

export default SingleForm