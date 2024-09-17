// import React from "react";
import React, {useState, useEffect} from "react";
import axios from "axios";
import CardImg from "./components/cards.js";
import "./App.css";
import Footer from "./components/footer.js";
import  Header from "./components/Header.js";
import { Container, Form } from "semantic-ui-react";
// import 'semantic-ui-css/semantic.min.css'
 import ImageBitmapRenderingContext from "./components/form.js"
function App() {
  const [data, setData] = useState({});
  useEffect(() => {
axios.get("https://api.nasa.gov/planetary/apod?api_key=EI5yoXHyphNPlmkwpwoC2wQyvGMSh2zGAU1gU8y1&date=2012-07-15")
.then(response => {
 setData(response.data);
});
  }, [])

return (
  <div className="moon-cards">
    <CardImg title={data.title}
    url={data.url}
    date={data.date}
    explanation={data.explanation}
    

     />
  </div>
  
);


}

export default App;
