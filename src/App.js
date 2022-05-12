import { Route, Routes } from 'react-router-dom';
import { Nav } from './components';
import * as Page from './page/index'

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Page.Home />} />
      <Route path='/product' element={<Page.Product />} />
      <Route path='/product/1' element={<Page.DetailProduct />} />
      <Route path='/complain' element={<Page.Complain />} />
      <Route path='/profile' element={<Page.Profile />} />
    </Routes>
    </>
  );
}

export default App;
