import { createContext } from "react";

export interface AppProps {
  title?: string;
}

export const AppPropsContext = createContext<AppProps | null>(null);
