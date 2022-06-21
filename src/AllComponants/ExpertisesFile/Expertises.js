// import React from 'react';
// import './Expertises.css'

// const Expertises = () => {
//     return (
//         <div className='expertises-main'>
//             <p className='expertises-p'>Blanditiis unde illum earum</p>
//             <div className="expertises-style">
//                 <h2 className='expertises-h2'>Expertises</h2>
//                 <div className='row expertises-grid-style'>
//                     <div class="row row-cols-1 row-cols-md-3 g-4">
//                         <div class="col">
//                             <div class="card h-100">
//                                 <img className='img-style' src="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000" alt="" />
//                                 <div class="card-body">
//                                     <h4 class="card-title">Codding and Designing</h4>
//                                     <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional longer.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col">
//                             <div class="card h-100">
//                                 <img className='img-style' src="https://media.istockphoto.com/photos/web-design-desktop-picture-id1305999733?b=1&k=20&m=1305999733&s=170667a&w=0&h=3DeafNR4TJ7eSqHvBFkVRwNbnBrZxpj6RlaqbeiIAfs=" alt="" />
//                                 <div class="card-body">
//                                     <h4 class="card-title">Graphic Design</h4>
//                                     <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional longer.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col">
//                             <div class="card h-100">
//                                 <img className='img-style' src="https://www.uxweb-design.com/wp-content/uploads/2019/10/Web-design-1.jpg" alt="" />
//                                 <div class="card-body">
//                                     <h4 class="card-title">Development</h4>
//                                     <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional longer.</p>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Expertises;

// import React, { useEffect } from 'react';
import './Expertises.css'
// import Aos from 'aos';
// import 'aos/dist/aos.css';

const Expertises = () => {
    // useEffect(()=>{
    //     Aos.init({duration : 1000})
    // }, [])
    return (
        <div className='expertises-main'>
            <p className='expertises-p'>Blanditiis unde illum earum</p>
            <div className="expertises-style">
                <h2 className='expertises-h2'>Expertises</h2>
                <div className='row expertises-grid-style'>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col" data-aos="fade-right">
                            <div class="card h-100">
                                <img className='img-style' src="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title">Codding and Designing</h4>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col" data-aos="fade-up">
                            <div class="card h-100">
                                <img className='img-style' src="https://media.istockphoto.com/photos/web-design-desktop-picture-id1305999733?b=1&k=20&m=1305999733&s=170667a&w=0&h=3DeafNR4TJ7eSqHvBFkVRwNbnBrZxpj6RlaqbeiIAfs=" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title">Graphic Design</h4>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col" data-aos="fade-left">
                            <div class="card h-100">
                                <img className='img-style' src="https://www.uxweb-design.com/wp-content/uploads/2019/10/Web-design-1.jpg" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title">Development</h4>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional longer.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertises;