import { createContext } from "react";

interface TelephoneContextStructure {
  message: string;
}

const TelephoneContext = createContext<TelephoneContextStructure>(
  {} as TelephoneContextStructure
);

export default TelephoneContext;
