import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Main from "./pages/Main/Main";
import MakeHopae from "./pages/MakeHopae/MakeHopae";
import KakaoLogin from "./pages/KakaoLogin/KakaoLogin";
import Sample from "./pages/Sample/Sample";

const routes = [
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/makeHopae",
    element: <MakeHopae />,
  },
  {
    path: "/kakao_login",
    element: <KakaoLogin />,
  },
  {
    path: "/sample",
    element: <Sample />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
