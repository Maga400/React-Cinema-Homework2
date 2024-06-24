import logo from './logo.svg';
import './App.css';
import Cinema from './Components/Cinema/Cinema';
import Film from './Components/Film/Film';
import FeedBack from './Components/FeedBack/FeedBack';


function App() {
  
  var cinema = {name:"WonderDepth",address:"England",rating:4.5}
  var feedbacks = [
    {
      text:"Very good"
    },
    {
      text:"interesting"
    },
    {
      text:"funny"
    },
    {
      text:"good"
    },
    {
      text:"famous"
    },
    {
      text:"action"
    }
  ]

  var films = [
    {
      name:"Spiderman",
      genre:"action",
      rejissor:"David Bill",
      finance:"125000$",
      description:"fight",
      img:"https://t4.ftcdn.net/jpg/03/90/33/43/360_F_390334321_IlWexCFcXEJOuC1nWpBrPYRjFw8kXefg.jpg",
    },
    {
      name:"Batman",
      genre:"action",
      rejissor:"Edison Chircil",
      finance:"250000$",
      description:"fantastic",
      img:"https://st5.depositphotos.com/7824466/63482/i/450/depositphotos_634829746-stock-photo-batman-superhero-character-comics-dressed.jpg",
    },
    {
      name:"Sonic",
      genre:"fantastic",
      rejissor:"Mark Clurk",
      finance:"500000$",
      description:"adrinalin",
      img:"https://play-lh.googleusercontent.com/CvU2EiRbIpdQcGBqDinwf-J4Q4_B1M6g11P3o5ylTGsa8PGMzxdQTrSHXYjjzMOmNq4",
    }

  ] 
  
  return (
    <section className='design'>

      <Cinema header={cinema}></Cinema>


        <section className='section-des'>
          {
            films.map((f) => (<Film film={f}></Film>))
          }
        </section>

        <section className='section-des2'>
          {
            feedbacks.map((f)=>(<FeedBack feedBack = {f} ></FeedBack>))
          }
        </section>


    </section>
  );
}

export default App;
