import React, { useState } from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginAdmin } from "../../actions/admin";
import ErrorModal from "../../ErrorModal";
import Loading from "../../Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginFunction = async () => {
    dispatch(LoginAdmin(email, password, navigate));
  };
  const failure = useSelector((state) => state.admin.failure);
  const error = useSelector((state) => state.admin.error);
  const loading = useSelector((state) => state.admin.loading);

  return (
    <>
      {loading && <Loading />}
      {failure && <ErrorModal error={error} />}
      <div className="login p-5">
        <Card className="data-card m-0">
          {/* <div className='card-header'>
                        <ArrowBackIcon color="primary" fontSize="large"/>
                    </div> */}
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <div className="p-3 login-card">
                <h1>Login</h1>
                <p>Hello! Log in with your email.</p>
                <Form className="theme-form">
                  <Form.Group className="mb-3 login-label">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 login-label">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => setpassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </Form.Group>
                </Form>
                <Button type="submit" onClick={loginFunction}>
                  Login
                </Button>
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Card>
      </div>
    </>
  );
};
export default Login;
