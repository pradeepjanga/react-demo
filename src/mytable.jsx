import React from 'react';
class MyTable extends React.Component {

    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
        <tr>
        <td>{this.props.keyEle}</td>
        <td>{this.props.data.itemName}</td>
        <td>{this.props.data.cost}</td>
        </tr>);
    }
}
export default MyTable;