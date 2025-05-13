import '@fortawesome/fontawesome-free/css/all.min.css';

const handleMouseEnter = (e) => {
    e.currentTarget.style.color = 'white';
    e.currentTarget.style.backgroundColor = 'black';
    e.currentTarget.style.transition = 'transform 0.3s ease';
};
const handleMouseLeave = (e) => {
    e.currentTarget.style.color = 'black';
    e.currentTarget.style.backgroundColor = 'white';
    e.currentTarget.style.transition = 'transform 0.3s ease';
};

const Services = () => {
return (
        <section id="Services" className="bg-gray py-lg-5 mb-lg-5">
                <div className="container text-center">
                            <h1 className="fw-bolder fs-1  "><span className="">Services</span></h1>
                        <div className="row d-flex justify-content-evenly flex-wrap mt-5">
                            <div className="col-lg-4 col-md-4 mb-md-1 mb-sm-5 ">
                                <div className="shadow py-5 px-3">
                                    <i className="fs-4 p-3 rounded-circle bg-gray fa-solid fa-laptop fs-3 mb-3 rounded-circle p-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                                    <h5 className="fw-bolder"><span className="fw-bolder">WEB DESIGN</span></h5>
                                    <p className="px-4 pt-4 text-muted">I create visually appealing, user-friendly web designs that enhance user experience and effectively communicate your brand's message.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-md-1 mb-sm-5">
                                <div className="shadow py-5 px-3">
                                    <i className="fa-solid fa-bullhorn fs-3 mb-3 rounded-circle p-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                                    <h5 className="fw-bolder"><span className="fw-bolder">Branding</span></h5>
                                    <p className="px-4 pt-4 text-muted">I help build a strong and consistent brand identity that resonates with your target audience and sets you apart from competitors.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-md-1 mb-sm-5">
                                <div className="shadow py-5 px-3">
                                    <i className="fa-solid fa-umbrella fs-3 mb-3 rounded-circle p-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                                    <h5 className="fw-bolder"><span className="fw-bolder">Development</span></h5>
                                    <p className="px-4 pt-4 text-muted">I specialize in building robust, scalable, and efficient web applications tailored to meet your business needs and goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-evenly flex-wrap mt-5">
                            <div className="col-lg-4 col-md-4 mb-md-1 mb-sm-5 ">
                                <div className="shadow py-5 px-3">
                                    <i className="fa-regular fa-gem fs-3 mb-3 rounded-circle p-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                                    <h5 className="fw-bolder"><span className="fw-bolder">Creative Design</span></h5>
                                    <p className="px-4 pt-4 text-muted">I craft innovative and visually stunning designs that captivate audiences and bring your ideas to life with a unique creative touch.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-md-1 mb-sm-5">
                                <div className="shadow py-5 px-3">
                                    <i className="fa-solid fa-display fs-3 mb-3 rounded-circle p-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                                    <h5 className="fw-bolder"><span className="fw-bolder">Fully Responsive</span></h5>
                                    <p className="px-4 pt-4 text-muted">Responsive design ensures your website looks great and functions seamlessly across all devices, providing an optimal user experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-md-1 mb-sm-5">
                                <div className="shadow py-5 px-3">
                                    <i className="fa-solid fa-camera fs-3 mb-3 rounded-circle p-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                                    <h5 className="fw-bolder"><span className="fw-bolder">Retina Ready</span></h5>
                                    <p className="px-4 pt-4 text-muted">Retina-ready designs ensure your website looks sharp and vibrant on high-resolution screens, delivering a premium visual experience.</p>
                                </div>
                            </div>
                        </div>
                </div>
        </section>
);
};

export default Services;