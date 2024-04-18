import './App.css';
import { Card1 } from './components/card';

function App() {
  const dataa= {
        name: "Gaurav HIroshi",
        location: "dELHI,Mumbai,inDIA",
        profimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        images :[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
    "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s"
  ],
        heading:"Experience",
        content:"been working since birth!!",
        rating:3.5

  };

  return (
    <div className="App">
      <Card1 data={dataa}/>
      {/* <Carousel images={images} /> */}
    </div>
  );
}

export default App;
