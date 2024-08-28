import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider , createBrowserRouter } from "react-router-dom"
import './index.css'
import HomePage from "./routes/homepage/HomePage"
import DashboardLayout from './layouts/dashboardlayout/DashboardLayout'
import RootLayout from './layouts/rootlayout/RootLayout'
import SignInPage from './routes/signinpage/SignInPgae'
import SignUpPage from './routes/signuppage/SignUpPage'
import ChatPage from './routes/chatpage/ChatPage'
import DashboardPage from './routes/dashboardpage/DashboardPage'


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
