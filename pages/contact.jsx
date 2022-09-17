import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function contact() {
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
          <div>
            <div className="fw-bold fs-3">Contact Me</div>
            <br />
            <div>
              <div className="d-flex">
                <div style={{ width: "30%" }}>
                  <img
                    src="picture/My Profile.jpg"
                    width="230"
                    height="230"
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
                  <div style={{ textAlign: "left", margin: "10px" }}>
                    <table
                      className="p1"
                      style={{
                        width: "85%",
                        paddingTop: "10px",
                      }}
                    >
                      <tr>
                        <td>Name</td>
                        <td className="p1"> Suphanath Wangthip</td>
                      </tr>
                      <tr>
                        <td>Nickname</td>
                        <td className="p1"> Game</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td className="p1">
                          {" "}
                          299 NaKuam Rd., Tambon Chomphu, Muang Lampang, Lampang
                          52100
                        </td>
                      </tr>
                      <tr>
                        <td>Facebook</td>
                        <td className="p1">
                          <a
                            href="https://www.facebook.com/supanut.wangthip"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            https://www.facebook.com/supanut.wangthip
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td className="p1">
                          <a href="mailto: suphanath_w@cmu.ac.th">
                            suphanath_w@cmu.ac.th
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td className="p1"> 0897014299</td>
                      </tr>
                    </table>
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
