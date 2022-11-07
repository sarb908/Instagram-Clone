import React, { useEffect } from "react";
import {
  BsTrash,
  BsThreeDots,
  BsHeart,
  BsHeartFill,
  BsBookmark,
} from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { RiChat3Line } from "react-icons/ri";
import { FaPaperPlane } from "react-icons/fa";
// import { DotsHorizontalIcon } from "@heroicons/react/solid";

import { MdSentimentVerySatisfied } from "react-icons/md";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Post({ post, user }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const likePost = async () => {};
  const addComment = async (e) => {
    // e.preventDefault();
  };

  const visitProfile = () => {};
  const deletePost = () => {
    // deleteDoc(doc(db, "posts", post.id));
  };
  return (
    <PostWrap>
      <HeaderContainer>
        <img
          src={`https://images.unsplash.com/photo-1638026884583-29cfb4e47b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`}
          alt=""
          onClick={visitProfile}
        />
        <p onClick={visitProfile}>{"jashan"}</p>
        {!isOpen ? (
          <BsThreeDots
            size={26}
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: "gray", cursor: "pointer" }}
          />
        ) : (
          <AiOutlineClose
            size={26}
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: "gray", cursor: "pointer" }}
          />
        )}

        {isOpen && (
          <DotsOptions>
            {
              <li onClick={deletePost} style={{ color: "rgb(239 68 68)" }}>
                <BsTrash className="Icon" /> Delete
              </li>
            }
          </DotsOptions>
        )}
      </HeaderContainer>
      {/* POST PHOTO */}
      <PostCoverPhoto
        src={`https://images.unsplash.com/photo-1638026884583-29cfb4e47b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`}
      />
      {/* POST OPTIONS */}
      <PostOptions>
        <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
          {hasLiked ? (
            <BsHeartFill
              size={36}
              onClick={likePost}
              style={{ paddingLeft: 8, color: "#f56565" }}
            />
          ) : (
            <BsHeart
              size={36}
              className="Nav__Icon"
              onClick={likePost}
              style={{ paddingLeft: 8 }}
            />
          )}
          <RiChat3Line size="28" className="Nav__Icon" />
          <FaPaperPlane size="26" className="Nav__Icon" />
        </div>
        <BsBookmark
          size="28"
          style={{ paddingRight: 2 }}
          className="Nav__Icon"
        />
      </PostOptions>
      {/* LIKES */}
      <p style={{ paddingLeft: 10 }}>
        {likes.length > 0 && (
          <strong>
            {likes?.length} {likes.length > 1 ? "Likes" : "Like"}
          </strong>
        )}
      </p>
      {/* DETAILS & CAPTION */}
      <p style={{ display: "flex", gap: 10, marginTop: 5, padding: 10 }}>
        <strong>{`sarb`}</strong>
        <span>{`123`}</span>
      </p>
      {/* COMMENTs */}
      {comments.length !== 0 && (
        <CommentsContainer>
          {comments?.map((comment) => (
            <CommentWrapper key={comment.id}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img src={comment.data().profileImg} alt="" />
                <h5>
                  <strong>{comment.data().username}</strong>
                </h5>
                <p>{comment.data().comment}</p>
              </div>

              {comment && <p style={{ fontSize: 10, color: "gray" }}></p>}
            </CommentWrapper>
          ))}
        </CommentsContainer>
      )}
      {post && <div style={{ padding: 10, color: "gray", fontSize: 12 }}></div>}
      {/* ADD COMMENT */}
      <AddCommentContainer>
        <div>
          <MdSentimentVerySatisfied size={22} />
          <form onSubmit={addComment}>
            <input
              value={comment}
              type="text"
              placeholder="Add comment"
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <h4 style={{ cursor: "pointer" }} onClick={addComment}>
          Post
        </h4>
      </AddCommentContainer>
    </PostWrap>
  );
}

export default Post;
const PostWrap = styled.div`
  background-color: #fff;
  margin-bottom: 30px;
  border: 1px solid rgb(212 212 212);
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
  > img {
    object-fit: contain;
    height: 40px;
    width: 40px;
    border-radius: 9999px;
    cursor: pointer;
  }
  > p {
    flex: 1;
    font-size: 15px;
    cursor: pointer;
    font-weight: 500;
  }
`;
const DotsOptions = styled.ul`
  position: absolute;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 10px;
  border-radius: 6px;
  right: 20px;
  top: 40px;
  > li {
    display: flex;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    padding: 3px;
    cursor: pointer;
  }
`;

const PostCoverPhoto = styled.img`
  object-fit: contain;
  width: 100%;
`;
const PostOptions = styled.div`
  margin-top: 10px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  color: #000;
  width: 100%;
`;
const CommentsContainer = styled.div`
  max-height: 70px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  margin-left: 35px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 5px;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
  }
`;
const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  > div > img {
    object-fit: contain;
    height: 30px;
    border-radius: 9999px;
  }
  > div > p {
    color: #2d3748;
    font-size: 15px;
    height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 150px;

    @media (min-width: 750px) {
      width: 250px;
    }
  }
  > p {
    min-width: 50px;
    height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    @media (min-width: 750px) {
      width: auto;
    }
  }
`;
const AddCommentContainer = styled.div`
  border-top: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: gray;
  > div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  > div > form > input {
    border: 0px;
    font-size: 15px;
    flex: 1;
    :focus {
      outline: none;
    }
  }
  > div > form > button {
    display: none;
    cursor: pointer;
  }
`;
