// import './App.css';
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Analyze" aboutText="About Text Analyzer" />
      {/* <Navbar /> */}

      <div className="container my-3">
        <TextForms heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
