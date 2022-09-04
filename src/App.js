import {useState,useEffect} from 'react';

import Preloader from 'components/preloader/Preloader';

import './App.css';

function App() {
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);

    const timeoutId=setTimeout(()=>{
      setLoading(false);
    },3000);

    return ()=>{
      clearTimeout(timeoutId);
    }
  },[]);

  return loading?<Preloader />:(
    <section className="section-padding bg-height bg-color">
      <div className="container container-padding">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas asperiores quaerat libero earum repellat rerum ad! Excepturi sunt quasi eum?
      </div>
    </section>
  );
}

export default App;