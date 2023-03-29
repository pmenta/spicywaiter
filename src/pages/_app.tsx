import { type AppType } from "next/app";
import { UserProvider } from '@auth0/nextjs-auth0/client';

import { api } from "@/utils/api";

import "@/styles/globals.css";
import type { Session } from "@auth0/nextjs-auth0";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <UserProvider user={session?.user}>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default api.withTRPC(MyApp);
