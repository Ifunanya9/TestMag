import React, { Component } from "react";
// import { Card } from "react-bootstrap";
// import ReactEmoji from "react-emoji";
import "./chat.css";
import { connect } from "react-redux";
import { createChat } from "../../../store/actions/chatActions";

class Chat extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createChat(this.state);
  };

  render() {
    return (
      <div>
        <div className="move">
          <form onSubmit={this.handleSubmit} className="mx-3">
            <label htmlFor="content">Chat Here!</label>
            <input
              type="text"
              className="form-control chat-bubble chat-form"
              name="content"
              onChange={this.handleChange}
              id="content"
              onKeyPress={(event) =>
                event.key === "Enter" ? this.handleSubmit(event) : null
              }
            />
            <button className="btn btn-submit px-5 mt-4 button chat-bubble">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }

  //   render() {
  //     return (
  //       <div>
  //             {/* {this.state.chats.forEach((chat) => {  */}
  //             {this.state.chats.map((userChat) => {
  //               if (userChat.uid !== null) {
  //                 return (
  //                   <Card
  //                     className={
  //                       "chat-bubble text-center " +
  //                       (this.state.user.email === userChat.chatBy
  //                         ? "current-user"
  //                         : "")
  //                     }
  //                   >
  //                     <Card.Header key={userChat.id}>
  //                       <strong>{userChat.chatBy}</strong>
  //                       <br />
  //                       <strong>{this.formatTime(userChat.timestamp)}</strong>
  //                     </Card.Header>
  //                     <Card.Body>
  //                       <Card.Text key={userChat.id}>
  //                         {ReactEmoji.emojify(userChat.content)}
  //                         <br />
  //                         <br />
  //                         {userChat.chatBy === this.state.user.email ? (
  //                           <button
  //                             key={userChat.id}
  //                             value={userChat}
  //                             className="btn blue"
  //                             type="button"
  //                             onClick={() => this.handleDelete(userChat.id)}
  //                           >
  //                             Delete
  //                           </button>
  //                         ) : null}
  //                       </Card.Text>
  //                     </Card.Body>
  //                   </Card>
  //                 );
  //               }
  //               return null;
  //               // })
  //             })}
  //           </div>
  //           <div className="text">
  //             <label htmlFor="text">Chat Here!</label>
  //             <form onSubmit={this.handleSubmit} className="mx-3">
  //               <textarea
  //                 className="form-control chat-bubble chat-form"
  //                 name="content"
  //                 onChange={this.handleChange}
  //                 value={this.state.content}
  //                 id="text"
  //                 onKeyPress={(event) =>
  //                   event.key === "Enter" ? this.handleSubmit(event) : null
  //                 }
  //               ></textarea>

  //               {this.state.error ? (
  //                 <p className="text-danger">{this.state.error}</p>
  //               ) : null}
  //               {this.state.content ? (
  //                 this.state.content !== " " ? (
  //                   <button
  //                     type="submit"
  //                     className="btn btn-submit px-5 mt-4 button chat-bubble"
  //                   >
  //                     Send
  //                   </button>
  //                 ) : null
  //               ) : null}
  //             </form>
  //           </div>
  //           <div className="py-5 mx-3 text">
  //             Login in as:{" "}
  //             <strong className="text-info">{this.state.user.email}</strong>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createChat: (chat) => dispatch(createChat(chat)),
  };
};

export default connect(null, mapDispatchToProps)(Chat);
