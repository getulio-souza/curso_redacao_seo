
// import CreateUploadText from './Components/CreateUploadText/createUploadText';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Landing from './Pages/landing';
import EditorPage from './Pages/editor';
import Footer from './Components/Footer/footer';

function Site() {
  return (

  <Router>
     <Routes>
        <Route path='/editor' element={<EditorPage/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/footer' element={<Footer/>} />
     </Routes>
  </Router>
  );
}

export default Site;
