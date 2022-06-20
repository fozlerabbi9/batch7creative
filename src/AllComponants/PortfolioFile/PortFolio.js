import React from 'react';
import './PortFolio.css';

const PortFolio = () => {
    return (
        <div id='PortFolio'>
            <div className="px-4">
                <div className="ms-5 ps-5">
                    <p>Culpa perferendis excepturi.</p>
                    <h2>Our Products</h2>
                </div>

                <div class="row row-cols-1 row-cols-md-2 row-cols-md-4 g-4 PortFolio-rowDiv-style">

                    <div class="col">
                        <div class="card h-100 portfolio-card">
                            <img className='portfolio-img-style' src="https://www.petematheson.com/content/images/size/w600/2022/02/Ultimate-Productivity-Desk-Tour.png" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100 portfolio-card">
                            <img className='portfolio-img-style' src="https://external-preview.redd.it/C55x5XTKz_VIWq8O3YWqQrZOkvJGKBUimRWSflR8-qA.jpg?auto=webp&s=3a397325f162e347c3d9e99c3a476a5fbb41a6c0" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100 portfolio-card">
                            <img className='portfolio-img-style' src="https://i0.wp.com/www.techjunkie.com/wp-content/uploads/2021/06/Best-Triple-Monitor-Setups-to-Buy.jpg?fit=1200%2C800&ssl=1" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100 portfolio-card">
                            <img className='portfolio-img-style' src="https://gridfiti.com/wp-content/uploads/2020/04/Gridfiti_Blog_MinimalistDeskSetup_0_Header.jpg" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PortFolio;