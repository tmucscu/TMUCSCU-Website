import { createContext } from "react";

const WidthContext = createContext<number>(window.innerWidth);

export default WidthContext;