import HatIcon from "../assets/Hat.png";
import AwardStar from "../assets/award_star.png";
import Send from "../assets/send.png";
import GroupIcon from "../assets/Group.png";
import Graduated from "../assets/Graduated.png";
import Complete from "../assets/Complete.png";
import Qmark from "../assets/Qmark.png";


const Hero = () => {
  return (
    <div className="flex flex-col my-8 py-8">
        <div className="flex flex-col items-start px-4">
            <div className="flex justify-center items-center gap-2  border-2 border-web-orange-500 rounded-lg p-2">
                <img src={HatIcon} alt="icon-hat" />
                <p className="text-lg">An <span className="font-bold">IIT Delhi</span> Alumni Initiative</p>
            </div>
            <div className="py-2 mt-6 w-1/2">
                <h1 className="text-6xl font-bold text-woodsmoke-800">Become an Expert in the field of <span className="text-eminence-700">Data Science with 6 courses</span></h1>
            </div>
            <div className="py-2 mb-2 w-1/2">
               <p className="text-woodsmoke-800 text-lg font-semibold">A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p>
            </div>
            <div className="flex justify-evenly items-center gap-6 py-2 mb-2 w-1/2">
                <div className="px-4 py-2 flex justify-center items-center gap-2 bg-web-orange-300 rounded-full text-web-orange-700">
                    <img src={AwardStar} alt="star" />
                    <p className="font-semibold">Personal Mentorship</p>
               </div>
                <div className="px-4 py-2 flex justify-center items-center gap-2 bg-web-orange-300 rounded-full text-web-orange-700">
                    <img src={AwardStar} alt="star" />
                    <p className="font-semibold">Internship Assistance</p>
               </div>
                <div className="px-4 py-2 flex justify-center items-center gap-2 bg-web-orange-300 rounded-full text-web-orange-700">
                    <img src={AwardStar} alt="star" />
                    <p className="font-semibold">Industry Certified Courses</p>
               </div>
            </div>
            <div className="flex justify-evenly items-center gap-6">
                <button className="flex justify-center items-center text-white custom-gradient custom-shadow rounded-xl p-5 text-lg font-bold gap-2">
                    Enroll Now
                    <img src={Send} alt="sendicon" />
                </button>
                <button className="flex justify-center items-center rounded-xl p-5 text-lg font-bold gap-2 text-eminence-700 ">
                    Know More
                    <div className="px-2.5 py-1/5 border-4 border-eminence-700 text-center rounded-full font-bold text-xl">?</div>
                </button>
            </div>
        </div>
        <div className="w-full mt-16 flex justify-evenly items-center gap-10 bg-secondary px-4 py-12">
                <div className="flex justify-center items-center gap-2">
                    <div className="">
                        <img src={GroupIcon} alt="group-icon" />
                    </div>
                    <div className="">
                        <p className="text-3xl font-bold text-eminence-700">24K</p>
                        <p className="text-lg text-woodsmoke-800">Courses</p>
                    </div>
                </div>
                <div className="h-16 border-l-2 border-eminence-700/60"></div>
                <div className="flex justify-center items-center gap-2">
                    <div className="">
                        <img src={Graduated} alt="group-icon" />
                    </div>
                    <div className="">
                        <p className="text-3xl font-bold text-eminence-700">30K+</p>
                        <p className="text-lg text-woodsmoke-800">Learners</p>
                    </div>
                </div>
                <div className="h-16 border-l-2 border-eminence-700/60"></div>
                <div className="flex justify-center items-center gap-2">
                    <div className="">
                        <img src={Complete} alt="group-icon" />
                    </div>
                    <div className="">
                        <p className="text-3xl font-bold text-eminence-700">100K+</p>
                        <p className="text-lg text-woodsmoke-800">Doubts Solved</p>
                    </div>
                </div>
                <div className="h-16 border-l-2 border-eminence-700/60"></div>
                <div className="flex justify-center items-center gap-2">
                    <div className="">
                        <img src={Qmark} alt="group-icon" />
                    </div>
                    <div className="">
                        <p className="text-3xl font-bold text-eminence-700">10K+</p>
                        <p className="text-lg text-woodsmoke-800">Students Projects</p>
                    </div>
                </div>                
        </div>
    </div>
  )
}

export default Hero;