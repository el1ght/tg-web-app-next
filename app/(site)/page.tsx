'use client'

import {useState, useEffect} from "react";
import WebApp from "@twa-dev/sdk";
import ContentHeader from "@/components/ContentHeader";
import ListItem from "@/components/ListItem";
// import Image from "next/image";

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

                       <div className="h-full">
                         <div className="mb-2">
                           <h1 className="text-white text-xl font-semibold">
                             Welcome Home, {userData.first_name}
                           </h1>
                         </div>

                         <div className="grid grid-rows-8 grid-cols-5 md:grid-rows-10 md:grid-cols-10 gap-2 h-full">
                           <ListItem className="bg-[#424242] row-span-2 col-span-5 md:row-span-2 md:col-span-full rounded-3xl" />
                           <div className="bg-[#424242] row-span-2 col-span-3 md:row-span-2 md:col-span-full rounded-3xl"></div>
                           <div className="bg-[#424242] row-span-6 col-span-2 md:row-span-2 md:col-span-full rounded-3xl"></div>
                           <div className="bg-[#424242] row-span-2 col-span-3 md:row-span-2 md:col-span-full rounded-3xl"></div>
                           <div className="bg-[#424242] row-span-2 col-span-3 md:row-span-2 md:col-span-full rounded-3xl"></div>
                         </div>
                       </div>
                  ) :
                  (
                       <div className={'h-full'}>
                         Loading...
                         <div className="grid grid-rows-8 grid-cols-5 md:grid-rows-10 md:grid-cols-10 gap-2 h-full">
                           <ListItem href={'liked'} name={'Liked Songs'} image={'/images/favBg.jpg'} classname="bg-[#424242] row-span-2 col-span-5 md:row-span-2 md:col-span-full rounded-3xl overflow-hidden" />
                           <div className="bg-[#424242] row-span-2 col-span-3 md:row-span-2 md:col-span-full rounded-3xl"></div>
                           <div className="bg-[#424242] row-span-6 col-span-2 md:row-span-2 md:col-span-full rounded-3xl"></div>
                           <div className="bg-[#424242] row-span-2 col-span-3 md:row-span-2 md:col-span-full rounded-3xl"></div>
                           <div className="bg-[#424242] row-span-2 col-span-3 md:row-span-2 md:col-span-full rounded-3xl"></div>
                         </div>
                       </div>
                  )
            }
        </ContentHeader>
      </>
  );
}
