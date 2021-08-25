import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { auth, db } from '../configs/firebase';
import "../style/signup.css";
import { useDispatch } from "react-redux";
import { addUserID } from "../store/actions/userIdAction";
import { useHistory } from "react-router-dom";
import {MdPhotoCamera} from "react-icons/all";

export default function SignUp () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState({
        displayName: "",
        phoneNumber: "",
        email: '',
        password: '',
    });
    // const [userID, setUserID] = useState();
    // const [errorMsg, setErrorMsg] = useState({
    //     code: "",
    //     message: "",
    // });
    const [url, setUrl] = useState("https://firebasestorage.googleapis.com/v0/b/dentist-test-app.appspot.com/o/placeholder-image.jpg?alt=media&token=9da37c26-a05f-4bad-a3a7-c8ce94c57044");

    const chooseImageHendler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            setUrl(reader.result);
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };

    const hendlerInputChange = (e) => {
        const {name, value} = e.target;
        setUser((prevState) => ({
            ...prevState, [name]: value
        }));
        console.log(user);
    }

    const handleLogin = (e) => {
      e.preventDefault();
          const { email, password } = user;
          auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => { 
            const userID = userCredential.user.uid;

            db.ref(`users/${userID}/photo/profilePhoto.jpg`).put(url).then(() => {
              console.log("successful upload photo!");
              
              auth.onAuthStateChanged(user => {
                db.ref(`users/${user.uid}/photo/profilePhoto.jpg`).getDownloadURL()
                .then((photoURL) => {
                  auth.currentUser.updateProfile({
                    displayName: user.displayName,
                    photoURL: photoURL,
                    phoneNumber: user.phoneNumber,
                  }).then(() => {
                    console.log("updateProfile")

                    dispatch(addUserID(userCredential));
                    history.push("/balance");
                    
                  }).catch((error) => {
                    console.log("updateProfile Error", error)
                  });  
                }).catch((error) => {
                  console.log("dowload image url Error", error);
                })
              });
    
            }).catch(error => {
               console.log("uploadImage Error", error)
            });

          })
          .catch((error) => {
            console.log("createUser Error", error);
            // setErrorMsg({code: error.code, massega: error.message})
          }); 
      } 

      const {email, password, displayName, phoneNumber} = user;
    return(
        <div>
          <Row>
            <Col className="sign-up-image" span={12}></Col>
            <Col className="sign-in-right" span={12} justify="center"  align="middle" >           
              <Row className="sign-up-form">
                <Col className="user-img" span={14} style={{alignSelf: "flex-end"}}>
                  <div style={{backgroundImage: `url(${url})`}} className="user-photo">
                    <span className="file-span">
                      <label className="file-label" htmlFor="file"> <MdPhotoCamera /></label>
                      <input className="photo-file" onChange={chooseImageHendler} name="file" id="file" type="file"></input>
                    </span>
                  </div>
                </Col>
               <Col span={14} style={{alignSelf: "flex-start"}} >
                  <Form
                      layout="vertical"
                      name="basic"
                      labelCol={{
                        span: 24,
                      }}
                      wrapperCol={{
                        span: 24,
                      }}
                      initialValues={{
                        remember: true,
                      }}
                  >
                      <Form.Item
                        label="Display Name"
                        name="displayName"
                        rules={[
                          {
                            required: false,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input
                         name="displayName"
                         value={user.displayName}
                         onChange={hendlerInputChange} 
                         addonBefore="@"
                        />
                      </Form.Item>
                
                      <Form.Item
                        name="phoneNumber"
                        label="Phone Number"
                        rules={[
                          {
                            required: false,
                            message: 'Please input your password!',
                          },
                        ]}
                      >
                        <Input
                              name="phoneNumber"
                              value={user.phoneNumber}
                              onChange={hendlerInputChange} 
                        />
                      </Form.Item>
                            
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            required: false,
                            message: 'Please input your password!',
                          },
                        ]}
                      >
                        <Input
                              name="email"
                              type="email"
                              value={user.email}
                              onChange={hendlerInputChange} 
                        />
                      </Form.Item>

                      <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                          {
                            required: false,
                            message: 'Please input your password!',
                          },
                        ]}
                      >
                        <Input.Password
                              name="password"
                              value={user.password}
                              onChange={hendlerInputChange} 
                        />
                      </Form.Item>
                      
                      <Form.Item
                        wrapperCol={{
                          offset: 4,
                          justify: "center",
                          span: 16,
                        }}
                      >
                        <Button disabled={!(email) || !(password) || !(phoneNumber) || !(displayName)} onClick={handleLogin}>
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
            </Col>
          </Row>
        </div>
    );
}