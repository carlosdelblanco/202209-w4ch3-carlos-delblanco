import { createContext } from "react";

interface TelephoneContextStructure {
  number: string;
  isCalling: boolean;
}

const TelephoneContext = createContext<TelephoneContextStructure>(
  {} as TelephoneContextStructure
);

export default TelephoneContext;
