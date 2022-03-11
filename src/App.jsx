import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { useAppSelector } from './redux/redux-hooks';

function App() {
  const logged = useAppSelector((state) => state.pollution.logged);

  return (
    <Routes>
      <Route
        path="/"
        element={logged ? <Navigate replace to="/home" /> : <Login />}
      />
      <Route path="/home/*" element={<Home />} />
    </Routes>
  );
}

export default App;
