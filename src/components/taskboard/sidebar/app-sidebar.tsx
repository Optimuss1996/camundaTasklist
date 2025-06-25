import { BiTask } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaArrowRotateLeft } from "react-icons/fa6";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useNavigate } from "react-router";
import { CustomTriggerDeskTopSidebar } from "@/components/ui/customeTriggerSidebar";
import { GoInbox } from "react-icons/go";
import { CgShortcut } from "react-icons/cg";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { NavUser } from "@/components/nav-user";
import { useAuthStore } from "@/store/useAuthStore";

import { cn } from "@/lib/utils";
import { useModalStore } from "@/store/useModalStore";
import ProcessDefinitionModal from "./ProcessDefinitionModal";

// Menu items.
// const items = [
//   {
//     title: "وظیفه های من",
//     url: "#",
//     icon: BiTask,
//   },
//   {
//     title: "وظیفه های گروه",
//     url: "#",
//     icon: HiOutlineUserGroup,
//   },
//   {
//     title: " شروع فرایند ",
//     url: "#",
//     icon: FaArrowRotateLeft,
//     action: () => useModalStore.getState().openModal(), // open modal
//   },
//   {
//     title: "پیام های من",
//     url: "#",
//     icon: GoInbox,
//   },
//   {
//     title: "کلید های میانبر",
//     url: "#",
//     icon: CgShortcut,
//   },
//   {
//     title: "تنظیمات",
//     url: "#",
//     icon: IoSettingsOutline,
//   },
//   {
//     title: "خروج از حساب کاربری",
//     url: "/login",
//     icon: IoLogOutOutline,
//   },
// ];

export function AppSidebar() {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const { openModal } = useModalStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  ////////////////////////////////////////////////////

  const items = [
    {
      title: "وظیفه های من",
      url: "#",
      icon: BiTask,
    },
    {
      title: "وظیفه های گروه",
      url: "#",
      icon: HiOutlineUserGroup,
    },
    {
      title: " شروع فرایند ",
      url: "#",
      icon: FaArrowRotateLeft,
      action: () => openModal, // open modal
    },
    {
      title: "پیام های من",
      url: "#",
      icon: GoInbox,
    },
    {
      title: "کلید های میانبر",
      url: "#",
      icon: CgShortcut,
    },
    {
      title: "تنظیمات",
      url: "#",
      icon: IoSettingsOutline,
    },
    {
      title: "خروج از حساب کاربری",
      url: "/login",
      icon: IoLogOutOutline,
      action: () => handleLogout,
    },
  ];
  ////////////////////////////////////////////////////
  return (
    <Sidebar>
      <ProcessDefinitionModal />
      <CustomTriggerDeskTopSidebar />
      <SidebarHeader className="bg-custom-neutral04 py-10">
        <div className="flex items-center justify-center gap-2 ">
          <img src="/images/logo/HafariLogo.png" alt="logo" className="w-32 " />
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-custom-neutral04">
        <SidebarGroup className="">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem
                  key={index}
                  onClick={item.action}
                  className="pr-2 py-1 "
                >
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "hover:bg-blue-50",
                      index === items.length - 1 && "hover:bg-red-50"
                    )}
                  >
                    <Link to={item.url}>
                      <item.icon
                        className={cn(
                          "text-custom-primary !size-6 opacity-70",
                          index === items.length - 1 && "text-red-400"
                        )}
                      />
                      <span
                        className={cn(
                          "text-base text-custom-primary",
                          index === items.length - 1 && "text-red-400"
                        )}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: "علی حسینی",
            email: "alihsini@gmail.com",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
