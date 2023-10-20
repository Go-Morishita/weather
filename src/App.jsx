import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import WeatherList from './compornent/WeatherList';

function App() {

  const [weatherData, setweatherData] = useState({});
  const [areaname, setAreaname] = useState('130000');
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try{
      const response = await axios.get(`https://www.jma.go.jp/bosai/forecast/data/forecast/${areaname}.json`);
      setweatherData(response.data);
      console.log(response.data);
      setLoading(false);
    }catch(err){
      alert('正しい県名を入力してください');
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    getData();

  }

  //numが変更されたらuseeffectが発火
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <h1>お天気</h1>
      {loading ? (<div>loading...</div>) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='ここに県名を入れてね' onChange={(e)=>setAreaname(e.target.value)}/>
            <button>Submit</button>
          </form>
          <WeatherList weatherData={weatherData} />
        </div>
      )}
    </>
  )
}

export default App
