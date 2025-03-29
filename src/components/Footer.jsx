import React from "react";
import footerLogo from "../assets/img/png/footerimg.png";
import facebookImg from "../assets/img/svg/facebookImg.svg";
import twiterImg from "../assets/img/svg/twiterImg.svg";
import instagramImg from "../assets/img/svg/instagramImg.svg";
import linkedinImg from "../assets/img/svg/linkedinImg.svg";

const Footer = () => {
  const presentYear=new Date().getFullYear()
  console.log(presentYear);
  return (
    <>
      <footer className="footer_bgColor">
        <div className="my_container">
          <div className="row justify-content-md-between justify-content-center">
            <div className="col-xl-4 col-9 text-md-start text-center">
              <img src={footerLogo} alt="footerLogo" />
              <p className="fs_sm fw-medium text_dgray mt-4 footer_width">
                Lorem ipsum dolor sit amet consectetur. Tristique cursus morbi
                nibh nec et vulputate. Turpis tortor nisi imperdiet quis
                accumsan. Ligula netus amet leo ultricies. Neque venenatis
                magnis amet eget sagittis leo enim.
              </p>
              <div className="d-flex align-items-center justify-content-md-start justify-content-center gap-3 mt-lg-4 mt-3 pt-md-2 pt-0">
                <div>
                  <a href="./" className="d-inine-block">
                    <img src={facebookImg} alt="facebookImg" />
                  </a>
                </div>
                <div>
                  <a href="./" className="d-inine-block">
                    <img src={twiterImg} alt="twiterImg" />
                  </a>
                </div>
                <div>
                  <a href="./" className="d-inine-block">
                    <img src={instagramImg} alt="instagramImg" />
                  </a>
                </div>
                <div>
                  <a href="./" className="d-inine-block">
                    <img src={linkedinImg} alt="linkedinImg" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-sm-6 col-12 mt-xl-0 mt-4 pt-xl-0 pt-sm-3 text-md-start text-center">
              <p className="fs_md fw-medium text-white px-2">
                Opening Restaurenta
              </p>
              <div className="mt-3">
                <a
                  href="./"
                  className="fs_sm fw-medium text_dgray border_effect d-inline-block"
                >
                  Sa - We: 09 :00am - 10:00pm
                </a>
              </div>
              <div>
                <a
                  href="./"
                  className="fs_sm fw-medium text_dgray border_effect d-inline-block"
                >
                  Thu - We: 09 :00am - 10:00pm
                </a>
              </div>
              <div>
                <a
                  href="./"
                  className="fs_sm fw-medium text_dgray border_effect d-inline-block"
                >
                  Friday Closed
                </a>
              </div>
            </div>

            <div className="col-xl-2 col-md-4 col-sm-6 col-12 mt-xl-0 mt-4 pt-xl-0 pt-sm-3 text-md-start text-center">
              <p className="fs_md fw-medium text-white px-2">User Link</p>
              <div className="mt-3">
                <a
                  href="./"
                  className="fs_sm fw-medium text_dgray border_effect d-inline-block"
                >
                  About Us
                </a>
              </div>
              <div>
                <a
                  href="./"
                  className="fs_sm fw-medium text_dgray border_effect d-inline-block"
                >
                  Contact Us
                </a>
              </div>
              <div>
                <a
                  href="./"
                  className="fs_sm fw-medium text_dgray border_effect d-inline-block"
                >
                  Order Delivery
                </a>
              </div>
              <div>
                <a
                  href="./"
                  className="fs_sm fw-medium text_dgray border_effect d-inline-block"
                >
                  Payment & Tax
                </a>
              </div>
              <div>
                <a
                  href="./"
                  className="fs_sm fw-medium text_dgray border_effect d-inline-block"
                >
                  Terms of Services
                </a>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-sm-8 col-12 mt-xl-0 mt-4 pt-xl-0 pt-md-3  text-md-start text-center">
              <p className="fs_md fw-medium text-white px-2">Contact Us</p>
              <div className="mt-3 w_57">
                <a
                  href="./"
                  className="fs_sm fw-medium text_dgray  d-inline-block"
                >
                  543 Country Club Ave, NC 27587, London, UK +1257 6541120
                </a>
              </div>

              <div className="bg-white w-100 rounded_8 d-flex align-items-center input_email w-100 mt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="fs_lg fw-medium text_darkGray w-100 bg-white"
                  required
                />
                <input
                  type="submit"
                  value="submit"
                  className=" fs_lg fw-medium text-white bg_dOrange"
                />
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-sm-between justify-content-center flex-sm-row flex-column border_2 mt-5 pt-md-4 pt-3">
            <div className="mt-3">
              <a
                href="./"
                className="fs_sm fw-medium text_dgray d-inline-block"
              >
                ©{presentYear} ARR, All right reserved
              </a>
            </div>
            <div className="d-flex align-items-center mt-sm-0 mt-3">
              <div>
                <a
                  href="./"
                  className="fs_sm fw-medium text_dgray d-inline-block"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="ms-sm-4 ms-2 ps-2">
                <a
                  href="./"
                  className="fs_sm fw-medium text_dgray d-inline-block"
                >
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
