import { createContext } from "react";

const DarkModeContext = createContext();

export function DarkModeFunction() {
  return <DarkModeContext.Provider value={true} />;
}
