import React from "react"

function Statement() {
  return (
    <div className="justify-center items-center">
      <div className="w-11/12 text-lg">
        <div className="relative overflow-hidden shadow-md rounded-lg mb-5  ">
          <table className="table-auto w-full text-justify">
            <thead className="text-black bg-[#B77AFD]">
              <tr>
                <td className="py-1 border text-center p-4">S.No.</td>
                <td className="py-1 border text-center p-4">
                  Type of Institution
                </td>
                <td className="py-1 border text-center p-4">
                  TER Charges <br /> Rs. in Lakh
                </td>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              <tr className="py-5">
                <td className="py-5 border text-center p-4">1</td>
                <td className="py-5 border text-left p-4">
                  Government/Institution setup in J&K / Leh & Ladakh / North
                  Eastern states/PwBD / Institution setup exclusively for women
                </td>
                <td className="py-5 border text-center p-4">1.00</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center p-4">2</td>
                <td className="py-5 border text-left p-4">
                  All other Institutions (including Minority & Government-Aided
                  Institution)
                </td>
                <td className="py-5 border text-center p-4">10.00</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center p-4">3</td>
                <td className="py-5 border text-left p-4">
                  <div>
                    <span
                      style={{
                        backgroundColor:
                          "rgb(255 255 255 / var(--tw-bg-opacity))",
                        color: "black",
                        fontSize: "1.125rem",
                      }}
                    >
                      All Applicants under (i) and (ii) whose applications were
                      rejected and issued Final LoR in the previous academic AY
                      2023-24**
                    </span>
                  </div>
                </td>
                <td className="py-5 border text-center p-4">
                  Govt: 0.25 <br /> Other: 1.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 1.2 Table */}
      <div class="mb-5 w-11/12 text-lg">
        <div class="relative overflow-hidden shadow-md rounded-lg">
          <table class="table-auto w-full text-left">
            <thead class="text-black  bg-[#be90f4]">
              <tr>
                <td class="py-3 border text-center p-4">S.No.</td>
                <td class="py-3 border text-center p-4">
                  Programme proposed(Diploma/ Post Diploma/ Under Graduate
                  Degree/ Post Graduate Diploma/ Post Graduate Degree)
                </td>
                <td class="py-3 border text-center p-4">
                  Total minimum funds required as proof of Operational Expenses
                  at the time of Scrutiny in the Name of the Trust/ Society/
                  Company (RS. in Lakhs)
                </td>
              </tr>
            </thead>
            <tbody class="bg-white text-black">
              <tr class="py-4">
                <td class="py-4 border text-center  p-4">1</td>
                <td class="py-4 border text-left  p-4">
                  Engineering and Technology
                </td>
                <td class="py-4 border text-center  p-4">100</td>
              </tr>
              <tr class="py-4">
                <td class="py-4 border text-center  p-4">2</td>
                <td class="py-4 border text-left  p-4">Planning</td>
                <td class="py-4 border text-center  p-4">50</td>
              </tr>
              <tr class="py-4">
                <td class="py-4 border text-center  p-4">3</td>
                <td class="py-4 border text-left  p-4">
                  Applied Arts and Crafts
                </td>
                <td class="py-4 border text-center  p-4">50</td>
              </tr>
              <tr class="py-4">
                <td class="py-4 border text-center  p-4">4</td>
                <td class="py-4 border text-left  p-4">Design</td>
                <td class="py-4 border text-center  p-4">50</td>
              </tr>
              <tr class="py-4">
                <td class="py-4 border text-center  p-4">5</td>
                <td class="py-4 border text-left  p-4">
                  Hotel Management and Catering Technology
                </td>
                <td class="py-4 border text-center  p-4">50</td>
              </tr>
              <tr class="py-4">
                <td class="py-4 border text-center  p-4">6</td>
                <td class="py-4 border text-left  p-4">
                  Computer Applications
                </td>
                <td class="py-4 border text-center  p-4">50</td>
              </tr>
              <tr class="py-4">
                <td class="py-4 border text-center  p-4">7</td>
                <td class="py-4 border text-left  p-4">Management</td>
                <td class="py-4 border text-center  p-4">50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 1.4 Table */}
      <div class="mb-5 w-11/12 text-lg">
        <div class="relative overflow-hidden shadow-md rounded-lg">
          <table class="table-auto w-full text-left">
            <thead class="text-black  bg-[#B77AFD]">
              <tr>
                <td class="py-3 border text-center  p-4">S.No.</td>
                <td class="py-3 border text-center  p-4">Programme</td>
                <td class="py-3 border text-center  p-4">
                  Diploma/ Post Diploma
                </td>
                <td class="py-3 border text-center  p-4">Under Graduate</td>
                <td class="py-3 border text-center  p-4">
                  Post Graduate Diploma/ Post Graduate Degree
                </td>
              </tr>
            </thead>
            <tbody class="bg-white text-black">
              <tr class="py-5">
                <td class="py-5 border text-center  p-4">1</td>
                <td class="py-5 border text-center  p-4">
                  Engineering and Technology
                </td>
                <td class="py-5 border text-center  p-4">15</td>
                <td class="py-5 border text-center  p-4">35</td>
                <td class="py-5 border text-center  p-4">15</td>
              </tr>
              <tr class="py-5">
                <td class="py-5 border text-center  p-4">2</td>
                <td class="py-5 border text-center  p-4">Planning</td>
                <td class="py-5 border text-center  p-4">15</td>
                <td class="py-5 border text-center  p-4">15</td>
                <td class="py-5 border text-center  p-4">15</td>
              </tr>
              <tr class="py-5">
                <td class="py-5 border text-center  p-4">3</td>
                <td class="py-5 border text-center  p-4">
                  Applied Arts and Crafts
                </td>
                <td class="py-5 border text-center  p-4">15</td>
                <td class="py-5 border text-center  p-4">15</td>
                <td class="py-5 border text-center  p-4">15</td>
              </tr>
              <tr class="py-5">
                <td class="py-5 border text-center  p-4">4</td>
                <td class="py-5 border text-center  p-4">Design</td>
                <td class="py-5 border text-center  p-4">15</td>
                <td class="py-5 border text-center  p-4">15</td>
                <td class="py-5 border text-center  p-4">15</td>
              </tr>
              <tr class="py-5">
                <td class="py-5 border text-center  p-4">5</td>
                <td class="py-5 border text-center  p-4">
                  Hotel Management and Catering Technology(HMCT)
                </td>
                <td class="py-5 border text-center  p-4">15</td>
                <td class="py-5 border text-center  p-4">15</td>
                <td class="py-5 border text-center  p-4">15</td>
              </tr>
              <tr class="py-5">
                <td class="py-5 border text-center  p-4">6</td>
                <td class="py-5 border text-center  p-4">
                  Computer Applications(viz.BCA, MCA, etc.)
                </td>
                <td class="py-5 border text-center  p-4">-</td>
                <td class="py-5 border text-center  p-4">5</td>
                <td class="py-5 border text-center  p-4">15</td>
              </tr>
              <tr class="py-5">
                <td class="py-5 border text-center  p-4">7</td>
                <td class="py-5 border text-center  p-4">
                  Management(viz.BBA,MBA, etc.)
                </td>
                <td class="py-5 border text-center  p-4">-</td>
                <td class="py-5 border text-center  p-4">5</td>
                <td class="py-5 border text-center  p-4">15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 2.2 Table */}
      <div className="mb-5 w-11/12 text-lg">
        <div className="relative overflow-hidden shadow-md rounded-lg">
          <table className="table-auto w-full text-left">
            <thead className="text-black  bg-[#B77AFD]">
              <tr>
                <td className="py-3 border text-center  p-4">
                  Particulars (Category -1)
                </td>
                <td className="py-3 border text-center  p-4">
                  Processing Period of Application
                </td>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Extension of Approval based on Self-Disclosure
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Introduction/ Continuation of seats for Non Resident
                  Indian(s)&nbsp;
                  <br />
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Conversion of Diploma Level into Degree Level and vice-versa
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Change in the Name of the Institution or affiliating
                  University/ Board or Type of Institution (except
                  Institution(s) converted into a University)
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  To start new Programme/ Level in the existing Institutions
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Merger of Institutions under the Same /Different Trust/
                  Society/ Company operating in the same Campus / City
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Extension of Approval of the existing Institutions after a
                  break in the preceding Academic Year/ Restoration of Intake
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Introduction/Continuation of supernumerary seats for Foreign
                  Nationals/ Overseas Citizen of India (OCI)/ Children of Indian
                  Workers in Gulf Countries.
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Increase in Intake/ Additional Course(s)
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Introduction of Integrated/Dual Degree Course
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Introduction of Off-Campus
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Introduction/ Continuation of Fellow Programme in Management
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Change in the Name of the Course/Merger of the Courses/
                  Reduction in Intake
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Introduction/ Continuation of Collaboration and Twinning
                  Programme
                </td>
                <td className="py-5 border text-center  p-4">
                  As per Public Notice Period
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 2.2 Table */}
      <div className="mb-5 w-11/12 text-lg">
        <div className="relative overflow-hidden shadow-md rounded-lg">
          <table className="table-auto w-full text-left">
            <thead className="text-black  bg-[#B77AFD]">
              <tr>
                <td className="py-3 border text-center  p-4">
                  Particulars (Category - 2)
                </td>
                <td className="py-3 border text-center  p-4">
                  Processing Period of Application
                </td>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Change of Site / Location
                </td>
                <td className="py-5 border text-center  p-4">Year round</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Closure of the Institution
                  <br />
                </td>
                <td className="py-5 border text-center  p-4">Year round</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Conversion of Women's Institution into Co-ed Institution and
                  vice-versa
                </td>
                <td className="py-5 border text-center  p-4">Year round</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Closure of Programme(s)/ Course(s)
                </td>
                <td className="py-5 border text-center  p-4">Year round</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Change in the Bank Details
                  <br />
                </td>
                <td className="py-5 border text-center  p-4">Year round</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Change in the Name of the Trust/Society/Company
                </td>
                <td className="py-5 border text-center  p-4">Year round</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">Extended EoA</td>
                <td className="py-5 border text-center  p-4">Year round</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Type of Institution (Institution(s) converted into a
                  Deemed-to-be-University)
                </td>
                <td className="py-5 border text-center  p-4">Year round</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Online Learning/Open and Distandce Learning courses
                </td>
                <td className="py-5 border text-center  p-4">
                  Year round(Processing will be twice a year as per UGC
                  timeline)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 2.3 Table */}
      <div className="mb-5 w-11/12 text-lg">
        <div className="relative overflow-hidden shadow-md rounded-lg">
          <table className="table-auto w-full text-left">
            <thead className="text-black  bg-[#B77AFD]">
              <tr>
                <td className="py-3 border text-center  p-4">
                  Nature of Application
                </td>
                <td className="py-3 border text-center  p-4">
                  Documents
                  <br />
                  Submitted
                </td>
                <td className="py-3 border text-center  p-4">
                  Self
                  <br />
                  Disclosure
                </td>
                <td className="py-3 border text-center  p-4">
                  Scrutiny/
                  <br />
                  Re-Scrutiny
                </td>
                <td className="py-3 border text-center  p-4">EVC</td>
                <td className="py-3 border text-center  p-4">
                  SAC/
                  <br />
                  SHC
                </td>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Extension of Approval based on Self-Disclosure
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">-</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Introduction/Continuation of seats for Non Resident Indian(s)
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">-</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Conversion of Diploma Level into Degree Level and vice-versa
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">AA</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Change in the Name of the Institution or affiliating
                  University/Board or Type of Institution(except Institution(s)
                  converted into a University)
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">-</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  To start new Programme/Lead in the existing Institutions
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">AA</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Merger of Institutions under the same/Different
                  Trust/Society/Company operating in the same Campus/City
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">AA</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Extension of Approval of the existing Institutions after break
                  in the preceding Academic Year/Restoration of
                  Intake/Hivernation
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">AA</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Introduction/Continuation of supernumerary seats for Foreign
                  Nationals/Overseas Citizen of India(OCI)/Children of Indian
                  Workers in Gulf Countries
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">-</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Increase in Intake/Additional Courses(s)
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">AA</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Introduction of Integrated/Dual Degree Course
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">AA</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Introduction/Continuation of Fellow Programme in Management
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">AA</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Change in the Name of the Course/Merger of the
                  Courses/Reduction in Intake
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">-</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Introduction/Continuation of Collaboration and Twinning
                  Programme
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">AA</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Change of Site/Location
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">AA</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Closure of the Institution
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">-</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Conversion of Women's Institution into Co-ed Institution and
                  vice-versa
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">-</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Closure of Programme(s)/Course(s)
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">-</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Change in the Bank Details
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">-</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Change in the Bank Details
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">-</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Type of Institution(Institution(s) converted into a
                  Deemed-to-be-be-University)
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">AA</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  Online Learning/ODL courses*
                </td>
                <td className="py-5 border text-center  p-4">Annexure-2</td>
                <td className="py-5 border text-center  p-4">-</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">Yes</td>
                <td className="py-5 border text-center  p-4">AA</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  AA -As Applicable Depending on the Outcome of the Previous
                  Processing Steps
                </td>
                <td className="py-5 border text-center  p-4" />
                <td className="py-5 border text-center  p-4" />
                <td className="py-5 border text-center  p-4" />
                <td className="py-5 border text-center  p-4" />
                <td className="py-5 border text-center  p-4" />
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">
                  *Applications submitted will be Processed Twice in a Year As
                  per UGC Norms
                </td>
                <td className="py-5 border text-center  p-4" />
                <td className="py-5 border text-center  p-4" />
                <td className="py-5 border text-center  p-4" />
                <td className="py-5 border text-center  p-4" />
                <td className="py-5 border text-center  p-4" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 3.1 Table */}
      <div className="mb-5 w-11/12 text-lg">
        <div className="relative overflow-hidden shadow-md rounded-lg">
          <table className="table-auto w-full text-left">
            <thead className="text-black  bg-[#B77AFD]">
              <tr>
                <td className="py-3 border text-center  p-4">S.No.</td>
                <td className="py-3 border text-center  p-4">
                  Type of Institution
                </td>
                <td className="py-3 border text-center  p-4">
                  Introduction
                  <br />
                  (Rs. in Lakh)
                </td>
                <td className="py-3 border text-center  p-4">
                  Continuation
                  <br />
                  (Rs. in Lakh)
                </td>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">1</td>
                <td className="py-5 border text-left  p-4">
                  Government/ Central/State Public University/ Institution set
                  up in J&amp;K/ Ladakh/North Eastern States/ Institution set up
                  exclusively for Women/ PwBD
                </td>
                <td className="py-5 border text-center  p-4">2.0</td>
                <td className="py-5 border text-center  p-4">1.0</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">2</td>
                <td className="py-5 border text-left  p-4">
                  All other Institutions/Universities including Minority
                  Institution/ Govt. Aided Institutions.
                </td>
                <td className="py-5 border text-center  p-4">12.0</td>
                <td className="py-5 border text-center  p-4">6.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 4.1 Table */}
      <div className="w-11/12 text-lg">
        <div className="relative overflow-hidden shadow-md rounded-lg mb-5  ">
          <table className="table-auto w-full text-justify">
            <thead className="text-black bg-[#B77AFD]">
              <tr>
                <td className="py-1 border text-center p-4">S.No.</td>
                <td className="py-1 border text-center p-4">
                  Type of University
                </td>
                <td className="py-1 border text-center p-4">
                  TER Charges <br /> Rs. in Lakh
                </td>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              <tr className="py-5">
                <td className="py-5 border text-center p-4">1</td>
                <td className="py-5 border text-left p-4">
                  Government Unviersity / Institution Deemed to be Univesity
                  (Government) and University set up in J&K / Ladakh / North
                  Eastern States / University set up exclusively for women
                </td>
                <td className="py-5 border text-center p-4">2.00</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center p-4">2</td>
                <td className="py-5 border text-left p-4">
                  Institution Deemed to be University(Private)/State Private
                  Unviersity
                </td>
                <td className="py-5 border text-center p-4">10.00</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center p-4">3</td>
                <td className="py-5 border text-left p-4">
                  <div>
                    <span
                      style={{
                        backgroundColor:
                          "rgb(255 255 255 / var(--tw-bg-opacity))",
                        color: "black",
                        fontSize: "1.125rem",
                      }}
                    >
                      All Applicants under (i) and (ii) whose application was
                      rejected and Final LoR was issued in the last Academic
                      Year**
                    </span>
                  </div>
                </td>
                <td className="py-5 border text-center p-4">
                  For Category (i)1.00
                  <br />
                  For Category (ii)4.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 5.2 Table */}
      <div className="mb-5 w-11/12 text-lg">
        <div className="relative overflow-hidden shadow-md rounded-lg">
          <table className="table-auto w-full text-left">
            <thead className="text-black  bg-[#B77AFD]">
              <tr>
                <td className="py-3 border text-center  p-4">S.No.</td>
                <td className="py-3 border text-center  p-4">
                  Staff Requirements
                </td>
                <td className="py-3 border text-center  p-4">Number</td>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">1</td>
                <td className="py-5 border text-center  p-4">
                  Assistant Professor (Coordinator)
                </td>
                <td className="py-5 border text-center  p-4">1</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">2</td>
                <td className="py-5 border text-center  p-4">
                  Counseller per Theory Course of 4 Credits
                </td>
                <td className="py-5 border text-center  p-4">2</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">3</td>
                <td className="py-5 border text-center  p-4">
                  Supervisor per Practical Course of 2 Credits
                </td>
                <td className="py-5 border text-center  p-4">1</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">4</td>
                <td className="py-5 border text-center  p-4">
                  Computer Operator
                </td>
                <td className="py-5 border text-center  p-4">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*5.3 Table*/}
      <div className="mb-5 w-11/12 text-lg">
        <div className="relative overflow-hidden shadow-md rounded-lg">
          <table className="table-auto w-full text-left">
            <thead className="text-black  bg-[#B77AFD]">
              <tr>
                <td className="py-3 border text-center  p-4">S.No.</td>
                <td className="py-3 border text-center  p-4">
                  Type of Built-up Area
                </td>
                <td className="py-3 border text-center  p-4">
                  Percentage
                  <br />
                  (%)
                </td>
                <td className="py-3 border text-center  p-4">
                  Headquaters&nbsp;
                  <br />
                  in Sq m
                </td>
                <td className="py-3 border text-center  p-4">
                  Learner Support
                  <br />
                  Centre in Sq m
                </td>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">1</td>
                <td className="py-5 border text-center  p-4">Academic Area</td>
                <td className="py-5 border text-center  p-4">50</td>
                <td className="py-5 border text-center  p-4">750</td>
                <td className="py-5 border text-center  p-4">66</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">2</td>
                <td className="py-5 border text-center  p-4">
                  Administrative Area
                </td>
                <td className="py-5 border text-center  p-4">10</td>
                <td className="py-5 border text-center  p-4">150</td>
                <td className="py-5 border text-center  p-4">33</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">3</td>
                <td className="py-5 border text-center  p-4">
                  Academic support such as Library,Reading Room, Computer
                  Centre, Informational and Communication Technology
                  Laboratories, Video and Audio Laboratories, etc.
                </td>
                <td className="py-5 border text-center  p-4">30</td>
                <td className="py-5 border text-center  p-4">450</td>
                <td className="py-5 border text-center  p-4">150</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">4</td>
                <td className="py-5 border text-center  p-4">
                  Amenities or other support facilities Area
                </td>
                <td className="py-5 border text-center  p-4">10</td>
                <td className="py-5 border text-center  p-4">150</td>
                <td className="py-5 border text-center  p-4">66</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">5</td>
                <td className="py-5 border text-center  p-4">
                  Minimum Built-up area for Open and Distance Learinin activity
                </td>
                <td className="py-5 border text-center  p-4">1500</td>
                <td className="py-5 border text-center  p-4">150</td>
                <td className="py-5 border text-center  p-4">150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*5.5 Table*/}
      <div className="mb-5 w-11/12 text-lg">
        <div className="relative overflow-hidden shadow-md rounded-lg">
          <table className="table-auto w-full text-left">
            <thead className="text-black  bg-[#B77AFD]">
              <tr>
                <td className="py-3 border text-center  p-4">S.No.</td>
                <td className="py-3 border text-center  p-4">
                  Standalone Institutions/ Institution Deemed to be University/
                  University
                </td>
                <td className="py-3 border text-center  p-4">
                  TER Charges for ODL
                  <br />
                  Rs. in Lakh
                </td>
                <td className="py-3 border text-center  p-4">
                  TER Charges for OL
                  <br />
                  Rs. in Lakh
                </td>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">1</td>
                <td className="py-5 border text-center  p-4">
                  New application for the conduct of Open and Distance Learning
                  Courses from Standalone Institution/ Institution Deemed to be
                  University (Headquarters and upto 2 Learner Support Centres
                  for the total Intake upto 5000)
                </td>
                <td className="py-5 border text-center  p-4">10.00</td>
                <td className="py-5 border text-center  p-4">10.00</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">2</td>
                <td className="py-5 border text-center  p-4">
                  New application by the existing AICTE approved Institution
                  running either ODL or OL Courses
                </td>
                <td className="py-5 border text-center  p-4">1.25</td>
                <td className="py-5 border text-center  p-4">1.25</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">3</td>
                <td className="py-5 border text-center  p-4">
                  <div>Each additional Learner Support Centre (Intake</div>
                  <div>upto 1000)</div>
                </td>
                <td className="py-5 border text-center  p-4">3.50</td>
                <td className="py-5 border text-center  p-4">Not Applicable</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">4</td>
                <td className="py-5 border text-center  p-4">
                  Extension of Approval (Intake upto 1000)
                </td>
                <td className="py-5 border text-center  p-4">2.00</td>
                <td className="py-5 border text-center  p-4">2.00</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">5</td>
                <td className="py-5 border text-center  p-4">
                  Introduction of New Course /Increse in approve Intake in the
                  courses (for every 1000 Seats in learner support centre) or
                  headquarters.
                </td>
                <td className="py-5 border text-center  p-4">2.50</td>
                <td className="py-5 border text-center  p-4">2.50</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4" />
                <td className="py-5 border text-center  p-4">
                  All Applications under (i) whose applications for Rejected
                  unissued final LoR in the precedding Year
                </td>
                <td className="py-5 border text-center  p-4">2.50</td>
                <td className="py-5 border text-center  p-4">2.50</td>
              </tr>
              <tr className="py-5">
                <td className="py-5 border text-center  p-4">6</td>
                <td className="py-5 border text-center  p-4">
                  Closure of Course(s)/ Reduction in Intake/ Change in the Name
                  of the Course(s)
                </td>
                <td className="py-5 border text-center  p-4">
                  0.25 for each Learner Support Centre/Headquaters
                </td>
                <td className="py-5 border text-center  p-4">0.25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Statement
