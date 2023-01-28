import styles from "./Loader.module.css";
import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext";
export default function Loader({ text }) {
    const { loading } = useContext(AuthContext);
    return true && (
        <div style={{zIndex:1}} className="absolute">
            garv
        </div>
    )
}
