// App.tsx
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import BuggyComponent from './BuggyComponent';

const App: React.FC = () => {
  return (
    <div>
      <h1>My App</h1>
      {/* <ErrorBoundary> */}
        <BuggyComponent />
      {/* </ErrorBoundary> */}
      <p>This part of the app will still work!</p>
    </div>
  );
};

export default App;
