import React from "react";
import Post from "./Post";

const Posts = ({
  postTasks,
  like,
  retweet,
  comment,
  commentValue,
  onClickComment,
  onCommentChange,
  onCommentSubmit,
  onRetweetClick,
  onLikeClick
}) => {
  return (
    <>
      {postTasks.map((postTask) => (
        <Post
          key={postTask.id}
          postTask={postTask}
          like={like}
          retweet={retweet}
          comment={comment}
          commentValue={commentValue}
          onClickComment={onClickComment}
          onCommentChange={onCommentChange}
          onCommentSubmit={onCommentSubmit}
          onRetweetClick={onRetweetClick}
          onLikeClick={onLikeClick}
        />
      ))}
    </>
  );
};

export default Posts;
