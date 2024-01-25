import { Button, Form, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmp, singleEmp } from '../../services/action/employee.action';
import { useNavigate } from 'react-router';
import { useState } from 'react';

function ViewPage() {

    const { employee } = useSelector(state => state.empReducer);

    const [formInput, setFormInput] = useState(employee);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(singleEmp(id));
        // navigate("/Edit");

        navigate("/View");

    }

    return (

        <Form onSubmit={handleSubmit}>
            <Row>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>
                                NO.
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Password
                            </th>
                            <th>
                                Contact Number
                            </th>
                            <th>
                                Employee Id
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                               1
                            </td>
                            <td>
                               { formInput.fname } {formInput.lname }
                            </td>
                            <td>
                                { formInput.email }
                            </td>
                            <td>
                                { formInput.password }
                            </td>
                            <td>
                                { formInput.cnumber }
                            </td>
                            <td>
                                { formInput.emp_id }
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Form>
    );
}

export default ViewPage;