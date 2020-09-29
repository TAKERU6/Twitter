import React from "react";
import Post from "./Post";
const Posts = ({
  tasks,
  isComment,
  commentValue,
  commentEditValue,
  onClickComment,
  onCommentChange,
  onCommentSubmit,
  onRetweetClick,
  onLikeClick,
  onClickDelete,
  onClickEdit,
  onEditChange,
  editValue,
  onEditSubmit,
  onCommentDelete,
  onClickCommentEdit,
  onCommentEditChange,
  onCommentEditSubmit
}) => {
  return (
    <>
      {tasks.map((task) => (
        <Post
          key={task.id}
          task={task}
          isComment={isComment}
          commentValue={commentValue}
          editValue={editValue}
          commentEditValue={commentEditValue}
          onClickComment={onClickComment}
          onCommentChange={onCommentChange}
          onCommentSubmit={onCommentSubmit}
          onRetweetClick={onRetweetClick}
          onLikeClick={onLikeClick}
          onClickDelete={onClickDelete}
          onClickEdit={onClickEdit}
          onEditChange={onEditChange}
          onEditSubmit={onEditSubmit}
          onCommentDelete={onCommentDelete}
          onClickCommentEdit={onClickCommentEdit}
          onCommentEditChange={onCommentEditChange}
          onCommentEditSubmit={onCommentEditSubmit}
        />
      ))}
    </>
  );
};
export default Posts;
