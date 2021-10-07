import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import classes from './LoginForm.module.css';
 
function LoginForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onsubmit = ()=>{
    
  }

  return (
      <div className={classes.signup}>
         <div className={classes.box}>
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
    <h1 className={classes.title}>Login</h1>
        <div>--------------------------------------------------------</div>
        <Form.Group as={Col}  controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        
        <Form.Group as={Col}  controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      
      

      <div>--------------------------------------------------------</div>
      <Button type="submit" className={classes.submit} onSubmit={onsubmit}>Login</Button>
    </Form>
    </div>
    </div>
  )
}

export default LoginForm;