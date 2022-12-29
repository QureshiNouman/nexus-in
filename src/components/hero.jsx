import React from "react";
import "../style.css";
import "../bootstrap.min.css";
const Hero = () => {
  return (
    <div class="container-fluid bg-primary py-1 mb-5 hero-header">
      <div class="container py-5">
        <div class="row justify-content-start">
          <div class="col-lg-8 text-center text-lg-start">
            <h5
              class="d-inline-block text-primary text-uppercase border-bottom border-5"
              style={{ color: "rgba(256, 256, 256, .3) !important" }}
            >
              Welcome To Medinova
            </h5>
            <h1 class="display-1 text-white mb-md-4">
              Best Healthcare Solution In Your City
            </h1>
            <div class="pt-2">
              <a
                href=""
                class="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
              >
                Find Doctor
              </a>
              <a
                href=""
                class="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"
              >
                Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;