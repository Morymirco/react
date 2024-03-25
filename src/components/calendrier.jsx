import React from 'react';
import { Chart as ChartJS, Doughnut } from 'react-chartjs-2';

const Calendrier = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            data: [300, 500, 100],
            backgroundColor: ['#FF0000', '#0000FF', '#FFFF00'],
          },
        ],
      };
      
    return (
        <div>
            <p>bonjour</p>
             <Doughnut data={data} />
        </div>
    );
}

export default Calendrier;
