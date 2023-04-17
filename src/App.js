import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes ,Route} from "react-router-dom";
import Home from './routes/Home';
import Menu from './routes/Menu';
import Bitkiler from './routes/bitkiler';
import Footer from './routes/footer';
import Online from './routes/Online';
import Hakkimda from './routes/Hakkimda';



function App() {
  return (  
    <div className="App">

  

    <Routes>
      <Route path='/' element={<Menu/>}>
      <Route  index element={<Home/>}></Route>
      <Route path='/bitkiler' element={<Bitkiler/>}></Route>
      <Route path='/Online' element={<Online/>}> </Route>
      <Route path='/Hakkimda' element={<Hakkimda/>}></Route>
      </Route>
    </Routes>
<Footer>
  
</Footer>


    </div>
  );
}

export default App;


