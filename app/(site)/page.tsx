'use client'

import {useState} from "react";

// import WebApp from "@twa-dev/sdk";

// interface UserData {
//   id: number;
//   first_name: string;
//   last_name?: string;
//   username?: string;
//   language_code: string;
//   is_premium?: boolean;
// }

export default function Home() {
  // const [userData, setUserData] = useState<UserData | null>(null)
  const [initState, setInitState] = useState(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined"){
  //     WebApp.ready();
  //
  //     if (WebApp.initDataUnsafe.user as UserData) {
  //       setUserData(WebApp.initDataUnsafe.user as UserData)
  //     }
  //   }
  //
  // }, []);

  try {
    let initData, telegramId, username, telegramName;

    if (typeof window !== 'undefined') {
      const WebApp = (import('@twa-dev/sdk'));
      WebApp.ready();
      initData = WebApp.initData;
      telegramId = WebApp.initDataUnsafe.user?.id.toString();
      username = WebApp.initDataUnsafe.user?.username || 'Unknown User';
      telegramName = WebApp.initDataUnsafe.user?.first_name || 'Unknown User';

      // startParam = WebApp.initDataUnsafe.start_param;
    }

    const initialState = {
      userTelegramInitData: initData,
      userTelegramName: telegramName,
      userTelegramId: telegramId,
      userTelegramUsername: username
    }

    console.log("initial state: ", initialState);

    setInitState(initialState);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }

  return (
    <main className={"p-4"}>
      {
        initState ?
            (
                <>
                  <h1 className="text-2xl font-bold mb-4">User Data</h1>
                  <ul>
                    <li>ID: {initState.userTelegramId}</li>
                    <li>First Name: {initState.userTelegramName}</li>
                    <li>Username: {initState.userTelegramUsername}</li>
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
