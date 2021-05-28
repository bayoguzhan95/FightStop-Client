import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { useSelector } from 'react-redux';
import FileUpload from '../../../components/forms/FileUpload';
import { AiOutlineLoading  } from 'react-icons/ai';
import { toast } from 'react-toastify';
import TrainerUpdateForm from '../../../components/forms/TrainerUpdateForm';
import { getTrainer, updateTrainer } from '../../../functions/trainer';

const initialState = {
  title: '',
  description: '',
  images: [],
};
const TrainerUpdate = ({ match, history }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  const { slug } = match.params;

  useEffect(() => {
    loadTrainer();
  }, []);

  const loadTrainer = () => {
    getTrainer(slug).then((p) => {
      // console.log("single product", p);
      setValues({ ...values, ...p.data });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    updateTrainer(slug, values, user.token)
      .then((res) => {
        setLoading(false);
        toast.success(`"${res.data.title}" is updated`);
        history.push('/admin/trainers');
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

        <div className='col-md-10'>
          {loading ? <AiOutlineLoading className='text-danger h1' /> : <h4>Eğitmen Düzenle</h4>} <hr />
          {/* {JSON.stringify(match.params.slug)} */}
          {/* {JSON.stringify(values)} */}
          <div className='p-3'>
            <FileUpload values={values} setValues={setValues} setLoading={setLoading} />
          </div>
          <br />
          <TrainerUpdateForm handleSubmit={handleSubmit} handleChange={handleChange} setValues={setValues} values={values} />
        </div>
      </div>
    </div>
  );
};

export default TrainerUpdate;
