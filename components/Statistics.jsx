import React, { useEffect, useState } from 'react';
import styles from "../styles/Sass/Statistics.module.css"
import CountUp, { useCountUp } from "react-countup";
const Statistics = () => {

  const [apiData, setapiData] = useState(0)
  

  useEffect(() => {
    
   async function userAction() {
      const rs = await fetch('https://api.github.com/users/alexalextran/repos');
      const myJson = await rs.json();
      setapiData(myJson.length)
    }
    userAction()

    
  }, [])

 

  let startDate = new Date("02/21/2021");
  let currentDate = new Date();
  let difference = currentDate.getTime() - startDate.getTime();


  useCountUp({
    ref: "counter",
    start:0,
    end: Math.floor(difference / (1000 * 3600 * 24)),
    enableScrollSpy: true
  });




    return (
    
        <section className={styles.section}>
            
            <div>
            
                <h1 id='counter'>0</h1>
         
                <h2>Days Programming</h2>
            </div>

            <div>
                <h1>{apiData}</h1>
                <h2>Total Github Repositories</h2>
            </div>
            
        </section>
         
    );
}

export default Statistics;
