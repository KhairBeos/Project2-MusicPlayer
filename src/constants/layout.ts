import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors } from './tokens'
import { Platform } from 'react-native'

const iosConfig: NativeStackNavigationOptions = {
    headerLargeTitle: true,
    headerLargeStyle: {
        backgroundColor: colors.background,
    },
    headerLargeTitleStyle: {
        color: colors.text,
    },
    headerTintColor: colors.text,
    headerTransparent: true,
    headerBlurEffect: 'prominent',
    headerShadowVisible: false,
}

const defaultConfig: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: colors.background, 
    },
    headerTintColor: colors.text,
    headerTitleStyle: {
        color: colors.text,
    },
}

export const StackScreenWithSearchBar: NativeStackNavigationOptions = Platform.select({
    ios: iosConfig,
    default: defaultConfig, 
})