import { Navigate, Route, Routes } from 'react-router-dom';

import PostPage from '../modules/post';
import PostsPage from '../modules/posts';
import { RoutePaths } from './const/routes';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePaths.Posts} element={<PostsPage />} />
            <Route path={RoutePaths.Post} element={<PostPage />} />

            <Route path='*' element={<Navigate to={RoutePaths.Posts} replace />} />
        </Routes>
    );
};

export default Router;
