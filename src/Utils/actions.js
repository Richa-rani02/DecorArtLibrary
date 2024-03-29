export const dataActions = {
    LOADING: "LOADING",
    LOAD_CATEGORY: "LOAD_CATEGORY",
    LOAD_VIDEOS: "LOAD_VIDEOS",
    ERROR: "ERROR",
    FILTER_BY_CATEGORY: "FILTER_BY_CATEGORY",
    SORT_BY:"SORT_BY_DATE",
    SEARCH: "SEARCH"
}
export const authActions = {
    LOADING: "LOADING",
    ERROR: "ERROR",
    LOGOUT: "LOGOUT",
    AUTH: "AUTH",
}
export const watchActions = {
    ADD_TO_WATCHLATER: "ADD_TO_WATCHLATER",
    REMOVE_FROM_WATCHLATER: "REMOVE_FROM_WATCHLATER",
    ERROR: "ERROR"

}
export const historyActions = {
    ADD_TO_HISTORY: "ADD_TO_HISTORY",
    REMOVE_FROM_HISTORY: "REMOVE_FROM_HISTORY",
    CLEAR_ALL_HISTORY: "CLEAR_ALL_HISTORY",
    ERROR: "ERROR"

}
export const likedActions = {
    ADD_TO_LIKED: "ADD_TO_LIKED",
    REMOVE_FROM_LIKED: "REMOVE_FROM_LIKED",
    ERROR: "ERROR"

}
export const playlistActions = {
    PLAYLIST: "PLAYLIST",
    VIDEOS_TO_PLAYLIST: "VIDEOS_TO_PLAYLIST",
    ERROR: "ERROR"

}

export const notesActions={
    ADD_NOTES:"ADD_NOTES",
    DELETE_NOTES:"DELETE_NOTES",
    GET_NOTES:"GET_NOTES",
}

export const globalActions = {
    OPTION_PANEL: "OPTION_PANEL",
    PLAYLIST_MODAL: "PLAYLIST_MODAL",

}