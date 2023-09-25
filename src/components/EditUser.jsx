import React,{useState,useEffect} from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
const EditUser = () => {


    const [data,setData] = useState({})
    const navigate = useNavigate()

    const {user_id} = useParams()
   
    const onChangeHandler = (e)=>{
        const {name,value} = e.target;
        setData({...data, [name]:value})
    }

    useEffect(()=>{
        axios
        .get("https://62e4bff620afdf238d717a88.mockapi.io/records/users/"+user_id)
        .then(function (response) {
          // handle success
          console.log(response);
          setData(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },[user_id])

    const onSubmitHandler = ()=>{
        console.log(data)

        axios.put("https://62e4bff620afdf238d717a88.mockapi.io/records/users/"+user_id,data)
        .then(res=>{
            console.log(res)
            if(res.status == 200){
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
                    <h1>Edit User</h1>
                    <input type="text" name="name" value={data.name} placeholder='Name' className='form-control mb-2' onChange={onChangeHandler} />
                    <input type="text" name="email" value={data.email} placeholder='Email' className='form-control mb-2' onChange={onChangeHandler} />
                    <input type="text" name="password" value={data.password}  placeholder='Password' className='form-control mb-2' onChange={onChangeHandler} />
                    <input type="number" name="contact" value={data.contact} placeholder='Contact' className='form-control mb-2' onChange={onChangeHandler} />

                    <button className='btn btn-primary' onClick={onSubmitHandler}>Update</button>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default EditUser