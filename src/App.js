
import './App.css';
import { Routes,Route } from 'react-router-dom';
import AddPostForm from './features/counter/AddPostForm';
/* import Counter from './features/counter/Counter'; */
import PostItems from './features/counter/PostItems';
import Layout from './features/counter/Layout';
import SinglePagePost from './features/counter/SinglePagePost';


function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<PostItems />} />
      <Route path="post">
          <Route index element={<AddPostForm />} />
         <Route path=":postId" element={<SinglePagePost />} />
      </Route>
      </Route>
    </Routes>
   
    
  )
}

export default App;
