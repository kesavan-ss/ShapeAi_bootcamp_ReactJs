import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}
