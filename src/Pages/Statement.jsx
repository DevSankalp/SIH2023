import React, { useState } from 'react';
import Nav from "../Components/navbar";
import Table from "../Components/Statement/table";
import tableData from "../Components/Statement/table.json";

function Statement() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [renderedTableData, setRenderedTableData] = useState(null); // State to hold trimmed table data

  const options = [
    "New Instituions",
    "Required Fund Position for New Technical Instituition",
    "Security Deposit Applicable for Instituitions under Different Programs",
    "TER Charges for Collaboration and Twinning Programs",
    "TER Charges for Universities",
    "TER Charges for ODL/OL Courses",
  ];
  const handleOptionClick = (option, index) => {
    setSelectedOption(option);
    setIsOpen(false);

    // Trim table data based on the selected option
    switch (index) {
      case 0:
        setRenderedTableData(tableData['table1']);
        console.log(renderedTableData);
        break;
      case 1:
        setRenderedTableData(tableData['table2']);
        console.log(renderedTableData);
        break;
      case 2:
        setRenderedTableData(tableData['table3']);
        console.log(renderedTableData);
        break;
      case 3:
        setRenderedTableData(tableData['table4']);
        console.log(renderedTableData);
        break;
      case 4:
        setRenderedTableData(tableData['table5']);
        console.log(renderedTableData);
        break;
    }
  };

  const navbarData = {
    pages: [
      { text: "Home", link: "/" },
      { text: "Fee Statement", active: true },
    ],
    components: [],
    loggedNav: [
      { text: "Dashboard", link: "/Dashboard" },
      { text: "Application", link: "/Application" },
    ],
    buttonText: "Get Approved",
  };



  return (
    <>
      <Nav navbarData={navbarData} />
      <div className="mt-24 w-full">
      <div>
      <h2>Q5: Please specify the type of approval you currently require.</h2>
      <div className="relative inline-block text-left max-w-fit">
        <button
          id="dropdownDividerButton"
          onClick={() => setIsOpen(!isOpen)}
          className="block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-w-20"
          style={{ minWidth: '250px' }}
        >
          {selectedOption || 'Select an option'}
          <svg
            className={`absolute inset-y-0 right-0 w-5 h-5 mt-2 mr-3 pointer-events-none ${
              isOpen ? 'transform rotate-180' : ''
            } text-gray-400 transition-transform duration-300`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <ul
            className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full"
            aria-labelledby="dropdownDividerButton"
          >
            {options.map((option, index) => (
              <li key={index}>
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100 focus:outline-none"
                  onClick={() => handleOptionClick(option, index)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Render the table based on the selected option */}
      {renderedTableData && <Table tableData={{renderedTableData}} />}
    </div>
      </div>
    </>
  );
}

export default Statement;
