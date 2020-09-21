import React from "react";
import Button from "./Button";

const Post = ({
  postTask,
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
  const isComment = comment;
  return (
    <>
      <div>
        <div>{postTask.postValue}</div>
        <Button
          className="Comment"
          onClick={onClickComment}
          buttonName={"💬"}
        />
        {isComment && (
          <>
            <form onSubmit={(e) => onCommentSubmit(e)}>
              <input
                type="text"
                value={commentValue}
                onChange={onCommentChange}
              ></input>
              <input type="submit" value={"reply"}></input>
            </form>
          </>
        )}
        <Button
          className="Retweet"
          retweet={retweet}
          onClick={onRetweetClick}
          buttonName={"♻"}
        />
        <Button
          className="Likes"
          like={like}
          onClick={onLikeClick}
          buttonName={"❤️"}
        />
      </div>
    </>
  );
};

export default Post;
