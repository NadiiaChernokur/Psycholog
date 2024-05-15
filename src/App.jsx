import Header from './Header/Header.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from './Loader.jsx';

const MainPage = lazy(() => import('./MainPage/MainPage.jsx'));
const PsychologistPage = lazy(() =>
  import('./PsychologistsList/PsychologistsList.jsx')
);
const Favorits = lazy(() => import('./FavoriteList/FavoriteList.jsx'));
const LogIn = lazy(() => import('./LogIn/LogIn.jsx'));
const Registration = lazy(() => import('./Registration/Registration.jsx'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainPage />}></Route>
            <Route path="/psychologists" element={<PsychologistPage />}></Route>
            <Route path="/favorite" element={<Favorits />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
