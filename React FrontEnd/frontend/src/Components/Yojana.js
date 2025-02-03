// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const Yojana = () => {
//   return (
//     <div style={{ backgroundImage: 'url(/images/farmer.avif)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', color: 'white' }}>
//       {/* <div className="container mt-5"> */}
//         <h1 className="text-center mb-4">Farmer Yojanas for 2024</h1>
//         <div className="list-group">
//           <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//             <div className="d-flex w-100 justify-content-between">
//               <h5 className="mb-1">Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)</h5>
//               <img src="/images/PM.avif" alt="PM-KISAN" style={{ width: '150px', height: '100px' }} />
//             </div>
//             <p className="mb-1">Provides financial assistance to farmers to support their agricultural activities.</p>
//           </a>
//           <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//             <div className="d-flex w-100 justify-content-between">
//               <h5 className="mb-1">Pradhan Mantri Fasal Bima Yojana (PMFBY)</h5>
//               <img src="/images/pmfby.jpg" alt="PMFBY" style={{ width: '150px', height: '100px' }} />
//             </div>
//             <p className="mb-1">Offers crop insurance to farmers to protect them against crop losses due to natural calamities.</p>
//           </a>
//           <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//             <div className="d-flex w-100 justify-content-between">
//               <h5 className="mb-1">Soil Health Card Scheme</h5>
//               <img src="/images/soil-health-card.jpg" alt="Soil Health Card" style={{ width: '150px', height: '100px' }} />
//             </div>
//             <p className="mb-1">Provides soil health cards to farmers to help them understand the nutrient status of their soil.</p>
//           </a>
//           <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//             <div className="d-flex w-100 justify-content-between">
//               <h5 className="mb-1">Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</h5>
//               <img src="/images/pmksy.jpeg" alt="PMKSY" style={{ width: '150px', height: '100px' }} />
//             </div>
//             <p className="mb-1">Aims to improve irrigation facilities and ensure water conservation in agricultural fields.</p>
//           </a>
//           <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//             <div className="d-flex w-100 justify-content-between">
//               <h5 className="mb-1">Kisan Credit Card (KCC) Scheme</h5>
//               <img src="/images/kcc.jpg" alt="KCC" style={{ width: '150px', height: '100px' }} />
//             </div>
//             <p className="mb-1">Provides short-term credit to farmers to meet their agricultural and other needs.</p>
//           </a>
//         </div>
//       </div>
//     // </div>
//   );
// }

// export default Yojana;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Yojana = () => {
  return (
    <div style={{ backgroundImage: 'url(/images/farmer.avif)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', color: 'white' }}>
      <h1 className="text-center mb-4">Farmer Yojanas for 2025</h1>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <div className="d-flex w-100">
            <img src="/images/PM.avif" alt="PM-KISAN" className="me-3" style={{ width: '150px', height: '100px' }} />
            <div>
              <h5 className="mb-1">Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)</h5>
              <p className="mb-1">Provides financial assistance to farmers to support their agricultural activities.</p>
            </div>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <div className="d-flex w-100">
            <img src="/images/pmfby.jpg" alt="PMFBY" className="me-3" style={{ width: '150px', height: '100px' }} />
            <div>
              <h5 className="mb-1">Pradhan Mantri Fasal Bima Yojana (PMFBY)</h5>
              <p className="mb-1">Offers crop insurance to farmers to protect them against crop losses due to natural calamities.</p>
            </div>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <div className="d-flex w-100">
            <img src="/images/soil-health-card.jpg" alt="Soil Health Card" className="me-3" style={{ width: '150px', height: '100px' }} />
            <div>
              <h5 className="mb-1">Soil Health Card Scheme</h5>
              <p className="mb-1">Provides soil health cards to farmers to help them understand the nutrient status of their soil.</p>
            </div>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <div className="d-flex w-100">
            <img src="/images/pmksy.jpeg" alt="PMKSY" className="me-3" style={{ width: '150px', height: '100px' }} />
            <div>
              <h5 className="mb-1">Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</h5>
              <p className="mb-1">Aims to improve irrigation facilities and ensure water conservation in agricultural fields.</p>
            </div>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <div className="d-flex w-100">
            <img src="/images/kcc.jpg" alt="KCC" className="me-3" style={{ width: '150px', height: '100px' }} />
            <div>
              <h5 className="mb-1">Kisan Credit Card (KCC) Scheme</h5>
              <p className="mb-1">Provides short-term credit to farmers to meet their agricultural and other needs.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Yojana;