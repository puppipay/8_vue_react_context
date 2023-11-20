
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Contextapp() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={[user, setUser]}>
      <h1>{`Component-1 sets the context ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  //const [user, setUser] = useContext(UserContext);
  const [user] = useContext(UserContext);

  return (
    <>
      <h1>{`Component 2 - reads context ${user}`}</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const [user, setUser] = useContext(UserContext);


  return (
    <>
      <h1>Component 3</h1>
      <button onClick={() => setUser('ranga')}>Component 3 updates context </button>
      <h1>{`Component 3 - updated context ${user}`}</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      <h1>Component 4</h1>
      <h1>{`Component  -  context ${user}`}</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  //const user = useContext(UserContext);
  const [user, setUser] = useContext(UserContext);

  //setUser("ramesh");
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Contextapp;

