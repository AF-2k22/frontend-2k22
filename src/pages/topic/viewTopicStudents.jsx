import React from 'react';
import "./Topic.css";
import axios from 'axios';
import Navbar from './../student/nav-bar';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default class TopicViewStd extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      topic:[],
      stdID:"",
      grpID:"",
      title:"",
      email:"",
      status:"",
      itemID:"",
      group:[]
    }
  }

  componentDidMount () {
    axios.get("http://localhost:8088/topic/view")
    .then((res)=> {this.setState({
        topic : res.data
    }); console.log(res.data)}  )
    .catch((err) => console.error(err));    
  }


  render() {
    return (
      <>
        <div className='topic_page'>
        <Navbar/>
  <div>


  <div className='topic_page'>
   

      <Box sx={{  border: '4px dashed blue', marginTop:16 }}>
          <h1 style={{color: 'white'}}>Topic View</h1>
        </Box>
                 <table class="table-topic">


                   <tr>
                      <th>Student ID</th>
                      <th>Group ID</th>
                      <th>Title</th>
                      <th>E-mail</th>
                                                      
                   </tr>

                   {this.state.topic.map((view) => (
                <tr>
                   <td>{view.stdID}</td>
                   <td>{view.grpID}</td>
                   <td>{view.title}</td>
                   <td>{view.email}</td>
                  
                  
            
     
                </tr>
               ))}
                        
            </table>

         </div>  




         {/* <Box sx={{
                
                 marginTop: '100px',
                 marginLeft: 10,
                 width: 1200,
                 bgcolor: 'background.paper',
                 border: '5px solid black',
                 //boxShadow: 24,
                 backgroundColor:"white",
                 p: 0.5,
                 marginBottom:20
             }}>

                 <TableContainer component={Paper}>
                   <Table size="small" sx={{ minWidth: 1000, maxWidth: 1200, border: '2px solid black'}} aria-label="customized table">
                       <TableHead>
                       <TableRow sx={{backgroundColor:"gray", height:"60px",color:"white"}}>
                           <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Leader ID</TableCell>
                           <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Group ID</TableCell>
                           <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Topic</TableCell>
                           <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Leader Email</TableCell>                           
                           <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Status</TableCell>
                       </TableRow>
                       </TableHead>
                       <TableBody>
                       {this.state.topic.map((view) => (
                           <TableRow hover={true} sx={{height:"10px"}}>
                           <TableCell align="center" sx={{fontSize:"20px"}}> {view.stdID} </TableCell>
                           <TableCell align="center" sx={{fontSize:"20px"}}> {view.grpID} </TableCell>
                           <TableCell align="center" sx={{fontSize:"20px"}}> {view.title} </TableCell>
                           <TableCell align="center" sx={{fontSize:"20px"}}> {view.email} </TableCell>
                           <TableCell align="center" sx={{fontSize:"20px"}}> {view.status} </TableCell>
                           
                           </TableRow>
                       ))}
                       </TableBody>
                   </Table>
               </TableContainer>
             </Box> */}
             </div>
            
        </div>
      </>
    )
  }
}