import React, { useEffect, useState } from 'react';
import styles from "../styles/Sass/Statistics.module.css"
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
const Statistics = () => {

  const [apiData, setapiData] = useState(0)
  const [loaded, setloaded] = useState(false)
  

  useEffect(() => {
    
   async function userAction() {
      const rs = await fetch('https://api.github.com/users/alexalextran/repos');
      const myJson = await rs.json();
      setapiData(myJson.length)
      setloaded(true)
    }
    userAction()

    
  }, [])

 

  let startDate = new Date("02/21/2021");
  let currentDate = new Date();
  let difference = currentDate.getTime() - startDate.getTime();


 




    return (
    
        <section className={styles.section}>
            
            <div>
            <CountUp end={Math.floor(difference / (1000 * 3600 * 24))} duration={3}>
                {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
                <h1 ref={countUpRef}></h1>
            </VisibilitySensor>
            )}
             </CountUp>
             <h2>Days Programming</h2>
            </div>

            <div>
            <CountUp end={apiData} duration={3}>
                {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
                <h1 ref={countUpRef}></h1>
            </VisibilitySensor>
            )}
             </CountUp>
                <h2>Total Github Repositories</h2>
            </div>
            
        </section>
         
    );
}

export default Statistics;
