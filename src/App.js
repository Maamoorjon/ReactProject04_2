import Component from "./components/Component";
import Profile from "./components/Profile";

export default function App() {
  const profile = [
    { name: "Ma'murjon", age: 43, country: "Uzbekistan", color: "" },
    { name: "Kumie", age: 72, country: "Japan", color: "red" }
  ];
  return (
    <>
      <Component
        title="Childrenとは"
        children={[
          <Profile key={profile[0].name} {...profile[0]} />,
          <Profile key={profile[1].name} {...profile[1]} />
        ]}
      ></Component>
    </>
  );
}
