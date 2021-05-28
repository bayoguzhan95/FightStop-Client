import React from 'react';
import AdminNav from '../../components/nav/AdminNav';

const AdminDashboard = () => {
  return (
    <>
    {/* <div className='navbar_for_others'></div> */}
    <div className='container-fluid admin__nav'>
      <div className='row'>
        <div className='col-md-2'>
          <AdminNav />
        </div>
        <h4>ADMİN DASHBOARD</h4>
      </div>
    </div>

    </>
  );
};

export default AdminDashboard;
