import { StyleSheet, Text, TouchableOpacity } from "react-native"


export const ActionButton = () => {

    return(
        <TouchableOpacity style={styles.actButton}>
                  <Text style={styles.buttonText}>Entrega</Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    actButton: {
        width: 150,
        height:50,
        padding: 10,
        marginTop:16,
        position: 'absolute',
        right: 28,
        backgroundColor: '#FF0F00',
        borderRadius:10,
        alignItems: 'center',

    },
    buttonText:{
        fontSize: 20,
        color: '#ffff'
    }
});