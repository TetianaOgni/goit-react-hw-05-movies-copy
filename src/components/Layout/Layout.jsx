
import { Outlet} from "react-router-dom";
import { Container, Nav, Header, Link } from './Layout.styled';


const Layout= ()=>  {
  return (
    <Container>
      <Header>  
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      
        <Outlet/>
    </Container>
  )
}

export default Layout
