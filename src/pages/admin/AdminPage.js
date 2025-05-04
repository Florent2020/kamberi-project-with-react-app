// import React, { useState } from "react";
// import styled from "styled-components";
// import { positions } from "../../utils/dataPositions";
// import Container from "react-bootstrap/Container";

// const AdminPage = () => {
//   const [position, setPosition] = useState(positions);
//   const [newPosition, setNewPosition] = useState({
//     id: "",
//     title: "",
//     short_info: "",
//     info: "",
//     main_tasks: "",
//     main_tasks_info: "",
//     qualifications: "",
//     qualifications_info: "",
//     benefits: "",
//     benefits_info: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewPosition((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAdd = () => {
//     const newId =
//       position.length > 0 ? Math.max(...position.map((p) => p.id)) + 1 : 1;
//     setPosition([...position, { ...newPosition, id: newId }]);
//     resetForm();
//   };

//   const handleEdit = (id) => {
//     const existing = position.find((pos) => pos.id === id);
//     setNewPosition(existing);
//   };

//   const handleUpdate = () => {
//     setPosition(
//       position.map((pos) => (pos.id === newPosition.id ? newPosition : pos))
//     );
//     resetForm();
//   };

//   const handleDelete = (id) => {
//     setPosition(position.filter((pos) => pos.id !== id));
//   };

//   const resetForm = () => {
//     setNewPosition({
//       id: "",
//       title: "",
//       short_info: "",
//       info: "",
//       main_tasks: "",
//       main_tasks_info: "",
//       qualifications: "",
//       qualifications_info: "",
//       benefits: "",
//       benefits_info: "",
//     });
//   };

//   return (
//     <StyledAdminPage>
//       <Container>
//         <h1>Admin Page</h1>
//         <form>
//           {Object.keys(newPosition).map((key) =>
//             key !== "id" ? (
//               <div key={key}>
//                 <label>{key}</label>
//                 <input
//                   type="text"
//                   name={key}
//                   value={newPosition[key]}
//                   onChange={handleChange}
//                 />
//               </div>
//             ) : null
//           )}
//           {newPosition.id ? (
//             <button type="button" onClick={handleUpdate}>
//               Update
//             </button>
//           ) : (
//             <button type="button" onClick={handleAdd}>
//               Add
//             </button>
//           )}
//           <button type="button" onClick={resetForm}>
//             Clear
//           </button>
//         </form>

//         <h2>Existing Positions</h2>
//         <ul>
//           {position.map((pos) => (
//             <li key={pos.id}>
//               <strong>{pos.title}</strong>
//               <button onClick={() => handleEdit(pos.id)}>Edit</button>
//               <button onClick={() => handleDelete(pos.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </Container>
//     </StyledAdminPage>
//   );
// };

// export default AdminPage;

// const StyledAdminPage = styled.section`
//   background-color: transparent;
//   background-image: linear-gradient(88deg, #ffe9be 100%, #ffffff 100%);
//   padding: 90px 0 60px;

//   h1,
//   h2 {
//     font-family: "Montserrat", Sans-serif;
//     color: #000;
//     margin-bottom: 20px;
//   }

//   form {
//     margin-top: 30px;
//   }

//   label {
//     display: block;
//     margin-bottom: 8px;
//     font-weight: 500;
//     color: #481d24;
//   }

//   input,
//   textarea {
//     display: block;
//     width: 100%;
//     background-color: #ffffff;
//     border-radius: 30px;
//     border: 1px solid #481d24;
//     padding: 14px;
//     font-size: 16px;
//     margin: 20px 0;
//     box-sizing: border-box;
//   }

//   textarea {
//     resize: vertical;
//     min-height: 80px;
//   }

//   button {
//     background-color: #481d24;
//     color: #fff;
//     padding: 10px 20px;
//     border-radius: 36px;
//     text-transform: uppercase;
//     font-size: 16px;
//     margin-right: 10px;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;

//     &:hover {
//       background-color: #5b2a2f;
//     }
//   }

//   ul {
//     list-style: none;
//     padding-left: 0;
//     margin-top: 30px;
//   }

//   li {
//     margin-bottom: 12px;
//     background: #fff6e7;
//     padding: 10px 15px;
//     border-radius: 20px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     button {
//       background-color: #d9534f;
//       margin-left: 10px;

//       &:hover {
//         background-color: #c9302c;
//       }
//     }
//   }
// `;

// src/pages/AdminPage.js
// src/pages/AdminLoginPage.js
// src/pages/admin/AdminPage.js
import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const adminUser = {
    username: "admin",
    password: "1234",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      credentials.username === adminUser.username &&
      credentials.password === adminUser.password
    ) {
      navigate("/admin/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid username or password");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <StyledLoginPage>
      <Container>
        <form onSubmit={handleLogin}>
          <h1>Admin Login</h1>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </Container>
    </StyledLoginPage>
  );
};

export default AdminPage;

const StyledLoginPage = styled.section`
  padding: 100px 20px;
  max-width: 100%;
  margin: 0 auto;
  background-color: transparent;
  background-image: linear-gradient(88deg, #ffe9be 100%, #ffffff 100%);
  min-height: 100vh;

  form {
    width: 500px;
    margin: 0 auto;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    margin-bottom: 20px;
    color: #000;
    padding-top: 50px;
  }

  label {
    display: block;
    margin-top: 20px;
    color: #481d24;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 14px;
    border-radius: 30px;
    border: 1px solid #481d24;
    margin-top: 10px;
  }

  button {
    background-color: #481d24;
    color: white;
    padding: 3px 12px;
    margin-top: 40px;
    height: 50px;
    width: 140px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #5b2a2f;
    }
  }
`;
