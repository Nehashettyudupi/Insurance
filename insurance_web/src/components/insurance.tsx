import React ,{useEffect} from "react";
const END_POINTS = 'http://localhost:8080/insurance/getInsuranceList'

export const Insurance = () => {
    const [insuranceList, setInsuranceList] = React.useState([]);
    const onSearch = (e:any) => {
        return e;
    }
    const searchView = () => {
        return <div style={{float: "right", padding: 10}}><input type="text" placeholder = {'Search Insurance'} onChange={(text) => onSearch(text)}/></div>
    }
    const tableView = () => {
        return <div>
        <table className="table table-bordered table-dark">
            <thead> 
                <tr>
                    <th>Policy Id</th>
                    <th>Customer Id</th>
                    {/* <th>Fuel Id</th> */}
                    <th>Date Of Purchase</th>
                    <th>Premium</th>
                    {/* <th>Bodily Injury Liability</th> */}
                    {/* <th>Personal Injury Protection</th> */}
                    {/* <th>Property Damage Liability</th> */}
                    {/* <th>Collision</th> */}
                    {/* <th>Comprehensive</th> */}
                    <th>Customer Gender</th>
                    {/* <th>Customer Income Group</th> */}
                    <th>Customer Region</th>
                    {/* <th>Customer Marital Status</th> */}
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {/* {insuranceList.length > 0  && insuranceList.map((item)=> console.log(item))} */}
                {insuranceList.length > 0  && insuranceList.map((item:any, key: Number)=>{ return <tr>
                    <td>{item.policyId}</td>
                    <td>{item.customerId}</td>
                    <td>{item.dateOfPurchase}</td>
                    <td>{item.premium}</td>
                    <td>{item.customerGender}</td>
                    <td>{item.customerRegion}</td>
                    <td><button>Edit</button></td>
                </tr>})}
                
            </tbody>
        </table>
    </div>
    }
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        //   Authorization: '' + token,
        },
        body: JSON.stringify({id: 1}),
      };
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
            END_POINTS,
            requestOptions,
          )
            const responseJson = await response.json();
            setInsuranceList(responseJson.data);
          console.log(responseJson);
        //   const response = await fetch(
        //     END_POINTS,
        //     requestOptions,
        //   ).then((a)=>{setInsuranceList(a);console.log('response is', a.json());}); 
        }
        fetchData();
        
      }, []);
    return <div>{searchView()}{tableView()}</div>
}