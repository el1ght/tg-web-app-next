'use client'

import {useState, useEffect} from "react";
import WebApp from "@twa-dev/sdk";

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

  useEffect(() => {
    if (window.Telegram?.WebApp && typeof window !== 'undefined'){
      WebApp.ready();

      if (WebApp.initDataUnsafe.user as UserData) {
        setUserData(WebApp.initDataUnsafe.user as UserData)
      }
    }

  }, []);

  console.log(userData)

  return (
    <main className={"p-1 h-[100vh] relative"}>
      {
        userData ?
            (
                <div className="flex flex-col gap-1 h-[100%]">
                  <div className="p-2 flex w-full bg-neutral-600 rounded-3xl justify-between items-center flex-none">
                    <div className={`main-button`}>

                    </div>
                    <div>
                      Logo
                    </div>
                    <div>
                      Search
                    </div>
                  </div>

                  <div className="w-full bg-neutral-400 rounded-3xl p-5 grow">
                    <h1>Username: {userData.username}</h1>
                  </div>
                </div>
            ) :
            (
                <div>
                  Loading...
                </div>
            )
      }
    </main>
  );
}
