'use client'

import {useState, useEffect} from "react";
import WebApp from "@twa-dev/sdk";
import ContentHeader from "@/components/ContentHeader";
import Image from "next/image";

declare global {
  interface Window {
    Telegram?: {
      WebApp?: any
    }
  }
}

//

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
  photo_url?: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [telegramId, setTelegramId] = useState<string | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    if (window.Telegram?.WebApp && typeof window !== 'undefined'){

      WebApp.ready();
      WebApp.expand();

      const initDataString = window.Telegram.WebApp.initData;
      if(initDataString) {
        const urlParams = new URLSearchParams(initDataString);
        try {
          const user = JSON.parse(urlParams.get('user') || '{}');
          if (user.id) {
            setTelegramId(user.id.toString());
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }

      if (WebApp.initDataUnsafe.user as UserData) {
        setUserData(WebApp.initDataUnsafe.user as UserData)
        setHash(WebApp.initDataUnsafe.hash)
      }
    }

  }, []);

  return (
      <>
        <ContentHeader>
            {
              userData ?
                  (

                       <div className="content">
                         <div className="mb-2">
                           <h1 className="text-white text-3xl font-semibold">
                             Welcome back, {userData.first_name}
                           </h1>
                         </div>

                         <h1 className={"truncate"}>Username: {userData.username}</h1>
                         <p>ID: {userData.id}</p>
                         <p>First Name: {userData.first_name}</p>
                         <p>Last Name: {userData.last_name}</p>
                         <p>Language code: {userData.language_code}</p>
                         <p>Is premium: {userData.is_premium ? 'Yes' : 'No'}</p>
                         <p className={"truncate"}>Hash: {hash}</p>

                         <div className="mb-2">
                           <h1 className="text-white text-3xl font-semibold">
                             Welcome back, {userData.first_name}
                           </h1>
                         </div>

                         <h1 className={"truncate"}>Username: {userData.username}</h1>
                         <p>ID: {userData.id}</p>
                         <p>First Name: {userData.first_name}</p>
                         <p>Last Name: {userData.last_name}</p>
                         <p>Language code: {userData.language_code}</p>
                         <p>Is premium: {userData.is_premium ? 'Yes' : 'No'}</p>
                         <p className={"truncate"}>Hash: {hash}</p>

                         <div className="mb-2">
                           <h1 className="text-white text-3xl font-semibold">
                             Welcome back, {userData.first_name}
                           </h1>
                         </div>

                         <h1 className={"truncate"}>Username: {userData.username}</h1>
                         <p>ID: {userData.id}</p>
                         <p>First Name: {userData.first_name}</p>
                         <p>Last Name: {userData.last_name}</p>
                         <p>Language code: {userData.language_code}</p>
                         <p>Is premium: {userData.is_premium ? 'Yes' : 'No'}</p>
                         <p className={"truncate"}>Hash: {hash}</p>

                         <div className="mb-2">
                           <h1 className="text-white text-3xl font-semibold">
                             Welcome back, {userData.first_name}
                           </h1>
                         </div>

                         <h1 className={"truncate"}>Username: {userData.username}</h1>
                         <p>ID: {userData.id}</p>
                         <p>First Name: {userData.first_name}</p>
                         <p>Last Name: {userData.last_name}</p>
                         <p>Language code: {userData.language_code}</p>
                         <p>Is premium: {userData.is_premium ? 'Yes' : 'No'}</p>
                         <p className={"truncate"}>Hash: {hash}</p>

                         {/*<Image src={`${userData.photo_url}`} alt={'avatar'} width={30} height={30} />*/}
                       </div>
                  ) :
                  (
                       <div>
                         Loading...
                       </div>
                  )
            }
        </ContentHeader>
      </>
  );
}
