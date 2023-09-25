import React,{useState} from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AddUser = () => {
    const [data,setData] = useState({})
    const navigate = useNavigate()

    const onChangeHandler = (e)=>{
        const {name,value} = e.target;
        setData({...data, [name]:value})
    }

    const onSubmitHandler = ()=>{
        console.log(data)

        axios.post("https://62e4bff620afdf238d717a88.mockapi.io/records/users",data)
        .then(res=>{
            console.log(res)
            if(res.status == 201){
                navigate('/userlist')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <div>
        <Row className="justify-content-center">
            <Col md={5}>
                <Card className="m-5 p-4">
                    <h1>Add User</h1>
                    <input type="text" name="name" placeholder='Name' className='form-control mb-2' onChange={onChangeHandler} />
                    <input type="text" name="email" placeholder='Email' className='form-control mb-2' onChange={onChangeHandler} />
                    <input type="text" name="password" placeholder='Password' className='form-control mb-2' onChange={onChangeHandler} />
                    <input type="number" name="contact" placeholder='Contact' className='form-control mb-2' onChange={onChangeHandler} />

                    <button className='btn btn-primary' onClick={onSubmitHandler}>Submit</button>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default AddUser