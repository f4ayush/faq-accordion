import womanMobile from "../assets/images/illustration-woman-online-mobile.svg"
import womanDesktop from "../assets/images/illustration-woman-online-desktop.svg"
import illustrationBox from "../assets/images/illustration-box-desktop.svg"
import bgMobile from "../assets/images/bg-pattern-mobile.svg"
import bgDesktop from "../assets/images/bg-pattern-desktop.svg"


function FormImage() {
  return (
    <>
      <div className="relative px-12 md:hidden">
        <img src={womanMobile} alt="woman" className="-mt-[45%] relative z-1 md:flex" />
        <img src={bgMobile} alt="bg-mobile" className="asas relative -mt-[30%] w-full" />
      </div>
      <div className="relative hidden md:block">
        <div className="relative overflow-hidden">
          <img src={womanDesktop} alt="woman desktop" className="absolute -left-[18%] top-0 bottom-0 m-auto" />

          <img src={bgDesktop} alt="bg desktop" className="relative bf -left-[50%] scale-150" />
        </div>
        <img src={illustrationBox} alt="woman desktop" className="aasasas" />
      </div>
    </>
  )
}

export default FormImage