import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import { Layout } from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { PrivateRoute } from "./PrivateRouter";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("../pages/Home/Home"));
const Teachers = lazy(() => import("../pages/Teachers/Teachers"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ email: user.email, accessToken: user.accessToken }));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teachers" element={<Teachers />} />
          <Route
            path="favorites"
            element={<PrivateRoute component={<Favorites />} redirectTo="/" />}
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
};
