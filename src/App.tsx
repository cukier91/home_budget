import React from 'react';
import { useQueryClientConfig } from './config/react-query-client';
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { queryClient } = useQueryClientConfig();
  return (
     <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools position="top-right" initialIsOpen={false} />
        )}
        {/* routing */}
        <ToastContainer
          position="top-right"
          limit={3}
          autoClose={3000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </QueryClientProvider>
  );
}

export default App;
