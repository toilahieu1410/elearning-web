import React from "react"

const Updating = (props) => {

  const {content} = props

  return (
    <div className='updating'>
      {content ? (
        content
      ) : (
        'Khóa học đang được cập nhật, hãy quay lại sau nhé...!'
      )}
    </div>
  )
}

export default Updating