import React, { useEffect, useState } from "react";
import phone from "../../images/phone.png";
import female from "../../images/female.png";
import secondPhone from "../../images/second_phone.png";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import ArrowIcon from "@mui/icons-material/ArrowCircleRight";
import footer from "../../images/footer.png";
import smiley from "../../images/smiley.png";
import circle from "../../images/circle.png";
import pin from "../../images/pin.png";
import male from "../../images/male.png";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import user3 from "../../images/user3.png";
import user4 from "../../images/user4.png";
import user5 from "../../images/user5.png";
import user6 from "../../images/user6.png";
import user7 from "../../images/user7.png";
import user8 from "../../images/user8.png";
import user9 from "../../images/user9.png";
import user10 from "../../images/user10.png";
import axios from "axios";
import "./style.css";

function Landing() {
  const [users, setUsers] = useState([]);
  const [number, setNumber] = useState("");
  const images = [
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10,
  ];

  const getNames = () => {
    axios.get("https://gorest.co.in/public/v2/users").then((res) => {
      let data = res.data;
      if (data) {
        const items = data.map((item) => {
          return {
            name: item.name,
            pic: images[Math.floor(Math.random() * 10)],
          };
        });
        setUsers(items);
      }
    });
  };

  useEffect(() => {
    getNames();
  }, []);

  return (
    <div>
      <section id="home">
        <div className="main_section_container">
          <div className="landing_main_heading">
            <div className="black main_heading">Stay close to your</div>
            <div className="purple main_heading">favourite people.</div>
            <div className="cta_container">
              <FormControl className="cta_input_container" variant="outlined">
                <OutlinedInput
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  endAdornment={
                    <InputAdornment position="end">
                      <div className="cta_button">Get Started</div>
                      <div className="cta_button_small">
                        <ArrowIcon />
                      </div>
                    </InputAdornment>
                  }
                  className="cta_input"
                />
              </FormControl>
            </div>
          </div>

          <div className="phone_img_container">
            <img className="phone_img" src={phone} alt="" />
          </div>
        </div>
      </section>

      <section id="features">
        <div className="feature_container">
          <div className="feature_content_container">
            <div>
              <img className="feature_icon" src={smiley} alt="" />
            </div>
            <div className="sub_heading black">Express yourself freely</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="feature_link">Learn more</div>
          </div>
          <div className="feature_img_container">
            <img className="feature_img" src={female} alt="" />
          </div>
        </div>

        <div className="feature_container">
          <div className="feature_img_container">
            <img className="second_phone_img" src={secondPhone} alt="" />
          </div>
          <div className="feature_content_container">
            <div>
              <img className="feature_icon" src={circle} alt="" />
            </div>
            <div className="sub_heading black">Create and Share</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="feature_link">Learn more</div>
          </div>
        </div>

        <div className="feature_container">
          <div className="feature_content_container">
            <div>
              <img className="feature_icon" src={pin} alt="" />
            </div>
            <div className="sub_heading black">Share live location</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="feature_link">Learn more</div>
          </div>
          <div className="feature_img_container">
            <img className="feature_img" src={male} alt="" />
          </div>
        </div>
      </section>

      <section id="creators">
        <div className="creators_main_container">
          <div className="creators_container">
            <div className="sub_heading center">Around 5M+ creators</div>
            <div className="description small_width">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut la
            </div>
          </div>
          <div className="creators_img_container">
            {users &&
              users.map((item, i) => (
                <div key={i} className="creator_img_container">
                  <div className="creator_img_card">
                    <img src={item.pic} className="creator_img" alt="" />
                    <div className="creator_name">{item.name}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section id="footer">
        <div className="footer_container">
          <div className="logo">
            <div className="black_circle"></div>
            <div className="purple_circle"></div>
          </div>
          <div>
            <div className="footer_heading">Company</div>
            <div className="footer_content">About</div>
            <div className="footer_content">Privacy</div>
            <div className="footer_content">Privacy & terms</div>
          </div>
          <div>
            <div className="footer_heading">Support</div>
            <div className="footer_content">Chat with us</div>
            <div className="footer_content">Help center</div>
            <div className="footer_content">Feature request</div>
          </div>
          <div>
            <div className="footer_heading">Community</div>
            <div className="footer_content">Twitter</div>
            <div className="footer_content">Facebook</div>
            <div className="footer_content">Discord</div>
          </div>
          <div>
            <div className="footer_heading">More</div>
            <div className="footer_content">Buttons</div>
            <div className="footer_content">Brand assets</div>
            <div className="footer_content">Careers</div>
          </div>
        </div>
        <div className="footer_img_container">
          <img className="footer_img" src={footer} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Landing;
