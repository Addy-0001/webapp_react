import "./contacts.css";
import reddit1 from "../Images/reddit-img.webp";
import instagram1 from "../Images/instagram-img.webp";
import twitter1 from "../Images/twitter-img.png";
import linkedin1 from "../Images/linkedin-img.webp";
import github1 from "../Images/github1.png";

function contacts()
{
    return (
      <div>
        <div className="contacts" id="contact">
          <h3>Drop me a line</h3>
          <div className="info">
            Address: <br />
            Bhaktapur, Nepal <br />
            <br />
            Phone: <br />
            +977 9861883577 <br />
            <br />
            Email: <br />
            business.adamyaneupane@gmail.com <br />
            <br />
          </div>
        </div>

        <div className="logos">
          <h3>Get in Touch</h3>

          <div className="socials">
            <a href="https://www.reddit.com/user/Addy_6325" target="_blank">
              <img src={reddit1} alt="Reddit" /> <br />
              Reddit
            </a>
            <a href="https://www.instagram.com/_addy_6325/" target="_blank">
              <img src={instagram1} alt="Instagram" /> <br />
              Instagram
            </a>
            <a href="https://twitter.com/AdamyaNeupane" target="_blank">
              <img src={twitter1} alt="Twitter" /> <br />
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/adamya-neupane/"
              target="_blank"
            >
              <img src={linkedin1} alt="LinkedIn" /> <br />
              linkedIn
            </a>
            <a href="https://github.com/Addy-0001" target="_blank">
              <img src={github1} alt="GitHub" /> <br />
              GitHub
            </a>
          </div>
          <br />
          <br />
          <footer>All Rights Reserved. &#169; 2022</footer>
        </div>
      </div>
    );
}

export default contacts;