import React from "react";
import { TextField, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import axios from "axios";
import config from "../../src/hack2help-gefrcv-6d1032df1d6b.json"

class ChatWindow extends React.Component {
  state = {
    chatState: { bot1: "hi"},
    counter: 1,
    userQuest: ""
  };

  handleClick = async (e)=>{
    // let requestBody = {"queryInput":{
    //   "text":{
    //       //"text":"Hello",
    //       "text":this.state.userQuest,
    //       "languageCode":"en-US"
    //     }
    //   }
    // }

    let requestBody = {
      "userRequestQstn": this.state.userQuest
    }
    console.log(requestBody)

    try {
      let response = await fetch(
        "http://localhost:5000/getDF",
        {
          method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
        }
      );
      let json = await response.json();
      console.log(json);
      this.setState({
        counter: this.state.counter+1
      },()=>{
        // this.setState({
        //   chatState:{...this.state.chatState, obj}
        // })
        let temp = this.state.chatState;
        temp["user"+this.state.counter] = this.state.userQuest;
        temp["bot"+this.state.counter] = json.msg;
        this.setState({
          chatState : temp
        },()=>{
          this.setState({
            userQuest: ""
          })
        })
        
      })

    } catch (e) {
      console.log(e);
    }

    //console.log(this.state.userQuest);
    
  }

  handleAsk = (event)=>{
    
    this.setState({
      userQuest: event.target.value
    },()=>{
      
      console.log(this.state.userQuest);
    })
  }

  render() {
    return (
      <div className="chatRootWindow">
        <div className="chats">
          {Object.keys(this.state.chatState) != undefined &&
          Object.keys(this.state.chatState).length != 0 ? (
            Object.keys(this.state.chatState).map((key, i) => (
              <div className={key.includes("bot") ? "bot" : "user"}>
                {eval("this.state.chatState." + key)}
              </div>
            ))
          ) : (
            <p>Loading..</p>
          )}
        </div>
        <div className="chatInputDiv">
          <TextField value={this.state.userQuest} className="txtField" onChange={(event)=>this.handleAsk(event)} id="standard-basic" label="Ask something..." />
          <Button className="sendBtn"  variant="contained" 
                  color="primary" 
                  onClick={(event)=>this.handleClick(event)}>
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
