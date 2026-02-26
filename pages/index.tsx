import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Page()
{
    
return (
    <View style={styles.container}>
        <View style={styles.iconesTop}>
            <Feather name="share-2" size={22} color="#2f81f7" />
            <Feather name="settings" size={22} color="#2f81f7" />
        </View>
        
        <Text style={styles.nome}>Jair Joinhas Júnior</Text>
        <Text style={styles.username}>jairjr09</Text>

        <View style={styles.statusView}>
            <Feather name="smile" size={16} color="#8b949e" />
            <Text style={styles.statusTexto}> Definir seu status</Text>
        </View>

        <Text style={styles.bio}>
            SaBÔR Desenvolvedor Fullstack - C# | Java | React | React Native | TypeScript
        </Text>

        <View style={styles.row}>
            <Feather name="briefcase" size={18} color="#8b949e" />
            <Text style={styles.infos}> saBÔR Empregado</Text>
        </View>

        <View style={styles.row}>
            <Feather name="link" size={18} color="#8b949e" />
            <Text style={styles.infos}> https://www.jjjdev.com.br/</Text>
        </View>

        <View style={styles.row}>
            <Feather name="mail" size={18} color="#8b949e" />
            <Text style={styles.infos}> juniorjoinhasjair@gmail.com</Text>
        </View>

        <View style={styles.row}>
            <Feather name="linkedin" size={18} color="#8b949e" />
            <Text style={styles.infos}> jairjoinhasjr</Text>
        </View>

        <View style={styles.row}>
            <Feather name="instagram" size={18} color="#8b949e" />
            <Text style={styles.infos}> jairjoinhas.jr</Text>
        </View>

        <View style={styles.seguidoresContainer}>
            <View style={styles.row}>
                <Feather name="users" size={18} color="#8b949e" />
                <Text style={styles.seguidores}> 18.575 seguidores</Text>
            </View>


            <View style={styles.row}>
                <Feather name="user-plus" size={18} color="#8b949e" />
                <Text style={styles.seguidores}> 515 seguindo</Text>
            </View>
        </View>

    </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0d1117",
        padding: 20,
    },

    iconesTop: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 30,
        gap: 20,
    },

    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "#30363d",
        marginTop: 20,
    },

    nome: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#e6edf3",
        marginTop: 15,
    },

    username: {
        fontSize: 16,
        color: "#8b949e",
        marginBottom: 10,
    },

    bio: {
        fontSize: 14,
        color: "#e6edf3",
        marginBottom: 12,
    },

    statusView: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#30363d",
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 16,
        width: "100%",
    },

    statusTexto: {
        fontSize: 14,
        color: "#8b949e",
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
    },

    infos: {
        fontSize: 14,
        color: "#e6edf3",
    },

    seguidoresContainer: {
        flexDirection: "row",
        gap: 20,
        marginTop: 12,
    },

    seguidores: {
        fontSize: 14,
        color: "#e6edf3",
    },
});