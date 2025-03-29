import React from "react";
import NavBar from "../components/NavBar";
import Box from "../components/Box";
import foodBank from "../assets/img/png/foodBank.png";
import beansImg from "../assets/img/png/beansImg.png";
import cookImg from "../assets/img/png/cookImg.png";
import yellowQuarts from "../assets/img/png/yelloQuarts.png";
import pinkQuarts from "../assets/img/png/pinkQuarts.png";
import purpleQuarts from "../assets/img/png/purpleQuarts.png";
import yellowStar from "../assets/img/png/yellowStars.png";
import pinkStar from "../assets/img/png/pinkStars.png";
import purpleStar from "../assets/img/png/purpleStars.png";
import dotsImg from "../assets/img/png/dotsImg.png";
import mobileImg1 from "../assets/img/png/mobileImg1.png";
import mobileImg2 from "../assets/img/png/mobileImg2.png";
import playStore from "../assets/img/svg/playStoreImg.svg";
import appleStore from "../assets/img/svg/appleStoreImg.png";
import shefImg from "../assets/img/png/shafeImg.png";
import shefImg2 from "../assets/img/png/shefimg2.png";
import shefImg3 from "../assets/img/png/shefImg3.png";
import pastaImg from "../assets/img/png/pastaImg.png";
import burgerImg from "../assets/img/png/burgerImg.png";
import dryfruitImg from "../assets/img/png/dryfruitImg.png";

const AllSection = () => {



  return (
    <>
      <section className="min-vh-100 d-flex flex-column bg_img ">
        <NavBar />
        <div className="d-flex flex-grow-1 heroMIN">
          <div className="my_container d-flex align-items-center justify-content-center flex-grow-1">
            <div className="text-center">
              <p className="fs_md fw-medium  text-white">HELLO, NEW FRIEND</p>
              <p className="fs_4xl fw-semibold  text-white mt-lg-4 mt-sm-3 mt-2">
                RESERVE YOUR TABLE
              </p>
              <div className="d-flex align-items-center mt-lg-4 mt-sm-3 mt-2 pt-xl-2 justify-content-center gap-4">
                <button className="fs_md fw-semibold  btn_1">
                  BOOK A TABLE
                </button>
                <button className="fs_md fw-semibold  btn_1">OPEN MENU</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ boxes ----------------- */}
      <section>
        <Box
          img={shefImg}
          heading="We Invite You to Visit Our Coffee House"
          lable="ABOUT US"
          description="Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at quis non massa netus."
        />
        <Box
          img={shefImg2}
          heading="Quality Kava Beans"
          lable="COFFEE MENU"
          description="Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at quis non massa netus."
          boxStyling="flex_reverse"
          spaceing="spacing_top"
        />

        <Box
          img={shefImg3}
          heading="Use the Tips & Recipes of Our Barista"
          lable="OUR TEAM"
          description="Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at quis non massa netus."
          spaceing="spacing_top"
        />
      </section>

      {/* ------------------ features ----------------- */}
      <section className="mt-lg-5 mt-md-4 mt-3 pt-md-5 pt-sm-4 pt-3">
        <div className="my_container mt-lg-5 mt-md-4 mt-3 pt-lg-1 pt-0">
          <div className="text-center">
            <p className="fs_md fw-medium  text-white text_effect d-inline-block">
              FEATURES
            </p>
            <p className="fs_2xl fw-semibold  text-white mt-lg-4 mt-md-2 mt-sm-3 mt-2 pt-2">
              Why people choose us?
            </p>
            <p className="fs_md fw-medium  text_dgray mt-2 pt-1 w_60 m-auto">
              Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
              varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at
              ac eu donec ut. Sagittis vestibulum at quis non massa netus.
            </p>
          </div>
          <div className="row justify-content-md-between justify-content-center mt-lg-5 mt-md-4 mt-3 pt-lg-3 pt-2">
            <div className="col-md-4 col-sm-6 col-12">
              <div className="h-100 d-flex justify-content-between align-items-center flex-column text-center">
                <img src={foodBank} alt="foodBank" />
                <p className="fs_xl fw-semibold  mt-lg-5 mt-md-4 mt-3 text-white">
                  MENU FOR EVERY TASTE
                </p>
                <p className="fs_md fw-medium text_dgray mt-lg-4 mt-md-2 mt-sm-3 mt-2 w_75">
                  Lorem ipsum dolor sit amet consectetur. Felis eget sit sit
                  scelerisque vestibulum. Urna faucibus amet massa lacus lorem.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-sm-0 mt-3">
              <div className="h-100 d-flex justify-content-between align-items-center flex-column text-center">
                <img src={beansImg} alt="beansImg" />
                <p className="fs_xl fw-semibold   mt-lg-5 mt-md-4 mt-3 text-white">
                  ALWAYS QUALITY BEANS
                </p>
                <p className="fs_md fw-medium text_dgray mt-lg-4 mt-md-2 mt-sm-3 mt-2 w_75">
                  Lorem ipsum dolor sit amet consectetur. Felis eget sit sit
                  scelerisque vestibulum. Urna faucibus amet massa lacus lorem.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-md-0 mt-3 ">
              <div className="h-100 d-flex justify-content-between align-items-center flex-column text-center">
                <img src={cookImg} alt="cookImg" />
                <p className="fs_xl fw-semibold   mt-lg-5 mt-md-4 mt-3 text-white">
                  EXPERIENCED BARISTA
                </p>
                <p className="fs_md fw-medium text_dgray mt-lg-4 mt-md-2 mt-sm-3 mt-2 w_75">
                  Lorem ipsum dolor sit amet consectetur. Felis eget sit sit
                  scelerisque vestibulum. Urna faucibus amet massa lacus lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ RESERVATION ----------------- */}
      <section className="mt-lg-5 mt-md-4 mt-3 pt-md-5 pt-sm-4 pt-3">
        <div className="mt-lg-4 mt-sm-3 mt-3 bg_workingHours">
          <div className="my_container">
            <div className="row align-items-center justify-content-md-between justify-content-center ">
              <div className="col-xl-4 col-lg-5 col-sm-6 col-12 text-sm-start text-center">
                <p className="fs_md fw-medium text-white text_effect d-inline-block">
                  RESERVATION
                </p>
                <p className="fs_3xl fw-semibold text-white mt-lg-4 mt-sm-3 mt-2 pt-1">
                  Working Hours
                </p>
                <div className="d-flex gap-3 justify-content-sm-start justify-content-center mt-lg-4 mt-sm-3 mt-2">
                  <button className="btn_2 fs_md fw-medium ">
                    BOOK A TABLE
                  </button>
                  <button className="btn_2 fs_md fw-medium ">CONTACT US</button>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-sm-6 col-10 mt-sm-0 mt-4">
                <div className="bg_box text-center">
                  <div>
                    <p className="fs_xl fw-semibold text-white">
                      Sunday to Tuesday
                    </p>
                    <p className="fs_lg fw-medium text-white mt-lg-3 mt-2 pt-1">
                      09:00 AM - 10.00 PM
                    </p>
                  </div>
                  <div className="mt-lg-5 mt-sm-4 mt-3 pt-lg-4 pt-md-3 pt-2">
                    <p className="fs_xl fw-semibold text-white">
                      Friday to Saturday
                    </p>
                    <p className="fs_lg fw-medium text-white mt-lg-3 mt-2 pt-1">
                      09:00 AM - 10.00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ testimonial ----------------- */}
      <section className="mt-xl-5 mt-md-4 mt-3 pt-md-5 pt-sm-4 pt-3">
        <div className="my_container mt-lg-4 mt-sm-3 mt-2 mb-md-3 mb-2">
          <div className="text-center">
            <p className="fs_md fw-medium  text-white text_effect d-inline-block">
              FEATURES
            </p>
            <p className="fs_2xl fw-semibold  text-white mt-lg-4 mt-sm-3 mt-2 pt-2">
              Why people choose us?
            </p>
            <p className="fs_md fw-medium  text_dgray mt-2 pt-1 w_60 m-auto">
              Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
              varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at
              ac eu donec ut. Sagittis vestibulum at quis non massa netus.
            </p>
          </div>

          <div className="row justify-content-center mt-5 pt-4">
            <div className="col-lg-4 col-sm-6 col-12  position-relative d-block">
              <div className="box_bgcolor text-center">
                <div className="yellow_quarts">
                  <img src={yellowQuarts} alt="" />
                </div>
                <p className="fs_md fw-medium text_dgray">
                  “Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet
                  tellus adipiscing condimentum donec blandit. Dignissim nunc
                  facilisi pretium id molestie lectus duis.”
                </p>
                <img className="mt-3 pt-1" src={yellowStar} alt="yellowStar" />
                <p className="fs_sm fw-semibold text-white mt-1">John</p>
                <p className="fs_xsm fw-normal text_dgray">Business Man</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-12 position-relative d-block mt-sm-0 mt-4">
              <div className="box_bgcolor text-center">
                <div className="yellow_quarts">
                  <img src={pinkQuarts} alt="pinkQuarts" />
                </div>
                <p className="fs_md fw-medium text_dgray">
                  “Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet
                  tellus adipiscing condimentum donec blandit. Dignissim nunc
                  facilisi pretium id molestie lectus duis.”
                </p>
                <img className="mt-3 pt-1" src={pinkStar} alt="pinkStar" />
                <p className="fs_sm fw-semibold text-white mt-1">John</p>
                <p className="fs_xsm fw-normal text_dgray">Business Man</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-12 position-relative d-block mt-lg-0 mt-sm-5 mt-4 pt-lg-0 pt-sm-2 pt-0">
              <div className="box_bgcolor text-center">
                <div className="yellow_quarts">
                  <img src={purpleQuarts} alt="purpleQuarts" />
                </div>
                <p className="fs_md fw-medium text_dgray">
                  “Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet
                  tellus adipiscing condimentum donec blandit. Dignissim nunc
                  facilisi pretium id molestie lectus duis.”
                </p>
                <img className="mt-3 pt-1" src={purpleStar} alt="purpleStar" />
                <p className="fs_sm fw-semibold text-white mt-1">John</p>
                <p className="fs_xsm fw-normal text_dgray">Business Man</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-lg-5 mt-sm-4 mt-3">
            <img src={dotsImg} alt="dotsImg" />
          </div>
        </div>
      </section>

      {/* ------------------ Order your foods ----------------- */}
      <section className="mt-xl-5 mt-md-4 mt-3 pt-lg-4 pt-sm-3 pt-2">
        <div className="my_container  pb-lg-5 pb-md-4 pb-3">
          <div className="row justify-content-between pt-xl-5 pt-md-4 pt-3 border_2">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="text-center">
                <p className="fs_2xl fw-bold text-white">
                  1287<span className="text_dOrange">+</span>
                </p>
                <p className="fs_md fw-semibold text-white mt-1">
                  VISITORS DAILY
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mt-sm-0 mt-4">
              <div className="text-center">
                <p className="fs_2xl fw-bold text-white">578+</p>
                <p className="fs_md fw-semibold text-white mt-1">
                  DELIVERIES MONTHLY
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mt-md-0 mt-4">
              <div className="text-center">
                <p className="fs_2xl fw-bold text-white">
                  1440<span className="text_dOrange">+</span>
                </p>
                <p className="fs_md fw-semibold text-white mt-1">
                  POSITIVE FEEDBACK
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mt-md-0 mt-4">
              <div className="text-center">
                <p className="fs_2xl fw-bold text-white">40+</p>
                <p className="fs_md fw-semibold text-white mt-1">
                  AWARDS AND HONORS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-lg-5 mt-md-4 mt-3 pt-md-5 pt-sm-4 pt-3">
          <div className="bg_vegtableImg mt-lg-5 mt-md-4 mt-3 py-md-0 py-4">
            <div className="my_container">
              <div className="row align-items-center justify-content-md-between justify-content-center ">
                <div className="col-xl-4 col-md-6 col-12 text-md-start text-center">
                  <p className="fs_3xl fw-semibold text-white">
                    Simple Way To Order Your Foods
                  </p>
                  <div className="d-flex gap-3 justify-content-md-start justify-content-center mt-xl-5 mt-md-4 mt-3">
                    <button className="bg-transparent p-0 border-0">
                      <img className="w_90" src={playStore} alt="playStore" />
                    </button>
                    <button className="bg-transparent p-0 border-0">
                      <img className="w_90" src={appleStore} alt="appleStore" />
                    </button>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-8 mt-md-0 mt-sm-5 mt-5 pt-md-0 pt-sm-4 pt-4">
                  <div className="d-flex justify-content-between gap-4 mt-sm-0 mt-3">
                    <div className="w-100">
                      <img
                        className="w-100 mobile1_translate "
                        src={mobileImg1}
                        alt="mobileImg1"
                      />
                    </div>
                    <div className="w-100">
                      <img
                        className="w-100 mobile2_translate"
                        src={mobileImg2}
                        alt="mobileImg2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ Menu ----------------- */}
      <section className="mt-lg-5 mt-md-4 mt-3 pt-md-5 pt-sm-4 pt-3">
        <div className="my_container mt-lg-5 mt-md-4 mt-3 pt-md-5 pt-sm-4 pt-3">
          <div className="text-center">
            <p className="fs_md fw-medium  text-white text_effect d-inline-block">
              MENU
            </p>
            <p className="fs_2xl fw-semibold  text-white mt-lg-4 mt-sm-3 mt-2 pt-2">
              Explore Our Foods
            </p>
            <p className="fs_md fw-medium  text_dgray mt-2 pt-1 w_60 m-auto">
              Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
              varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at
              ac eu donec ut. Sagittis vestibulum at quis non massa netus.
            </p>
          </div>
          <div className="row justify-content-lg-between justify-content-center mt-5 pt-4">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="h-100 bg_box2 p-0 d-flex justify-content-between flex-column rounded_8">
                <div className="overflow-hidden rounded_8">
                  <img
                    className="w-100 zoom_img"
                    src={pastaImg}
                    alt="pastaImg"
                  />
                </div>
                <div className="my-3 py-1 mx-3 px-1">
                  <p className="fs_xl fw-semibold text_dOrange">
                    Raspberry French Toast
                  </p>
                  <p className="fs_md fw-semibold text_dgray">
                    Time: 10 - 15 Minutes | Serves: 1
                  </p>
                  <div className="d-flex align-items-center gap-1 mt-md-3 mt-2">
                    <p className="fs_xl fw-semibold text_dOrange">$12.50</p>
                    <p className="fs_xl fw-semibold text_dgray text-decoration-line-through">
                      $13.20
                    </p>
                  </div>
                  <div className="mt-md-3 mt-2">
                    <button className="fs_md fw-medium order_now">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-12 mt-sm-0 mt-4">
              <div className="h-100 bg_box2 p-0 d-flex justify-content-between flex-column rounded_8  ">
                <div className="overflow-hidden rounded_8">
                  <img
                    className="w-100 zoom_img"
                    src={burgerImg}
                    alt="burgerImg"
                  />
                </div>
                <div className="my-3 py-1 mx-3 px-1">
                  <p className="fs_xl fw-semibold text_dOrange">
                    Raspberry French Toast
                  </p>
                  <p className="fs_md fw-semibold text_dgray">
                    Time: 10 - 15 Minutes | Serves: 1
                  </p>
                  <div className="d-flex align-items-center gap-1 mt-md-3 mt-2">
                    <p className="fs_xl fw-semibold text_dOrange">$12.50</p>
                    <p className="fs_xl fw-semibold text_dgray text-decoration-line-through">
                      $13.20
                    </p>
                  </div>
                  <div className="mt-md-3 mt-2">
                    <button className="fs_md fw-medium order_now">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-sm-6 col-12 mt-lg-0 mt-4">
              <div className="h-100 bg_box p-0 d-flex justify-content-between flex-column rounded_8">
                <div className="overflow-hidden rounded_8">
                  <img
                    className="w-100 zoom_img"
                    src={dryfruitImg}
                    alt="dryfruitImg}"
                  />
                </div>
                <div className="my-3 py-1 mx-3 px-1">
                  <p className="fs_xl fw-semibold text_dOrange">
                    Raspberry French Toast
                  </p>
                  <p className="fs_md fw-semibold text_dgray">
                    Time: 10 - 15 Minutes | Serves: 1
                  </p>
                  <div className="d-flex align-items-center gap-1 mt-md-3 mt-2">
                    <p className="fs_xl fw-semibold text_dOrange">$12.50</p>
                    <p className="fs_xl fw-semibold text_dgray text-decoration-line-through">
                      $13.20
                    </p>
                  </div>
                  <div className="mt-md-3 mt-2">
                    <button className="fs_md fw-medium order_now">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ news letter ----------------- */}
      <section className="mt-lg-5 mt-md-4 mt-3 pt-md-5 pt-sm-4 pt-3">
        <div className="cutting_vegtable mt-4">
          <div className="my_container text-lg-start text-center">
            <p className="fs_md fw-medium text-white text_effect d-inline-block">
              NEWS LETTER
            </p>
            <p className="fs_2xl fw-semibold text-white mt-lg-4 mt-3 pt-md-2 pt-0">
              Subscribe Our Newsletter
            </p>
            <p className="fs_md fw-medium text_dgray mt-2 pr-1 w_60 m-lg-0 m-auto">
              Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
              varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at
              ac eu donec ut.{" "}
            </p>
            <div className="input_width d-flex align-items-center gap-3 mt-lg-4 mt-3">
              <input
                type="text"
                placeholder="Type here"
                className="input_type fs_lg fw-medium w-100"
                required
              />
              <input
                type="submit"
                value="Subscribe"
                className="fs_md fw-medium subscribe_1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllSection;
