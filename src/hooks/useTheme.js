import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";
const useTheme = () => {
    const theme =useContext(ThemeContext)
    return theme;
}
export default useTheme;