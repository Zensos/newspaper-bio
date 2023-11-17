import { GiClick } from "react-icons/gi";
import { FaEye } from "react-icons/fa6";
import { BsNewspaper } from "react-icons/bs";
import parser from "@/libs/parser";
import github from "@/libs/github";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '🗞️ | TANANSORN',
}

export default async function Home() {
  const filter_ = await github()
  return (
    <div className="w-screen">
      <div className="flex items-start justify-center h-full w-full bg-white mt-12">
        <div className="relative">
          <h1 className="text-black text-7xl sm:text-9xl text-center drop-shadow-xl">INTRODUCTION</h1>
          <p className="flex absolute justify-center w-full text-[5em] sm:text-[7em] -bottom-16 sm:-bottom-20 bg-gradient-to-b from-red-700 to-red-400 text-transparent bg-clip-text drop-shadow-lg font-bold -rotate-6">PLEUK</p>
          <GiClick className="absolute w-12 h-12 sm:w-20 sm:h-20 right-16 sm:right-36 top-14 sm:top-24 drop-shadow-2xl text-white" />
        </div>
      </div>
      <div className="h-full w-full">
        <div className="grid grid-rows-1 lg:grid-cols-2 h-full w-full">
          <div className="bg-black w-full p-14 text-7xl min-h-screen">
            <div className="flex gap-4">
              <p className="text-white underline mt-2">INFO</p>
              <BsNewspaper className="my-auto w-16 h-16 text-white rotate-6" />
            </div>
            <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 mt-4 gap-2">
              <div className="bg-white p-5">
                <p>TANANSORN SIRIRATH</p>
                <p>AGE <span className="bg-gradient-to-b from-blue-700 to-blue-400 text-transparent bg-clip-text font-bold">18</span></p>
                <p>THAILAND</p>
              </div>
              <div className="w-full h-full border-4 border-white bg-white">
                <img className="h-full w-full object-cover" src="https://media.discordapp.net/attachments/1122410839681536101/1174774655127670916/2346666_309670-P8CZDR-675.png?ex=6568d128&is=65565c28&hm=4394a8f30272f09f1dca17132e6334af2df09aaca93c1978511f32957967b9df" alt="identity" />
              </div>
              <div className="bg-white p-5">
                <p>SLEEP 😪</p>
                <p>EAT 🌭</p>
                <p>WATCH 📺</p>
              </div>
              <div className="w-full h-full border-4 border-white bg-white">
                <img className="h-full w-full object-cover" src="https://media.istockphoto.com/id/1326080733/photo/handsome-young-man-sleeping-in-bed.jpg?s=612x612&w=0&k=20&c=208PpDwIhZvgJ2coNFMJzN6fJJwxsn0ZOYli0-84aS8=" alt="hobby" />
              </div>
              <div className="w-full h-full border-4 border-white bg-white">
                <img className="h-full w-full object-cover" src="https://www.hackensackmeridianhealth.org/-/media/project/hmh/hmh/public/healthu-images/education-stories/2022/08/2022-08-10.jpg?h=534&iar=0&w=800&hash=42B5DAC423D4CB8453178EBD8737B6B4" alt="identity" />
              </div>
              <div className="w-full h-full border-4 border-white bg-white">
                <img className="h-full w-full object-cover" src="https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320056/man-gobbling-down-pasta.jpg" alt="identity" />
              </div>
            </div>
          </div>
          <div className="flex-col bg-[#FFE3BB] w-full p-14 text-7xl min-h-screen">
            <p className="text-black underline mt-2">DISCORD</p>
            <div className="flex mt-2">
              <a href="https://discord.com/users/502056862674452481"><img src="https://lanyard-profile-readme.vercel.app/api/502056862674452481?bg=23283d&borderRadius=8px&hideDiscrim=true" /></a>
            </div>
            <p className="text-black underline mt-2">PROJECT</p>
            <div>
              {filter_.map((e: any) => {
                return <div className="flex justify-between w-full min-h-[200px] bg-black mt-2 p-4 text-white rounded-t-lg border-b-8 border-orange-500">
                  <div className="flex-col">
                    <h1 className="text-4xl underline">{e.name}</h1>
                    <p className="text-2xl">{e.description || 'Nothing!'}</p>
                    <div className="flex items-center gap-2">
                      <FaEye className="w-5 h-5" />
                      <p className="text-xl">{e.watchers_count}</p>
                    </div>
                  </div>
                  <div className="flex-col">
                    <img className="flex justify-end w-20 h-20" src={`https://cdn.jsdelivr.net/npm/devicon@v2.14.0/icons/${e.language ? parser(e?.language) : 'javascript'}/${e.language ? parser(e?.language) : 'javascript'}-original.svg`} />
                    <div className="text-3xl">
                      OWNER
                      <img className="w-14 h-14 rounded-full" src={e.owner.avatar_url} />
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
