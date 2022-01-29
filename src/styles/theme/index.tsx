 import { RFValue } from 'react-native-responsive-fontsize'


const spacing = {
    s: RFValue(12),
    m: RFValue(18),
    l: RFValue(24),
    ml: RFValue(30),
    xl: RFValue(60),
}

const colors = {
    textAlternative: '#000',
    background: '#D42026',
    text: '#D42026',
    white: '#FFF',
}

const metrics = {
    body: RFValue(16),
    title: RFValue(16),
    counter: RFValue(12),
}

const font = {
    bold: 'Roboto-Black',
    light: 'Roboto-Light',
    regular: 'Roboto-Regular',
}

export default {
    title: 'default',
    spacing,
    metrics,
    colors,
    font
}