import React ,{useEffect} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import {Line} from 'react-chartjs-2';
import * as Moment from 'moment';
import {extendMoment} from 'moment-range';
const moment = extendMoment(Moment);
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );
const END_POINTS = 'http://localhost:8080/insurance';
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Monthly Graph For Policies',
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
        },
      },
      y: {
        ticks: {
          autoSkip: false,
        },
      },
    },
  };

  const monthLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
export const Graph = () => {
    const [region, setRegion] = React.useState('north');
    const [data, setData] = React.useState<any>({});
    const [final, setFinal] = React.useState([]);

    const onSearch = (event: any) => {
      console.log(event.target.value);
      setRegion(event.target.value);
    }
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({'region': region}),
          };
        async function fetchData() {
            const response = await fetch(
            END_POINTS + '/getGraphData',
            requestOptions,
          )
            let responseJson = await response.json();
            console.log('neha---', responseJson.data);
            let dataArray:any = [];
            for(let i of monthLabels){
              console.log(i);
              responseJson.data.forEach((item: any) =>{
                if(item.month === i){
                  dataArray.push(item.count);
                }else{
                  dataArray.push(0);
                }
                console.log(item);
              })
            }
            setFinal(dataArray);
            setData({
              monthLabels,
              datasets: [
                {
                  label: 'Select Graph',
                  data: dataArray,
                  borderColor: 'blue',
                  backgroundColor: 'black',
                },
              ],
            });
            console.log(data);
        }
        fetchData();
      }, [region]);
    return <div>
      {/* <div><input type="text" placeholder = {'Search Insurance'} onChange={(text) => onSearch(text)}/> */}
      <div >
        <select name="cars" id="cars" onChange={(text) => onSearch(text)}>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
      </div>
      {<Line data={{
      labels: monthLabels,
      datasets: [
        {
          label: 'Insurance Data',
          data: final,
          borderColor: 'blue',
          backgroundColor: 'black',
        },
      ],
    }} />}</div>
}
