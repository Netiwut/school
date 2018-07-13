import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Table } from 'antd';
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>{
          console.log(record)
      }
      <div style={{textAlign: 'center'}}>
        <a>Delete</a>
      </div>
      </span>
    ),
  }];
export class listStudents extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }
    componentDidMount(){
      this.props.fetchStudents()
    }
    componentWillReceiveProps(np){
      if(np.students){
        this.setState({
            data : np.students
        })
      }
    }
  render() {
    return (
      <div className="container">
        <Table rowKey="std_id" columns={columns} dataSource={this.state.data} />
      </div>
    )
  }
}


const mapStateToProps = ({getStudents}) => ({
    students: getStudents
  })
  
  export default connect(
    mapStateToProps,
    actions
  ) (listStudents)
