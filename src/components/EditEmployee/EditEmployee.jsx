import { useState } from "react";
import { Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { createEmp, updatedata } from "../../services/action/employee.action";
import { useNavigate } from "react-router";

export const EditEmployee = () => {

    const { employee } = useSelector((state) => state.empReducer);

    const [formInput, setFormInput] = useState(employee);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setFormInput({ ...formInput, [name]: value });
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("Form Data", formInput);

        dispatch(updatedata(formInput));

        setFormInput({
            fname: "",
            lname: "",
            email: "",
            password: "",
            cnumber: "",
            emp_id: ""
        })

        navigate("/View");

    }

    return (
        <section className="create">
            <Container>
                <Row>
                    <div className="col-6">
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" value={formInput.fname} name="fname" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last Name" value={formInput.lname} name="lname" onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={formInput.email} name="email" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password" value={formInput.password} name="password" onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Contact Number" value={formInput.cnumber} name="cnumber" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Employee Id</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Id" value={formInput.emp_id} name="emp_id" onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </section>
    )

}
