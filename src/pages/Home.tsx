import React from "react"
import MainLayout from "../layouts/MainLayout"
import Sidebar from "../components/Sidebar"
import ProtectedRoutes from "../components/ProtectedRouters"
import AuthOverlay from "../components/AuthOverlay"

function Home() {
    return (
        <MainLayout>
            <div
                style={{
                    position: "absolute",
                }}
            >

               <AuthOverlay />
                    <Sidebar />
                    <>Home</>
            </div>


        </MainLayout>
    )
}

export default Home