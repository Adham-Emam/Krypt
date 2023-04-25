import { Navbar, Footer, Services, Transactions, Welcome } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className=" gradient-bg-welcome min-h-screen text-white">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
