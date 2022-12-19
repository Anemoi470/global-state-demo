import React from "react";
import { Provider, atom, useAtom } from "jotai";
import NoDeps from "./NoDeps";

const textAtom = atom("hello");
const textLenAtom = atom((get) => get(textAtom).length);
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

const Input = () => {
    const [text, setText] = useAtom(textAtom);
    return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

function CharCount() {
    const [len] = useAtom(textLenAtom);
    return <div>Length: {len}</div>;
}

const Uppercase = () => {
    const [uppercase] = useAtom(uppercaseAtom);
    return <div>Uppercase: {uppercase}</div>;
};

interface IFiver {
    userName: string;
}

interface IFiverState {
    isActive: boolean;
}

class Fiver extends React.Component<IFiver, IFiverState> {
    constructor(props: IFiver) {
        super(props);

        this.state = {
            isActive: false
        };
    }

    public componentDidMount() {
        const [uppercase] = useAtom(uppercaseAtom);
    }

    render() {
        return (
            <div>{`Hi ${this.props.userName} you are ${this.state.isActive} member `}</div>
        );
    }
}

const MyText = () => {
    return (
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A omnis repellat veniam architecto odio obcaecati ratione amet quis</p>
            <NoDeps />
            <Fiver userName="Makaemba" />
        </div>
    );
};

const JotaiApp = () => {

    // Add Atom set here 
    //  const [, setText] = useAtom(textAtom);


    return (
        <Provider>
            <Input />
            <CharCount />
            <Uppercase />
            <MyText />
        </Provider>
    )
};

export default JotaiApp;
