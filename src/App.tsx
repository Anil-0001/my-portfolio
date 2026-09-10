import Navbar from "./commponents/layout/Navbar";
import Hero from "./commponents/sections/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
       <Hero />
      </main>
    </>
  );
}

export default App;