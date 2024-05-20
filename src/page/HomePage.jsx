import Certificates from "../components/Certificates";
import Courses from "../components/Courses"
import Header from "../components/Header"
import Hero from "../components/Hero"
import StepsToEnroll from "../components/StepsToEnroll";
import TopComapnies from "../components/TopComapnies";

export const HomePage = () => {
  return (
    <>
        <Header />
        <Hero />
        <Courses />
        <StepsToEnroll />
        <TopComapnies />
        <Certificates />

    </>
  )
}
