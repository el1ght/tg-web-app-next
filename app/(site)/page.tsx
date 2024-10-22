'use client'

import {useState, useEffect} from "react";
import WebApp from "@twa-dev/sdk";
import ContentHeader from "@/components/ContentHeader";
import LikedWidget from "@/components/LikedWidget";
import Image from "next/image";
import {twMerge} from "tailwind-merge";
import ListItem from "@/components/ListItem";
import {FaPlay} from "react-icons/fa";
import VerticalWidget from "@/components/VerticalWidget";

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
      <div className={'h-full'}>
        <ContentHeader>
            {
              userData ?
                  (

                       <div className="h-full">
                         <div className="mb-2">
                           <h1 className="text-black text-xl font-semibold">
                             Welcome Home, {userData.first_name}
                           </h1>
                         </div>

                         <div className="grid grid-rows-8 grid-cols-5 md:grid-rows-10 md:grid-cols-10 gap-2 h-full">
                           <LikedWidget href={'liked'} name={'Liked Songs'} className="bg-[#424242] row-span-2 col-span-5 md:row-span-2 md:col-span-full rounded-3xl overflow-hidden" />

                           <div className={'row-span-2 col-span-3 md:row-span-2 md:col-span-full relative'}>
                             <ListItem href={'top-charts'} name={'Top Charts'} className={twMerge(`h-full w-full rounded-3xl bg-1`, "top-left")} />
                             <div className={'absolute right-0.5 bottom-0.5 rounded-full p-2'}>
                               <FaPlay size={14} className={'text-black'} />
                             </div>
                           </div>

                           <div className="bg-[#424242] row-span-6 col-span-2 md:row-span-2 md:col-span-full rounded-3xl bg-4">
                             <VerticalWidget name={'YOU'} href={'you-may-like'} className={'h-full w-full'} />
                           </div>

                           <div className={'row-span-2 col-span-3 md:row-span-2 md:col-span-full relative'}>
                             <ListItem href={'world-top'} name={'World Top'} className={twMerge(`h-full w-full rounded-3xl bg-2`, "top-left")} />
                             <div className={'absolute right-0.5 bottom-0.5 rounded-full p-2'}>
                               <FaPlay size={14} className={'text-black'} />
                             </div>
                           </div>

                           <div className={'row-span-2 col-span-3 md:row-span-2 md:col-span-full relative'}>
                             <ListItem href={'week-hot'} name={'Week Hot'} className={twMerge(`h-full w-full rounded-3xl bg-3`, "top-left")} />
                             <div className={'absolute right-0.5 bottom-0.5 rounded-full p-2'}>
                               <FaPlay size={14} className={'text-black'} />
                             </div>
                           </div>


                         </div>
                       </div>
                  ) :
                  (
                       <div>
                         Loading...

                       </div>
                  )
            }
        </ContentHeader>
        <div className={'min-h-[290px] relative bg-neutral-800 mt-10 px-12'}>
          <p className={'font-medium text-neutral-400 pt-14 text-lg'}>Sorry, but...</p>
          <p className={'ml-5 font-medium text-neutral-400'}>That&apos;s all</p>

          <Image className={'absolute bottom-2 right-0'} src={'./images/footerSpade.svg'} alt={'bg-image'} width={120} height={120} />
        </div>
      </div>
  );
}
