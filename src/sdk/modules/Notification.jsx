import { toast, Slide } from "react-toastify";
export const CreateNotification=(contents)=>{
    toast(contents, {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
    });
}