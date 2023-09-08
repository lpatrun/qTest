import HomePage from './modules/home';
import ErrorBoundary from './wrapper/ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            <HomePage />
        </ErrorBoundary>
    );
}

export default App;
