import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate("/register");
  };
  const handleEventRulesClick = () => {
    navigate("/eventrules");
  };

  return (
    <div className="max-w-screen overflow-hidden select-none">
      {/* Intro Page */}
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <img className="max-w-52 md:max-w-80 " src={logo} />
        <h1 className="mb-2 text-2xl md:text-3xl text-blue-400 font-primary font-bold">
          The Future is now
        </h1>
        <h1 className="text-white text-center text-xs md:text-xl font-primary font-medium leading-4 md:leading-5">
          An Inter-College IT Fest,
          <br />
          organized by the Department of Computer Science,
          <br />
          Alva's Degree College, Moodubidire
        </h1>
        <button
          onClick={handleRegisterClick}
          className="mt-10 px-4 py-2 bg-blue-400 text-white rounded font-primary hover:bg-blue-600 hover:cursor-pointer"
        >
          Register Now
        </button>
      </div>
      {/* About College */}
      <div className="lg:h-screen lg:w-screen flex flex-col items-center justify-center">
        <h1 className="mb-4 lg:mb-6 text-blue-400 font-primary font-bold text-3xl lg:text-4xl md:text-4xl">
          About the college
        </h1>
        <p className="mx-5 md:max-w-[80vw] lg:max-w-[70vw] leading-4 lg:leading-6 font-primary text-sm md:text-base lg:text-xl text-white text-center">
          Alva’s Degree College has been offering courses with the idea of
          Degree with Vocational Education / Civil Service Exam Preparation/
          Private sector Vocational training / Business Training / Higher
          Education & Research training. The College has the record of getting
          minimum 30-40 ranks of Mangalore University every year. The Foundation
          offers best education with top ranks in Post Graduation under
          Mangalore University, Engineering under Vishweshwarayya Technical
          University and Para Medical Courses under Rajiv Gandhi University of
          Health Sciences. <br /> <br /> Molding the young minds with aesthetic
          sense:- The whole campus is adorned with beautiful artistic works,
          paintings, statues, sculptures and lush green gardens. The students
          are encouraged to take part in the literary and cultural programs in
          the campus. The programs of good taste, the artistic works in the
          campus and the provision to interact with the littérateur and the
          artists enable the students to develop the aesthetic sense.
        </p>
      </div>
      {/* Rules and Regulations */}
      <div className="lg:h-screen lg:w-screen mt-15 font-primary flex flex-col justify-center items-center">
        <h1 className="mb-4 lg:mb-6 text-blue-400 font-primary font-bold text-2xl lg:text-4xl md:text-3xl">
          General Rules & Events
        </h1>
        <p className="mx-5 md:max-w-[80vw] lg:max-w-[70vw] leading-4 lg:leading-6 font-primary text-sm md:text-base lg:text-xl text-white text-center">
          -The fest is open to all Engineering and Degree students-
          <br />
          -A team may consist a maximum of 18 participants- <br /> -Only those
          teams that participate in all events are eligible for overall
          championship- <br /> -Registration is restricted to only one team from
          Degree and one team from Engineering college of an Education
          Institution-
          <br /> -Registration fees of Rupees 200 (per head) will be collected
          from the students- <br /> -Participant of one event must not
          participate in another- <br /> -College ID and permission letter from
          Principal / HOD for each team is mandatory-
          <br /> -The judge's decision will be final, and event coordinators
          reserves the right to take action in case of any misconduct-
        </p>
        <button
          onClick={handleEventRulesClick}
          className="my-4 px-4 py-2 bg-blue-400 text-white rounded font-primary hover:bg-blue-600 hover:cursor-pointer"
        >
          Event Rules
        </button>
      </div>
      {/* Contacts */}
      <div className="lg:h-screen lg:w-screen mt-15 font-primary flex flex-col justify-center items-center">
        <h1 className="text-blue-400 font-primary font-bold text-2xl lg:text-4xl md:text-3xl">
          Organizing Committee
        </h1>
        <h1 className="mb-10 text-white font-primary">Student Coordinators</h1>
        <div className="w-full text-xs md:text-base flex flex-col lg:flex-row items-center justify-center lg:justify-around lg:items-around">
          <div className="mb-5 block text-white font-primary">
            <h1>
              <span className="text-blue-400 font-bold">
                Student Coordinator:
              </span>{" "}
              Shishir Shetty
            </h1>
            <h1>
              <span className="text-blue-400 font-bold">Contact No:</span>{" "}
              <span className="select-text">8108452426</span>
            </h1>
          </div>
          <div className="mb-5 block text-white font-primary">
            <h1>
              <span className="text-blue-400 font-bold">
                Student Coordinator:
              </span>{" "}
              Samiksha Shetty
            </h1>
            <h1>
              <span className="text-blue-400 font-bold">Contact No:</span>{" "}
              <span className="select-text">8010156146</span>
            </h1>
          </div>
          <div className="mb-10 block text-white font-primary">
            <h1>
              <span className="text-blue-400 font-bold">
                Student Coordinator:
              </span>{" "}
              Shreyash Devadiga
            </h1>
            <h1>
              <span className="text-blue-400 font-bold">Contact No:</span>{" "}
              <span className="select-text">7760891473</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
