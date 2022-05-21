import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false); //to show modal window upon button press
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const createPost = (newPost) => {
        // @ts-ignore
        setPosts([...posts, newPost]); //here is used the
        // spread operator and adding newPost into posts array
        setModal(false);
    }
//get from children component
    const removePost = (post) => {
        // @ts-ignore
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)} style={{marginTop: 30}}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                //setting to PostFilter values for filter and setFilter
                filter={filter} setFilter={setFilter}
            />
            <PostList posts={sortedAndSearchedPosts} title="JS Posts list" remove={removePost}/>
        </div>
    );
}

export default App;
