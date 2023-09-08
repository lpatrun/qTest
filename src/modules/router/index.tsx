import { Navigate, Route, Routes } from 'react-router-dom';

import PostPage from '../post';
import PostsPage from '../posts';
import { RoutePaths } from './const/routes';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePaths.Posts} element={<PostsPage />} />
            <Route path={RoutePaths.Post} element={<PostPage />} />

            <Route path="*" element={<Navigate to={RoutePaths.Posts} replace />} />
        </Routes>
    );
};

export default Router;
