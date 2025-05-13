
import image1 from '../assets/meal-2.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

const handleMouseEnter = (event) => {
    event.currentTarget.style.transform = 'scale(1.05)';
    event.currentTarget.style.transition = 'transform 0.3s ease';
};

const handleMouseLeave = (event) => {
    event.currentTarget.style.transform = 'scale(1)';
};

const Portfolio = () => {
  return (
    <div id='Portfolio' className="container-fluid bg-dark text-white p-5">
      <h1 className="text-center my-5">My Portfolio</h1>
      <div className="row">
        <div className="col-md-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="card mb-4">
            <img src={image1} style={{ objectFit: 'cover', width: '100%', height: '200px' }} className="card-img-top" alt="Mealify" />
            <div className="card-body">
              <h5 className="card-title">Mealify</h5>
              <p className="card-text">A restaurant project showcasing delicious meals and talented chefs with their specialties.</p>
              <a href="https://mostafabahaa97.github.io/Mealify/" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="card mb-4">
            <img src={image2} style={{ objectFit: 'cover', width: '100%', height: '200px' }} className="card-img-top" alt="Agrina Group" />
            <div className="card-body">
              <h5 className="card-title">Agrina Group</h5>
              <p className="card-text">An international factory to import and export Fruits and vegetables to Europe and Asia</p>
              <a href="https://agrinagroup.com/web/" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="card mb-4">
            <img src={image3} style={{ objectFit: 'cover', width: '100%', height: '200px' }} className="card-img-top" alt="Ecemi" />
            <div className="card-body">
              <h5 className="card-title">Ecemi</h5>
              <p className="card-text">The Egyption Company for engineering and metal industries for import and export</p>
              <a href="https://ecemi-alu.com/" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;