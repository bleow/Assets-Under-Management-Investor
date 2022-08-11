import UserProfile from "react-user-profile";
import ProfileCard from "../components/profile-card/ProfileCard";
import Overlay from "react-bootstrap/Overlay";

const Profiles = () => {
  const res = {
    firstName: "Frank",
    lastName: "Lee",
    email: "FrankLee@citi.com",
    profileImage:
      "https://st.depositphotos.com/1597387/1984/i/600/depositphotos_19841901-stock-photo-asian-young-business-man-close.jpg",
    stockChoice: "Apple",
    followers: 20,
    manages: ["test", "this"],
  };
  const photo =
    "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg";
  const userName = "Harvey Specter";
  const location = "New York, USA";

  const comments = [
    {
      id: "1",
      photo:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      userName: "Mike Ross",
      content:
        "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ",
      createdAt: 1543858000000,
    },
  ];

  return (
    <div style={{ margin: "0 auto", width: "100%" }}>
      {/* <UserProfile
        photo={photo}
        userName={userName}
        location={location}
        initialLikesCount={121}
        initialFollowingCount={723}
        initialFollowersCount={4433}
        initialComments={comments}
      /> */}
      <div className="row">
        <ProfileCard class="col" res={res}></ProfileCard>
      </div>
    </div>
  );
};

export default Profiles;
