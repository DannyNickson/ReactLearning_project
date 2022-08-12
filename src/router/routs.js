
import PageNotFound from '../pages/PageNotFound';
import PostPage from '../pages/PostPage';
import Posts from '../pages/Posts';
import About from './../pages/About';
import Login from './../pages/Login';


export const privateRoutes = [
    { path: '/about', element: About, exact: true },
    { path: '/posts', element: Posts, exact: true },
    { path: '/posts/:id', element: PostPage, exact: true },
    { path: '/404', element: PageNotFound, exact: true }
]

export const publicRoutes = [
    { path: '/login', element: Login, exact: true }
]