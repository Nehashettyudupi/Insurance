import React ,{useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const END_POINTS = 'http://localhost:8080/insurance';

export const Insurance = () => {
    const [insuranceList, setInsuranceList] = React.useState([]);
    const [model, setModal] = React.useState(false);
    const [originalInsuranceList, setOriginalInsuranceList] = React.useState([]);
    const [selectedInsurance, setSelectedInsurance]= React.useState<any>([]);
    const [error,setError] = React.useState<string>(' ');
    const [allow, setAllow]= React.useState<boolean>(false);
    const editInsurance = (id: any) => {
        setModal(true);
        setSelectedInsurance(id);
    }
    const saveInsurance = (data: any) => {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      async function saveData() {
        const response = await fetch(
        END_POINTS + '/saveInsuranceDetails',
        requestOptions,
      )
        const responseJson = await response.json();
    }
    saveData();
    }
    const dialogComponent = () => {
      return <div style={{paddingLeft: '30%', paddingRight: '30%', backgroundColor:'grey'}}><div style={{width: '450px', height: '400px', position: 'fixed', zIndex: 10, overflowY: 'scroll'}}><Modal.Dialog>
      <Modal.Header>
          <Modal.Title>
          <h6 style={{color: 'red', alignItems: 'center'}}>Error : {error}</h6>
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-1" controlId="formBasicPolicyId">
          <Form.Label><b>Policy Id :</b> {selectedInsurance['policyId']}</Form.Label> 
          </Form.Group>
          <Form.Group className="mb-1">
          <Form.Label><b>Customer Id :</b> {selectedInsurance['customerId']} </Form.Label>
          </Form.Group>
          <Form.Group className="mb-1">
          <Form.Label><b>Fuel Id :</b> {selectedInsurance['fuelId']} </Form.Label>
          </Form.Group>
          <Form.Group className="mb-1">
          <Form.Label><b>Form Label:</b> {selectedInsurance['dateOfPurchase']}</Form.Label>&nbsp;&nbsp;
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Label>{'Custom Gender'}</Form.Label>
        <Form.Control type="text" placeholder="gender " defaultValue={selectedInsurance['customerGender']}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Label>{'Custom Income Group'}</Form.Label>
        <Form.Control type="text" placeholder="income " defaultValue={selectedInsurance['customerIncomeGroup']}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Label>{'Custom Region'}</Form.Label>
        <Form.Control type="text" placeholder="income " defaultValue={selectedInsurance['customerRegion']}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Label>{'Custom Marital Status'}</Form.Label>
        <Form.Control type="text" placeholder="income "  defaultValue={selectedInsurance['customerMaritalStatus']}/>
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
        <Form.Group className="mb-3" controlId="formBasicPremium">
        <Form.Label>{'Premium'}</Form.Label>
        <Form.Control type="text" placeholder="premium" onChange={(e)=>{
          if(parseInt(e.target.value) <= 1000000){
            selectedInsurance['premium'] = parseInt(e.target.value)
            setAllow(true);
        }else{
          setError('Premium Must Be less than 1 M')
          setAllow(false);
        }}} defaultValue={selectedInsurance['premium']}/>
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
          {allow && <Button variant="primary" onClick={()=> saveInsurance(selectedInsurance)}>
          Save changes
          </Button>}
          <Button variant="secondary" onClick={()=> setModal(false)}>
          Close
          </Button>
      </Modal.Footer>
      </Modal.Dialog>
      </div>
</div>
    }
    const onSearch = (e:any) => {
      const text = parseInt(e.target.value);
        
        const arrayHolder = originalInsuranceList;
        if(e.target.value.length > 0){
            const newData = arrayHolder.filter((x:any) => {
                if(x.policyId){
                    const mainpolicyId= x.policyId.toString();
                    const mainCustomerId= x.customerId.toString();
                    return mainpolicyId.indexOf(text.toString()) > -1 || mainCustomerId.indexOf(text.toString()) > -1 ;
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
                    <th key= {'dop'}>Date Of Purchase</th>
                    <th key= {'premium'}>Premium</th>
                    <th key={'gender'}>Customer Gender</th>
                    <th key={'region'}>Customer Region</th>
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
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          };
        async function fetchData() {
            const response = await fetch(
            END_POINTS + '/getInsuranceList',
            requestOptions,
          )
            const responseJson = await response.json();
            setInsuranceList(responseJson.data);
            setOriginalInsuranceList(responseJson.data);
        }
        fetchData();
        
      }, []);
    return <div><div>{model=== true && dialogComponent()}</div>{searchView()}{tableView()}</div>
}