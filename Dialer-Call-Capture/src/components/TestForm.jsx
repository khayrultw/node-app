import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import axios from 'axios';

function TestForm() {

    const [data, setData] = useState({
        name: '',
        title: '',
        file: null
    });

    let formData = new FormData();

    const onFileSelect = (file) => {
        console.log(file.name);
        formData.append('file', file, file.name);
    }

    const sendData = () =>{
        console.log(data);
       
        axios.post('http://127.0.0.1:3333/upload', formData)
        .then(response => {
            console.log(response);
        })
        .catch( err => {
            console.log(err);
        });
    }


    return (
        <>
            <Container>
                <Form style={{width: '50%', margin: 'auto', marginTop: '10%'}}>
                    <FormGroup>
                        <Label>Enter your name</Label>
                        <Input type='text' value={ data.name } name="name" onChange={ e => setData({...data, name: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Enter your title</Label>
                        <Input type='text' value={ data.title } name="title" onChange={ e => setData({...data, title: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Enter a file</Label>
                        <input name="file" type='file' onChange={ e => onFileSelect(e.target.files[0])}/>
                    </FormGroup>

                    <Button onClick={sendData}>Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default TestForm
