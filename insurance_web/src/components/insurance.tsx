import React ,{useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const END_POINTS = 'http://localhost:8080/insurance/getInsuranceList'

export const Insurance = () => {
    const [insuranceList, setInsuranceList] = React.useState([]);
    const [model, setModal] = React.useState(false);
    const [originalInsuranceList, setOriginalInsuranceList] = React.useState([]);
    const [selectedInsurance, setSelectedInsurance]= React.useState<any>([]);
    const editInsurance = (id: any) => {
        setModal(true);
        setSelectedInsurance(id);
    }
    const dialogComponent = () => {
      return <div style={{width: '250px', paddingLeft: '30%', paddingRight: '30%', height: '400px', position: 'fixed', zIndex: 10, overflowY: 'scroll'}}><Modal.Dialog>
      <Modal.Header>
          <Modal.Title>
          Edit Insurance Policy Details
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPolicyId">
          <Form.Label><b>Policy Id :</b> {selectedInsurance['policyId']}</Form.Label> &nbsp;&nbsp;
          <Form.Label><b>Customer Id :</b> {selectedInsurance['customerId']} </Form.Label>&nbsp;&nbsp;
          <Form.Label><b>Fuel Id :</b> {selectedInsurance['fuelId']} </Form.Label>&nbsp;&nbsp;
          <Form.Label><b>Form Label:</b> {selectedInsurance['dateOfPurchase']}</Form.Label>&nbsp;&nbsp;
          {/* <Form.Control type="text" placeholder="PolicyId " value={selectedInsurance['policyId']}/> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Label>{'Custom Gender'}</Form.Label>
        <Form.Control type="text" placeholder="gender " value={selectedInsurance['customerGender']}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Label>{'Custom Income Group'}</Form.Label>
        <Form.Control type="text" placeholder="income " value={selectedInsurance['customerIncomeGroup']}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Label>{'Custom Region'}</Form.Label>
        <Form.Control type="text" placeholder="income " value={selectedInsurance['customerRegion']}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Label>{'Custom Marital Status'}</Form.Label>
        <Form.Control type="text" placeholder="income " value={selectedInsurance['customerMaritalStatus']}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Check type="checkbox" label={'Bodily Injury Liability'}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Check type="checkbox" label={'Personal Injury Protection'}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Check type="checkbox" label={'Property Damage Liability'}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Check type="checkbox" label={'Collision'}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Check type="checkbox" label={'Comprehensive'}/>
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="primary">
          Save changes
          </Button>
          <Button variant="secondary" onClick={()=> setModal(false)}>
          Close
          </Button>
      </Modal.Footer>
      </Modal.Dialog>
        {/* <div><button style={{position: 'fixed',right:0,bottom:0}}>Save</button></div> */}
      </div>
//         return <div style={{maxHeight: '250vh', position: 'fixed', zIndex: 10, display:'flex', paddingLeft: '30%', paddingRight: '30%', overflowY: 'scroll'}}>
//           <Modal.Dialog>
//             <Modal.Header closeButton>
//               <Modal.Title>
//               Edit Insurance Policy Details
//               </Modal.Title>
//             </Modal.Header>
//           <Modal.Body>
//           <Form>
//   <Form.Group className="mb-3" controlId="formBasicPolicyId">
//     <Form.Label><b>Policy Id :</b> {selectedInsurance['policyId']}</Form.Label> &nbsp;&nbsp;
//     <Form.Label><b>Customer Id :</b> {selectedInsurance['customerId']} </Form.Label>&nbsp;&nbsp;
//     <Form.Label><b>Fuel Id :</b> {selectedInsurance['fuelId']} </Form.Label>&nbsp;&nbsp;
//     <Form.Label><b>Form Label:</b> {selectedInsurance['dateOfPurchase']}</Form.Label>&nbsp;&nbsp;
//     {/* <Form.Control type="text" placeholder="PolicyId " value={selectedInsurance['policyId']}/> */}
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicPremium">
//   <Form.Label>{'Custom Gender'}</Form.Label>
//   <Form.Control type="text" placeholder="gender " value={selectedInsurance['customerGender']}/>
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicPremium">
//   <Form.Label>{'Custom Income Group'}</Form.Label>
//   <Form.Control type="text" placeholder="income " value={selectedInsurance['customerIncomeGroup']}/>
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicPremium">
//   <Form.Check type="checkbox" label={'Bodily Injury Liability'}/>
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicPremium">
//   <Form.Check type="checkbox" label={'Personal Injury Protection'}/>
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicPremium">
//   <Form.Check type="checkbox" label={'Property Damage Liability'}/>
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicPremium">
//   <Form.Check type="checkbox" label={'Collision'}/>
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicPremium">
//   <Form.Check type="checkbox" label={'Comprehensive'}/>
//   </Form.Group>
// </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="primary">
//             Save changes
//             </Button>
//             <Button variant="secondary" onClick={()=> setModal(false)}>
//             Close
//             </Button>
//           </Modal.Footer>
//         </Modal.Dialog>
//         </div>
    }
    const onSearch = (e:any) => {
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
                {insuranceList.length > 0  && insuranceList.map((item:any, key: Number)=>{ return <tr key ={'row' + key}>
                    <td key={'policyId'+ key}>{item.policyId}</td>
                    <td key={'customerId'+ key}>{item.customerId}</td>
                    <td key={'dateOfPurchase'+ key}>{item.dateOfPurchase}</td>
                    <td key={'premium'+ key}>{item.premium}</td>
                    <td key={'customerGender'+ key}>{item.customerGender}</td>
                    <td key={'customerRegion'+ key}>{item.customerRegion}</td>
                    <td key={'edit'+ key}><button onClick={()=>editInsurance(item)}>Edit</button></td>
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
            console.log('neha---', responseJson.data);
            setInsuranceList(responseJson.data);
            setOriginalInsuranceList(responseJson.data);
        }
        fetchData();
        
      }, []);
    return <div><div>{model=== true && dialogComponent()}</div>{searchView()}{tableView()}</div>
}