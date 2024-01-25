import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmp, singleEmp } from '../../services/action/employee.action';
import { useNavigate } from 'react-router';

function ViewEmployee() {

    const { employees, isLoading, err } = useSelector(state => state.empReducer);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    // const handleEdit = (id) => {

    //     dispatch(singleEmp(id));
    //     navigate("/Edit");
    // }

    // const handleView = (id) => {

    //     dispatch(singleEmp(id));
    //     navigate("/Viewpage");
    // }

    // const handleDelete = (id) => {

    //     dispatch(deleteEmp(id));

    // }

    if (isLoading) {

        return (
            <>
               <div className='d-flex justify-content-center'>
                <img src="../images/new.jpg" alt=""  className='w-50'/>
                <audio autoPlay>
                    <source src="../audio/kyare.mp3" type="audio/mpeg"/>
                </audio>
               </div>
            </>
        )
    }

    if (err) {

        return (
            <>
                <p>
                    {
                        err.msg
                    }
                </p>
            </>
        )
    }

    return (
        <div>
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
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        employees.map((emp, index) => {

                            return (
                                <tr key={index}>
                                    <td>
                                        {
                                            index + 1
                                        }
                                    </td>
                                    <td>
                                        {emp.fname} {emp.lname}
                                    </td>
                                    <td>
                                        {
                                            emp.email
                                        }
                                    </td>
                                    <td>
                                        {
                                            emp.password
                                        }
                                    </td>
                                    <td>
                                        {
                                            emp.cnumber
                                        }
                                    </td>
                                    <td>
                                        {
                                            emp.emp_id
                                        }
                                    </td>
                                    <td>
                                        <Button variant='primary' onClick={() => handleView(emp.id)}>
                                            View
                                        </Button>
                                        |||
                                        <Button variant='primary' onClick={() => handleEdit(emp.id)}>
                                            Edit
                                        </Button>
                                        |||
                                        <Button variant='primary' onClick={() => handleDelete(emp.id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    } */}
                </tbody>
            </Table>
        </div>
    );
}

export default ViewEmployee;