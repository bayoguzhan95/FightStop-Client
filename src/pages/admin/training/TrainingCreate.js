import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createTraining, getTrainingsByCount, removeTraining } from '../../../functions/training';

import { AiOutlineDelete ,AiOutlineEdit  } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import FileUpload from '../../../components/forms/FileUpload';
import TrainingCreateForm from '../../../components/forms/TrainingCreateForm';

const initialState = {
  title: '',
  description: '',
  images: [],
};

const TrainingCreate = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialState);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllTraining();
  }, []);

  const loadAllTraining = () => {
    setLoading(true);
    getTrainingsByCount(100)
      .then((res) => {
        setTrainings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemove = (slug) => {
    // let answer = window.confirm("Delete?");
    if (window.confirm('Silmek istediğinize emin misiniz?')) {
      // console.log("send delete request", slug);
      removeTraining(slug, user.token)
        .then((res) => {
          loadAllTraining();
          toast.error(`${res.data.title} is deleted`);
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
          console.log(err);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTraining(values, user.token)
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" is created`);
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
    <>
    {/* <div className='navbar_for_others'></div> */}
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
                <h4 className='mb-2'>Ders Oluştur</h4>

                <div className='p-3'>
                  <FileUpload values={values} setValues={setValues} setLoading={setLoading} />
                </div>

                <TrainingCreateForm
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  setValues={setValues}
                  values={values}
                />
              </div>
            </>
          )}


          <hr />
      
          {trainings.map((c) => (
            <div className='alert alert-secondary' key={c._id}>
              <span> <b> Ders Adı : </b> {c.title}</span>
              

              <span onClick={() => handleRemove(c.slug)} className='btn btn-sm float-right'>
                <AiOutlineDelete className='text-danger' />
              </span>
              <Link to={`/admin/training/${c.slug}`}>
                <span className='btn btn-sm float-right'>
                  <AiOutlineEdit className='text-warning' />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default TrainingCreate;
