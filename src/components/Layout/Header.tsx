import { Link, useLocation } from "react-router-dom";
import { LogoSmall } from "../Logo";
import { MdFeedback, MdOutlineHelp, MdOutlineMenu, MdClose } from "react-icons/md";
import Container from "./Container";
import { useState } from "react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    type: "link",
  },
  {
    name: "Decks",
    path: "/decks",
    type: "link",
  },
  {
    type: 'separator'
  }, 
  {
    name: "Feedback",
    path: "/feedback",
    type: "icon",
    icon: <MdFeedback />,
  },
  {
    name: "Help",
    path: "/help",
    type: "icon",
    icon: <MdOutlineHelp />,
  },
  {
    type: 'separator'
  }, 
  {
    name: "Profile",
    path: "/profile",
    type: "image",
    image: "https://i.stack.imgur.com/frlIf.png",
  },
];

const Header = () => {
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Container>
      <div className="flex justify-between pt-3 items-center px-4 md:px-2 py-1 pb-3 border-b-[1px]">
        <Link to='/'>
          <LogoSmall />
        </Link>

        <div className="items-center hidden md:flex">
          {menuItems.map((item) => {
            if (item.type === "link") {
              if (location.pathname === item.path) {
                return (
                  <Link to={item.path}>
                    <p className="text-lg ml-3 border-b-[1px] border-reddish text-reddish">
                      {item.name}
                    </p>
                  </Link>
                );
              } else {
                return (
                  <Link to={item.path}>
                    <p className="text-lg ml-3">{item.name}</p>
                  </Link>
                );
              }
            }

            if(item.type === 'icon') {
              if(location.pathname === item.path) {
                return (
                  <Link to={item.path}>
                    <div className="text-[24px] text-reddish ml-3">
                      {item.icon}
                    </div>
                  </Link>
                )
              } else {
                return (
                  <Link to={item.path}>
                    <div className="text-[24px] ml-3">
                      {item.icon}
                    </div>
                  </Link>
                )
              }
            }

            if(item.type === 'separator') {
              return (
                <div className="border-r-[2px] bg-gray-400 h-[100%] w-[2px] ml-5 mr-2" />
              )
            }

            if(item.type === 'image') {
              return (
                <Link to={item.path}>
                  <div className="w-[60px] ml-2">
                    <img src={item.image} />
                  </div>
                </Link>
              )
            }
          })}
        </div>

        {!sidebarOpen && <div className="flex md:hidden">
          <MdOutlineMenu onClick={() => setSidebarOpen(true)} className="text-4xl" />
        </div>}

        {sidebarOpen ? (
          <div className="w-[100%] transition-all duration-300" onClick={() => setSidebarOpen(false)}>
            <Sidebar setSidebarOpen={setSidebarOpen} />
          </div>
        ) : null}
      </div>
    </Container>
  );
};

interface SidebarProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setSidebarOpen }) => {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-white">
      <div className="flex md:hidden justify-end p-4 pt-5">
        <MdClose onClick={() => setSidebarOpen(false)} className="text-4xl" />
      </div>

      <div className="flex justify-start ml-10 mb-5">
        {menuItems.map((item) => {
          if(item.type === 'image') {
            return (
              <Link to={item.path}>
                <div className="w-[50%] ml-2 border-[1px] border-darkGray">
                  <img src={item.image} />
                </div>
              </Link>
            )
          }
        })}
      </div>

      <div className="flex flex-col border-b-[1px] pb-10">
        {menuItems.map((item) => {
          if(item.type === 'link') {
            if (location.pathname === item.path) {
              return (
                <Link to={item.path}>
                  <p className="text-[48px] ml-6  border-b-[1px] border-reddish text-reddish">
                    {item.name}
                  </p>
                </Link>
              );
            } else {
              return (
                <Link to={item.path}>
                  <p className="text-[48px] ml-10">{item.name}</p>
                </Link>
              );
            }
          }
         })}
      </div>

      <div className="flex py-5">
        {menuItems.map((item) => {
          if(item.type === 'icon') {
            if(location.pathname === item.path) {
              return (
                <Link to={item.path}>
                  <div className="text-[40px] text-reddish ml-10">
                    {item.icon}
                  </div>
                </Link>
              )
            } else {
              return (
                <Link to={item.path}>
                  <div className="text-[40px] ml-10">
                    {item.icon}
                  </div>
                </Link>
              )
            }
          }
        })}
      </div>
    </div>
  )
}

export default Header;
