import {ADD_REMINDER,REMOVE_REMINDER, CLEAR_REMINDERS} from '../types';
export const add_Reminder = (text,date) => {
const action = {
        type: ADD_REMINDER,
        text,date
}
console.log("action",action);
return action;
}
export const remove_Reminder = (id) => {
        const action = {
                type: REMOVE_REMINDER,
                id
        }
        console.log("action",action);
        return action;
        }
export const clear_Reminder = () => {
        const action = {
                type: CLEAR_REMINDERS,
                 
         }
        console.log("action",action);
        return action;
                }