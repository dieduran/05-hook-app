import React from 'react'

import '../02-useEffect/effect.css'

export const FocusScreen = () => {
    return (
        <div>
            <h1>Focus Screen</h1>
            <input
                className="form-control"
                placeholder="Su nombre">

            </input>
            <button className="btn btn-outline-primary mt-5">
                Focus
            </button>
        </div>
    )
}
