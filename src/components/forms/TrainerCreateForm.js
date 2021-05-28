import React from 'react'

const TrainerCreateForm = ({ handleSubmit, handleChange,  values }) => {
    
    // const { title, description,  specialTitle , specialItem  } = values;
    const { title, description } = values;
    return (
        <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Eğitmen Adı</label>
          <input type='text' name='title' className='form-control' value={title} onChange={handleChange} />
        </div>
  
        <div className='form-group'>
          <label>Eğitmen Açıklaması</label>
          <textarea type='text' name='description' className='form-control' value={description} onChange={handleChange} />
        </div>

        {/* <div className='form-group'>
          <label>Eğitmen Özellikleri Başlığı</label>
          <input type='text' name='specialTitle' className='form-control' value={specialTitle} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label>EğitmenÖzellikleri</label>
          <input type='text' name='specialItem' className='form-control' value={specialItem} onChange={handleChange} />
        </div> */}
      
  
        <button className='btn btn-outline-info'>Kaydet</button>
      </form>
    )
}

export default TrainerCreateForm
