import MainLayout from "../layouts/MainLayout";

export default function Home() {
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
          <div className="d-flex">
            <div style={{ width: "30%" }}>
              <img
                src="picture/My Profile.jpg"
                width="200"
                height="200"
                style={{ objectFit: "cover" }}
                className="rounded-circle"
              />
            </div>
            <div
              style={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div className="fw-bold fs-5">Suphanath Wangthip</div>
              <br />
              <div
                style={{ textAlign: "left", width: "630px", margin: "10px" }}
              >
                Hi, my name is Suphanath. I studied Computer Engineering. I love
                programming. I'm interesting in program development.
              </div>
            </div>
          </div>
          <div>My Skills</div>
          <div className="vstack align-items-center d-flex justify-content-center">
            <div
              className="card mb-3 "
              style={{
                maxWidth: "700px",
                backgroundColor: "#789cce",
                color: "rgb(255, 255, 255)",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="picture/programming.jpeg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Programming</h5>
                    <p
                      className="card-text"
                      style={{
                        backgroundColor: "#789cce",
                        color: "rgb(255, 255, 255)",
                      }}
                    >
                      I love coding! I code desktop application using C++.
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
                <div className="col-md-4">
                  <img
                    src="picture/gamer.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Gamer</h5>
                    <p
                      className="card-text"
                      style={{
                        backgroundColor: "#789cce",
                        color: "rgb(255, 255, 255)",
                      }}
                    >
                      I love to play video game. I spend many time to play fps
                      game.
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
                <div className="col-md-4">
                  <img
                    src="picture/football.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Football</h5>
                    <p
                      className="card-text"
                      style={{
                        backgroundColor: "#789cce",
                        color: "rgb(255, 255, 255)",
                      }}
                    >
                      I like to play football. I can play football with
                      everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
