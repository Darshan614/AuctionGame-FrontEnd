import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import classes from './SignUpForm.module.css';
 
function FormExample(props) {
  const [validated, setValidated] = useState(false);
  const [firstname,setFirstname] = useState();
  const [lastname,setLastname] = useState();
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [email,setEmail] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
   
      event.preventDefault();
      console.log(firstname);
      console.log(lastname);
      console.log(username);
      console.log(password);
      console.log(email);
      props.onSignUp(firstname,lastname,username,email,password);
  };

  

  return (
      <div className={classes.signup}>
         <div className={classes.box}>
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
    <h1 className={classes.title}>SignUp</h1>
        <div>--------------------------------------------------------</div>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            value={firstname}
            onChange={(e)=>setFirstname(e.target.value)}
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            value={lastname}
            onChange={(e)=>setLastname(e.target.value)}
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
          />
          <Form.Control.Feedback type="invalid">Enter a valid email</Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <div>--------------------------------------------------------</div>
      <Button type="submit" className={classes.submit} >Submit form</Button>
    </Form>
    </div>
    </div>
  )
}

export default FormExample;