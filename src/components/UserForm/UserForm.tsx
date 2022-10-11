import * as React from 'react';
import styled from 'styled-components';
import { errorReducer, initError } from './reducer/userError';
import { initUser, userReducer, USER_ACTIONS } from './reducer/userInfo';

const { useReducer } = React;

const UserForm = () => {

    const [userState, userDispatch] = useReducer(userReducer, initUser);
    const [errorState, errorDispatch] = useReducer(errorReducer, initError);

    const {
        id,
        name,
        gender,
        dob,
        phone,
        email,
        address,
        description,
        courses,
    } = userState;

    const {
        nameError,
        genderError,
        dobError,
        phoneError,
        emailError,
        addressError,
        descriptionError,
        coursesError,
    } = errorState;

    const onChangeValue = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            let newValue = value;

            if (name === 'courses') {
                const isChecked = courses.includes(value);
                newValue = isChecked ? courses.filter(item => item !== value) : [...courses, value];
            }

            userDispatch({
                type: USER_ACTIONS.SET_USER,
                field: name,
                payload: newValue
            });
        }
    }

    return (
        <FormWrapper>
            <form>
                <h3>Sign up</h3>
                <div className="desc">It's quick and easy ❤️</div>
                <div className="spacer"></div>

                <div className="form-group">
                    <label htmlFor="name" className="form-label label-required">Name</label>
                    <input
                        value={name}
                        onChange={onChangeValue}
                        // onBlur={() => {
                        //     const obj = { name: user.name };
                        //     setError({
                        //         ...error,
                        //         ...Validate(obj)
                        //     });
                        // }}
                        name='name'
                        placeholder="Enter name"
                        autoComplete="off"
                        className="form-control" />
                    {/* <span className="form-message">{error.name}</span> */}
                </div>
                <div className="form-group">
                    <label htmlFor="gender" className="form-label label-required">Gender</label>
                    <div className="form-wrap">
                        <div className="form-item">
                            <input
                                onChange={onChangeValue}
                                type="radio"
                                name="gender"
                                value="Male"
                                id="male"
                                checked={gender === 'Male'}
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="form-item">
                            <input
                                onChange={onChangeValue}
                                type="radio"
                                name="gender"
                                value="Female"
                                id="female"
                                checked={gender === 'Female'}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="dob" className="form-label label-required">Date of Birth</label>
                    <input
                        value={dob}
                        onChange={onChangeValue}
                        // onBlur={() => {
                        //     const obj = { dob: user.dob };
                        //     setError({
                        //         ...error,
                        //         ...Validate(obj)
                        //     });
                        // }}
                        type="date"
                        name="date"
                        className="form-control" />
                    {/* <span className="form-message">{error.dob}</span> */}
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="form-label label-required">Phone number</label>
                    <input
                        value={phone}
                        onChange={onChangeValue}
                        // onBlur={() => {
                        //     const obj = { phone: user.phone };
                        //     setError({
                        //         ...error,
                        //         ...Validate(obj)
                        //     });
                        // }}
                        name="phone"
                        placeholder="Enter phone number"
                        autoComplete="off"
                        className="form-control" />
                    {/* <span className="form-message">{error.phone}</span> */}
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label label-required">Email</label>
                    <input
                        value={email}
                        onChange={onChangeValue}
                        // onBlur={() => {
                        //     const obj = { email: user.email };
                        //     setError({
                        //         ...error,
                        //         ...Validate(obj)
                        //     });
                        // }}
                        name="email"
                        placeholder="Enter email"
                        autoComplete="off"
                        className="form-control" />
                    {/* <span className="form-message">{error.email}</span> */}
                </div>
                <div className="form-group">
                    <label htmlFor="address" className="form-label label-required">Address</label>
                    <select
                        value={address}
                        onChange={onChangeValue}
                        // onBlur={() => {
                        //     const obj = { address: user.address };
                        //     setError({
                        //         ...error,
                        //         ...Validate(obj)
                        //     });
                        // }}
                        name='address'
                        className="form-control">
                        <option value="">-- Address --</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Hà Đông">Hà Đông</option>
                        <option value="Hà Tây">Hà Tây</option>
                        <option value="Hà Nam">Hà Nam</option>
                        <option value="Hà Bắc">Hà Bắc</option>
                    </select>
                    {/* <span className="form-message">{error.address}</span> */}
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        value={description}
                        onChange={onChangeValue}
                        name="description"
                        rows={8}>
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="level" className="form-label">Courses</label>
                    <div className="form-wrap">
                        <div className="form-item">
                            <input
                                onChange={onChangeValue}
                                checked={courses.includes('HTML')}
                                type="checkbox"
                                name="courses"
                                value="HTML"
                                id="HTML" />
                            <label htmlFor="HTML">HTML</label>
                        </div>
                        <div className="form-item">
                            <input
                                onChange={onChangeValue}
                                checked={courses.includes('CSS')}
                                type="checkbox"
                                name="courses"
                                value="CSS"
                                id="CSS" />
                            <label htmlFor="CSS">CSS</label>
                        </div>
                        <div className="form-item">
                            <input
                                onChange={onChangeValue}
                                checked={courses.includes('JS')}
                                type="checkbox"
                                name="courses"
                                value="JS"
                                id="JS" />
                            <label htmlFor="JS">JS</label>
                        </div>
                    </div>
                </div>
                <div className="group-btn">
                    <button
                        // onClick={handleFormSubmit}
                        className={id ? 'btn btn-inactive' : 'btn btn-active'}
                    >
                        Submit
                    </button>
                    <button
                        // onClick={handleFormUpdate}
                        className={id ? 'btn btn-active' : 'btn btn-inactive'}
                    >
                        Update
                    </button>
                </div>
            </form>
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
    width: 360px;
    margin: auto;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 var(--box-shadow-color);
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 50px;
    margin-top: 20px;

    form > h3 {
        text-align: center;
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    form > .desc {
        text-align: center;
        font-weight: 300;
        color: #636d77;
        font-size: 17px;
    }

    .spacer {
        border-top: 1px solid var(--text-color);
        text-align: center;
        margin: 20px 0px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    .form-label {
        font-weight: 700;
        margin-bottom: 6px;
    }

    .form-control {
        height: 30px;
        line-height: 30px;
        border-radius: 3px;
        border: 1px solid var(--border-color);
        padding: 5px 12px;
        font-size: 14px;
        outline: none;
    }

    .form-wrap {
        display: flex;
        justify-content: space-around;
    }

    .form-item {
        display: flex;
        align-items: center;
    }

    .form-item label {
        padding-left: 6px;
        font-size: 14px;
    }

    .form-group > textarea {
        border-radius: 3px;
        border: 1px solid var(--border-color);
        padding: 5px 12px;
        font-size: 14px;
        outline: none;
        resize: none;
    }

    .group-btn {
        display: flex;
        justify-content: space-around;
        padding-top: 40px;
    }

    .btn {
        outline: none;
        border: none;
        width: 40%;
        padding: 12px 16px;
        font-weight: 600;
        border-radius: 8px;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 14px;
    }

    .btn-active {
        background-color: #1dbfaf;
        color: var(--white-color);
    }

    .btn-active:hover {
        opacity: 0.8;
    }

    .btn-inactive {
        pointer-events: none;
        opacity: 0.5;
    }
`;

export default UserForm;
