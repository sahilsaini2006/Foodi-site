import React from "react";

const Box = ({ img, heading, lable, description, boxStyling, spaceing }) => {
  return (
    <>
      <section
        className={`mt-xl-5 mt-md-4 mt-3 pt-lg-5 mt-md-4 mt-3 ${spaceing}`}
      >
        <div className={`my_container pt-xl-4 pt-md-3 pt-2 ${spaceing}`}>
          <div
            className={`row justify-content-md-between justify-content-center align-items-center ${boxStyling}`}
          >
            <div className="col-lg-5 col-md-6 col-12 text-md-start text-center ">
              <p className="fs_md fw-medium  text-white">
                <span className="text_effect">{lable} </span>
              </p>
              <p className="fs_2xl fw-semibold lh_150 text-white mt-md-4 mt-3 pt-lg-2 pt-0">
                {heading}
              </p>
              <p className="fs_md fw-medium lh_150 text_dgray mt-2 pt-lg-1 pt-0 w_83 ">
                {description}
              </p>
              <div className="mt-md-4 mt-3 ">
                <button className="fs_md fw-medium  reservation_btn d-inline-block">
                  READ MORE
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10 col-12 mt-md-0 mt-4 pt-md-0 pt-2">
              <div className="overflow-hidden">
                <img className="w-100 zoom_img" src={img} alt="shefImg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Box;
