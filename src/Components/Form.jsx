import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Dropdown = ({ question, options, handleSelect, selected }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative inline-block text-left max-w-fit">
        <button
          id={`${question}DropdownButton`}
          onClick={toggleDropdown}
          className="block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-w-20"
          style={{ minWidth: '250px' }}
        >
          {selected || 'Select an option'}
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
            className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full overflow-auto max-h-60"
            aria-labelledby={`${question}DropdownButton`}
          >
            {options.map((option) => (
              <li key={option}>
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100 focus:outline-none"
                  onClick={() => {
                    handleSelect(question, option);
                    setIsOpen(false); // Call another function here
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  

const Form = (uid,setActive) => {
    const [step, setStep] = useState(1);
    const [relationId, setRelationId] = useState(0);
    const [email, setEmail] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [next, setNext] = useState('');
    const [answers, setAnswers] = useState({
        A1: '',
        A2: '',
        A3: '',
        A4: '',
        A5: '',
        A6: '',
        A7: '',
        A8: '',
        A9: '',
        A10: '',
        A11: '',
        A12: '',
        A13: '',
        A14: '',
        A15: '',
        A16: '',
        A17: '',
        A18: '',
        A19: '',
        A20: '',
        A21: '',
        A22: '',
        G1: '',
        G2: '',
        G3: '',
        G4: '',
        G5: '',
        G6: '',
        G7: '',
        G8: '',
        G9: '',
      });

      const getUserData = async (uid) => {
        try {
          const response = await axios.get(`http://localhost:1337/api/userdata?filters[uid][$eq]=${uid}`);
          return response.data;
        } catch (error) {
          // Handle error appropriately
          console.error('Error fetching user data:', error);
          throw error;
        }
      };
      
      // Usage example:
      getUserData(uid.uid)
        .then((userData) => {
          setRelationId(userData.data[0].id);
          setEmail(userData.data[0].attributes.email);
          // Do something with the retrieved user data
        })
        .catch((error) => {
          // Handle any errors occurred during the API call
          console.error('Error:', error);
        });

        const currentBudget=[
          "20L-30L",
          "30L-50L",
          "50L-80L",
          "80L-100L",
          "100L+"
      ]

      const securityDeposit = [
          "5L-15L",
          "15L-25L",
          "25L-35L",
          "35L+"
      ]

      

        const domains = [
            'Engineering and Technology',
            'Planning',
            'Applied Arts and Crafts',
            'Design',
            'Hotel Management and Catering Technology',
            'Computer Applications',
            'Management',
          ];
        
          const approvals = [
            'Diploma',
            'Post Diploma Certificate',
            'Under Graduate Degree',
            'Post Graduate Diploma',
            'Post Graduate Degree',
            'Post Graduate Certificate',
          ];
        
          const courseTypes = [
            'Bachelor of Arts (BA)',
            'Bachelor of Science (BSc)',
            'Bachelor of Commerce (BCom)',
            'Bachelor of Computer Applications (BCA)',
            'Bachelor of Technology (BTech)',
            'Bachelor of Business Administration (BBA)',
            'Bachelor of Fine Arts (BFA)',
            'Bachelor of Design (BDes)',
            'Master of Arts (MA)',
            'Master of Science (MSc)',
            'Master of Commerce (MCom)',
            'Master of Computer Applications (MCA)',
            'Master of Technology (MTech)',
            'Master of Business Administration (MBA)',
            'Master of Fine Arts (MFA)',
            'Master of Design (MDes)',
            'Diploma in Engineering',
            'Diploma in Hotel Management',
            'Diploma in Digital Marketing',
            'Certificate Course in Web Development',
            'Certificate in Financial Management',
            'Bachelor of Medicine and Bachelor of Surgery (MBBS)',
            'Bachelor of Dental Surgery (BDS)',
            'Bachelor of Pharmacy (BPharm)',
            'Bachelor of Physiotherapy (BPT)',
            'Bachelor of Nursing (BSc Nursing)',
            'Bachelor of Laws (LLB)',
            'Master of Laws (LLM)',
            'Bachelor of Performing Arts (BPA)',
            'Bachelor of Arts in Journalism and Mass Communication (BA JMC)',
            'Bachelor of Science (BSc) in Physics',
            'Bachelor of Science (BSc) in Chemistry',
            'Bachelor of Science (BSc) in Biology',
            'Bachelor of Science (BSc) in Mathematics',
            // Add any other course types here
          ];
          
        
          const institutionTypes = [
            'i) Government/Institution set up in J&K/Leh & Ladakh/North Eastern states/PwBD/Institution set up exclusively for women',
            'ii) All other Institutions (including Minority & Government-Aided Institution)',
            'iii) All Applicants under (i) and (ii) whose applications were rejected and issued Final LoR in the previous academic year 2023-24',
          ];
        

      const labelsC = [
        "Student Exchange Programmes",
        "Twinning Programmes",
        "Joint Degree Programmes",
        "Dual Degree Programmes between Indian and Foreign University",
        "Institution or between two Indian Institutions in the field of Technical Education, Research and Training"
      ]

      const labels = [
        
          "Extension of Approval based on Self-Disclosure",
          "Increase in Intake/Additional Course(s)",
          "Start new Programme/Level in existing Institutions",
          "Introduction/Continuation of seats for Non-Resident Indian(s)",
          "Introduction/Continuation of supernumerary seats for Foreign Nationals/OCI/Children of Indian Workers in Gulf Countries",
          "Introduction of Integrated/Dual Degree Course",
          "Introduction of Off-Campus",
          "Introduction/Continuation of Fellow Programme in Management",
          "Merger of Institutions under the same/different Trust/Society/Company operating in the same Campus or City",
          "Conversion of Diploma Level into Degree Level and vice-versa",
          "Conversion of Women’s Institution into Co-ed Institution and vice-versa",
          "Extension of Approval of existing Institutions after a break in the preceding Academic Year(s)/Hibernation/Restoration of Intake",
          "Change of Site/Location",
          "Change in the Name of the Course(s)/Merger of Courses/Reduction in Intake/Closure of Programme(s)/Course(s)",
          "Change in the Name of the Institution or Affiliating University/Board or Type of Institution",
          "Change in the Name/Address of the Trust/Society/Company",
          "Closure of the Institution"
        ]

        const questionsD = [
          "Does your institution have the required notification issued by the Government under Central/ State Act declaring it as a Central/ State/ Private University or section 3 of UGC Act declaring it as a Deemed to be University?",
          "Is your institution a registered Society under the Societies Registration Act, 1860 through the Chairman/ Secretary of Society or a Trust registered under the Indian Trust Act, 1882, or any other relevant Acts through the Chairman/Secretary of the Trust or a Company established under Section 8 of Companies Act, 2013 or Central or State Government/ UT Administration or by a Society or a Trust registered with them?",
          "If your institution has Multiple Campuses/ Off Campuses/ Constituent Colleges, did you apply separately for approval in respect of each campus/off campus/ constituent college, or did you apply as a single entity with all your courses & programs of both Main and Off campus?",
          "Is your institution taking AICTE approval for all the Technical Programme(s)/ Course(s) / intake, and not just for selected ones, as per the mandatory requirement of AICTE norms?",
          "If your institution is a Deemed to be University, did it obtain AICTE approval from the Academic Year 2018-19, in compliance with the Hon’ble Supreme Court Order dated 03-11-2017?",
          "Are State Public & Private Universities and Central Universities maintaining Norms & Standards as specified in APH and taking AICTE approval for regular courses falling under the purview of the council in case the same courses are offered in ODL/OL mode (Ref. UGC Regulation)?",
          "Is your institution permitted to apply for partial approval of any Programme(s)/Course(s)/Intake at any level?"
        ];

        const questionsE = [
          "Does your institution offer Courses of learning at the Post Graduate Certificate/ Post Graduate Diploma/ Post Graduate Degree Level programmes in Management, Computer Applications, Artificial Intelligence, Data Science, Cyber Security, Block Chain, Logistics, and Travel & Tourism in Open and Distance Learning mode and Online Education?",
          "Is your institution allowing Open and Distance Learning at Diploma/Degree/ Post Graduate Degree in Engineering and Technology, Planning, Hotel Management and Catering Technology, Applied Arts and Crafts, and Design Programmes?",
          "Did your Institution Deemed to be University and State Public & Private Universities apply and secure approval/recommendation of respective regulatory bodies for running programmes of the specified domain as per the UGC (Open and Distance Learning Programmes and Online Programmes) Regulations 2020?",
          "Does your institution adhere to the NAAC score guidelines notified by UGC for Institution(s) Deemed to be University and Universities (Central, State Public or State Private), and NBA score guidelines notified by AICTE for Standalone institutions for grant of approval to run programmes/courses under ODL and Online?",
          "Is your Standalone Institution/ Institution Deemed to be University / State Public & Private university offering AICTE Purview Courses in Open and Distance Learning mode/ Online with the approval by the Council?",
          "Did your Standalone Institution/ Institution Deemed to be University / State Public & Private university create a separate Department/ School/ Centre as Headquarters for offering Courses in Open and Distance Learning mode?",
          "Is your existing institution eligible for a 3 years’ Extension of Approval (EoA) from the AY-2024-25 by meeting ANY ONE of the specified criteria?",
          "If applicable, did your institution figure in the 8th Edition of NIRF ranked Institutions (announcement made on 5th June 2023)?",
          "If applicable, did your institution figure in QS World Ranking Asia-2024 (announcement made on 8th Nov 2023)?",
          "If applicable, does your institution have a minimum of 30% eligible courses in regular mode with NBA accreditation having validity till 30th April 2025?",
          "If applicable, does your institution have a valid NAAC score of 3.01 on a scale of 4.0 and above?",
          "If applicable, has your institution conferred ‘Autonomous Status’ by UGC?",
          "If applicable, does your institution have more than 80% admissions in all the courses/programmes offered consecutively for the last 5 Academic Years?",
          "Is your institution keen on seeking approval for ODL/OL, and has it applied for approval to offer said courses in regular mode to AICTE?",
          "If your institution is a State Public & Private University or Central University, does it maintain Norms & Standards as specified in APH and take AICTE approval for regular courses in case the same courses are offered in ODL/OL mode (Ref. UGC Regulation)?",
          "Is your institution permitted to apply for partial approval of any Programme(s)/Course(s)/Intake at any level?",
          "For ODL Mode, does your institution conduct all activities such as admissions, contact programmes, examinations, etc., for learners strictly within the territorial jurisdiction of the Institution as specified in the regulations?",
          "For Online Mode, does your institution allow a Learner residing within or outside India to enrol in any programme offered under Online mode?",
          "Does your Standalone Institution/ Institution Deemed to be University/University (Central, State Public or State private) have a designated Centre of Distance Education at Headquarters for operationalising the Prgrammes/Courses in Open and Distance Learning mode/ online mode?",
          "Is the designated Centre of Distance Education at Headquarters headed by a regular functionary not below the rank of a Professor?",
          "Does your designated Centre of Distance Education at Headquarters have the required positions on a Full Time and dedicated basis, excluding the designated positions in the Open Universities as per their respective Act(s), along with infrastructural facilities?",
          "Does your institution have a Learner Support Centre(s) in addition to the Headquarters for operationalising the Prgrammes/Courses in Open and Distance Learning mode/ online mode?"
        ];
        

      const questionsA = [
        'Does your institution comply with the guidelines prohibiting the use of specific terms such as IIM/IIT/IISc/NIT/IISER/IIIT/IIEST/AICTE/UGC/MoE/GoI and other restricted names as outlined in the Emblems and Names (Prevention of Improper Use) Act, 1950, unless established by the Government of India or approved by the Government of India?',
        'Does your institution plan to establish the New Technical Institution by adhering to the infrastructure and other requirements as specified in the Approval Process Handbook?',
        'Will the New Technical Institution offering Technical Course(s) / Programme(s) seek prior approval from the Council before establishment?',
        'Does the Admission Authority/Body/Institution ensure that students are not admitted to any Technical Programme without the requisite prior approval from the Council?',
        'Is the institution prepared to process applications received by the Council according to the norms and procedures specified in the Approval Process Handbook?',
        'Does the institution commit to adhering to the existing Central, State, and Local Laws, as well as the norms of other Regulatory Bodies, if applicable?',
        'If your State Government / UT is providing financial assistance for the establishment of Technical institutions to offer Technical Course(s) / Programs at DIPLOMA/UG/PG level, does the government have the requisite land for the establishment of the new institute?',
        'For State Public, Private Universities, and Central Universities, is it understood that while seeking AICTE approval is not mandatory as per the AICTE Act, it may be necessary to avail benefits of AICTE Schemes/Initiatives and maintain standards and norms as prescribed?',
        'For applications that were rejected and issued a Final Letter of Recognition (LoR) in the previous academic year AY 2023-24, are you planning to apply afresh for approval as per the applicable TER charges?',
      ];

      const handleBselect = (option) => {
        setAnswers({ ...answers, A1: option.label }); // Set A1 to the selected label
        setIsOpen(false);
      };
      const handleCselect = (option) => {
        setAnswers({ ...answers, A1: option.label }); // Set A1 to the selected label
        setIsOpen(false);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          user: relationId,
          type: selectedOption,
          ...answers
        };
        
        // Now 'data' holds the required structure to post on the API link
        axios.post("http://localhost:1337/api/forms", { data })
  .then(response => {
    console.log('Data successfully posted:', response.data);
    // Handle the response data or perform actions based on the response
    // Post notification data
    const notificationData = {
        email: email,
        message: "Form Submitted Successfully"
      };

      axios.post("http://localhost:1337/api/notifications", { data: notificationData })
        .then(notificationResponse => {
          console.log('Notification data posted:', notificationResponse.data);
          // Handle the notification response or perform actions based on it
        })
        .catch(notificationError => {
          console.error('Error posting notification data:', notificationError);
          // Handle errors or display error messages for notification post
        });
  })
  .catch(error => {
    console.error('Error posting data:', error);
    // Handle errors or display error messages
  });
      };
    
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setNext(option.value)
    setIsOpen(false); // Close dropdown when an option is clicked
  };

  const handleNext = () => {
    setStep(2);
    console.log(answers);
  };
  
    const options = [
      { value: 'A', label: 'Grant of Approval for New Institution' },
      { value: 'B', label: 'Grant of Extension of Approval for Existing Institutions.' },
      { value: 'C', label: 'Collaboration & Twinning Programmes' },
      { value: 'D', label: 'Grant of Approval for Universities' },
      { value: 'E', label: 'Approval for Open and Distance Learning (ODL) / Online Learning (OL)' }
    ];

    const handleDropdownChange = (event, index) => {
      const { value } = event.target;
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [`A${index + 1}`]: value,
      }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnswers({ ...answers, [name]: value });
      };


    const handleBack = () => {
        if (step === 1)
        setActive(false)
        else {
        setStep(1);
        setAnswers({
          A1: '',
          A2: '',
          A3: '',
          A4: '',
          A5: '',
          A6: '',
          A7: '',
          A8: '',
          A9: '',
          A10: '',
          A11: '',
          A12: '',
          A13: '',
          A14: '',
          A15: '',
          A16: '',
          A17: '',
          A18: '',
          A19: '',
          A20: '',
          A21: '',
          A22: '',
          G1: '',
          G2: '',
          G3: '',
          G4: '',
          G5: '',
          G6: '',
          G7: '',
          G8: '',
          G9: '',
        });}
      };

      const handleSelect = (question, selected) => {
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          [question]: selected,
        }));
      };
      const questions = [
        "What is your current budget or financial position?",
        "What is the maximum amount you can allocate as a security deposit?",
        "Can you confirm the legal status of the land you've acquired?",
        "What is the total land area you own?",
        "How many employees are currently employed in your Institution?"
      ];
  
    return (
      <div>
        {step === 1 && (
          <div className="flex flex-col gap-2">
            <h2>Q1: What specific domains or disciplines does your institution offer courses in?</h2>
            <Dropdown
        question="G1"
        options={domains}
        handleSelect={handleSelect}
        selected={answers.G1}
      />
      <h2>Q2: Which approvals are you seeking for your institution in the context of Technical Education Programmes?</h2>
      <Dropdown
        question="G2"
        options={approvals}
        handleSelect={handleSelect}
        selected={answers.G2}
      />
      <h2>Q3: What types of courses are available at your institution?</h2>
      <Dropdown
        question="G3"
        options={courseTypes}
        handleSelect={handleSelect}
        selected={answers.G3}
      />
      <h2>Q4: Please specify the type of institution you represent?</h2>
      <Dropdown
        question="G4"
        options={institutionTypes}
        handleSelect={handleSelect}
        selected={answers.G4}
      />
            <h2>Q5: Please specify the type of approval you currently require.</h2>
            <div className="relative inline-block text-left max-w-fit">
      <button
        id="dropdownDividerButton"
        onClick={toggleDropdown}
        className="block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-w-20"
        style={{minWidth:'250px'}}
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
          {options.map((option) => (
            <li key={option.value}>
              <button
                className="block px-4 py-2 w-full text-left hover:bg-gray-100 focus:outline-none"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
    {questions.map((question, index) => (
  <div key={`question${index + 1}`} className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500">
    <label htmlFor={`Q${index + 6}`}>{`Q${index+6}: ${question}`}</label>
    <textarea
      id={`Q${index + 6}`}
      name={`G${index + 5}`}
      value={answers[`G${index + 5}`]}
      onChange={handleInputChange}
      placeholder={`Enter your answer for ${question}`}
      maxLength={60}
      className="w-full h-20 resize-none"
    />
  </div>
    ))
    }
          <button disabled={selectedOption === ''} onClick={handleNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Next
            </button>
            <button onClick={handleBack} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2">
              Back
            </button>
          </div>
        )}
        {step === 2 && (<>
            <button onClick={handleBack} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2">
            Back
          </button>
          {next === 'A' && (
            <form onSubmit={handleSubmit}>
      {questionsA.map((question, index) => (
        <div
        key={`question${index + 1}`}
        className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
      >
        <label htmlFor={`Q${index + 1}`}>{`Q${index + 1}: ${question}`}</label>
        <select
          id={`Q${index + 1}`}
          name={`A${index + 1}`}
          value={answers[`A${index + 1}`]}
          onChange={(event) => handleDropdownChange(event, index)}
          className="w-full h-10 border rounded"
        >
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      ))}


<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Submit
            </button>
            <button onClick={handleBack} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2">
              Back
            </button>
    </form>
          )}
          {next === 'B' && (
      <div>
      <h2>Q1: Which specific categories do you intend to select for approval for existing institutions?
</h2>
      <div className="relative inline-block text-left">
        <button
          id="dropdownDividerButton"
          onClick={toggleDropdown}
          className="block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-w-20"
          style={{ minWidth: '250px' }}
        >
          {answers['A1'] || 'Select an option'}
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
            className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full overflow-auto max-h-60"
            aria-labelledby="dropdownDividerButton"
          >
            {labels.map((label) => (
              <li key={label}>
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100 focus:outline-none"
                  onClick={() => handleBselect({ label })}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div key={"question2"} className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500">
          <label htmlFor={`Q2`}>{"Q2: Has your institution remitted 3 years' TER Charges for the Extension of Approval, considering the eligibility criteria specified in the Approval Process Handbook for the academic year 2024-2025?"}</label>
          <select
          id={`Q2`}
          name={`A2`}
          value={answers[`A2`]}
          onChange={(event) => handleDropdownChange(event, 1)}
          className="w-full h-10 border rounded"
        >
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleSubmit}>
              Submit
            </button>
            <button onClick={handleBack} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2">
              Back
            </button>
    </div>
      


          )}
          {next === 'C' && (
      <div>
      <h2>Q1: Please specify the approval you want?
</h2>
      <div className="relative inline-block text-left">
        <button
          id="dropdownDividerButton"
          onClick={toggleDropdown}
          className="block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-w-20"
          style={{ minWidth: '250px' }}
        >
          {answers['A1'] || 'Select an option'}
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
            className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full overflow-auto max-h-60"
            aria-labelledby="dropdownDividerButton"
          >
            {labelsC.map((label) => (
              <li key={label}>
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100 focus:outline-none"
                  onClick={() => handleCselect({ label })}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div key={"question2"} className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500">
          <label htmlFor={`Q2`}>{"Q2: Does your institution have collaboration under the specified programmes with a Foreign University ranked within the top 1000 as per the latest QS/THE world ranking or with an Indian University/Institution falling under the mentioned categories (i.e., accredited by NAAC, with NBA accreditation, or in the Top-200 of AICTE approved Institutes in the respective category of NIRF)?"}</label>
          <select
          id={`Q2`}
          name={`A2`}
          value={answers[`A2`]}
          onChange={(event) => handleDropdownChange(event, 1)}
          className="w-full h-10 border rounded"
        >
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleSubmit}>
              Submit
            </button>
            <button onClick={handleBack} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2">
              Back
            </button>
    </div>
      


          )}
          {next === 'D' && (
            <form onSubmit={handleSubmit}>
      {questionsD.map((question, index) => (
        <div key={`question${index + 1}`} className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500">
          <label htmlFor={`Q${index + 1}`}>{`Q${index + 1}: ${question}`}</label>
          <select
          id={`Q${index + 1}`}
          name={`A${index + 1}`}
          value={answers[`A${index + 1}`]}
          onChange={(event) => handleDropdownChange(event, index)}
          className="w-full h-10 border rounded"
        >
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        </div>
      ))}


<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Submit
            </button>
            <button onClick={handleBack} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2">
              Back
            </button>
    </form>
          )}
          {next === 'E' && (
            <form onSubmit={handleSubmit}>
      {questionsE.map((question, index) => (
        <div key={`question${index + 1}`} className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500">
          <label htmlFor={`Q${index + 1}`}>{`Q${index + 1}: ${question}`}</label>
          <select
          id={`Q${index + 1}`}
          name={`A${index + 1}`}
          value={answers[`A${index + 1}`]}
          onChange={(event) => handleDropdownChange(event, index)}
          className="w-full h-10 border rounded"
        >
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        </div>
      ))}


<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Submit
            </button>
            <button onClick={handleBack} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2">
              Back
            </button>
    </form>
          )}
          </>
        )}
      </div>
    );
  };
  
  export default Form;