import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const ThemeSwitch = () => {
    const { theme, setTheme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div></div>
  )
}

export default ThemeSwitch