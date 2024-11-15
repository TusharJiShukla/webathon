import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mainheader from "./pages/Mainheader";
import Students from "./pages/Students";
import FacultyStaff from "./pages/FacultyStaff";
import Parents from "./pages/Parents";
import Visitors from "./pages/Visitors";
import Alumini from "./pages/Alumini";
import Examination from "./pages/Examination";
import News from "./pages/News";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Admissions from "./pages/Admissions";
import Campus from "./pages/Campus";
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Mainheader />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/facultystaff" element={<FacultyStaff />}></Route>
        <Route path="/parents" element={<Parents />}></Route>
        <Route path="/visitors" element={<Visitors />}></Route>
        <Route path="/alumini" element={<Alumini />}></Route>
        <Route path="/examinations" element={<Examination />}></Route>
        <Route path="/campus" element={<Campus/>}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/admissions" element={<Admissions />}></Route>
      </Routes>
    </div>
  );
}

export default App;
