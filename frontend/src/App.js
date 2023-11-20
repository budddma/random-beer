import './App.css';
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "./globals/AppRoutes";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MeetingsPage from "./pages/MeetingsPage/MeetingsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={AppRoutes.WELCOME} element={<WelcomePage />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.MEETINGS} element={<MeetingsPage />} />
        <Route path={AppRoutes.PROFILE} element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
