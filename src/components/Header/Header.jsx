import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addData } from '../../services/action/employee.action';
import { album } from '../../services/action/album.action';

function Header(data) {

    const dispatch = useDispatch();

    const handleClick = () => {

        // console.log("Done...");
        dispatch(addData(data));
    }

    const handleAlbumClick = () => {

        // console.log("Click Done...");
        dispatch(album());
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Redux-Thunk</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <NavLink to="/">Home</NavLink>
                        <NavLink to="/View">View</NavLink> */}
                    </Nav>
                    <div>
                        <Button variant='primary' onClick={handleClick}>
                            Add
                        </Button>
                        |||
                        <Button variant='success' onClick={handleAlbumClick}>
                            Album
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header;
