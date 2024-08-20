import React, {useState, useEffect} from 'react'
import { Row, Col, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'

function Dialer() {

    const [number, setNumber] = useState('')
    const [callFrom, setCallFrom] = useState('Patrick 214-555-0001')

    const handleKeyPress = e => {
        
        if(e.key === 'Backspace' || e.key === 'Delete')
        {
            setNumber(number.substring(0, number.length-1))
        }

        let key = Number(e.key)

        if(isNaN(key) || e.key === null || e.key === '')
            return ;
        
        if(number.length < 10)
            setNumber(number+e.key)
    }


    const call = () => {
        if(number.length < 10)
            return ;
        window.location.href = '/dialer-call/'+number+'/'+callFrom
    }

    const styles = {
        root:{
            position: 'relative',
            width: 700,
            height: 700,
            margin: 'auto',
            marginTop: 50
        },
    
        dialBox: {
            width: 350,
            margin: 'auto'
        },
    
        numberField:{
            height: 60,
            border: '2px solid',
            fontSize: 35,
            display: 'flex',
            alignItems: 'center',
            padding: 10
        },
    
        btn: {
            width: 70,
            height: 70,
            margin: 10,
            borderRadius: '50%',
            fontSize: 30,
            outline: 'none'
        },
    
        option: {
            width: 300,
            marginBottom: 20,
        },
    
        callBtn: {
            position: 'absolute',
            width: 60,
            height: 60,
            right: 50,
            textDecoration: 'none',
            background: number.length == 10 ? '#3f4': '#ddd',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#666',
            fontSize: 25
        }
    }

    return (

        <div style={styles.root}>
            <Label>New Call From</Label>
            <Input type="select"
            value={callFrom}
            onChange={ e => setCallFrom(e.target.value)}
            style={styles.option}>
                <option>Patrick 214-555-0001</option>
                <option>Emily 972-555-0002</option>
            </Input>

            <button style={styles.callBtn} onClick={e => call()}>Call</button>
            <div style={styles.dialBox}>
                <Input style={styles.numberField} value={number} onKeyDown={ e => {handleKeyPress(e)}}/>
                <div>
                    <Row>
                        <Col size="4">  
                            <button style={styles.btn} onClick={e => setNumber( number.length < 10 ?number+"1" : number)}>1</button>
                        </Col>

                        <Col size="4">  
                            <button style={styles.btn} onClick={e => setNumber( number.length < 10 ?number+"2": number)}>2</button>
                        </Col>

                        <Col size="4">  
                            <button style={styles.btn} onClick={e => setNumber( number.length < 10 ?number+"3": number)}>3</button>
                        </Col>

                    </Row>

                    <Row>
                        <Col size="4">  
                            <button style={styles.btn} onClick={e => setNumber( number.length < 10 ?number+"4": number)}>4</button>
                        </Col>

                        <Col size="4">  
                            <button style={styles.btn} onClick={e => setNumber( number.length < 10 ?number+"5": number)}>5</button>
                        </Col>

                        <Col size="4">  
                            <button style={styles.btn} onClick={e => setNumber( number.length < 10 ?number+"6": number)}>6</button>
                        </Col>

                    </Row>

                    <Row>
                        <Col size="4">  
                            <button style={styles.btn} onClick={e => setNumber( number.length < 10 ?number+"7": number)}>7</button>
                        </Col>

                        <Col size="4">  
                            <button style={styles.btn} onClick={e => setNumber( number.length < 10 ?number+"8": number)}>7</button>
                        </Col>

                        <Col size="4">  
                            <button style={styles.btn} onClick={e => setNumber( number.length < 10 ?number+"9": number)}>9</button>
                        </Col>

                    </Row>

                    <Row>
                        <Col size="4">  
                            <button style={styles.btn} onClick={e => setNumber(number+"*")}>*</button>
                        </Col>

                        <Col size="4">  
                            <button style={styles.btn} onClick={e => setNumber( number.length < 10 ?number+"0": number)}>0</button>
                        </Col>

                        <Col size="4">  
                            <button style={styles.btn} onClick={e => setNumber(number+"#")}>#</button>
                        </Col>

                        {/* <Col size="4">  
                            <button style={styles.btn} onClick={e => {setNumber(number.substring(0, number.length-1))}}>{"<--"}</button>
                        </Col> */}
                    </Row>
                </div>

            </div>
        </div>
    )
}

export default Dialer
