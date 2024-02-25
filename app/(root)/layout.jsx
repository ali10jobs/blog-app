"use client"
import { useState, useEffect } from "react"
import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const layout = ({ children }) => {
    let initialLang = "english"
    let initialMode = false
    const [darkMode, setDarkMode] = useState(initialLang)
    const [lang, setLang] = useState(initialMode)

    useEffect(() => {
        async function syncStateFromStorage() {
            if (typeof window !== "undefined" && window.localStorage) {
                initialLang =
                    JSON.parse(window.localStorage.getItem("app.lang")) ||
                    initialLang
                initialMode =
                    JSON.parse(window.localStorage.getItem("app.mode")) ||
                    initialMode
            }
            syncLang(initialLang)
            syncDarkMode(initialMode)
        }

        syncStateFromStorage()
    }, [])

    const saveToLocalStorage = (key, value) => {
        if (typeof window !== "undefined" && window.localStorage) {
            window.localStorage.setItem(key, JSON.stringify(value))
        }
    }

    const syncLang = (lang) => {
        setLang(lang)
        saveToLocalStorage("app.lang", lang)
    }

    const syncDarkMode = (mode) => {
        let handlerName = mode ? "add" : "remove"
        setDarkMode(mode)
        saveToLocalStorage("app.mode", mode)
        document.body.classList[handlerName]("dark")
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
