import React from "react";
const Post = ({
  task,
  commentValue,
  editValue,
  onClickComment,
  onCommentChange,
  onCommentSubmit,
  onRetweetClick,
  onLikeClick,
  onClickDelete,
  onClickEdit,
  onEditChange,
  onEditSubmit,
  onCommentDelete,
  onClickCommentEdit,
  onCommentEditChange,
  commentEditValue,
  onCommentEditSubmit
}) => {
  const isComment = !!task.isComment;
  const isEdit = !!task.isEdit;
  return (
    <>
      <div>
        <div>{task.value}</div>
        <button onClick={() => onClickDelete(task)}>delete</button>
        <button onClick={() => onClickEdit(task.id)}>edit</button>
        {isEdit && (
          <>
            <form onSubmit={(e) => onEditSubmit(e, task.id)}>
              <input
                type="text"
                value={editValue}
                onChange={onEditChange}
              ></input>
              <input type="submit" value={"change"}></input>
            </form>
          </>
        )}
        　　　　
        <button onClick={() => onClickComment(task.id)}>{"💬"}</button>
        {isComment && (
          <>
            <form onSubmit={(e) => onCommentSubmit(e, task.id)}>
              <input
                type="text"
                value={commentValue}
                onChange={onCommentChange}
              ></input>
              <input type="submit" value={"reply"}></input>
            </form>
          </>
        )}
        <>
          <button onClick={() => onRetweetClick(task.id)}>{"♻"}</button>
          <> {task.retweet} </>
        </>
        <>
          <button onClick={() => onLikeClick(task.id)}>{"❤️"}</button>
          <> {task.like} </>
        </>
        {task.comments.map((comment) => (
          <div key={comment.id}>
            {comment.commentValue}
            <button onClick={() => onCommentDelete(comment, task)}>
              delete
            </button>
            <button onClick={() => onClickCommentEdit(comment, task)}>
              edit
            </button>
            {!!comment.isCommentEdit && (
              <>
                <form onSubmit={(e) => onCommentEditSubmit(e, comment, task)}>
                  <input
                    type="text"
                    value={commentEditValue}
                    onChange={onCommentEditChange}
                  ></input>
                  <input type="submit" value={"reply"}></input>
                </form>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default Post;
