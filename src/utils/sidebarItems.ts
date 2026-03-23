import { FileText, Users, MessageCircle, LayoutDashboardIcon, Quote, ToolCase, Inbox, Search, Mails, Newspaper, StoreIcon, ListOrdered } from "lucide-react";

export const moderatorSidebar = [
  {
    title: "Dashboard",
    items: [
      { title: "Dashboard", url: "/moderator/dashboard", icon: LayoutDashboardIcon },
      { title: "POS", url: "/moderator/dashboard/pos", icon: StoreIcon },
      { title: "My Orders", url: "/moderator/dashboard/my-orders", icon: ListOrdered }
    ],
  }
];

export const adminSidebar = [
  {
    title: "Dashboard",
    items: [
      { title: "Dashboard", url: "/moderator/dashboard", icon: LayoutDashboardIcon },
      { title: "My Orders", url: "/moderator/dashboard/my-orders", icon: ListOrdered },
    ],
  }
];

export const customerSidebar = [
  {
    title: " Dashboard",
    items: [
      { title: "My Orders", url: "/customer/dashboard/my-orders", icon: ToolCase },
    ],
  }
];

