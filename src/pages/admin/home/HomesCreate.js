import { AiOutlineLoading  } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import FileUpload2 from '../../../components/forms/FileUpload2';
import AdminNav from '../../../components/nav/AdminNav';
import { createHome, getHomesByCount, removeHome } from '../../../functions/home';
import HomeCreateForm from '../../../components/forms/HomeCreateForm';
import AdminHomeCard from '../../../components/cards/AdminHomeCard';




const initialState = {
    title: '',
    images: [],
  };


const HomesCreate = () => {

    const [values, setValues] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [homes, setHomes] = useState([]);

    const { user } = useSelector((state) => ({ ...state }));
    useEffect(() => {
        loadAllHomes();
      }, []);


      const loadAllHomes = () => {
        setLoading(true);
        getHomesByCount(100)
          .then((res) => {
            setHomes(res.data);
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
          removeHome(slug, user.token)
            .then((res) => {
                loadAllHomes();
            })
            .catch((err) => {
              if (err.response.status === 400) toast.error(err.response.data);
              console.log(err);
            });
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        createHome(values, user.token)
          .then((res) => {
            console.log(res);
            window.alert(`"Home" is created`);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.response.data.err);
          });
      };
    
      const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
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
              <FileUpload2 values={values} setValues={setValues} setLoading={setLoading} />
            </div>
    
            <HomeCreateForm
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
                {homes.map((home) => (
                  <div key={home._id} className="col-md-4 pb-3">
                    <AdminHomeCard
                      home={home}
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

export default HomesCreate
