
import { Outlet} from "react-router-dom";
import { Container, Nav, Header, Link, Main } from './Layout.styled';


const Layout= ()=>  {
  return (
    <Container>
      <Header>  
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Main>
        <Outlet/>
      </Main>
        
    </Container>
  )
}

export default Layout
