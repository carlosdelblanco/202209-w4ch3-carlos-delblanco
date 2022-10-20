import { useState } from "react";
import TelephoneContext from "./TelephoneContext";

interface TelephoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const TelephoneContextProvider = ({
  children,
}: TelephoneContextProviderProps): JSX.Element => {
  const [number] = useState("");
  const [isCalling] = useState(false);

  return (
    <TelephoneContext.Provider value={{ number, isCalling }}>
      {children}
    </TelephoneContext.Provider>
  );
};

export default TelephoneContextProvider;
