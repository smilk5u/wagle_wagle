import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Main from "./pages/Main/Main";
import MakeHopae from "./pages/MakeHopae/MakeHopae";
import KakaoLogin from "./pages/KakaoLogin/KakaoLogin";
import Sample from "./pages/Sample/Sample";
import FindPwd from "./pages/FindPwd/FindPwd";
import MakeGiwaHouse from "./pages/MakeGiwaHouse/MakeGiwaHouse";
import StorageGiwa from "./pages/StorageGiwa/StorageGiwa"; 
import Withdrawal from "./pages/Withdrawal/Withdrawal"; 
import Setting from "./pages/Setting/Setting"; 
import MyPage from "./pages/MyPage/MyPage"; 

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
    path: "/makeGiwaHouse",
    element: <MakeGiwaHouse />,
  },
  {
    path: "/kakao_login",
    element: <KakaoLogin />,
  },
  {
    path: "/sample",
    element: <Sample />,
  },
  {
    path: "/findPwd",
    element: <FindPwd />,
  },
  {
    path: "/StorageGiwa",
    element: <StorageGiwa />,
  },
  {
    path: "/Withdrawal",
    element: <Withdrawal />,
  },
  {
    path: "/MyPage",
    element: <MyPage />,
  },
  {
    path: "/Setting",
    element: <Setting />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
