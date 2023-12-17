import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Tracker = () => {
  return (
    <div className="z-[0]">
      <section className="vh-100">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-stepper text-black"
                style={{ borderRadius: "16px" }}
              >
                <MDBCardBody className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                      <MDBTypography tag="h5" className="mb-0">
                        INVOICE{" "}
                        <span className="text-primary font-weight-bold">
                          #Y34XDHR
                        </span>
                      </MDBTypography>
                    </div>
                    <div className="text-end">
                      <p className="mb-0">
                        Expected Arrival <span>01/12/19</span>
                      </p>
                      <p className="mb-0">
                        USPS{" "}
                        <span className="font-weight-bold">
                          234094567242423422898
                        </span>
                      </p>
                    </div>
                  </div>
                  <ul
                    id="progressbar-2"
                    className="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2"
                  >
                    <li className="step0 active text-center" id="step1"></li>
                    <li className="step0 active text-center" id="step2"></li>
                    <li className="step0 active text-center" id="step3"></li>
                    <li className="step0 text-muted text-end" id="step4"></li>
                  </ul>

                  <div className="d-flex justify-content-between">
                    <div className="d-lg-flex align-items-center">
                      <MDBIcon
                        fas
                        icon="clipboard-list me-lg-4 mb-3 mb-lg-0"
                        size="3x"
                      />
                      <div>
                        <p className="fw-bold mb-1">Order</p>
                        <p className="fw-bold mb-0">Processed</p>
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <MDBIcon
                        fas
                        icon="box-open me-lg-4 mb-3 mb-lg-0"
                        size="3x"
                      />
                      <div>
                        <p className="fw-bold mb-1">Order</p>
                        <p className="fw-bold mb-0">Shipped</p>
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <MDBIcon
                        fas
                        icon="shipping-fast me-lg-4 mb-3 mb-lg-0"
                        size="3x"
                      />
                      <div>
                        <p className="fw-bold mb-1">Order</p>
                        <p className="fw-bold mb-0">En Route</p>
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <MDBIcon fas icon="home me-lg-4 mb-3 mb-lg-0" size="3x" />
                      <div>
                        <p className="fw-bold mb-1">Order</p>
                        <p className="fw-bold mb-0">Arrived</p>
                      </div>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Tracker;
