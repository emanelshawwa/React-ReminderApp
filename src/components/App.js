import React,{Component} from 'react';
import { add_Reminder ,remove_Reminder,clear_Reminder} from '../actions';
import {connect} from 'react-redux';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "./reminders.png";
class App extends Component {
   state={
      text:'',
      Date:new Date()
   }
   render_Reminders=()=>{
      const {reminders}= this.props;
      return(
         <ul className="list-group">
           {
              reminders.map(reminder =>{
                 return(
                    <li id={reminder.id} className="list-group-item">
                      <div>{reminder.text}</div>
                      <div>{moment(new Date(reminder.date)).fromNow()}</div>
                      <div className="closeIcon btn btn-danger"  onClick={() => this.props.remove_Reminder(reminder.id)} >X</div>
                    </li>
                 )
              })
           }
         </ul>
      )
   }
 render(){
   return (
    <div className="App">
      <img src={logo}/>
     <div className="remider-title">
        <h2>What Should You Do..??</h2>
     </div>
     <input
        className="form-control" 
        value={this.state.text}
        type="text" onChange={(e)=> this.setState({ text:e.target.value})}
        placeholder="Enter What You Think ...?"
     />
     <DatePicker
     className="form-control"
              value={this.state.date}
              selected={this.state.date}
              placeholderText="Enter Date"
              onChange={(date)=> this.setState({date})}
              showTimeSelect
              timeFormat="HH:mm"            
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
     <button 
      className="btn btn-primary btn-block" onClick={() => {
         this.props.add_Reminder(this.state.text,this.state.date)
         this.setState({text:'',date:''})
         }}>
         Add Reminder
     </button>
     <button className="btn btn-danger btn-block" onClick={() => this.props.clear_Reminder()}>
         Clear Reminders
     </button>
     {this.render_Reminders()}

    </div>

  );
   }
}
export default connect( state =>{
   return{
      reminders: state
   }  
},{add_Reminder,remove_Reminder,clear_Reminder}) (App);
