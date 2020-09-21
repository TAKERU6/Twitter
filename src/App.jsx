import React, { Component } from "react";
import "./styles.css";
import Form from "./Form";
import Posts from "./Posts";

class App extends Component {
  state = {
    like: 0,
    retweet: 0,
    liked: false,
    retweeted: false,
    comment: false,
    commentValue: "",
    commentTask: [],
    postValue: "",
    postTasks: []
  };
  clickLike = () => {
    const { like, liked } = this.state;
    this.setState({
      like: like + (liked ? -1 : 1),
      liked: !liked
    });
  };
  clickRetweet = () => {
    const { retweet, retweeted } = this.state;
    this.setState({
      retweet: retweet + (retweeted ? -1 : 1),
      retweeted: !retweeted
    });
  };
  clickComment = () => {
    const { comment } = this.state;
    this.setState({
      comment: !comment
    });
  };
  handleCommentChange = (event) =>
    this.setState({ commentValue: event.target.value });
  handleCommentSubmit = (e) => {
    e.preventDefault();
    const { commentValue } = this.state;
    this.setState({
      commentTask: commentValue,
      commentValue: ""
    });
  };
  handlePostChange = (event) =>
    this.setState({ postValue: event.target.value });
  handlePostSubmit = (e) => {
    e.preventDefault();
    const { postTasks, postValue } = this.state;
    const id = postTasks.length + 1;
    this.setState({
      postTasks: [...postTasks, { id, postValue }],
      postValue: ""
    });
  };
  render() {
    const {
      like,
      retweet,
      comment,
      commentValue,
      postValue,
      postTasks
    } = this.state;
    console.log(this.state.postTasks);

    return (
      <>
        <h1>Twitter</h1>
        <Form
          value={postValue}
          submitButtonName={"tweet"}
          onChange={this.handlePostChange}
          onSubmit={this.handlePostSubmit}
        />
        <Posts
          postTasks={postTasks}
          like={like}
          retweet={retweet}
          comment={comment}
          commentValue={commentValue}
          onClickComment={this.clickComment}
          onCommentChange={this.handleCommentChange}
          onCommentSubmit={this.handleCommentSubmit}
          onRetweetClick={this.clickRetweet}
          onLikeClick={this.clickLike}
        />
      </>
    );
  }
}
export default App;
