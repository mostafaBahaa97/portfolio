import profile from "../assets/profile.png";
const About = () => {
  return (
    <>
      <div id="About" className="container">
        <div className="row my-5 gap-5">

        <div className="col-12 col-lg-4 col-md-6">
            <img src={profile} className="w-100" />
        </div>

        <div className="col-12 col-lg-7 col-md-5">
            <h1 className="fw-bolder">About Me</h1>
            <p className="fw-100 fs-5">Full-Stack Developer</p>

            <p className="text-justify mt-1">
                I'm <span className=" fw-bold">Mostafa Bahaa</span>, a passionate Full-Stack Developer based in Alexandria, Egypt.
                With a strong foundation in front-end technologies like HTML, CSS, JavaScript, and React, I’ve expanded my skill set through professional training at <a className="text-danger link-underline-danger fw-bolder link-underline-opacity-0 link-underline-opacity-100-hover" href="https://iti.gov.eg/home">ITI</a> to include backend development using Python, Flask, Django, and PostgreSQL.
                I’m highly motivated to build clean, responsive, and efficient web applications from end to end.I believe in continuous learning, solving real-world problems with code, and working in collaborative environments that encourage growth and creativity.
            </p>

            <div className="charts">
  <div className="progress  mb-5" style={{height: 30}}>
    <div className="progress-bar bg-black " role="progressbar" aria-label="Example 20px high" style={{width: '95%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
      <div className="prog-text d-flex justify-content-between mx-3 py-2">
        <span className>Web Design</span>
        <span className>95%</span>
      </div>
    </div>
  </div>
  <div className="progress mb-5" style={{height: 30}}>
    <div className="progress-bar bg-black " role="progressbar" aria-label="Example 20px high" style={{width: '80%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
      <div className="prog-text d-flex justify-content-between mx-3">
        <span className>Branding</span>
        <span className>80%</span>
      </div>
    </div>
  </div>
  <div className="progress mb-5" style={{height: 30}}>
    <div className="progress-bar bg-black " role="progressbar" aria-label="Example 20px high" style={{width: '90%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
      <div className="prog-text d-flex justify-content-between mx-3">
        <span className>Development</span>
        <span className>90%</span>
      </div>
    </div>
  </div>
</div>


            
            <div className="d-flex gap-3">
            
             <a
                href="../assets/Mostafa Bahaa CV.pdf"
                download="My_Resume.pdf"
                className="btn btn-outline-success mt-4 fs-5 fw-bold"
                >
                Download My Resume
            </a>
            <a
                href="tel:+201208108242"
                className="btn btn-outline-primary mt-4 fs-5 fw-bold"
                >
                Contact Me
            </a>


                </div>
            </div>
        </div>
         </div>

       
    </>
  );
};

export default About;