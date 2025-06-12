import { BiTask } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi2";
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
import { Link } from "react-router";
import { CustomTriggerDeskTopSidebar } from "@/components/ui/customeTriggerSidebar";
import { GoInbox } from "react-icons/go";
import { CgShortcut } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { NavUser } from "@/components/nav-user";

import LogoutButton from "@/components/common/LogoutButton";
// Menu items.
const items = [
  {
    title: "وظیفه های من",
    url: "#",
    icon: BiTask,
  },
  {
    title: "پیام های من",
    url: "#",
    icon: GoInbox,
  },
  {
    title: "وظیفه های گروه",
    url: "#",
    icon: HiOutlineUserGroup,
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
];

export function AppSidebar() {
  return (
    <Sidebar>
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
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="pr-2 py-1 ">
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon className="text-custom-primary !size-6 opacity-70" />
                      <span className="text-base text-custom-primary">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem className="pr-2 py-1 ">
                <SidebarMenuButton asChild>
                  <LogoutButton />
                </SidebarMenuButton>
              </SidebarMenuItem>
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
