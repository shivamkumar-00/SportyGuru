import {useState,useRef} from "react";

function App() {
  var refconatiner=useRef("");
  var [data,setdata]=useState([]);
  var [value,setvalue]=useState([]);
  const url ="http://universities.hipolabs.com/search?country="
  var country;
  var temp;
  const search = () => {
    country=url+refconatiner.current.value;
    temp=refconatiner.current.value;
    console.log(temp.length);
    if(temp!==""){
    setvalue(temp.toUpperCase());
    getData(country);}
  };
  const getData = (country) =>{
    fetch(country)
    .then((response)=> response.json())
    .then((res)=>{
      console.log("response ",typeof(res),res.length,res);
      setdata(res);
    })
    .catch((err) =>{
      setdata([]);
    });
  }
  return (
    <>
     <div className="top">
        <input type="text" className="input" ref={refconatiner} />
        <input
          type="button"
          className="btn"
          value="Search"
          onClick={() => search()}
        ></input>
      </div>
      <br/>
      <h1 className={data.length === 0 ? "hide" :"show"}>Universities in {value}</h1>
     {data.map((single)=>{
       return(<>
       <h2 className="each"><a href={single.web_pages[0]}  target="_blank">{single.name}</a></h2>
       </>);
     })}
    </>
  );
}

export default App;
