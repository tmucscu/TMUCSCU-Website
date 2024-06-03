import { createContext } from "react";
import { doesWindowExist } from "../utils";

const WidthContext = createContext<number>(doesWindowExist ? window.innerWidth: 1920);

export default WidthContext;