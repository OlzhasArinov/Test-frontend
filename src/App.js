import { Layout, Button } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';



function App() {
  const location = useLocation()
  return (
    <Layout>
      <Header>
        {location.pathname==='/main' && 
        <Button type='primary'>
            <Link to='/'>Log out</Link> 
        </Button>
        }
      </Header>
      <Content style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
        <Routes>
          <Route path='/' element={<AuthPage />} />
          <Route path='/registration' element={<RegisterPage />} />
          <Route path='/main' element={<MainPage />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
