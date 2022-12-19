import Ract from "react";

export interface UserInfo {
    name: string
    type: string
}

const UserContext = React.createContext();


const UserProvider = ({ children, settings }) => {
    const [user, setUser] = React.useState<UserInfo>();

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;