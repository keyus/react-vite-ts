
import { useCallback, useState, useMemo,  } from 'react'
import { Outlet, useNavigate, useLocation,  } from 'react-router-dom'
import { Layout, Avatar, Dropdown, Menu } from 'antd'
import { LoginOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, CaretDownOutlined, SettingOutlined } from '@ant-design/icons'
import IconUserAvatar from '@img/user-avatar.svg';
import { menus } from '../routes'
import { useAuth } from '@com/auth'
import './index.less'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


export default () => {
    const { pathname } = useLocation();
    const auth = useAuth();

    const selectedKeys = useMemo(() => util.matchMenus(pathname), []);
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const onLogout = useCallback(() => {
        auth.signout();
    }, []);
    const onClickMenus = useCallback(({ key }) => {
        navigate(key)
    }, []);

    const onToggleSide = useCallback(() => {
        setCollapsed(val => !val)
    }, [])

    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined />}>个人中心</Menu.Item>
            <Menu.Item key="logout" onClick={onLogout} icon={<LoginOutlined />}>退出</Menu.Item>
        </Menu>
    );
    return (
        <Layout className='main-layout'>
            <Sider
                width={208}
                collapsed={collapsed}
                collapsedWidth={48}
                className='main-side'>
                <h1 className={`main-logo ${collapsed ? 'collapsed' : ''}`}>
                    {config.logo}
                    <span className='app-name'>{config.appName}</span>
                </h1>
                <div className='side-auto'>
                    <Menu
                        defaultSelectedKeys={selectedKeys}
                        defaultOpenKeys={selectedKeys}
                        theme='dark'
                        onClick={onClickMenus}
                        mode="inline"
                    >
                        {
                            menus.map((it: Obj) => {
                                if (Array.isArray(it.children)) {
                                    return (
                                        <SubMenu
                                            key={it.url}
                                            title={it.title}
                                            icon={it.icon}>
                                            {
                                                it.children.map((son: Obj) => {
                                                    return (
                                                        <Menu.Item key={son.url}>{son.title}</Menu.Item>
                                                    )
                                                })
                                            }
                                        </SubMenu>
                                    )
                                }
                                return (
                                    <Menu.Item key={it.url} icon={it.icon}>{it.title}</Menu.Item>
                                )
                            })
                        }
                    </Menu>

                </div>
                <div className='sider-links' onClick={onToggleSide}>
                    {
                        collapsed ?
                            <MenuUnfoldOutlined /> :
                            <MenuFoldOutlined />
                    }
                </div>
            </Sider>
            <Layout className='main-body'>
                <Header className='main-header'>
                    <div className='left'>
                        <div className='im-info'>
                            <span>今日会话：<em>0</em> 个</span>
                        </div>
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
                                <Avatar src={IconUserAvatar} />
                            </span>
                        </Dropdown>
                    </div>
                </Header>
                <Content className='main-page'>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}