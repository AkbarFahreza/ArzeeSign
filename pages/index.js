import SocMed from "../components/SocMed"
export default function Home() {
  return (
  <>
  <head>
    <title>ArzeeSign</title>

  </head>
  <div className="bg-base-color">
    
    <img src='/BG-Section.svg'></img><div>
      <div className="flex container -mt-[250px] mx-auto">
        <div className=" w-[1132px] h-[486px] bg-base-color rounded-[20px] mx-auto drop-shadow-baseShadow">
            <div>
              <img src="/ProfilePict.svg" className="-mt-24 mx-auto w-[200px]"></img>
            </div>
            <div className="mt-6 flex flex-col mx-auto">
              <h1 className="flex text-[#ffffff] text-[36px] mx-auto font-bold">Achmad Akbar Fah<span className="text-aksen-color">reza</span></h1>
              <p className="text-[#cacaca] mx-auto mt-2">Junior Graphic, UI & 3D design</p>
            </div>
            <div className="flex mx-auto">
              <ul className="flex mx-auto pt-10 space-x-[50px] align-middle">
                <SocMed><a href="https://instagram.com/revernry"><img src="/IG-icon.svg"></img></a></SocMed>
                <SocMed><a href="https://dribbble.com/Arzee"><img src="/Dribble-icon.svg"></img></a></SocMed>
                <SocMed><a href="https://id.pinterest.com/ArzeeSign/"><img src="/Pinterest-icon.svg"></img></a></SocMed>
                <SocMed><a href="#"><img src="/Github-icon.svg"></img></a></SocMed>
              </ul>
            </div>
            <div className="flex mt-10 justify-center">
              <ul className="flex  space-x-5 ">
                <li ><a href="" className="py-[11px] px-[50px] bg-secondary-color text-[#fff] rounded-md font-bold hover:bg-[#fff] hover:text-secondary-color">Hire Me (Unavailable)</a></li>
                <li ><a href="" className="py-[11px] px-[58px] bg-[#fff] text-secondary-color rounded-md font-bold  hover:text-aksen-color cursor-pointer">Contact Me</a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
    <div className="pb-10"></div>
    
    </div>
    </>
  )
}
