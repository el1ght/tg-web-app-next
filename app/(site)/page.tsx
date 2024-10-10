'use client'

import {useState, useEffect} from "react";
import WebApp from "@twa-dev/sdk";
import HomeContent from "@/components/HomeContent"

declare global {
  interface Window {
    Telegram?: {
      WebApp?: unknown
    }
  }
}

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    if (window.Telegram?.WebApp && typeof window !== 'undefined'){
      WebApp.ready();

      if (WebApp.initDataUnsafe.user as UserData) {
        setUserData(WebApp.initDataUnsafe.user as UserData)
        setHash(WebApp.initDataUnsafe.hash)
      }
    }

  }, []);

  return (
      <>
      {
        userData ?
            (
                <HomeContent>
                   <div className="content">
                     <h1>Username: {userData.username}</h1>
                     <p>Hash: {hash}</p>
                  </div>
                </HomeContent>

            ) :
            (

                  <HomeContent>
                    Loading...
                  </HomeContent>

            )
      }
      </>
  );
}
