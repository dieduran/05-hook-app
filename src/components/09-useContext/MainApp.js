import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    // const user={
    //     Id: 1234,
    //     name: 'Fernando',
    //     email: 'fernando.herrera@gmail.com'
    // }

    const [user, setUser] = useState({});
    
    return (
        <div>
            <UserContext.Provider value={{
                user: user,
                setUser: setUser
            }}>
                <AppRouter/>
            </UserContext.Provider>
        </div>
    )
}
