import Start from "../assets/star.png";
import Certificate from "../assets/certiciate.png";
import helper from "../assets/helper.png";


const Certificates = () => {
  return (
    <div className="mt-24 mb-28 w-full flex flex-col items-center">
        <div className="text-center">
            <p className="text-[3rem] font-bold text-woodsmoke-800">Unlock <span className="text-eminence-700">6 Certificates</span> & <span className="text-eminence-700">Internship Opportunities!</span></p>
        </div>
        <div className="mt-8 mb-4 flex justify-between items-center gap-6">
            <div className="flex flex-col items-center text-eminence-700 bg-eminence-200/50 rounded-3xl w-1/2 p-6 h-fit">
                <h2 className="text-3xl font-bold text-center">Get 6 Industry Recognized Certificates!</h2>
                <img className="h-96" src={Certificate} alt="certificate" />
                <div className="flex justify-between items-center gap-2">
                    <div className="p-2 rounded-full border border-eminence-200 flex justify-center items-center gap-2 bg-eminence-200/85">
                        <img src={Start} alt="eye" />
                        <p className="text-eminence-700/80 font-semibold">Official and Verified</p>
                    </div>
                    <div className="p-2 rounded-full border border-eminence-200 flex justify-center items-center gap-2 bg-eminence-200/85">
                        <img src={Start} alt="eye" />
                        <p className="text-eminence-700/80 font-semibold">Enhances Credibility</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center text-eminence-700 bg-web-orange-300/50 rounded-3xl w-1/2 p-6 h-fit">
                <div>
                    <h2 className="text-4xl font-bold">Bag Internship Opportunities!</h2>
                    <p className="text-woodsmoke-800">With every course, we make you not only industry-ready but also help you crack your first internship.</p>
                </div>
                <img className="w-96" src={helper} alt="certificate" />
            </div>
        </div>
    </div>
  )
}

export default Certificates;