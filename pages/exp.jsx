import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function exp() {
  return (
    <MainLayout>
      <div
        className="mx-auto"
        style={{
          color: "rgb(0, 0, 0)",
          maxWidth: "1200px",
          textAlign: "center",
        }}
      >
        <div className="vstack gap-5 border border-2 rounded-3 p-5">
          <div className="vstack align-items-center justify-content-center">
            <div className="fw-bold fs-3">Project Experience</div>
            <br />
            <div
              className="card mb-3"
              style={{
                maxWidth: "700px",
                backgroundColor: "#789cce",
                color: "rgb(255, 255, 255)",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="picture/basic_com.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Basic CPE Project</h5>
                    <p
                      className="card-text"
                      style={{
                        backgroundColor: "#789cce",
                        color: "rgb(255, 255, 255)",
                      }}
                    >
                      Create game in Scratch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mb-3"
              style={{
                maxWidth: "700px",
                backgroundColor: "#789cce",
                color: "rgb(255, 255, 255)",
              }}
            >
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Computer Programming Project</h5>
                    <p
                      className="card-text"
                      style={{
                        backgroundColor: "#789cce",
                        color: "rgb(255, 255, 255)",
                      }}
                    >
                      Create a calculator program in C++.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    src="picture/Calculator.PNG"
                    className="img-fluid rounded-end"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
