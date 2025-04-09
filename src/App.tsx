import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SplitScreen from "./components/SplitScreen";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <SplitScreen leftWeight={3} rightWeight={60}>
        <Sidebar />
        <Content />
      </SplitScreen>
      <Footer />
    </div>
  );
};

export default App;
