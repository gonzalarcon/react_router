import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Contact } from '../views/Contacts';
import { Home } from '../views/Home';
import { Nav } from './Nav'


const router = createBrowserRouter(
    createRoutesFromElements(
    <Route element={<Nav />}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />     
    </Route>            
    )
  );

export default router