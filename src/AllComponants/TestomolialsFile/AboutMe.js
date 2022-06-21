import React from 'react';
import './Aboutme.css';

const AboutMe = () => {
    return (
        <div className='aboutMe-main' id='AboutME'>

            <div className="main-div-style">
                <h2 className='name-style'>This is Fozle Rabbi</h2>
                <div className="ditles-div">

                    <img data-aos="zoom-in" src="https://i.ibb.co/V3VyBxS/288151198-1075687899994641-1633964068978918891-n.jpg" alt="" />
                    <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ratione incidunt repellendus animi commodi consectetur delectus veritatis possimus inventore quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque totam atque amet officiis dicta ullam illo architecto molestias reprehenderit fugiat. <br />
                        </p>
                        <p className='info-style-p'>Fozle Rabbi <span className='text-danger'>(Shuvo)...</span><small>React Developor</small> <br />
                            <a href="https://www.facebook.com/profile.php?id=100009312384746">Facebook</a></p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default AboutMe;