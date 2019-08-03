import Typography from "typography";
import doelgerTheme from "typography-theme-doelger"
import './typography.css'

doelgerTheme.headerFontFamily = [
    'Parkinson'
]

doelgerTheme.bodyFontFamily = [
    'ProximaReg'
]

doelgerTheme.baseFontSize = '16px'

doelgerTheme.headerWeight = 'normal'

const typography = new Typography(doelgerTheme)

export default typography;