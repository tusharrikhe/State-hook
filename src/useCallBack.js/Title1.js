import React from 'react'

function Title1() {

    console.log('Rendering title component')
    return (
        <div>
            <h2>useCallBack Hook</h2>

        </div>
    )
}

export default React.memo(Title1)
