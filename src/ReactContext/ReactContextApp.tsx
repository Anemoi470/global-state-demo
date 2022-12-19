import React from "react";

const InputContext = React.createContext("")


const Input = () => {
    const { text, setText } = useContext(InputContext);
    return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

function CharCount() {
    const text = useContext(InputContext);
    return <div>Length: {text.length}</div>;
}

const Uppercase = () => {
    const text = useContext(InputContext);
    return <div>Uppercase: {text.toUpperCase()}</div>;
};
 

const ReactContextApp = () =>{

let userDefaultSettings = {};
 
    return (
        <UserProvider>
            <Input />
            <CharCount />
            <Uppercase />
            <MyText />
        </UserProvider>
    )
}

export default ReactContextApp;