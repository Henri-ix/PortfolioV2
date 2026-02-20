import type { project } from "@/components/Types";
import img from '../../assets/images/Facial-Recognition.png'


export const FacialRecog:project = {
    title:"Facial Recognition",
    imageURl:img,
    desc : "My personal facial recognition system. uses cosine similarity on the picture of my face and compares it to any face in the scene, if more than 80% similar, flags as me. (Someone who looks a lot like me could probably bypass this)",
}