import React, { Component } from 'react';
import ListStudents from './containers/listStudents'
import { Layout, Menu, Icon } from 'antd';
import { Tabs } from 'antd';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      onMenu : 'Students'
    }
  }
  callbackMenuItem = key => {
    this.setState({
      onMenu : key.key
    })
  }
  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const TabPane = Tabs.TabPane;
    return (
      <div className="App">
        <Layout style={{ height: window.innerHeight }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          >
            <div style={{ height: '63px' }} >
            </div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={[this.state.onMenu]} style={{ textAlign: 'left' }} onClick={this.callbackMenuItem}>
              <Menu.Item key="Students">
                <Icon type="user" />
                <span className="nav-text">Students</span>
              </Menu.Item>
              <Menu.Item key="Teachers">
                <Icon type="video-camera" />
                <span className="nav-text">Teachers</span>
              </Menu.Item>
              <Menu.Item key="3" disabled>
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4" disabled>
                <Icon type="user" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} >
              <h3>
                {this.state.onMenu}
              </h3>
            </Header>
            <Content style={{ margin: '24px 16px 0' }} hidden={this.state.onMenu !== 'Students'}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="List Students" key="1">
                    <ListStudents />
                  </TabPane>
                  <TabPane tab="Register" key="2">Register</TabPane>
                  <TabPane tab="Tab 3" key="3" disabled>...</TabPane>
                </Tabs>
              </div>
            </Content>
            <Content style={{ margin: '24px 16px 0' }} hidden={this.state.onMenu === 'Students'} >
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                tab 2
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              support By Ant.Design
            </Footer>
          </Layout>
        </Layout>
      </div>

    );
  }
}
export default (App)
