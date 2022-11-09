import "./description.css";
import trainer_image from "../Images/Adamya_Neupane.JPG"
function description()
{
    return (
      <div className="top_description">
        <div>
          <h1>
            Adamya Neupane <br />
            <span class="trainer">Fitness Trainer</span>
          </h1>
          <h2>"You can Lose Weight Even With The Typical Nepali Diet."</h2>
        </div>
        <div class="picture-main">
          <img src = {trainer_image} alt="Picture of the trainer" />
        </div>
      </div>
    );
}

export default description;