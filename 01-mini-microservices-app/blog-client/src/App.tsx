import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Microservices Blog</h1>
      <CreatePost />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
