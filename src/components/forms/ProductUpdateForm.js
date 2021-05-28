import React from 'react'

const ProductUpdateForm = ({
    handleSubmit,
    handleChange,
    
    values,
  }) => {
    // destructure
    const {
      title,
      description,
      
  
    } = values;
  
    return (
        
        <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input type='text' name='title' className='form-control' value={title} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label>Description</label>
          <input type='text' name='description' className='form-control' value={description} onChange={handleChange} />
        </div>

        <button className='btn btn-outline-info'>Save</button>
      </form>
    )
}

export default ProductUpdateForm
