import { BrowserRouter } from 'react-router-dom';

import Router from './router';
import ErrorBoundary from './wrapper/ErrorBoundary';
import PostsProvider from './providers/PostsProvider';

function App() {
    return (
        <ErrorBoundary>
            <PostsProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </PostsProvider>
        </ErrorBoundary>
    );
}

export default App;
