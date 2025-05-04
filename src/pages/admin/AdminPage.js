import React, { useState } from "react";
import styled from "styled-components";
import { positions } from "../../utils/dataPositions";
import Container from "react-bootstrap/Container";

const AdminPage = () => {
  const [position, setPosition] = useState(positions);
  const [newPosition, setNewPosition] = useState({
    id: "",
    title: "",
    short_info: "",
    info: "",
    main_tasks: "",
    main_tasks_info: "",
    qualifications: "",
    qualifications_info: "",
    benefits: "",
    benefits_info: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPosition((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    const newId =
      position.length > 0 ? Math.max(...position.map((p) => p.id)) + 1 : 1;
    setPosition([...position, { ...newPosition, id: newId }]);
    resetForm();
  };

  const handleEdit = (id) => {
    const existing = position.find((pos) => pos.id === id);
    setNewPosition(existing);
  };

  const handleUpdate = () => {
    setPosition(
      position.map((pos) => (pos.id === newPosition.id ? newPosition : pos))
    );
    resetForm();
  };

  const handleDelete = (id) => {
    setPosition(position.filter((pos) => pos.id !== id));
  };

  const resetForm = () => {
    setNewPosition({
      id: "",
      title: "",
      short_info: "",
      info: "",
      main_tasks: "",
      main_tasks_info: "",
      qualifications: "",
      qualifications_info: "",
      benefits: "",
      benefits_info: "",
    });
  };

  return (
    <StyledAdminPage>
      <Container>
        <h1>Admin Page</h1>
        <form>
          {Object.keys(newPosition).map((key) =>
            key !== "id" ? (
              <div key={key}>
                <label>{key}</label>
                <input
                  type="text"
                  name={key}
                  value={newPosition[key]}
                  onChange={handleChange}
                />
              </div>
            ) : null
          )}
          {newPosition.id ? (
            <button type="button" onClick={handleUpdate}>
              Update
            </button>
          ) : (
            <button type="button" onClick={handleAdd}>
              Add
            </button>
          )}
          <button type="button" onClick={resetForm}>
            Clear
          </button>
        </form>

        <h2>Existing Positions</h2>
        <ul>
          {position.map((pos) => (
            <li key={pos.id}>
              <strong>{pos.title}</strong>
              <button onClick={() => handleEdit(pos.id)}>Edit</button>
              <button onClick={() => handleDelete(pos.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </Container>
    </StyledAdminPage>
  );
};

export default AdminPage;

const StyledAdminPage = styled.section`
  background-color: transparent;
  background-image: linear-gradient(88deg, #ffe9be 100%, #ffffff 100%);
  padding: 90px 0 60px;

  h1,
  h2 {
    font-family: "Montserrat", Sans-serif;
    color: #000;
    margin-bottom: 20px;
  }

  form {
    margin-top: 30px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #481d24;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    background-color: #ffffff;
    border-radius: 30px;
    border: 1px solid #481d24;
    padding: 14px;
    font-size: 16px;
    margin: 20px 0;
    box-sizing: border-box;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }

  button {
    background-color: #481d24;
    color: #fff;
    padding: 10px 20px;
    border-radius: 36px;
    text-transform: uppercase;
    font-size: 16px;
    margin-right: 10px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #5b2a2f;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 30px;
  }

  li {
    margin-bottom: 12px;
    background: #fff6e7;
    padding: 10px 15px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #d9534f;
      margin-left: 10px;

      &:hover {
        background-color: #c9302c;
      }
    }
  }
`;
