import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseCount, decreaseCount, fetchUser, getOneUSer } from './feature/UserSlice'
const CounterComponent = () => {
    let data = useSelector(state => state.user);
    let dispatch = useDispatch()
    console.log(data);

    return (
        <>
            <div className='counter-container'>
                <center><h3>{data.count}
                </h3></center>
                <button onClick={() => {
                    dispatch(increaseCount())
                }}>Increment</button>
                <button onClick={() => {
                    dispatch(decreaseCount())
                }}>Decrement</button>
                <button onClick={() => {
                    dispatch(fetchUser())
                }}>Fetch Users</button>
                <button onClick={() => {
                    dispatch(getOneUSer({ id: 1 }))
                }}>Single User</button>
            </div>
            <div>
                <hr />
                {
                    data.oneUser && <p>{data.oneUser.name}</p>
                }
                <button onClick={() => {
                    dispatch(getOneUSer({ id: 12 }))
                }}>Single User</button>
                {data.users.map(user => {
                    return <Fragment key={user.id}>
                        <p>{user.login}</p>
                    </Fragment>
                })}
            </div>



        </>
    )
}

export default CounterComponent