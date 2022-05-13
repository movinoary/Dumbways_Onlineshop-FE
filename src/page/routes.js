import React from 'react'
import * as Page from './index'
import * as Components from '../components/index'
import { Routes, Route } from 'react-router-dom'

const RouteUser = () => {
  return (
    <>
    <Components.NavUser />
    <Routes>
        <Route exact path='/' element={<Page.Product />}/>
        <Route exact path='product/1' element={<Page.DetailProduct />} />
        <Route exact path='complain' element={<Page.Complain />} />
        <Route exact path='profile' element={<Page.Profile />} />
    </Routes>
    </>
  )
}

const RouteAdmin = () => {
    return (
      <>
      <Components.NavAdmin />
      <Routes>
        <Route exact path='/' element={<Page.Product/>} />
        <Route exact path='list-category' element={<Page.ListCategory/>} />
        <Route exact path='list-category/1' element={<Page.EditCategory/>} />
        <Route exact path='list-product' element={<Page.ListProduct/>} />
        <Route exact path='list-product/1' element={<Page.EditProduct/>} />
        <Route exact path='complain' element={<Page.Complain />} />
      </Routes>
      </>
    )
  }

export {RouteUser, RouteAdmin}