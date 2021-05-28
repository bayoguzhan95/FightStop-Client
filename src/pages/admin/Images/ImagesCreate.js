
import { AiOutlineLoading  } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import AdminImageCard from '../../../components/cards/AdminImageCard';
import FileUpload from '../../../components/forms/FileUpload';
import ImageCreateForm from '../../../components/forms/ImageCreateForm';
import AdminNav from '../../../components/nav/AdminNav';
import { createImage, getImagesByCount, removeImage } from '../../../functions/image';



const initialState = {
    title: '',
    images: [],
  };

const ImagesCreate = () => {


    const [values, setValues] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
  
    const { user } = useSelector((state) => ({ ...state }));
    useEffect(() => {
        loadAllImages();
      }, []);
    
      
  const loadAllImages = () => {
    setLoading(true);
    getImagesByCount(100)
      .then((res) => {
        setImages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemove = (slug) => {
    // let answer = window.confirm("Delete?");
    if (window.confirm("Delete?")) {
      // console.log("send delete request", slug);
      removeImage(slug, user.token)
        .then((res) => {
            loadAllImages();
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
          console.log(err);
        });
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    createImage(values, user.token)
      .then((res) => {
        console.log(res);
        window.alert(`"Image" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

    return (
        <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2'>
            <AdminNav />
          </div>
    
          <div className='col-md-10'>
            { loading ? <AiOutlineLoading className="text-danger h1" /> : <h4>Fotoğraf Ekle</h4>}
            <hr/>
    
    
            <div className='pl-3 pb-3'>
              <FileUpload values={values} setValues={setValues} setLoading={setLoading} />
            </div>
    
            <ImageCreateForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              setValues={setValues}
              values={values}
            />
           <div className='pt-4'>
           <div className="col">
              {loading ? (
                <h4 className="text-danger">Loading...</h4>
              ) : (
                  <>
                <h4>Fotoğraf Sil</h4>
                <hr/>
                </>
              )}
              <div className="row">
                {images.map((image) => (
                  <div key={image._id} className="col-md-4 pb-3">
                    <AdminImageCard
                      image={image}
                      handleRemove={handleRemove}
                    />
                  </div>
                ))}
              </div>
            </div>
            </div>
         
         
          
          </div>
          
        </div>
      </div>
    )
}

export default ImagesCreate
