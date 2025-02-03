// import React, { useState } from 'react';
// import '../Styles/Login.css'; // Import the CSS file for custom styles

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="login-container">
//       <div className="container mt-5">
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="name@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import axios from 'axios';
// import { useHistory } from 'react-router-use-history';
// import { useHistory } from 'react-router-use-history';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    axios.post("http://localhost:4444/user/login",{email,password})
    .then((reply)=>{
      if(reply.data.token!= null || reply.data.token != undefined)
      {
        
        sessionStorage.setItem("token",reply,data,token);
        sessionStorage.setItem("isLoggedIn","true");
        history.pushState("/yojna")
      }
    })
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: 'url(/images/image4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="card p-4" style={{ width: '400px', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }}>
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="mt-3 text-center">
          <p>If you do not have an account, please <Link to="/register">register here</Link>.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;