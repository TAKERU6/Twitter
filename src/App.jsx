import React, { Component } from "react";
import "./styles.css";
import Form from "./Form";
import Posts from "./Posts";
class App extends Component {
  state = {
    commentEditValue: "",
    commentValue: "",
    value: "",
    tasks: [],
    editValue: "",
    editTaskId: ""
  };

  clickLike = (taskId) => {
    const { tasks } = this.state;
    const newTasks = tasks.filter((task) => task.id !== taskId);
    const task = tasks.find((task) => task.id === taskId);
    const updateLike = task.like === 0 ? 1 : 0;
    this.setState({
      tasks: [
        {
          ...task,
          like: updateLike
        },
        ...newTasks
      ]
    });
  };

  clickRetweet = (postTaskId) => {
    const { tasks } = this.state;
    const newTasks = tasks.filter((task) => task.id !== postTaskId);
    const task = tasks.find((task) => task.id === postTaskId);
    const updateRetweet = task.retweet === 0 ? 1 : 0;
    this.setState({
      tasks: [
        {
          ...task,
          retweet: updateRetweet
        },
        ...newTasks
      ]
    });
  };

  clickComment = (taskId) => {
    const { tasks } = this.state;
    const newTasks = tasks.filter((task) => task.id !== taskId);
    const task = tasks.find((task) => task.id === taskId);
    const updateComment = !task.isComment;
    this.setState({
      tasks: [
        {
          ...task,
          isComment: updateComment
        },
        ...newTasks
      ]
    });
  };
  handleCommentChange = (event) =>
    this.setState({ commentValue: event.target.value });

  handleCommentSubmit = (e, taskId) => {
    e.preventDefault();
    const { tasks, commentValue } = this.state;
    const newTasks = tasks.filter((item) => item.id !== taskId);
    const task = tasks.find((item) => item.id === taskId);
    const id = task.comments.length + 1;
    this.setState({
      tasks: [
        {
          ...task,
          comments: [
            ...task.comments,
            { id, commentValue: commentValue, isCommentEdit: false }
          ],
          isComment: false
        },
        ...newTasks
      ],
      commentValue: ""
    });
  };

  handleCommentDelete = (comment, task) => {
    if (
      window.confirm(
        `コメント名: 「${comment.commentValue}」 を削除して良いですか ?　`
      )
    ) {
      const { tasks } = this.state;
      const newTasks = tasks.filter((item) => item.id !== task.id);
      const newComments = task.comments.filter(
        (item) => item.id !== comment.id
      );
      this.setState({
        tasks: [
          ...newTasks,
          {
            ...task,
            comments: newComments
          }
        ]
      });
    }
  };

  onClickCommentEdit = (comment, task) => {
    const { tasks } = this.state;
    const newTasks = tasks.filter((item) => item.id !== task.id);
    const anotherComments = task.comments.filter(
      (item) => item.id !== comment.id
    );
    const newComment = task.comments.find((item) => item.id === comment.id);
    const selectedEdit = !comment.isCommentEdit;
    console.log(selectedEdit);
    this.setState({
      tasks: [
        {
          ...task,
          comments: [
            ...anotherComments,
            { ...newComment, isCommentEdit: selectedEdit }
          ]
        },
        ...newTasks
      ]
    });
  };

  handleCommentEditChange = (event) =>
    this.setState({ commentEditValue: event.target.value });

  handleCommentEditSubmit = (e, comment, task) => {
    e.preventDefault();
    const { tasks, commentEditValue } = this.state;
    const newTasks = tasks.filter((item) => item.id !== task.id);
    const anotherComments = task.comments.filter(
      (item) => item.id !== comment.id
    );
    const newComment = task.comments.find((item) => item.id === comment.id);
    this.setState({
      tasks: [
        {
          ...task,
          comments: [
            ...anotherComments,
            {
              ...newComment,
              commentValue: commentEditValue,
              isCommentEdit: false
            }
          ]
        },
        ...newTasks
      ]
    });
  };

  handlePostChange = (event) => this.setState({ value: event.target.value });

  handlePostSubmit = (e) => {
    e.preventDefault();
    const { tasks, value } = this.state;
    const id = tasks.length + 1;
    this.setState({
      tasks: [
        {
          id,
          value,
          like: 0,
          retweet: 0,
          isComment: false,
          isEdit: false,
          comments: []
        },
        ...tasks
      ],
      value: ""
    });
  };

  handleDelete = (task) => {
    if (
      window.confirm(`タスク名: 「${task.value}」 を削除して良いですか ?　`)
    ) {
      const { tasks } = this.state;
      const newTasks = tasks.filter((item) => item.id !== task.id);
      this.setState({
        tasks: newTasks
      });
    }
  };

  onClickEdit = (taskId) => {
    const { tasks } = this.state;
    const newTasks = tasks.filter((task) => task.id !== taskId);
    const task = tasks.find((task) => task.id === taskId);
    const selectedEdit = !task.isEdit;
    this.setState({
      tasks: [
        {
          ...task,
          isEdit: selectedEdit
        },
        ...newTasks
      ]
    });
  };

  handleEditChange = (event) =>
    this.setState({ editValue: event.target.value });

  handleEditSubmit = (e, taskId) => {
    e.preventDefault();
    const { editValue, tasks } = this.state;
    const newTasks = tasks.filter((item) => item.id !== taskId);
    const task = tasks.find((item) => item.id === taskId);
    this.setState({
      tasks: [
        {
          ...task,
          value: editValue,
          isEdit: false
        },
        ...newTasks
      ],
      editValue: ""
    });
  };

  render() {
    const { isComment, commentValue, value, tasks, editValue } = this.state;
    console.log(this.state.tasks);
    return (
      <>
        <h1>Twitter</h1>
        <Form
          value={value}
          submitButtonName={"tweet"}
          onChange={this.handlePostChange}
          onSubmit={this.handlePostSubmit}
        />
        <Posts
          tasks={tasks}
          isComment={isComment}
          commentValue={commentValue}
          editValue={editValue}
          onClickComment={this.clickComment}
          onCommentChange={this.handleCommentChange}
          onCommentSubmit={this.handleCommentSubmit}
          onRetweetClick={this.clickRetweet}
          onLikeClick={this.clickLike}
          onClickDelete={this.handleDelete}
          onClickEdit={this.onClickEdit}
          onEditChange={this.handleEditChange}
          onEditSubmit={this.handleEditSubmit}
          onCommentDelete={this.handleCommentDelete}
          onClickCommentEdit={this.onClickCommentEdit}
          onCommentEditChange={this.handleCommentEditChange}
          onCommentEditSubmit={this.handleCommentEditSubmit}
        />
      </>
    );
  }
}
export default App;
