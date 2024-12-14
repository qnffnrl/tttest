import { About, Portfolio, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "about",
    path: "/about",
    element: <About />,
  },
  {
    name: "portfolio",
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  // {
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
