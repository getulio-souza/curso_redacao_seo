
// import CreateUploadText from './Components/CreateUploadText/createUploadText';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Landing from './Pages/landing';
import EditorPageMain from './Components/Editor-page/editor-page';
import Footer from './Components/Footer/footer';

function Site() {
  return (

  <Router>
     <Routes>
        <Route path='/editor-page' element={<EditorPageMain/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/footer' element={<Footer/>} />
     </Routes>
  </Router>
  );
}

export default Site;
