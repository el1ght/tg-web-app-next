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
    if (window.Telegram?.WebApp){
      WebApp.ready();

      if (WebApp.initDataUnsafe.user as UserData) {
        setUserData(WebApp.initDataUnsafe.user as UserData)
      }
    }

  }, []);

  return (
    <main className={"p-4"}>
      {
        userData ?
            (
                <>
                  <h1 className="text-2xl font-bold mb-4">User Data</h1>
                  <ul>
                    <li>ID: {userData.id}</li>
                    <li>First Name: {userData.first_name}</li>
                    <li>Username: {userData.username}</li>
                  </ul>
                </>
            ) :
            (
                <div>Loading...</div>
            )
      }
    </main>
  );
}
