import Typography from "typography";
import doelgerTheme from "typography-theme-doelger"
import './typography.module.css'

doelgerTheme.headerFontFamily = [
    'Graphik-Medium'
]

doelgerTheme.bodyFontFamily = [
    'ProximaReg'
]

doelgerTheme.baseFontSize = '16px'

doelgerTheme.headerWeight = 'normal'

const typography = new Typography(doelgerTheme)

export default typography;
