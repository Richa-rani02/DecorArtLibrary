import { ProtectedRoutes } from "./ProtectedRoutes";
import { Routes, Route,Navigate } from "react-router-dom";
import Mockman from "mockman-js";
import {useAuth} from "../context/auth-context";
import { Home, Explore, Login, WatchLater, VideoPage, History, Liked, Playlists, Playlistvideo, Error404 } from "../Pages/index";
export const AllRoutes = () => {
    const {authState:{token}}=useAuth();
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={token?<Navigate to="/explore" replace/>:<Login/>} />
            <Route path="/mock" element={<Mockman />} />
            <Route path="/watchlater" element={
                <ProtectedRoutes>
                    <WatchLater />
                </ProtectedRoutes>} />

            <Route path="/video/:videoId" element={
                <ProtectedRoutes>
                    <VideoPage />
                </ProtectedRoutes>
            } />
            <Route path="/history" element={
                <ProtectedRoutes>
                    <History />
                </ProtectedRoutes>
            } />
            <Route path="/liked" element={
                <ProtectedRoutes>
                    <Liked />
                </ProtectedRoutes>
            } />
            <Route path="/playlist" element={
                <ProtectedRoutes>
                    <Playlists />
                </ProtectedRoutes>
            } />
            <Route path="/playlist/:playlistId" element={
                <ProtectedRoutes>
                    <Playlistvideo />
                </ProtectedRoutes>
            } />
            <Route path="/*" element={<Error404 />} />
        </Routes>
    )
}