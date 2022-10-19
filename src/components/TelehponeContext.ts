import { createContext } from "react";

interface TelephoneContextStructure {
  telePhoneNumber: number[];
  call: boolean;
  addNumber: (pressKey: number) => void;
  deleteNumber: () => void;
}

const TelephoneContext = createContext<TelephoneContextStructure>(
  {} as TelephoneContextStructure
);

export default TelephoneContext;
