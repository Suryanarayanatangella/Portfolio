import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        // Apply theme to document
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);
    
    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const setTheme = (theme) => {
        setIsDarkMode(theme === 'dark');
    };

    const value = {
        isDarkMode,
        toggleTheme,
        setTheme,
        currentTheme: isDarkMode ? 'dark' : 'light'
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
