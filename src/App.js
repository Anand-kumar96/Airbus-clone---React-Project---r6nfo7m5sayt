import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Result from "./components/result";
import { MediumProvider } from "./context/MediumContext";
import Login from "./components/Login";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const checkUser = () => {
      auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          //already login
          dispatch(
            loginUser({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
            })
          );
        } else {
          dispatch(logoutUser());
        }
      });
    };
    checkUser();
  }, [dispatch]);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div>
          <MediumProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Dashboard />}></Route>
                <Route exact path="/:id" element={<Dashboard />}></Route>
                <Route exact path="/checkout" element={<Result />}></Route>
              </Routes>
            </Router>
          </MediumProvider>
        </div>
      )}
    </>
  );
}

export default App;
