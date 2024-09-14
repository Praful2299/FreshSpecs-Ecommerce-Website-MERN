import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from "react"
import axios from "axios"
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/cartSlice';




const Trending=()=>{
   const [mydata,setdata]=useState([]);
   
   const dispatch = useDispatch();

   const loaddata=()=>{
    axios.get("http://localhost:8080/cards/trending").then((res)=>{  
         console.log(res.data[0].cardData)
         setdata(res.data[0].cardData)
    })

 

   }

   useEffect(()=>{
    loaddata();
   },[])

   let addDataToCart=(id,title,Price,text,image,qty)=>{
         dispatch(addToCart({
            id:id,
            title:title,
            Price:Price,
            text:text,
            image:image,
            qty:qty
         }))
   }
   

   const ans=mydata.map((key)=>{
    return(
   <>   
   
   <Card style={{ width: '17rem' , borderRadius:"2%", border:"1px solid " , marginBottom:"15px" , height:"330px"  }}>
      <img src={key.image} />
      <Card.Body>
        <Card.Title>{key.title}</Card.Title>
        
        <Card.Text>
          {key.text}
        </Card.Text>
        <Card.Title>₹{key.Price}</Card.Title>
        
        <Button  
        className='btntrendcard'
         variant="success"
         onClick={()=>{addDataToCart(
            key.id,
            key.title,
            key.Price,
            key.text,
            key.image,
            key.qty
         )}}
         >Add To Cart </Button>
      
      </Card.Body>
    </Card>
    
 </>
    )
   })
   
   
   
   return(
        <>
        <h1 style={{textAlign:"center" , backgroundColor:"#a6f7e2" , marginTop:"10px" ,  fontFamily:"cursive"}}>Our Trending Products</h1>
        
        <div className='trendcards'>
        {ans}
        </div>
        </>
    )
}
export default Trending;