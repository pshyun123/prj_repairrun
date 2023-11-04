import { createContext, useState, useEffect } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  // const [userId, setUserId] = useState("");
  // const [password, setPassword] = useState("");

  window.localStorage.setItem("isMember", "true");
  window.localStorage.setItem("isPartner", "false");

  const [isMember, setMemberStatus] = useState(
    localStorage.getItem("isMember")
  );
  const [isPartner, setPartnerStatus] = useState(
    localStorage.getItem("isPartner")
  );

  useEffect(() => {
    localStorage.setItem("isMember", isMember);
    localStorage.setItem("isPartner", isPartner);
  }, [isMember, isPartner]);

  return (
    <UserContext.Provider
      value={{
        isMember,
        isPartner,
        setMemberStatus,
        setPartnerStatus,
        // userId,
        // setUserId,
        // password,
        // setPassword,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserStore;
