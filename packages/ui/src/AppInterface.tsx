import { queryClient, AppProps, AppPropsContext } from "@mde/client";
import { QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./AppRouter";

const AppInterface = (props: AppProps) => {
  return (
    <AppPropsContext.Provider value={props}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </AppPropsContext.Provider>
  );
};

export default AppInterface;
