import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EndStrip=()=>{
  const navigate=useNavigate();  
  
  return(
        <>
         <Nav variant="underline" className='endnav'  >
     
         <Nav.Item>
        <Nav.Link style={{color:"black"}} eventKey="link-1"  className='endn' onClick={()=>{navigate("/home")}} >HOME</Nav.Link>
      </Nav.Item>
     
      <Nav.Item>
        <Nav.Link style={{color:"black"}} eventKey="link-8"  className='endn' onClick={()=>{navigate("/eyeglasses")}}  >EYEGLASSES</Nav.Link>
      </Nav.Item>
     
      <Nav.Item>
        <Nav.Link style={{color:"black"}}  eventKey="link-2" className='endn' onClick={()=>{navigate("/computerglasses")}}  >COMPUTER GLASSES</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link style={{color:"black"}}  eventKey="link-3" className='endn' onClick={()=>{navigate("/kidsglasses")}} >KIDS GLASSES</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link style={{color:"black"}}  eventKey="link-4" className='endn'  onClick={()=>{navigate("/contactlenses")}} >CONTACT LENSES</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link style={{color:"black"}} eventKey="link-5" className='endn '  onClick={()=>{navigate("/sunglasses")}} >SUN GLASSES</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link style={{color:"black"}}  eventKey="link-6" className='endn'  onClick={()=>{navigate("/eyetest")}} >HOME EYE-TEST</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link style={{marginRight:"280px",color:"black"}} eventKey="link-7" className='endn'  onClick={()=>{navigate("/storelocator")}} >STORE LOCATOR</Nav.Link>
      </Nav.Item>
      <Button  variant="success" className='endbutton' >3D TryOn</Button>{' '}  
      <Button variant="dark">GOLD MAX</Button> 
    </Nav>
        </>
    )
}
export default EndStrip