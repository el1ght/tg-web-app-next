'use client'

import {useEffect, useState} from "react";
// import dynamic from "next/dynamic";
// const dynamicWebApp = dynamic(() => import('@twa-dev/sdk'), {
//   ssr: false,
// })
import dynamicWebApp from "@twa-dev/sdk";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(() => {
    if(typeof window !== "undefined"){
      return null
    }
  })



  useEffect(() => {

    if(typeof window !== "undefined"){
      if (dynamicWebApp.initDataUnsafe.user as UserData) {
        setUserData(dynamicWebApp.initDataUnsafe.user as UserData)
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
                    <li>Last Name: {userData.last_name}</li>
                    <li>Username: {userData.username}</li>
                    <li>Language Code: {userData.language_code}</li>
                    <li>Is premium: {userData.is_premium}</li>
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
