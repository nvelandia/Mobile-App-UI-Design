import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#A6D5DF',
        justifyContent: 'space-between'
    },
    title: {
        color: '#fff',
        marginBottom: 10,
        fontSize: 16
    },
    header: {
        marginTop: 100,
        alignItems: 'center'
    },
    footer: {
        alignItems:  'center',
        marginBottom: 65
    },
    //Login
    containerLogin: {
        flex: 1, backgroundColor: '#A6D5DF',
        justifyContent: 'space-between',
        padding: 30
    },
    titleLogin: {
        color: '#fff',
        fontSize: 30
    },
    subtitle: {
        color: '#fff',
        marginBottom: 10,
        fontSize: 18
    },
    textLogin: {
        color: '#fff',
        fontSize: 14
    },
    headerLogin: {
        marginTop: 100,

    },
    footerLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 65,
        alignItems: 'center',
    },
    hr: {
        borderColor: '#fff',
        borderLeftWidth: 1,
        height: 40,
        marginHorizontal: 15,
    },
    input: {
        color: '#fff',
        fontSize: 14,
        backgroundColor: '#6DA7B2',
        borderRadius: 20,
        width: '100%',
        paddingLeft: 30,
        height: 40,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        paddingLeft: 0,
        backgroundColor: '#fff',
    },
    btnText: {
        fontWeight: '600',
        color: '#6DA7B2'
    }
})