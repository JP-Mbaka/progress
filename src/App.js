import logo from "./logo.svg";
import "./App.css";

function App() {
  //Executes...
  let a = ["Sarah", "Wura", "Toheeb", "Muyiwa"];

  let alternative = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 3" },
    { id: 3, name: "Item 4" },
    { id: 4, name: "Item 5" },
  ];
  let assignment = [
    {
      id: 1,
      type: [
        { food: "beans" },
        { food: "Rice" },
        { food: "Yam" },
        { food: "Fufu" },
      ],
    },
    {
      id: 2,
      type: [
        { car: "Benz" },
        { car: "Toyota" },
        { car: "BMW" },
        { car: "Ford" },
      ],
    },
    {
      id: 3,
      type: [
        { system: "MAC" },
        { system: "HP" },
        { system: "DELL" },
        { system: "Lenovo" },
      ],
    },
  ];
  return (
    <div className="App">
      {alternative.map((values) => (
        <div>
          <div>{values.id}</div>

          <div> {values.name}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
