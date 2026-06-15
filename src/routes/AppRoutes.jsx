// import { Routes, Route, Navigate } from "react-router-dom";
// import { useCVContext } from "../context/CVContext";

// import MainLayout from "../layouts/MainLayout";

// import DashboardPage from "../pages/DashboardPage";
// import BuilderPage from "../pages/BuilderPage";
// import PreviewPage from "../pages/PreviewPage";
// import DownloadPage from "../pages/DownloadPage";
// import LoginPage from "../pages/LoginPage";
// import RegisterPage from "../pages/RegisterPage";

// export default function AppRoutes() {
//   const { user } = useCVContext();

//   if (!user) {
//     return (
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     );
//   }

//   return (
//     <Routes>
//       <Route element={<MainLayout />}>
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/builder" element={<BuilderPage />} />
//         <Route path="/preview" element={<PreviewPage />} />
//         <Route path="/download" element={<DownloadPage />} />

//         <Route path="*" element={<Navigate to="/dashboard" replace />} />
//       </Route>
//     </Routes>
//   );
// }

import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../pages/DashboardPage";
import BuilderPage from "../pages/BuilderPage";
import PreviewPage from "../pages/PreviewPage";
import DownloadPage from "../pages/DownloadPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "../pages/Notfound";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboardPage from "../pages/admin/AdminDashboard";
import KategoriCV from "../pages/admin/KategoriCv";

export default function AppRoutes() {
  return (
    <Routes>

      {/* AUTH */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<NotFound />} />


      {/* APP */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Route>
      
      <Route element={<AdminLayout/>} path="/admin">
            <Route path="dashboard" element={<AdminDashboardPage/>}/>
            <Route path="kategori" element={<KategoriCV/>}/>
      </Route>

      {/* DEFAULT */}
      {/* <Route path="*" element={<Navigate to="/dashboard" replace />} /> */}

    </Routes>
  );
}