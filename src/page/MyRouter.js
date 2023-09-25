import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PostList from './PostList';
import ErrorPageNotFound from '../component/ErrorPageNotFound/ErrorPageNotFound';
import Post from '../component/Post/Post';

const MyRouter = () => {
    return (
        <Routes>
            <Route path = "topalamachette" element = { <Layout /> }>
                <Route path = "" element = { <PostList /> } />
                <Route path = "posts">
                    <Route path = ":uid" element = { <Post card = { false } map = { true } /> } />
                    <Route path = "" element = { <ErrorPageNotFound /> } />
                    <Route path = "*" element = { <ErrorPageNotFound /> } />
                </Route>
            </Route>
            <Route path = "" element = { <Layout /> }>
                <Route path = "*" element = { <ErrorPageNotFound /> } />
            </Route>
            
        </Routes>
    );
};

export default MyRouter;