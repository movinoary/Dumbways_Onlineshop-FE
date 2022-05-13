import { Route, Routes } from 'react-router-dom';
import * as Page from './page/index'

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Page.Home />} />
      <Route path='/user' element={<Page.RouteUser />}>
        <Route exact path='product/1' element={<Page.DetailProduct />} />
        <Route exact path='complain' element={<Page.Complain />} />
        <Route exact path='profile' element={<Page.Profile />} />
      </Route>
      <Route path='/admin' element={<Page.RouteAdmin/>}>
        <Route exact path='list-category' element={<Page.ListCategory />} />
        <Route exact path='list-category/1' element={<Page.EditCategory/>} />
        <Route exact path='list-product' element={<Page.ListProduct />} />
        <Route exact path='list-product/1' element={<Page.EditProduct/>} />
        <Route exact path='complain' element={<Page.Complain />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
