import React, { useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import {
  KAKAO_CLIENT_ID,
  KAKAO_REDIRECT_URI,
} from "../../component/SocialLogin/socialLoginUrl";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const code = searchParams.get("code");
      if (!code) {
        return <Navigate to="/login" />;
      }

      const GRANT_TYPE = "authorization_code";

      const response = await fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      );

      const data = await response.json();
      const { access_token } = data;
      if (access_token) {
        const userResponse = await fetch("https://kapi.kakao.com/v2/user/me", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        });
        const userData = await userResponse.json();
        const userDetail = userData.kakao_account;
        dispatch(
          login({
            id: userDetail.email,
            name: userDetail.profile.nickname,
            loggedIn: true,
            data: userDetail,
          })
        );
        navigate("/main");
      }
    })();
  });
  return <div></div>;
};

export default KakaoLogin;
