import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

function App() {
  state = {
    users: [
      {
        id: 1,
        name: "mert",
        salary: "5000",
        department: "bilisim",
      },
      {
        id: 2,
        name: "mert g",
        salary: "5000",
        department: "bilisim",
      },
      {
        id: 3,
        name: "mert gu",
        salary: "5000",
        department: "bilisim",
      },
    ],
  };
  return (
    <div className="container">
      <Navbar title="User"/>
      <hr/>
      <Users users={this.state.users}/>
    </div>
  );
}

export default App;
