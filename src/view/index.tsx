
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { Button, Layout, Image, Avatar, Dropdown, Menu } from 'antd'
import { LoginOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, MediumOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, MessageOutlined, CaretDownOutlined, SettingOutlined } from '@ant-design/icons'
import './index.less'


const { Header, Sider, Content } = Layout;


export default (props = {}) => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(true);
    const onLogout = useCallback(() => {
        dispatch({ type: 'logout' });
        navigate('/login')
    }, []);
    const onClickMenus = useCallback(({ key }) => {
        navigate(key)
    }, [])

    const onToggleSide = useCallback(() => {
        setCollapsed(val=>!val)
    }, [])

    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined />}>个人中心</Menu.Item>
            <Menu.Item key="logout" onClick={onLogout} icon={<LoginOutlined />}>退出</Menu.Item>
        </Menu>
    );
    return (
        <Layout className='main-layout'>
            <Sider width={240} className='main-side' collapsed={collapsed}>
                <h1 className={`main-logo ${collapsed ? 'collapsed' : ''}`}>
                    <MediumOutlined />
                    <span className='app-name'>REACT VITE</span>
                </h1>
                <Menu
                    defaultSelectedKeys={[pathname]}
                    onClick={onClickMenus}
                    className='main-menu'
                    mode="inline"
                >
                    <Menu.Item key="/" icon={<MessageOutlined />}>
                        聊天
                    </Menu.Item>
                    <Menu.Item key="/control" icon={<PieChartOutlined />}>
                        控制台
                    </Menu.Item>
                    <Menu.Item key="/email" icon={<DesktopOutlined />}>
                        邮件
                    </Menu.Item>
                    <Menu.Item key="/files" icon={<ContainerOutlined />}>
                        文件管理
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className='main-body'>
                <Header className='main-header'>
                    <div className='left'>
                        <span className='toggle-side' onClick={onToggleSide}>
                            {
                                collapsed ?
                                    <MenuUnfoldOutlined /> :
                                    <MenuFoldOutlined />
                            }
                        </span>


                    </div>
                    <div className='right'>
                        <div className='user-status'>
                            <i className='icon' />
                            在线
                            <CaretDownOutlined />
                        </div>
                        <div className='user-tools'>
                            <SettingOutlined />
                        </div>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <span className='user'>
                                <label className='name'>Jsisaj</label>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </span>
                        </Dropdown>
                    </div>
                </Header>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}