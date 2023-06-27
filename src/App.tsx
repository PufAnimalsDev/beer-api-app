import { Route, Routes } from 'react-router-dom';
import { BeersPage } from './Pages/BeersPage/BeersPage';
import './App.scss';

export const App = () => (
  <div className='main'>
    <Routes>
      <Route path='/' element={<BeersPage />}>
        <Route path='details/:beerId' element={<BeersPage />} />
      </Route>
    </Routes>
  </div>
);