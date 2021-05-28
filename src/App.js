import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Suspense, lazy, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';
import { currentUser } from './functions/auth';


// FOR ADMİN

const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(()=> import('./pages/auth/Register'));
const RegisterComplete = lazy(()=> import('./pages/auth/RegisterComplete'));
const ForgotPassword = lazy(()=> import('./pages/auth/ForgotPassword'));
const AdminRoute = lazy(() => import('./components/routes/AdminRoute'));

const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const TrainingUpdate = lazy(() => import('./pages/admin/training/TrainingUpdate'));
const TrainingCreate = lazy(() => import('./pages/admin/training/TrainingCreate'));
const TrainerCreate = lazy(() => import('./pages/admin/trainer/TrainerCreate'));
const TrainerUpdate = lazy(() => import('./pages/admin/trainer/TrainerUpdate'));
const AboutCreate = lazy(() => import('./pages/admin/about/AboutCreate'));
const AboutUpdate = lazy(() => import('./pages/admin/about/AboutUpdate'));
const ImagesCreate = lazy(() => import('./pages/admin/Images/ImagesCreate'));
const HomesCreate = lazy(() => import('./pages/admin/home/HomesCreate'));

// USER

const Footer = lazy(() => import('./components/footer/Footer'));
const Header = lazy(() => import('./components/nav/Header'));

const Trainings = lazy(() => import('./pages/AllUserPage/Trainings'));
const Training = lazy(() => import('./pages/AllUserPage/Training'));
const Home = lazy(() => import('./pages/AllUserPage/Home'));
const About = lazy(() => import('./pages/AllUserPage/About'));
const Trainer = lazy(() => import('./pages/AllUserPage/Trainer'));
const Hygiene = lazy(() => import('./pages/AllUserPage/Hygiene'));
const Gallery = lazy(() => import('./pages/AllUserPage/Gallery'));
const Contact = lazy(() => import('./pages/AllUserPage/Contact'));
const Trainers = lazy(() => import('./pages/AllUserPage/Trainers'));



const App = () => {
  const dispatch = useDispatch();



  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        // console.log('user', user);
        // Userimizin sahip olduğu özellikleri alıyoruz server tarafından refresh yapsak dahi kalicak.
        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: 'LOGGED_IN_USER',
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <Suspense fallback={<div className='col text-center p-5'>Yükleniyor...</div>}>
      <Router>
        <Header />

        <ToastContainer />

        <AnimatePresence>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/hakkimizda' component={About} exact />
            <Route path='/egitimler' component={Trainings} exact />
            <Route path='/egitimler/:slug' component={Training} exact />
            <Route path='/antrenörlerimiz' component={Trainers} exact />
            <Route path='/antrenörlerimiz/:slug' component={Trainer} exact />
            <Route path='/hijyen' component={Hygiene} exact />
            <Route path='/fotograflar' component={Gallery} exact />
            <Route path='/iletisim' component={Contact} exact />

            <Route path='/login' component={Login} exact />
             <Route exact path='/register' component={Register} />
            <Route exact path='/register/complete' component={RegisterComplete} />
            <Route exact path='/forgot/password' component={ForgotPassword} />  

            <AdminRoute path='/admin/dashboard' component={AdminDashboard} exact />

            <AdminRoute path='/admin/trainings' component={TrainingCreate} exact />
            <AdminRoute path='/admin/training/:slug' component={TrainingUpdate} exact />

            <AdminRoute path='/admin/trainers' component={TrainerCreate} exact />
            <AdminRoute path='/admin/trainer/:slug' component={TrainerUpdate} exact />

            <AdminRoute path='/admin/abouts' component={AboutCreate} exact />
            <AdminRoute path='/admin/about/:slug' component={AboutUpdate} exact />

            <AdminRoute path='/admin/images' component={ImagesCreate} exact />
            <AdminRoute path='/admin/homes' component={HomesCreate} exact />
          </Switch>
        </AnimatePresence>

        <Footer />
      </Router>
    </Suspense>
  );
};

export default App;
