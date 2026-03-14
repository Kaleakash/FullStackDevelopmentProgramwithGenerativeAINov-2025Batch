import axios from "axios";
import { useEffect, useState } from "react";

function Booking(){

const [cabs,setCabs]=useState([]);

const [booking,setBooking]=useState({
customerName:"",
phone:"",
pickupLocation:"",
dropLocation:"",
cabId:"",
cabType:""
});

const [msg,setMsg]=useState("");

const CAB_URL="http://localhost:3000/cabs";
const BOOKING_URL="http://localhost:3000/bookings";


useEffect(()=>{

axios.get(CAB_URL)
.then(res=>setCabs(res.data))
.catch(err=>console.log(err));

},[]);


const handleInput=(e)=>{
const {name,value}=e.target;
setBooking({...booking,[name]:value});
};


const bookCab=(cab)=>{

const newBooking={
...booking,
cabId:cab.id,
cabType:cab.cabName,
driverName:cab.driverName,
status:"Booked"
};

axios.post(BOOKING_URL,newBooking)
.then(res=>{
setMsg("Cab booked successfully!");
setBooking({
customerName:"",
phone:"",
pickupLocation:"",
dropLocation:"",
cabId:"",
cabType:""
});
})
.catch(err=>console.log(err));

};


return(

<div style={{padding:"30px"}}>

<h2>Book a Cab</h2>

<input
type="text"
name="customerName"
placeholder="Enter Your Name"
value={booking.customerName}
onChange={handleInput}
/>
<br/>

<input
type="text"
name="phone"
placeholder="Enter Phone Number"
value={booking.phone}
onChange={handleInput}
/>
<br/>

<input
type="text"
name="pickupLocation"
placeholder="Pickup Location"
value={booking.pickupLocation}
onChange={handleInput}
/>
<br/>

<input
type="text"
name="dropLocation"
placeholder="Drop Location"
value={booking.dropLocation}
onChange={handleInput}
/>

<h3>Available Cabs</h3>

<div>

{cabs.map(cab=>

<div key={cab.id} style={{
border:"1px solid gray",
margin:"10px",
padding:"10px"
}}>

<h4>{cab.cabName}</h4>

<p>Driver : {cab.driverName}</p>

<p>Fare/km : ₹{cab.farePerKm}</p>

<p>Seats : {cab.seats}</p>

<button onClick={()=>bookCab(cab)}>
Book Now
</button>

</div>

)}

</div>

<p style={{color:"green"}}>{msg}</p>

</div>

)

}

export default Booking;