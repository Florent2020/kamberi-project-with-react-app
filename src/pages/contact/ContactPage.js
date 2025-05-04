// import React from "react";
// import styled from "styled-components";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import triangleImage from "../../assets/triangle.png";

// function ContactPage() {
//   return (
//     <ContactPageCss id="contact">
//       <Container>
//         <Row className="contact-us">
//           <Col xs={12} md={5}>
//             <h2>Your direct line to the Kamberi Group</h2>
//             <p>
//               Do you have any questions or suggestions? Simply fill out the form
//               and we'll get back to you promptly. We look forward to hearing
//               from you!
//             </p>
//             <img src={triangleImage} alt="triangle" />
//           </Col>
//           <Col xs={12} md={1}></Col>
//           <Col xs={12} md={6}>
//             <form>
//               <h4>Contact Us</h4>
//               {/* {submitted && (
//                 <Alert variant="success">Your message was successful!</Alert>
//               )} */}
//               <div>
//                 <input type="text" name="" placeholder="name" required />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name=""
//                   placeholder="Street+House number"
//                   required
//                 />
//               </div>
//               <div>
//                 <input type="text" name="" placeholder="phone" required />
//               </div>
//               <div>
//                 <input type="text" name="" placeholder="company" required />
//               </div>
//               <div>
//                 <textarea name="" placeholder="News" rows={4} required />
//               </div>
//               <div>
//                 <button type="submit" value="Send">
//                   Send
//                 </button>
//               </div>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     </ContactPageCss>
//   );
// }

// export default ContactPage;

// const ContactPageCss = styled.section`
//   background-color: transparent;
//   background-image: linear-gradient(88deg, #ffe9be 100%, #ffffff 100%);
//   transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
//   padding: 90px 0 60px;

//   h2 {
//     color: #000000;
//     font-family: "Montserrat", Sans-serif;
//     font-size: 30px;
//     font-weight: 600;
//     font-style: oblique;
//     line-height: 1.2em;
//     letter-spacing: -0.9px;
//     margin-bottom: 45px;
//   }

//   p {
//     color: #000000;
//     font-family: "Montserrat", Sans-serif;
//     font-size: 20px;
//     font-style: italic;
//     line-height: 1.6em;
//   }

//   img {
//     text-align: center;
//     width: 30%;
//     margin-left: 140px;
//     margin-top: 50px;
//   }

//   h4 {
//     font-weight: 700;
//     line-height: 29px;
//     color: #481d24;
//   }

//   input {
//     display: block;
//     width: 100%;
//     box-sizing: border-box;
//     font-family: inherit;
//     font-style: normal;
//     font-weight: 400;
//     margin: 0;
//     background-color: #ffffff;
//     background-clip: padding-box;
//     border-radius: 30px;
//     border: 1px solid #481d24;
//     padding: 14px;
//     font-size: 16px;
//     line-height: 100%;
//     box-shadow: none;
//     transition: border 0.15s, box-shadow 0.15s;
//     margin: 30px 0;
//   }

//   textarea {
//     width: 100%;
//     height: 1.3;
//     min-height: 43px;
//     padding: 14px;
//     resize: vertical;
//     border-radius: 30px;
//     border: 1px solid #481d24;
//   }

//   button {
//     background-color: #481d24;
//     color: #fff;
//     padding: 10px 15px;
//     height: 41px;
//     margin-top: 25px;
//     border-radius: 36px;
//     font-family: inherit;
//     text-transform: uppercase;
//     font-weight: 500;
//     font-size: 17px;
//     line-height: 100%;
//     cursor: pointer;
//     transition: all 0.15s ease-in-out;
//     position: relative;
//     text-decoration: none;
//   }
// `;

// KETU FILLON TESTIMI PER CONTACT FORM

import React, { useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import triangleImage from "../../assets/triangle.png";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const data = new FormData(form);

  //   const response = await fetch("https://formspree.io/f/meogavpr", {
  //     method: "POST",
  //     body: data,
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   });

  //   if (response.ok) {
  //     form.reset();
  //     setSubmitted(true);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      address: form.address.value,
      phone: form.phone.value,
      company: form.company.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error("Request error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <ContactPageCss id="contact">
      <Container>
        <Row className="contact-us">
          <Col xs={12} md={5}>
            <h2>Your direct line to the Kamberi Group</h2>
            <p>
              Do you have any questions or suggestions? Simply fill out the form
              and we'll get back to you promptly. We look forward to hearing
              from you!
            </p>
            <img src={triangleImage} alt="triangle" />
          </Col>
          <Col xs={12} md={1}></Col>
          <Col xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <h4>Contact Us</h4>
              {submitted && (
                <div style={{ color: "green", marginBottom: "15px" }}>
                  Your message was sent successfully!
                </div>
              )}
              <div>
                <input type="text" name="name" placeholder="name" required />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Street+House number"
                  required
                />
              </div>
              <div>
                <input type="text" name="phone" placeholder="phone" required />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="company"
                  required
                />
              </div>
              <div>
                <textarea name="message" placeholder="News" rows={4} required />
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </ContactPageCss>
  );
}

export default ContactPage;

const ContactPageCss = styled.section`
  background-color: transparent;
  background-image: linear-gradient(88deg, #ffe9be 100%, #ffffff 100%);
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  padding: 90px 0 60px;

  h2 {
    color: #000000;
    font-family: "Montserrat", Sans-serif;
    font-size: 30px;
    font-weight: 600;
    font-style: oblique;
    line-height: 1.2em;
    letter-spacing: -0.9px;
    margin-bottom: 45px;
  }

  p {
    color: #000000;
    font-family: "Montserrat", Sans-serif;
    font-size: 20px;
    font-style: italic;
    line-height: 1.6em;
  }

  img {
    text-align: center;
    width: 30%;
    margin-left: 140px;
    margin-top: 50px;
  }

  h4 {
    font-weight: 700;
    line-height: 29px;
    color: #481d24;
  }

  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    margin: 0;
    background-color: #ffffff;
    background-clip: padding-box;
    border-radius: 30px;
    border: 1px solid #481d24;
    padding: 14px;
    font-size: 16px;
    line-height: 100%;
    box-shadow: none;
    transition: border 0.15s, box-shadow 0.15s;
    margin: 30px 0;
  }

  textarea {
    width: 100%;
    height: 1.3;
    min-height: 43px;
    padding: 14px;
    resize: vertical;
    border-radius: 30px;
    border: 1px solid #481d24;
  }

  button {
    background-color: #481d24;
    color: #fff;
    padding: 10px 15px;
    height: 41px;
    margin-top: 25px;
    border-radius: 36px;
    font-family: inherit;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 17px;
    line-height: 100%;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    position: relative;
    text-decoration: none;
  }
`;
