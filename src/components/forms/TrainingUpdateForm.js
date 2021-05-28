import React from 'react'

const TrainingUpdateForm = ({
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
          <label>Dersin-Adı</label>
          <input type='text' name='title' className='form-control' value={title} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label>Dersin Açıklaması</label>
          <textarea type='text' name='description' className='form-control' value={description} onChange={handleChange} />
        </div>

        <button className='btn btn-outline-info'>Kaydet</button>
      </form>
    )
}

export default TrainingUpdateForm
