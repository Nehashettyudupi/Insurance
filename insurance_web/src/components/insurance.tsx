import React ,{useEffect} from "react";
const END_POINTS = 'http://localhost:8080/insurance/getInsuranceList'

export const Insurance = () => {
    const [insuranceList, setInsuranceList] = React.useState([]);
    const [originalInsuranceList, setOriginalInsuranceList] = React.useState([]);
    const onSearch = (e:any) => {
        // setSearch(value);
        const text = parseInt(e.target.value);
        
        const arrayHolder = originalInsuranceList;
        if(e.target.value.length > 0){
            const newData = arrayHolder.filter((x:any) => {
                if(x.policyId){
                    console.log('neha', x.policyId, text);
                    const mainString = x.policyId.toString();
                    return mainString.indexOf(text.toString()) > -1;
                }
                return false
            });
            setInsuranceList(newData);
        }else{
            setInsuranceList(arrayHolder);
        }
        // const newData = arrayHolder.filter((x:any) => {
        //     if(x.policyId){
        //         return x.policyId === text
        //     }
        //     return false
        // });
        // console.log('new data---------', newData, typeof text);
        // const newData = arrayHolder.filter((item: any) => {
        //   if (item.policyId) {
        //     console.log('item------', item.policyId);
        //     // const itemData = `${item.policyId}`;
        //     // const textData = text;
        //     const itemData = `${item.policyId?.toString()}`;
        //     const textData = text.toString();
        //     return itemData.indexOf(textData) > -1;
        //   }
        //   return false;
        // });
    }
    const searchView = () => {
        return <div style={{float: "right", padding: 10}}><input type="text" placeholder = {'Search Insurance'} onChange={(text) => onSearch(text)}/></div>
    }
    const tableView = () => {
        return <div>
        <table className="table table-bordered table-dark">
            <thead key={'thead'}> 
                <tr key={'header'}>
                    <th key= {'policyId'}>Policy Id</th>
                    <th key= {'customerId'}>Customer Id</th>
                    {/* <th>Fuel Id</th> */}
                    <th key= {'dop'}>Date Of Purchase</th>
                    <th key= {'premium'}>Premium</th>
                    {/* <th>Bodily Injury Liability</th> */}
                    {/* <th>Personal Injury Protection</th> */}
                    {/* <th>Property Damage Liability</th> */}
                    {/* <th>Collision</th> */}
                    {/* <th>Comprehensive</th> */}
                    <th key={'gender'}>Customer Gender</th>
                    {/* <th>Customer Income Group</th> */}
                    <th key={'region'}>Customer Region</th>
                    {/* <th>Customer Marital Status</th> */}
                    <th key= {'edit'}>Edit</th>
                </tr>
            </thead>
            <tbody>
                {/* {insuranceList.length > 0  && insuranceList.map((item)=> console.log(item))} */}
                {insuranceList.length > 0  && insuranceList.map((item:any, key: Number)=>{ return <tr key ={'row' + key}>
                    <td key={'policyId'+ key}>{item.policyId}</td>
                    <td key={'customerId'+ key}>{item.customerId}</td>
                    <td key={'dateOfPurchase'+ key}>{item.dateOfPurchase}</td>
                    <td key={'premium'+ key}>{item.premium}</td>
                    <td key={'customerGender'+ key}>{item.customerGender}</td>
                    <td key={'customerRegion'+ key}>{item.customerRegion}</td>
                    <td key={'edit'+ key}><button>Edit</button></td>
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
            setOriginalInsuranceList(responseJson.data);
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