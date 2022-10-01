
// import CreateUploadText from './Components/CreateUploadText/createUploadText';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Landing from './Pages/landing';
import EditorPageMain from './Components/Editor-page/Editor-category/editor-page';
import EditorCreateText from './Components/Editor-page/EditorCreateText/CreateText';
import Footer from './Components/Footer/footer';

function Site() {
  return (

  <Router>
      <Routes>
        <Route exact path='/editor-page' element={<EditorPageMain />}/>
          <Route path='/editor-page/editor-create-text' element={<EditorCreateText/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/footer' element={<Footer/>} />
     </Routes>
  </Router>
  );
}

export default Site;
