import logo from './logo.svg';
import './App.css';
import Card from './Card'

function App() {
  let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring",
      picture: "https://meridianidhouses.com/wp-content/uploads/2020/03/Why-Meridian-Idaho-is-A-Great-City-For-Everyone.jpg"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter",
      picture: "https://media.istockphoto.com/photos/cancun-resort-during-a-sunset-picture-id1141454114?k=6&m=1141454114&s=612x612&w=0&h=5vbREuuBxBpHnYEkITcZxP9Bnzp5sJpjWzLTz4Ihy7k="
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall",
      picture: "https://thumbs.dreamstime.com/b/great-wall-china-travel-stormy-sky-clouds-dramatic-scene-near-beijing-create-dramatic-scenic-backdrop-36567269.jpg"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer",
      picture: "https://media.gettyimages.com/photos/view-of-russian-city-at-sunset-picture-id586391832"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring",
      picture: "https://i.pinimg.com/originals/90/68/25/906825ff02233dae356acc03764abc38.jpg"
    }
  ]
  return (
    <div className="App">
      {
        //going through the vactionspots array, map returns an array of componenets
        vacationSpots.map(spot =>{
          return <Card citys={spot}/>
        })
      }
    </div> 
  );
}

export default App;
