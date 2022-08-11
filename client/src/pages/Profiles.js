import UserProfile from "react-user-profile";

const Profiles = () => {
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
      <UserProfile
        photo={photo}
        userName={userName}
        location={location}
        initialLikesCount={121}
        initialFollowingCount={723}
        initialFollowersCount={4433}
        initialComments={comments}
      />
    </div>
  );
};

export default Profiles;
