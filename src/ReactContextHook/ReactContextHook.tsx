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


export default ReactContextApp = () => {


    return (
        <InputContext.Provider>
            <Input />
            <CharCount />
            <Uppercase />
            <MyText />
        </InputContext.Provider>
    )
}