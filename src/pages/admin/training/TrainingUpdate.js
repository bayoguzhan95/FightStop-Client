import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {  getTraining, updateTraining } from '../../../functions/training';

import FileUpload from '../../../components/forms/FileUpload';
// import TrainingCreateForm from '../../../components/forms/TrainingCreateForm';
import TrainingUpdateForm from '../../../components/forms/TrainingUpdateForm';

const initialState = {
  title: '',
  description: '',
  images: [],
};

const TrainingUpdate =({ match, history }) => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialState);

  const { user } = useSelector((state) => ({ ...state }));

  const { slug } = match.params;

  useEffect(() => {
    loadAllTraining();
  }, []);

  const loadAllTraining = () => {
    getTraining(slug).then((p) => {
      // console.log("single product", p);
      setValues({ ...values, ...p.data });
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    updateTraining(slug, values, user.token)
      .then((res) => {
        setLoading(false);
        toast.success(`"${res.data.title}" is updated`);
        history.push("/admin/trainings");
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
                <h4 className='mb-2'>Ders Düzenle</h4>

                <div className='p-3'>
                  <FileUpload values={values} setValues={setValues} setLoading={setLoading} />
                </div>

                <TrainingUpdateForm
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
  );
};

export default TrainingUpdate;
