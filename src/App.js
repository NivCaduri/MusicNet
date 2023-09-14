import Header from './header/Header';
import { Route, Routes } from 'react-router-dom';
import Welcome from './welcome/Welcome';
import New from './new/New';
import Login from './login/Login';
import OpenPost from './home/OpenPost';
import Survey from './survey/Survey';
import Piano from './piano/Piano';
import Logout from './logout/Logout';
import FollowingUsers from './FollowingUsers';
import { useSelector } from 'react-redux';
import Readme from './readme/Readme';
import MarketPlace from './home/MarketPlace';

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/new" element={<New />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/post/:id" element={<OpenPost />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/piano" element={<Piano />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/followingusers" element={<FollowingUsers />} />
          <Route path="/readme" element={<Readme />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
