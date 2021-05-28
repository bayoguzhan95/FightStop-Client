import React from 'react'

const ImageCreateForm= ({ handleSubmit, handleChange,  values }) => {

    const { title } = values;
    return (
        <form onSubmit={handleSubmit}>

      <div className='form-group'>
          <label>Fotoğraf Başlığı</label>
          <input type='text' name='title' className='form-control' value={title} onChange={handleChange} required />
        </div>
        <button className='btn btn-outline-info'>Kaydet</button>
      </form>
    )
}

export default ImageCreateForm
