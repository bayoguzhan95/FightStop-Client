import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { AiOutlineLoading  } from 'react-icons/ai';

import FileUpload from '../../../components/forms/FileUpload';
import { createTrainer, getTrainersByCount, removeTrainer } from '../../../functions/trainer';
import TrainerCreateForm from '../../../components/forms/TrainerCreateForm';
import AdminTrainerCard from '../../../components/cards/AdminTrainerCard';

const initialState = {
  title: '',
  description: '',
  images: [],
};

const TrainerCreate = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [trainers, setTrainers] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));



  useEffect(() => {
    loadAllTrainers();
  }, []);

  const loadAllTrainers = () => {
    setLoading(true);
    getTrainersByCount(100)
      .then((res) => {
        setTrainers(res.data);
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
      removeTrainer(slug, user.token)
        .then((res) => {
            loadAllTrainers();
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
    createTrainer(values, user.token)
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
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-2'>
        <AdminNav />
      </div>

      <div className='col-md-10'>
        { loading ? <AiOutlineLoading className="text-danger h1" /> : <h4>Eğitmen Oluştur</h4>}
        <hr/>


        <div className='pl-3 pb-3'>
          <FileUpload values={values} setValues={setValues} setLoading={setLoading} />
        </div>

        <TrainerCreateForm
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
            <h4>Eğitmen Düzenle</h4>
            <hr/>
            </>
          )}
          <div className="row">
            {trainers.map((trainer) => (
              <div key={trainer._id} className="col-md-4 pb-3">
                <AdminTrainerCard
                  trainer={trainer}
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
  );
};

export default TrainerCreate;
