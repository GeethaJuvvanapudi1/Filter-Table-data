import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationPage from './components/RegistrationPage';
import Dashboard from './components/Dashboard'; 
import Tables from './components/Tables'
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Login Page</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/table" element={<Tables />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



// import React from 'react'
// import Table from './components/Tables'

// const App = () => {
//   return (
//     <div>
//       <Table/>
//     </div>
//   )
// }

// export default App
