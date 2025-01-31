export const userMenu = (userId) => [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: "fa-solid fa-list",
  },
  {
    name: "Apply Doctor",
    path: "/applyDoctor",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Profile",
    path: `/profile/${userId}`,
    icon: "fa-solid fa-user",
  },
];

export const adminMenu = (userId) => [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "Doctors",
    path: "/admin/doctors",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: "fa-solid fa-user",
  },
  {
    name: "Profile",
    path: `/profile/${userId}`,
    icon: "fa-solid fa-user",
  },
];
