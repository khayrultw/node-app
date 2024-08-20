import React from 'react'

function DialerCall(props) {
    return (
        <div style={styles.root}>
           <div>Number: {props.match.params.number}</div>
           <div> {props.match.params.callFrom}</div>
        </div>
    )
}

const styles = {
    root: {
        width: 300,
        margin: 'auto',
        marginTop: 100
    }
}

export default DialerCall
