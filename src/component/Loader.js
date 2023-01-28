import styles from "./Loader.module.css";
import React, { useContext } from 'react'
import Lottie from "react-lottie";
import { AuthContext } from "../context/AuthContext";
import Loading from "../assests/loading.json"
export default function Loader({ text }) {
    const { loading } = useContext(AuthContext);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Loading,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return loading && (
        <div>
              <Lottie 
	    options={defaultOptions}
        height={200}
        width={200}
      />
        </div>
    )
}
