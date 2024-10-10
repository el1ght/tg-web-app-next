'use client'

import {useState, useEffect} from "react";
import WebApp from "@twa-dev/sdk";
import Image from "next/image";
import logo from "@/app/public/logo.svg";

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
    <main className={"p-1 h-[100vh] relative"}>
      {
        userData ?
            (
                <div className="flex flex-col gap-1 h-[100%]">
                  <div className="p-2 flex w-full bg-[#424242]/[.55] rounded-3xl justify-between items-center flex-none">
                    <div className={'button-default'}>

                    </div>
                    <div>
                      <Image src={logo} alt={"Logo"} width={30} height={30} />
                    </div>
                    <div className={"button-default"}>

                    </div>
                  </div>

                  <main className="w-full bg-white rounded-3xl p-5 grow shadow">
                    <div className="content">
                      <h1>Username: {userData.username}</h1>
                      <p>Hash: {hash}</p>
                    </div>

                  </main>
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
