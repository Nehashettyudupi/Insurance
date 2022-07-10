import React from "react";
const onSearch = (e) => {
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
            <th>id</th>
            <th>Channel Name</th>
            <th>Guid</th>
            <th>Mode</th>
            <th>View</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>id</td>
                <td>channel name</td>
                <td>guid</td>
                <td>Mode</td>
                <td>View</td>
            </tr>
        </tbody>
    </table>
</div>
}
export const Insurance = () => {
    React.useEffect(()=>{

    },[]);
    return <div>{searchView()}{tableView()}</div>
}