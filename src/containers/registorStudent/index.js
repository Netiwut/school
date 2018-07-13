import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Table, Icon, Divider } from 'antd';
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
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
        <a href="javascript:;">Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
        <Divider type="vertical" />
        <a href="javascript:;" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
  }];
export class registorStudent extends Component {
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
        <Table columns={columns} dataSource={this.state.data} />
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
  ) (registorStudent)
