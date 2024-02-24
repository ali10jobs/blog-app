"use client"
import { useState, useEffect } from "react"
import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const layout = ({ children }) => {
    let appState = {
        lang: "english",
        darkMode: false,
    }
    if (typeof window !== "undefined") {
        appState = JSON.parse(localStorage.getItem("app")) || appState
    }
    const [darkMode, setDarkMode] = useState(appState.darkMode)
    const [lang, setLang] = useState(appState.lang)
    useEffect(() => {
        const body = document.getElementById("body")
        if (darkMode) {
            body.classList.add("dark")
        } else {
            body.classList.remove("dark")
        }
    }, [darkMode])

    const syncLang = (lang) => {
        setLang(lang)
        appState.lang = lang
        window.localStorage.setItem("app", JSON.stringify(appState))
    }

    const syncDarkMode = (mode) => {
        setDarkMode(mode)
        appState.darkMode = mode
        window.localStorage.setItem("app", JSON.stringify(appState))
    }

    return (
        <div>
            <Navbar
                darkMode={darkMode}
                setDarkMode={syncDarkMode}
                lang={lang}
                setLang={syncLang}
            />
            {children}
            <Footer />
        </div>
    )
}

export default layout
