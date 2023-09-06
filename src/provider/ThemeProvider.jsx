import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null)
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('forest');
    // useEffect(() => {
    //     let storedTheme = localStorage.getItem("theme");
    //     if (!storedTheme || !(storedTheme === "dark" || storedTheme === "forest" || storedTheme === "light")) {
    //         storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    //             ? "dark"
    //             : "light";
    //     }
    //     if (storedTheme === "dark") {
    //         storedTheme = "forest";
    //     }
    //     setTheme(storedTheme);
    // }, [])
    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme(preTheme => {
                const currentTheme = preTheme === "dark" ? "light" : "dark";
                localStorage.setItem("theme", currentTheme);
                return currentTheme;
            })
        }
        else {
            setTheme(preTheme => {
                const currentTheme = preTheme === "forest" ? "light" : "forest";
                localStorage.setItem("theme", currentTheme);
                return currentTheme;
            })
        }
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;