import Eye from "../assets/eye.png";

const Courses = () => {
  return (
    <div className="my-16 bg-secondary flex flex-col items-center py-4">
        <div>
            <div className="my-2 mx-auto bg-eminence-200 border-2 border-eminence-700/20 rounded-full p-2 w-8/12 text-center">
                <p className="text-eminence-700/80">
                    DATASCIENCE COURSE LEARNING PATH
                </p>
                </div>
            <div className="">
                <p className="text-4xl font-bold text-woodsmoke-800"><span className="bg-gradient-to-r from-primary to-[#EBCB2E] bg-clip-text text-transparent">Data Science</span> Course Curriculum</p>
            </div>
        </div>

        <div className="my-8 bg-white flex flex-col items-center border rounded-lg w-6/12">
            <div className="border-b flex justify-between items-center p-4 w-full">
                <div className="flex flex-col items-start">
                    <p className="text-woodsmoke-800 text-lg font-bold">C++</p>
                    <p className="text-md text-woodsmoke-800/85">Learn C++ for strong programming fundamentals.</p>
                </div>
                <div className="p-2 rounded-full border border-eminence-200 flex justify-center items-center gap-2 bg-eminence-200/85">
                    <img src={Eye} alt="eye" />
                    <p className="text-eminence-700/80 font-semibold">View Curriculum</p>
                </div>
            </div>
            <div className="border-b flex justify-between items-center p-4 w-full">
                <div className="flex flex-col items-start">
                    <p className="text-woodsmoke-800 text-lg font-bold">MERN Stack</p>
                    <p className="text-md text-woodsmoke-800/85">Master the MERN stack for high-demand projects.</p>
                </div>
                <div className="p-2 rounded-full border border-eminence-200 flex justify-center items-center gap-2 bg-eminence-200/85">
                    <img src={Eye} alt="eye" />
                    <p className="text-eminence-700/80 font-semibold">View Curriculum</p>
                </div>
            </div>
            <div className="border-b flex justify-between items-center p-4 w-full">
                <div className="flex flex-col items-start">
                    <p className="text-woodsmoke-800 text-lg font-bold">Data Structure & Algorithm</p>
                    <p className="text-md text-woodsmoke-800/85">Excel in Data Structures and Algorithms for interview success.</p>
                </div>
                <div className="p-2 rounded-full border border-eminence-200 flex justify-center items-center gap-2 bg-eminence-200/85">
                    <img src={Eye} alt="eye" />
                    <p className="text-eminence-700/80 font-semibold">View Curriculum</p>
                </div>
            </div>
            <div className="flex justify-between items-center p-4 w-full">
                <div className="flex flex-col items-start">
                    <p className="text-woodsmoke-800 text-lg font-bold">Competitve Programming</p>
                    <p className="text-md text-woodsmoke-800/85">Excel in Data Structures and Algorithms for interview success.</p>
                </div>
                <div className="p-2 rounded-full border border-eminence-200 flex justify-center items-center gap-2 bg-eminence-200/85">
                    <img src={Eye} alt="eye" />
                    <p className="text-eminence-700/80 font-semibold">View Curriculum</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Courses;