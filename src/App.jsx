import { CVProvider } from "./context/CVContext";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <CVProvider>
      <AppRoutes />
    </CVProvider>
  );
}