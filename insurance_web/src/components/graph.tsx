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
    const [region, setRegion] = React.useState([]);
    const [data, setData] = React.useState<any>({});
    const [final, setFinal] = React.useState([]);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
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
            // responseJson.data.forEach((item: any) =>{
            //   console.log(item);
            // })
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
      }, []);
    return <div>{<Line data={{
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
// datasets: [
//   {
//     label: `${selectedGraph.label}`,
//     data: accountData,
//     borderColor: colors.darkBlue,
//     backgroundColor: colors.black,
//   },
// ],
{/* <Line options={options} data={data} /> */}

{/* <Line data={{
      labels: ['Jun', 'Jul', 'Aug'],
      datasets: [
        {
          label: '',
          data: [5, 6, 7],
        },
      ],
    }} /> */}