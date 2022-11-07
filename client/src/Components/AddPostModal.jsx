import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { FcGallery } from "react-icons/fc";

import { useDispatch, useSelector } from "react-redux";
import { addPostsHandler } from "../Redux/AppReducer/actions";

export default function AddPostModal({ isOpen, onClose, onOpen }) {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.authReducer.name);
  const [caption, setCaption] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const modalContentRef = useRef();

  const uploadPost = async () => {
    const formData = new FormData();
    formData.append("photo", filePickerRef.current.files[0]);
    formData.append("caption", caption);
    formData.append("userName", name);

    dispatch(addPostsHandler(formData)).then((r) => {
      onClose();
    });
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalContentWrapper ref={modalContentRef}>
              <ContentContainer>
                {selectedFile ? (
                  <img
                    src={selectedFile}
                    alt=""
                    style={{
                      objectFit: "contain",
                      cursor: "pointer",
                      maxHeight: 200,
                      width: "100%",
                      borderRadius: 5,
                    }}
                  />
                ) : (
                  <FcGallery
                    size={100}
                    cursor="pointer"
                    onClick={() => filePickerRef.current.click()}
                  />
                )}

                {/* add photo */}
                <p
                  style={{
                    padding: 5,
                    fontSize: 20,
                    fontWeight: 800,
                    color: "rgb(38 38 38)",
                    textAlign: "center",
                    border: 0,
                  }}
                >
                  Select from Computer
                </p>
                {/* caption */}
                <input
                  placeholder="Enter caption"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  style={{
                    padding: 5,
                    color: "#4a5568",
                    textAlign: "center",
                    border: 0,
                    fontSize: 15,
                  }}
                />
                {/* hidden Input */}
                <input
                  ref={filePickerRef}
                  type="file"
                  hidden
                  onChange={addImageToPost}
                />
                {/* FINAL SUBMIT Button */}

                <Button
                  type="submit"
                  disabled={!selectedFile}
                  onClick={uploadPost}
                  colorScheme="blue"
                  className={selectedFile ? "selected" : "notSelected"}
                >
                  POST
                </Button>
              </ContentContainer>
            </ModalContentWrapper>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

const ModalContentWrapper = styled.div`
  display: flex;
  margin: auto;
  background-color: #fff;
  width: 30%;
  height: 50vh;
  min-width: 300px;
  border-radius: 10px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  > Button {
    font-weight: 600;
    width: 60%;
    padding: 10px;
    cursor: pointer;
    margin-top: 5px;
    border: none;
    border-radius: 5px;
  }
`;
