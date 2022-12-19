import { atom, useAtom } from "jotai";

const textAtom = atom("hello");
const textLenAtom = atom((get) => get(textAtom).length);
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

const [text, setText] = useAtom(textAtom);

const [len] = useAtom(textLenAtom);

const [uppercase] = useAtom(uppercaseAtom);

export { text, setText, len, uppercase };
