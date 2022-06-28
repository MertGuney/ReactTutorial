import "./App.css";
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  const test = 35;
  const isAuth = true;
  return (
    <div className="container">
      <h1 className="header">JSX Operasyon</h1>
      <h4>1 + 1 Toplam : {1 + 1}</h4>
      <h4>ToUpperCase : {"mert".toUpperCase()}</h4>
      <h4>Const Değer : {test}</h4>
      <div>
        {isAuth ? <p> Kullanıcı kayıtlı</p> : <p>Kullanıcı kayıtlı değil</p>}
      </div>
      <hr />
      <h1>İlk Component</h1>
      <User />
      <hr />
      <h1>Functional Component</h1>
      <Navbar />
      <hr />
      <h1>Props</h1>
      <Navbar title="User App" />
      <User name="Hasan" department="Bilisim" salary="5000" />
      <User name="Mehmet" department="Bilisim" salary="6000" />
    </div>
  );
}

export default App;
