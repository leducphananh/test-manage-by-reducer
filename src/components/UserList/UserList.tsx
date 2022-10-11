
import * as React from 'react';
import { IUser } from 'src/utils/constants';
import styled from 'styled-components';

interface Props {
    listUser: IUser[],
    onEditClick: (user: IUser) => void,
    onDeleteClick: (user: IUser) => void,
}

const UserList: React.FC<Props> = ({ listUser, onEditClick, onDeleteClick }) => {

    const handleEditClick = (user: IUser) => {
        onEditClick(user);
    }

    const handleDeleteClick = (user: IUser) => {
        onDeleteClick(user);
    }

    const renderUserRows = () => {
        return listUser.map(user => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.dob}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.description}</td>
                <td>{user.courses.join(', ')}</td>
                <td>
                    <button
                        onClick={() => handleEditClick(user)}
                        className="btn-control btn-control--edit"
                    >
                        Edit
                    </button>
                    &nbsp;&nbsp;
                    <button
                        onClick={() => handleDeleteClick(user)}
                        className="btn-control btn-control--delete"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
    }

    return (
        <Table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Date of Birth</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Description</th>
                    <th>Courses</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {
                    listUser.length > 0 ?
                        renderUserRows() :
                        <tr>
                            <td colSpan={9} className='no-data'>
                                No data to display
                            </td>
                        </tr>
                }
            </tbody>
        </Table>
    )
};

const Table = styled.table`
    .btn-control {
        outline: none;
        border: none;
        padding: 12px 16px;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;

        &:hover {
            opacity: 0.8;
        }
    }

    .btn-control--edit {
        background-color: #ffc107;
        color: #212529;
    }

    .btn-control--delete {
        background-color: #dc3545;
        color: var(--white-color);
    }

    .no-data {
        text-align: center;
    }
`;

export default UserList;
