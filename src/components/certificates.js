import "./certificate.css";
import certificate from "../Images/Certificate_adamya.jpg"

function certificates()
{
    return (
      <div className="certification">
        <h3>My Certification</h3>
        <img src={certificate} alt="Certification-Adamya-Neupane" />
      </div>
    );
}

export default certificates;