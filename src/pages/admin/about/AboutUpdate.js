import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getAbout , updateAbout} from '../../../functions/about'
import FileUpload from '../../../components/forms/FileUpload';
import AboutUpdateForm from '../../../components/forms/AboutUpdateForm';

const initialState = {
    title: '',
    description: '',
    images: [],
  };

const AboutUpdate =({ match, history }) => {

    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(initialState);
  
    const { user } = useSelector((state) => ({ ...state }));
  
    const { slug } = match.params;


    useEffect(() => {
        loadAllAbout();
      }, []);
    
      const loadAllAbout = () => {
        getAbout(slug).then((p) => {
          // console.log("single product", p);
          setValues({ ...values, ...p.data });
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    
        updateAbout(slug, values, user.token)
          .then((res) => {
            setLoading(false);
            toast.success(`"${res.data.title}" is updated`);
            history.push("/admin/abouts");
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
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

        <div className='col'>
          {loading ? (
            <h4 className='text-danger'>Loading...</h4>
          ) : (
            <>
              <div className='mb-5'>
                <h4 className='mb-2'>Hakkımızda Düzenle</h4>

                <div className='p-3'>
                  <FileUpload values={values} setValues={setValues} setLoading={setLoading} />
                </div>

                <AboutUpdateForm
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  setValues={setValues}
                  values={values}
                />
              </div>
            </>
          )}

        
        </div>
      </div>
    </div>
    )
}

export default AboutUpdate
