
import React from "react";
import {
    Card,
    CardHeader,
    Container,
    Row,
    Button
  
  } from "reactstrap";
  import {  Header as Header1, Icon, Image, Modal } from 'semantic-ui-react'
  // core components
  import Header from "components/Headers/Header.jsx";
  import "../../assets/css/stewards.css"
  import axios from "axios";
  import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

  

class Stewards extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    
    

    // componentWillMount() {
    //     axios.get('/api/lunchMenus/')
    //         .then((res)=> {
    //             if(res.status === 200) {
    //                 this.setState({
    //                     lunchMenu: res.data.menus[res.data.menus.length-1]
    //                 })
    //             }
    //         })
    // }


    render() {
        return (
            <>


              <Header />
              {/* Page content */}
              
              <Container className="mt--7" fluid>
                {/* Table */}
               
                <Row>
                  <div className="col">
                    <Card className="shadow">
                      <CardHeader>
                         
                          <h1 className="text-center">Stewards Announcements</h1>
                       
                      </CardHeader>
                      <div className="menuWrapper" >
                          {/* <div className="col-12">
                            <h3 style={{paddingLeft: '30%'}}>Upper Dining Hall</h3>
                            <img className='img3'src={this.state.lunchMenu.images[0]}></img>
                        
                          </div> */}
                          {/* <div className="col-12">
                            <h3 style={{paddingLeft: '43.5%',paddingTop: '0.5%'}}><b>Upper Dining Hall</b></h3>
                            <img className='img4'src={this.state.lunchMenu.images[0]}></img>
                        
                          </div> */}

                          <div style={{paddingTop: ''}}>
                              <img className='img6' ></img>
                        
                              </div>
                              
                       <div className="row"  >
            <div   className="col-4" style={{paddingTop: '0.5%'}} >
                
              <PricingSlot  title='Clothing Drive'>
             
              <div id='price1' >
              <div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 style={{marginLeft:'-10%'}}>Over the next  <b>two weeks</b></h12>
                    
                      </div >
                      <div style={{paddingBottom:'7%'}}>
                      <h13 >Boxes in the front foyer starting today</h13>
                      </div>
                      <div style={{paddingBottom:'7%'}}>
                      <h13 ><u>Bring</u> in your <u>old</u> clothes</h13>
                      </div>
                      <div>
                      <h15 style={{fontSize:'20px', color:'orange'}}><b>New Circles</b></h15>
                      </div>
                     {/* <h15 style={{fontSize:'20px', color:'orange'}}><b>Green and Turner</b></h15> */}
                      
                   {/* <a href = "https://ucc.managebac.com"><span className= "text"><img src='https://pbs.twimg.com/profile_images/879283732603166720/yUntnbs1.jpg' style={{paddingRight:'22%', marginLeft:'6%'}}></img></span></a> */}
                       <div className="frame col-xs-6">  
                       </div>        
                   </div>    
              
               </div>
              
             </PricingSlot> 
             
             
             </div>
{/* POWERSCHOOL*/}

<div   className="col-4" style={{paddingTop: '0.5%'}} >
                
                <PricingSlot  title='Antigone Play Details'>
               
                <div id='price1' >
                <div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 style={{marginLeft:'-10%'}}>Fall Play with BSS </h12>
                     
                      </div >
                      <div style={{paddingBottom:'7%'}}>
                      <h13 >Showtimes on Nov 21, 22, 23; and tickets are 15$ per person</h13>
                      </div>
                      <div style={{paddingBottom:'7%'}}>
                      <h13 >Ancient Greek play with western twist.</h13>
                      </div>
                      <div>
                      <h15 style={{fontSize:'20px', color:'green'}}><b>Show Starts at</b></h15>
                      </div>
                      <h15 style={{fontSize:'20px', color:'green'}}><b>7:30 PM</b></h15>
                      
                   {/* <a href = "https://ucc.managebac.com"><span className= "text"><img src='https://pbs.twimg.com/profile_images/879283732603166720/yUntnbs1.jpg' style={{paddingRight:'22%', marginLeft:'6%'}}></img></span></a> */}
                       <div className="frame col-xs-6">  
                       </div>        
                   </div>    
                
                 </div>
                
               </PricingSlot> 
               
               
               </div>
{/* Next thing*/}
   <div   className="col-4" style={{paddingTop: '0.5%'}} >
                
                <PricingSlot  title='House Hockey'>
               
                <div id='price1' >
             
                  <div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 style={{marginLeft:'-10%'}}>Tuesday: <h12 style={{color:'red'}}>McHughs</h12> vs <h12 style={{color:'orange'}}>Howards</h12> </h12>
                      <h14 style={{marginLeft:'25%'}}>7:30 AM</h14>
                      </div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 >Thursday: <h12 style={{color:'grey'}}>Mowbrays</h12> vs <h12 style={{color:'purple'}}>Martlands</h12> </h12>
                      <h14 style={{marginLeft:'25%'}}>7:30 AM</h14>
                      </div >
                      <div>
                      <h15 style={{fontSize:'20px', color:'blue'}}><b>Full Scheldule</b></h15>
                      </div>
                      <h15 style={{fontSize:'20px', color:'blue'}}><b>On PowerSchool under Extras</b></h15>
                      
                   {/* <a href = "https://ucc.managebac.com"><span className= "text"><img src='https://pbs.twimg.com/profile_images/879283732603166720/yUntnbs1.jpg' style={{paddingRight:'22%', marginLeft:'6%'}}></img></span></a> */}
                       <div className="frame col-xs-6">  
                       </div>        
                   </div>           
                     
           
                
                 </div>
               </PricingSlot> 

               </div>
           </div>
             {/* END OF FIRST ROW +++++++++++++++*/}
              {/* END OF FIRST ROW+++++++++++++++ */}
               {/* END OF FIRST ROW +++++++++++++++*/} 
                {/* END OF FIRST ROW+++++++++++++++ */}
                {/* END OF FIRST ROW+++++++++++++++ */}
                {/* END OF FIRST ROW+++++++++++++++ */}
                {/* END OF FIRST ROW+++++++++++++++ */}

             <div className="row"  >
            <div   className="col-4" style={{paddingTop: '0.5%'}} >
                
              <PricingSlot  title='Jr. House Soccer'>
             
              <div id='price1' >
              <div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 style={{marginLeft:'-10%'}}>Play Jr. House Scocer in the  <b style={{color:"red"}}>BUBBLE</b></h12>
                    
                      </div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 >Monday: <h12 style={{color:'red'}}>McHughs</h12> vs <h12 style={{color:'green'}}>Boar</h12><h12 style={{color:'black'}}>ders </h12></h12>
                      <h12 >Monday: <h12 style={{color:'#40E0D0'}}>Scaddings</h12> vs <h12 style={{color:'red'}}>Bremners</h12></h12>
                      </div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 >Wed: <h12 style={{color:'orange'}}>Howards</h12> vs <h12 style={{color:'purple'}}>Martlands</h12></h12>
                      <div>
                      <h12 >Wed: <h12 style={{color:'blue'}}>Orrs</h12> vs <h12 style={{color:'green'}}>Boar</h12><h12 style={{color:'black'}}>ders </h12></h12>
                      </div>
                     </div >
                     
                
                      
                   {/* <a href = "https://ucc.managebac.com"><span className= "text"><img src='https://pbs.twimg.com/profile_images/879283732603166720/yUntnbs1.jpg' style={{paddingRight:'22%', marginLeft:'6%'}}></img></span></a> */}
                       <div className="frame col-xs-6">  
                       </div>        
                   </div>    
              
               </div>
              
             </PricingSlot> 
             
             
             </div>
{/* POWERSCHOOL*/}

<div   className="col-4" style={{paddingTop: '0.5%'}} >
                
                <PricingSlot  title='Meditation'>
               
                <div id='price1' >
                <div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 style={{marginLeft:'-10%'}}><b style={{color:'red'}}>Tuesdays at 12:50 with Ms. Erb </b></h12>
                      </div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 style={{marginLeft:'-10%'}}><b style={{color:'red'}}>Thursdays at 12:50 with Ms. Remtulla </b></h12>
                      </div>
                      <div style={{paddingBottom:'7%'}}>
                      <h13 ><b style={{color:"red"}}>Where?: </b> Take a right before the UDH, and PAQS is the first room on the left through the Health Centre doors.  </h13>
                      </div>
                      <div>
                      <h15 style={{fontSize:'20px', color:'purple'}}><b>Meditation Crew</b></h15>
                      </div>
                 
                      
                   {/* <a href = "https://ucc.managebac.com"><span className= "text"><img src='https://pbs.twimg.com/profile_images/879283732603166720/yUntnbs1.jpg' style={{paddingRight:'22%', marginLeft:'6%'}}></img></span></a> */}
                       <div className="frame col-xs-6">  
                       </div>        
                   </div>    
                
                 </div>
                
               </PricingSlot> 
               
               
               </div>
{/* Next thing*/}
   <div   className="col-4" style={{paddingTop: '0.5%'}} >
                
                <PricingSlot  title='Movember'>
               
                <div id='price1' >
             
                  <div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 style={{marginLeft:'-10%'}}>UCC Movember Campain has raised </h12>
                      <h14 style={{marginLeft:'25%'}}>Many Moneys</h14>
                      </div >
                      <div style={{paddingBottom:'7%'}}>
                      <h13 >Donating to <a href='https://ca.movember.com/donate'>Movember</a> will earn House Points towards the Prefix Cup</h13>
                      </div>
                      <div>
                      <h15 style={{fontSize:'20px', color:'pink'}}><b>Also .....</b></h15>
                      </div>
                      <div style={{paddingBottom:'5%'}}>
                      <h15 style={{fontSize:'20px', color:'pink'}}><b>Show us your staches</b></h15>
                      </div>
                      <h15 style={{fontSize:'20px', color:'black'}}><b>Luca and Robbie</b></h15>
                      
                   {/* <a href = "https://ucc.managebac.com"><span className= "text"><img src='https://pbs.twimg.com/profile_images/879283732603166720/yUntnbs1.jpg' style={{paddingRight:'22%', marginLeft:'6%'}}></img></span></a> */}
                       <div className="frame col-xs-6">  
                       </div>        
                   </div>           
                     
           
                
                 </div>
               </PricingSlot> 

               </div>
           </div>





                      </div>
                       </Card>
                   </div>
                  </Row>
                 
        </Container>
        
            </>
          );
  
    }
}

export default Stewards;
