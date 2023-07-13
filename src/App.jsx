import { RiHome3Line, RiMenu3Fill, RiSearchLine, RiNotification3Line, RiCloseLine, RiStore2Line, RiLayoutGridLine, RiTeamLine, RiLiveLine, RiDownload2Line, RiSettings3Line, RiCheckboxBlankCircleFill, RiArrowRightSLine, RiArrowRightCircleLine, RiArrowLeftCircleLine } from "react-icons/ri";
import { useState } from "react";


function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <div className='bg-[#141414] min-h-screen'>
        <sidebar className={`fixed top-0 w-80 h-full overflow-y-scroll border-r border-gray-800 flex flex-col justify-between bg-[#141414] transition-all duration-500 lg:left-0 z-50 ${showMenu ? "left-0" : "-left-full"}`}>
          <div>
            {/* Logo */}
            <h1 className='text-gray-300 uppercase font-bold text-2xl tracking-[5px] ml-3 mb-10 mt-5 px-8'>Gamesmode</h1>
            <ul>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-8 rounded-xl transition-colors">
                  <RiHome3Line />
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-8 rounded-xl transition-colors">
                  <RiStore2Line />
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-8 rounded-xl transition-colors">
                  <RiLayoutGridLine />
                  Library
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-8 rounded-xl transition-colors">
                  <RiTeamLine />
                  Friends
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-8 rounded-xl transition-colors">
                  <RiLiveLine />
                  Live
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-8 rounded-xl transition-colors">
                  <RiDownload2Line />
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="relative text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-8 rounded-xl transition-colors">
                  <RiSettings3Line />
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-8 rounded-xl transition-colors">
                  <img src="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?w=740&t=st=1688782600~exp=1688783200~hmac=3e0cea0c6d29e31e596e4bb14c81b5dace02c1cba2f789372fdbc9eaceaa0d92" className="w-6 h-6 object-cover rounded-full" />
                  Trung tran
                  <RiCheckboxBlankCircleFill className="absolute text-green-600 bottom-2 left-8 text-xs" />
                </a>
              </li>
            </ul>
          </div>
          {/* Boton menú movil */}
          <button onClick={toggleMenu} className="lg:hidden bg-blue-600 text-white fixed bottom-8 right-8 p-2 text-lg rounded-full z-50">{showMenu ? <RiCloseLine /> : <RiMenu3Fill />}</button>
        </sidebar>
        {/* Header */}
        <header className=" fixed lg:pl-[340px] w-full flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-[#141414] z-40">
          <nav className="flex items-center gap-4 order-1 lg:order-none">
            <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-full">Discover</a>
            <a href="#" className=" text-white py-2 px-4 rounded-full">Browse</a>
            <a href="#" className=" text-white py-2 px-4 rounded-full">Hishlist</a>
          </nav>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="text-gray-500 text-lg">{" "}<RiNotification3Line />{" "}</a>
            </li>
            <li>
              <form className="relative">
                <RiSearchLine className="text-gray-500 absolute top-3 left-2" />
                <input type="text" className="bg-[#232323] text-gray-300 outline-none py-2 pl-8 pr-4 rounded-full w-full" placeholder="Search" />
              </form>
            </li>
          </ul>
        </header>
        {/* Content */}
        <main className=" lg:pl-[340px] p-8 pt-36">
          {/* Hero */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-1">
            <div className="md:col-span-5 relative">
              <img src="https://www.rtlnieuws.nl/sites/default/files/content/images/2019/04/01/Fortnite-battle-royale-BR08_Web_BPLanding_Hero-3840x2160-654d400e12d58c3a97d6e75dc560df6ac46d3ea3.jpg?itok=FYjK-8Du&width=2048&height=1152&impolicy=semi_dynamic" className="w-full h-[400px] object-cover lg:rounded-tl-xl lg:rounded-bl-xl" />
              <div className="absolute left-0 bottom-0 p-8 max-w-xl">
                <p className="text-gray-100">Update</p>
                <h2 className="text-4xl text-white font-extrabold mb-4">The hunt is on in Fortnite Chapter 2 - Season 5: Zero point</h2>
                <button className="bg-blue-600 text-white rounded-xl py-4 px-6 flex items-center gap-2 text-lg group">Play for free <RiArrowRightSLine className="group-hover:translate-x-1 transition-all" /></button>
              </div>
            </div>
            {/* Juegos */}
            <div className="col-span-1 w-full bg-[#232323] h-[400px] overflow-y-scroll lg:rounded-tr-xl lg:rounded-br-xl">
              <ul className="p-4 flex flex-col gap-4">
                <li>
                  <a href="#" className="flex items-center gap-4 text-white text-lg">
                    <img src="https://yt3.googleusercontent.com/X8fXcCHiKOrys_uHdZbMg62E8lth-lNamnVhA0fsnNlg2145P5urlrRKqb5_FpxR8MLYe4O9ew=s540-w390-h540-c-k-c0x00ffffff-no-nd-rj" className="w-10 object-cover h-full" />{" "}
                    <span className="md:hidden lg:block">
                      Fortnite
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-4 text-white text-lg">
                    <img src="https://preview.redd.it/rocket-league-wallpaper-for-funzies-updated-from-original-v0-0vqahg73bw4a1.jpg?width=640&crop=smart&auto=webp&s=f5b35bd72cd1bf463818b1cf9dde5f3ed84566cb" className="w-10  object-cover h-full" />{" "}
                    <span className="md:hidden lg:block">Rocket League</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-4 text-white text-lg">
                    <img src="https://plusgami.com/wp-content/uploads/2021/02/The-Escapists-2.jpg" className="w-10  object-cover h-full" />{" "}
                    <span className="md:hidden lg:block">The Escapists </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-4 text-white text-lg">
                    <img src="https://m.media-amazon.com/images/I/81wAdahHh2L._AC_UF1000,1000_QL80_.jpg" className="w-10  object-cover h-full" />{" "}
                    <span className="md:hidden lg:block">Fifa 23</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-4 text-white text-lg">
                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202303/3019/4ce3693ce9bc65776c6ea465deb6cde42783a9995cdad566.png" className="w-10  object-cover h-full" />{" "}
                    <span className="md:hidden lg:block">The long dark</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Games on sale */}
          <div className="flex mt-10 mb-6 items-center justify-between">
            <h1 className="text-gray-300 text-2xl">
              Games on sale
            </h1>
            <div className="flex items-center text-white  text-3xl gap-4">
              <RiArrowLeftCircleLine className="cursor-pointer hover:text-gray-500" /><RiArrowRightCircleLine className="cursor-pointer hover:text-gray-500" />
            </div>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="p-4"><img src="https://repack-mechanics.com/uploads/posts/2021-02/1613928565_1613844415_9e551fa3c1974c44710809cc99bbb9ce.jpg" className="w-full h-50 object-cover rounded-xl mb-2" />
              <h3 className="text-lg text-gray-300">Valheim</h3>
              <p className="text-gray-500 mb-3">Action Games</p>
              <span className="text-white">$8.15</span>
            </div>
            <div className="p-4"><img src="https://images.cgames.de/images/gsgp/4/6843-playstation-4-packshot_6095595.jpg" className="w-full h-50 object-cover rounded-xl mb-2" />
              <h3 className="text-lg text-gray-300">Bioshock</h3>
              <p className="text-gray-500 mb-3">Action, RPG</p>
              <div className="flex items-center gap-2">
                <span className="bg-green-400 p-1 text-green-800 rounded-lg">-80%</span>
                <span className="text-gray-500">$50</span>
                <span className="text-white">$8.15</span>
              </div>
            </div>
            <div className="p-4"><img src="https://m.media-amazon.com/images/M/MV5BNGU1NTJhZWEtZWRmOS00OTBlLThlMDktM2Q2MmI1NzgyMjY1XkEyXkFqcGdeQXVyMjQzNzA0NDI@._V1_.jpg" className="w-full h-50 object-cover rounded-xl mb-2" />
              <h3 className="text-lg text-gray-300">Untravel Two</h3>
              <p className="text-gray-500 mb-3">Adventure Games</p>
              <span className="text-white">$20.38</span>
            </div>
            <div className="p-4"><img src="https://howlongtobeat.com/games/65505_Tick_Tock_A_Tale_for_Two.jpg" className="w-full h-50 object-cover rounded-xl mb-2" />
              <h3 className="text-lg text-gray-300">Tick Tock: A tale for two</h3>
              <p className="text-gray-500 mb-3">Indie Games</p>
              <div className="flex items-center gap-2">
                <span className="bg-green-400 p-1 text-green-800 rounded-lg">-60%</span>
                <span className="text-gray-500">$3.47</span>
                <span className="text-white">$1.39</span>
              </div>
            </div>
            <div className="p-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ibMCmIHjy61x31zpLkWCwU8L2oTm8x3h468faGRoqT_0Eg6kgDuo6pkmziCzXRDKTNE&usqp=CAU" className="w-full h-50 object-cover rounded-xl mb-2" />
              <h3 className="text-lg text-gray-300">Hitman 3</h3>
              <p className="text-gray-500 mb-3">Action Games</p>
              <span className="text-white">$23.99</span>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
