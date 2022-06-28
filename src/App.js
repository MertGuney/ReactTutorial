import "./App.css";

function App() {
  const test = 35;
  const isAuth = true;
  return (
    <div>
      <h1>JSX Operasyon</h1>
      <h4>1 + 1 Toplam : {1 + 1}</h4>
      <h4>ToUpperCase : {"mert".toUpperCase()}</h4>
      <h4>Const Değer : {test}</h4>
      <div>{isAuth ? <p> Kullanıcı kayıtlı</p> : <p>Kullanıcı kayıtlı değil</p>}</div>
    </div>
  );
}

export default App;
