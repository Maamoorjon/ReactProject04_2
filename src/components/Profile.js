import "./Profile.css";

const Profile = ({ name, age, country, color }) => {
  return (
    <div className={`profile ${color}`}>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>From: {country}</h3>
    </div>
  );
};

export default Profile;
