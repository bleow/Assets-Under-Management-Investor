import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";

export default function ProfileCard(res) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = [
    {
      userId: "123",
      comId: "123",
      fullName: "Lily Johnson",
      userProfile: "",
      text: "I need some suggestions for my portfolio...",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: [],
    },
  ];

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-3">
                  <MDBCardImage
                    src={res.res.profileImage}
                    className="rounded-circle"
                    fluid
                    style={{ width: "100px" }}
                  />
                </div>
                <MDBTypography tag="h4">
                  {res.res.firstName} {res.res.lastName}
                </MDBTypography>
                <MDBCardText className="text-muted mb-3">
                  Investment Banker <span className="mx-2">|</span>{" "}
                  <a href="#!">{res.res.email}</a>
                </MDBCardText>
                <div className="d-flex justify-content-between text-center mt-3 mb-3">
                  <div>
                    <MDBCardText className="mb-1 h5">
                      {res.res.stockChoice}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Recommended Stock
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">
                      {res.res.followers}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Followers
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">
                      {res.res.manages.length}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Clients
                    </MDBCardText>
                  </div>
                </div>
                <hr />
                <MDBBtn onClick={handleOpen} rounded size="lg">
                  Profile
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <MDBContainer className="container py-5 h-1000">
              <MDBCard>
                <MDBCardBody>
                  <MDBRow className="justify-content-center align-items-center">
                    <MDBCol md="4">
                      <MDBCardImage
                        src={res.res.profileImage}
                        className="rounded-circle"
                        fluid
                        style={{ width: "300px" }}
                      ></MDBCardImage>
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCol>
                        <MDBRow md="12">
                          <MDBTypography tag="h3" md="12" className="mt-3">
                            {res.res.firstName} {res.res.lastName}
                          </MDBTypography>
                        </MDBRow>
                        <MDBRow md="12">
                          <MDBCardText className="text-muted-3 mb-1" md="12">
                            Investment Banker <span className="mx-2">|</span>{" "}
                            <a href="#!">{res.res.email}</a>
                          </MDBCardText>
                        </MDBRow>
                        <MDBRow md="12">
                          <MDBCardText className="text-muted-3 mb-5" md="12">
                            Experience: 10 Years
                          </MDBCardText>
                        </MDBRow>
                        <MDBRow md="12">
                          <MDBCardText
                            className="text-muted font-italic"
                            md="12"
                          >
                            "Wealth is not a sprint, but rather a marathon."
                          </MDBCardText>
                        </MDBRow>
                      </MDBCol>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow className="justify-content-center align-items-center">
                    <MDBCol md="4">
                      <MDBCard
                        style={{
                          borderRadius: "15px",
                          overflow: "hidden",
                          width: 250,
                          height: 400,
                        }}
                      >
                        <video autoPlay loop muted>
                          <source
                            src="https://assets.mixkit.co/videos/preview/mixkit-man-runs-past-ground-level-shot-32809-large.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="8">
                      <CommentSection
                        currentUser={{
                          currentUserId: "234",
                          currentUserImg: res.res.profileImage,
                          currentUserProfile: " ",
                          currentUserFullName:
                            res.res.firstName + " " + res.res.lastName,
                        }}
                        logIn={{
                          loginLink: "http://localhost:3001/",
                          signupLink: "http://localhost:3001/",
                        }}
                        commentData={data}
                        onSubmitAction={(data) =>
                          console.log("check submit, ", data)
                        }
                        currentData={(data) => {
                          console.log("current data", data);
                        }}
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </Fade>
        </Modal>
      </MDBContainer>
    </div>
  );
}
