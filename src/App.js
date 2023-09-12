import Header from './header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Welcome from './welcome/Welcome';
import New from './new/New';
import Login from './login/Login';
import OpenPost from './home/OpenPost';
import Survey from './survey/Survey';
import Piano from './piano/Piano';
import Logout from './logout/Logout';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/new" element={<New />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<OpenPost />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/piano" element={<Piano />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
