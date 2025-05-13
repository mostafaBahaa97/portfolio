
import bg from '../assets/bg.jpg';


const Hero = () => {
  return (
    < >

        <div className="hero" style={{ backgroundImage: `url(${bg})` ,backgroundSize: 'cover', backgroundRepeat:'no-repeat', height: '100vh', backgroundPosition: 'center' }}>
            <div className="overlay d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100%' }}>

        

            </div>
            
        </div>



    </>
  );
};

export default Hero;