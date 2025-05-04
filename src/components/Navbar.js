// import React, { useState } from "react";
// import styled from "styled-components";
// import logo from "../assets/logo.png";
// import { NavLink, Link } from "react-router-dom";
// import { links } from "../utils/dataPages";

// function Navbar() {
//   const [open, toggleOpen] = useState(false);

//   function toggle() {
//     toggleOpen(!open);
//   }

//   function closeMenu() {
//     toggleOpen(false);
//   }
//   return (
//     <NavContainer>
//       <div className="nav-center">
//         <div className="container">
//           <div className="nav-header">
//             <Link to="/">
//               <img src={logo} alt="logo" />
//             </Link>
//             <div
//               className={`nav-toggle ${
//                 open ? "nav-toggle-close" : "nav-toggle-open"
//               }`}
//               onClick={toggle}
//             >
//               {/* <div className={`line1 ${open ? "close" : "open"}`}></div>
//               <div className={`line2 ${open ? "close" : "open"}`}></div>
//               <div className={`line3 ${open ? "close" : "open"}`}></div> */}

//               <div className={`line1`}></div>
//               <div className={`line2`}></div>
//               <div className={`line3`}></div>
//             </div>
//             <ul
//               className={`nav-links  ${open ? "nav-active" : ""}
//         }`}
//             >
//               {/* {links.map((link) => {
//                 const { id, text, url } = link;
//                 return (
//                   <li key={id} className="nav-link" onClick={closeMenu}>
//                     <NavLink
//                       className={({ isActive }) =>
//                         isActive ? "link-active" : "none"
//                       }
//                       to={url}
//                     >
//                       {text}
//                     </NavLink>
//                   </li>
//                 );
//               })} */}

//               {links.map(({ id, text, url }) => {
//                 const isContact = text.toLowerCase() === "contact";

//                 const handleClick = () => {
//                   closeMenu();

//                   if (isContact) {
//                     if (window.location.pathname !== "/") {
//                       // Redirect to homepage and scroll to #contact
//                       window.location.href = "/#contact";
//                     } else {
//                       // Already on homepage – scroll directly
//                       const el = document.getElementById("contact");
//                       if (el) el.scrollIntoView({ behavior: "smooth" });
//                     }
//                   }
//                 };

//                 return (
//                   <li key={id} className="nav-link" onClick={handleClick}>
//                     {isContact ? (
//                       <NavLink className="nav-contact-link">{text}</NavLink>
//                     ) : (
//                       <NavLink
//                         className={({ isActive }) =>
//                           isActive ? "link-active" : "none"
//                         }
//                         to={url}
//                       >
//                         {text}
//                       </NavLink>
//                     )}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </NavContainer>
//   );
// }

// export default Navbar;

// const NavContainer = styled.nav`
//   position: fixed;
//   width: 100%;
//   height: 5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: transparent;
//   z-index: 999;

//   .nav-center {
//     width: 90vw;
//     margin: 0 auto;
//     max-width: var(--max-width);
//   }
//   .nav-header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     img {
//       width: 50px;
//     }
//   }
//   .nav-toggle {
//     /* background: transparent;
//     border: transparent;
//     color: var(--clr-primary-5); */
//     cursor: pointer;
//     svg {
//       font-size: 2rem;
//     }
//   }
//   /* .nav-links {
//     display: none;
//   } */

//   .nav-links {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     position: absolute;
//     right: 0;
//     height: calc(100vh - 80px);
//     top: 80px;
//     background-color: #fff;
//     width: 100%;
//     text-align: center;
//     text-transform: uppercase;
//     letter-spacing: 2px;
//     transform: translateY(-200%);
//     transition: transform 0.4s ease-in-out;
//   }
//   .cart-btn-wrapper {
//     display: none;
//   }

//   .nav-active {
//     transform: translateY(0%);
//   }

//   .nav-links a {
//     color: #000;
//   }

//   /* .link-active {
//     color: #34badc !important;
//   } */

//   .nav-toggle div {
//     width: 23px;
//     height: 2px;
//     background-color: #000;
//     margin: 4px;
//     transition: all ease 0.4s;
//     cursor: pointer;
//     border-radius: 10px;
//   }

//   .nav-toggle-open:nth-child(1) {
//     transform: rotate(0) translateY(0);
//     opacity: 1;
//   }
//   .nav-toggle-open:nth-child(2) {
//     opacity: 1;
//   }
//   .nav-toggle-open:nth-child(3) {
//     transform: rotate(0) translateY(0);
//     opacity: 1;
//   }
//   /* .nav-toggle-close .line1 {
//     transform: rotate(-45deg) translate(-2px, 1px);
//     //   margin-left: 8px;
//     opacity: 1;
//   }
//   .nav-toggle-close .line2 {
//     opacity: 0;
//     margin-left: 6px;
//     position: relative;
//     left: 140px;
//   }
//   .nav-toggle-close .line3 {
//     transform: rotate(45deg) translate(46px, -44px);
//     //   margin-left: 8px;
//     opacity: 1;
//   } */

//   .nav-toggle-close .line1 {
//     transform: rotate(45deg) translate(3px, 4px);
//     opacity: 1;
//   }

//   .nav-toggle-close .line2 {
//     opacity: 0;
//   }

//   .nav-toggle-close .line3 {
//     transform: rotate(-45deg) translate(4px, -6px);
//     opacity: 1;
//   }

//   @media (min-width: 992px) {
//     .nav-toggle {
//       display: none;
//     }
//     .nav-center {
//       display: grid;
//       /* grid-template-columns: auto 1fr auto; */
//       align-items: center;
//     }
//     .nav-links {
//       display: flex;
//       justify-content: flex-end;
//       position: relative;
//       align-items: center;
//       height: 80px;
//       top: 0;
//       transform: translateX(0);
//       flex-direction: row;
//       background-color: transparent;

//       li {
//         margin: 0 0.5rem;
//         padding-left: 111px;
//       }
//       a {
//         color: #000;
//         font-size: 1rem;
//         text-transform: capitalize;
//         letter-spacing: var(--spacing);
//         padding: 0.5rem;
//         &:hover {
//           /* transition: all ease 1s; */
//           scale: 1.3;
//         }
//       }
//       .link-active {
//         /* color: #34badc !important;
//         background-color: #000;
//         border-radius: 7px;
//         transform: scale(1.05);
//         display: inline-block;
//         box-shadow: rgb(202 202 202 / 47%) 1px 1px 9px 3px;
//         transition: all ease 0.4s; */
//       }
//     }
//     .cart-btn-wrapper {
//       display: grid;
//     }
//   }
// `;

import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { links } from "../utils/dataPages";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const handleClick = (text) => {
    const isContact = text.toLowerCase() === "contact";
    closeMenu();

    if (isContact) {
      if (window.location.pathname !== "/") {
        navigate("/#contact");
      } else {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="container">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div
              className={`nav-toggle ${open ? "open" : ""}`}
              onClick={toggle}
              aria-label="Toggle navigation"
              role="button"
              tabIndex="0"
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <ul className={`nav-links ${open ? "nav-active" : ""}`}>
              {links.map(({ id, text, url }) => (
                <li
                  key={id}
                  className="nav-link"
                  onClick={() => handleClick(text)}
                >
                  {text.toLowerCase() === "contact" ? (
                    <NavLink className="nav-contact-link">{text}</NavLink>
                  ) : (
                    <NavLink
                      to={url}
                      className={({ isActive }) =>
                        isActive ? "link-active" : ""
                      }
                    >
                      {text}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  z-index: 999;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 50px;
    }
  }

  .nav-toggle {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30px;

    div {
      width: 26px;
      height: 2px;
      background-color: #000;
      margin: 3px;
      transition: all 0.4s ease;
      border-radius: 10px;
    }

    &.open .line1 {
      transform: rotate(45deg) translate(3px, 5px);
    }
    &.open .line2 {
      opacity: 0;
    }
    &.open .line3 {
      transform: rotate(-45deg) translate(6px, -8px);
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    background-color: #fff;
    height: calc(100vh - 80px);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    transform: translateY(-200%);
    transition: transform 0.4s ease-in-out;
  }

  .nav-active {
    transform: translateY(0%);
  }

  .nav-links a {
    color: #000;
  }

  .link-active {
    color: #34badc;
    font-weight: bold;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-links {
      flex-direction: row;
      position: relative;
      background: transparent;
      height: auto;
      transform: none;
      top: 0;
      align-items: center;
      justify-content: flex-end;

      li {
        margin: 0 0.5rem;
        padding-left: 111px;
      }

      a {
        font-size: 1rem;
        padding: 0.5rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        transition: scale 0.3s ease;

        &:hover {
          scale: 1.3;
        }
      }
    }
  }
`;
