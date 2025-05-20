
// function Headertop() {
//   return (
//     <section id="Home">
//     <header>
//       {/* top header  */}
//       <div className="top-header">
//         <div className="left-top-header">
//           <a href="#">
//             <p>
//               <span>
//                 <i class="fa-regular     fa-message"></i>
//               </span>
//               contact@example.com
//             </p>
//           </a>
//           <p>
//             <span>
//               <i class="fa-solid fa-phone-volume"></i>
//             </span>
//             +1 5589 55488 55
//           </p>
//         </div>

//         <div className="right-top-header">
//           <span>
//             <a href="#">
//               <i class="fa-brands fa-x-twitter"></i>
//             </a>
//           </span>
//           <span>
//             <a href="#">
//               <i class="fa-brands fa-facebook"></i>
//             </a>
//           </span>
//           <span>
//             <a href="#">
//               <i class="fa-brands fa-instagram"></i>
//             </a>
//           </span>
//           <span>
//             <a href="#">
//               <i class="fa-brands fa-invision"></i>
//             </a>
//           </span>
//         </div>
//       </div>
//       {/* center header  */}
//       <div className="fixed-nav">
//       <div className="center-header">
//         <div className="left-center-header">
//           <a href="#">
//             <h1>Medilab</h1>
//           </a>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a href="#Home">Home</a>
//             </li>
//             <li>
//               <a href="#About">About</a>
//             </li>
//             <li>
//               <a href="#Services">Services</a>
//             </li>
//             <li>
//               <a href="#Departments">Departments</a>
//             </li>
//             <li>
//               <a href="#Doctors">Doctors</a>
//             </li>
//             <li>
//               <a href="#">Dropdown</a>
//             </li>
//             <div className="dropdown">
//               <span>
//                 <i class="fa-solid fa-bars"></i>
//               </span>
//               <div class="dropdown-content">
//                 <a href="#">link1</a>
//                 <a href="#">link1</a>
//                 <a href="#">link1</a>
//                 <a href="#">link1</a>
//                 <a href="#">link1</a>
//               </div>
//             </div>
            
//             <li>
//               <a href="#Contact">Contact</a>
//             </li>
//           </ul>
//         </nav>

//         <div className="right-center-header">
//           <a className="button" href="#appointment">
//             Make an Appointment
//           </a>
//           <div className="dropdown">
//             <span>
//               <i class="fa-solid fa-bars"></i>
//             </span>
//             <div class="dropdown-content">
//               <a href="#">link1</a>
//               <a href="#">link1</a>
//               <a href="#">link1</a>
//               <a href="#">link1</a>
//               <a href="#">link1</a>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </header>
//     </section>
//   );
// }

// export default Headertop;

// import React, { useEffect, useState } from 'react';
// // import './Headertop.css'; 

// const Headertop = () => {
//   const [isTopVisible, setIsTopVisible] = useState(true);

//   useEffect(() => {
//     const onScroll = () => {
//       setIsTopVisible(window.scrollY < 50);
//     };
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   return (
//     <header>
//       {/* Top Header */}
//       <div className={`top-header-wrapper ${isTopVisible ? 'show' : 'hide'}`}>
//         <div className="top-header">
//           <div className="left-top-header">
//             <a href="#">
//               <p><span><i className="fa-regular fa-message"></i></span> contact@example.com</p>
//             </a>
//             <p><span><i className="fa-solid fa-phone-volume"></i></span> +1 5589 55488 55</p>
//           </div>
//           <div className="right-top-header">
//             <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
//             <a href="#"><i className="fa-brands fa-facebook"></i></a>
//             <a href="#"><i className="fa-brands fa-instagram"></i></a>
//             <a href="#"><i className="fa-brands fa-invision"></i></a>
//           </div>
//         </div>
//       </div>

//       {/* Center Header (fixed) */}
//       <div className="fixed-nav">
//         <div className="center-header">
//           <div className="left-center-header">
//             <a href="#"><h1>Medilab</h1></a>
//           </div>
//           <nav>
//             <ul>
//               <li><a href="#Home">Home</a></li>
//               <li><a href="#About">About</a></li>
//               <li><a href="#Services">Services</a></li>
//               <li><a href="#Departments">Departments</a></li>
//               <li><a href="#Doctors">Doctors</a></li>
//               <li><a href="#Contact">Contact</a></li>
//             </ul>
//           </nav>
//           <div className="right-center-header">
//             <a className="button" href="#appointment">Make an Appointment</a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Headertop;

import React, { useEffect, useState } from 'react';

const Headertop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
  
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="Home">
      <header>
        {/* top header */}
        <div className="top-header-wrapper" >
          <div className="top-header">
            <div className="left-top-header">
              <a href="#">
                <p>
                  <span><i className="fa-regular fa-message"></i></span>
                  contact@example.com
                </p>
              </a>
              <p>
                <span><i className="fa-solid fa-phone-volume"></i></span>
                +1 5589 55488 55
              </p>
            </div>
            <div className="right-top-header">
              <span><a href="#"><i className="fa-brands fa-x-twitter"></i></a></span>
              <span><a href="#"><i className="fa-brands fa-facebook"></i></a></span>
              <span><a href="#"><i className="fa-brands fa-instagram"></i></a></span>
              <span><a href="#"><i className="fa-brands fa-invision"></i></a></span>
            </div>
          </div>
        </div>

        {/* center header */}
        <div className="main-center">
        <div className={`fixed-nav ${scrolled ? 'scroll-up' : ''}`}>
          <div className="center-header">
            <div className="left-center-header">
              <a href="#"><h1>Medilab</h1></a>
            </div>
            <nav>
              <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Departments">Departments</a></li>
                <li><a href="#Doctors">Doctors</a></li>
                <li><a href="#">Dropdown</a></li>
                <div className="dropdown">
                  <span><i className="fa-solid fa-bars"></i></span>
                  <div className="dropdown-content">
                    <a href="#">link1</a>
                    <a href="#">link2</a>
                    <a href="#">link3</a>
                    <a href="#">link4</a>
                    <a href="#">link5</a>
                  </div>
                </div>
                <li><a href="#Contact">Contact</a></li>
              </ul>
            </nav>

            <div className="right-center-header">
              <a className="button" href="#appointment">Make an Appointment</a>
              <div className="dropdown">
                <span><i className="fa-solid fa-bars"></i></span>
                <div className="dropdown-content">
                  <a href="#">link1</a>
                  <a href="#">link2</a>
                  <a href="#">link3</a>
                  <a href="#">link4</a>
                  <a href="#">link5</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </header>
    </section>
  );
};

export default Headertop;
