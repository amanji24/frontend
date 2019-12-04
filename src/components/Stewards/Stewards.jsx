
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
                
              <PricingSlot  title='U14 Hockey Tryouts'>
             
              <div id='price1' >
              <div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 style={{marginLeft:'-10%'}}>First Tryout Friday at <b>4:00 PM</b></h12>
                    
                      </div >
                      <div style={{paddingBottom:'7%'}}>
                      <h13 >Bring all your skates and helmets and be prepared to play.</h13>
                      </div>
                      <div style={{paddingBottom:'7%'}}>
                      <h13 ><u>NO</u> Helmet; <u>NO</u> Play</h13>
                      </div>
                      <div>
                      <h15 style={{fontSize:'20px', color:'orange'}}><b>Coaches</b></h15>
                      </div>
                      <h15 style={{fontSize:'20px', color:'orange'}}><b>Green and Turner</b></h15>
                      
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
                      <h12 style={{marginLeft:'-10%'}}>Winter Y11-12 Play with BSS </h12>
                     
                      </div >
                      <div style={{paddingBottom:'7%'}}>
                      <h13 >Showtimes on Nov 21, 22, 23; and tickets are 15$ per person</h13>
                      </div>
                      <div style={{paddingBottom:'7%'}}>
                      <h13 >This play shows a ancient greek story with a small twist of modern Cowboy</h13>
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
                
                <PricingSlot  title='U16 Basketball Meeting'>
               
                <div id='price1' >
             
                  <div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 style={{marginLeft:'-10%'}}>Meeting Thursday Afterschool in </h12>
                      <h14 style={{marginLeft:'25%'}}>Room 331</h14>
                      </div >
                      <div style={{paddingBottom:'7%'}}>
                      <h13 >Come to the classroom dressed in Gym Wear and be prepared to play.</h13>
                      </div>
                      <div>
                      <h15 style={{fontSize:'20px', color:'blue'}}><b>Coaches</b></h15>
                      </div>
                      <h15 style={{fontSize:'20px', color:'blue'}}><b>Sturino and Badali</b></h15>
                      
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
                
              <PricingSlot  title='Community Service Trip'>
             
              <div id='price1' >
              <div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 style={{marginLeft:'-10%'}}>Its that time of year again and this year we are going to  <b style={{color:"red"}}>CUBA</b></h12>
                    
                      </div >
                      <div style={{paddingBottom:'7%'}}>
                      <h13 >If you are interested in helping out the <b>Aowo School</b> and getting 25 Community Service Hours</h13>
                      </div>
                      <div style={{paddingBottom:'7%'}}>
                      <h13 >Meet in room <u>128</u> Today At Lunch</h13>
                      </div>
                     
                      <h15 style={{fontSize:'15px', color:'red'}}><b>Thanks</b></h15>
                      
                   {/* <a href = "https://ucc.managebac.com"><span className= "text"><img src='https://pbs.twimg.com/profile_images/879283732603166720/yUntnbs1.jpg' style={{paddingRight:'22%', marginLeft:'6%'}}></img></span></a> */}
                       <div className="frame col-xs-6">  
                       </div>        
                   </div>    
              
               </div>
              
             </PricingSlot> 
             
             
             </div>
{/* POWERSCHOOL*/}

<div   className="col-4" style={{paddingTop: '0.5%'}} >
                
                <PricingSlot  title='Y9 Dance'>
               
                <div id='price1' >
                <div >
                      <div style={{paddingBottom:'7%'}}>
                      <h12 style={{marginLeft:'-10%'}}>Y9 Dance at UCC on Nov 31 </h12>
                     
                      </div >
                      <div style={{paddingBottom:'7%'}}>
                      <h13 >Doors open at 7:00 and tickets are 10$ per person.</h13>
                      </div>
                      <div style={{paddingBottom:'7%'}}>
                      <h13 ><b style={{color:"red"}}>ALERT: </b> The drug and alcohol policy is in full effect</h13>
                      </div>
                      <div>
                      <h15 style={{fontSize:'20px', color:'purple'}}><b>Tickets on Sale in</b></h15>
                      </div>
                      <h15 style={{fontSize:'20px', color:'purple'}}><b>Student Center at Lunch</b></h15>
                      
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
                      <h14 style={{marginLeft:'25%'}}>500$ so far</h14>
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
                      <h15 style={{fontSize:'20px', color:'black'}}><b>Luka and Jake</b></h15>
                      
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
