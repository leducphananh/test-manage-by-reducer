import * as React from 'react';
import UserList from "src/components/UserList/UserList";
import { IUser } from 'src/utils/constants';

const { useState } = React;

interface Props {

}

const HomePage: React.FC<Props> = () => {
    const [users, setUsers] = useState<IUser[]>([{
        id: 1,
        name: 'Phan Anh',
        gender: 'Male',
        dob: '22-04-2000',
        phone: '0366155338',
        email: 'leducphananh123',
        address: 'Ha Noi',
        description: 'No description',
        courses: ['JS', 'ReactJS'],
    }]);

    const handleEditClick = (user: IUser) => {

    }

    const handleDeleteClick = (user: IUser) => {

    }

    return (
        <>
            <h2 className='user-title'>List Users</h2>
            <UserList listUser={users} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} />
        </>
    )
};

export default HomePage;
