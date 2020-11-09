import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'

const Profile = ({ profile }) => {
    return (
        <ScrollView style={styles.profileBlock}>
            <View style={styles.tableBlock}>

                <Text style={styles.textHead}>ID</Text>
                <Text style={styles.text}>{profile.user.id}</Text>
                <View style={styles.separator} />

                <Text style={styles.textHead}>Name</Text>
                <Text style={styles.text}>{profile.user.full_name}</Text>
                <View style={styles.separator} />

                <Text style={styles.textHead}>Email</Text>
                <Text style={styles.text}>{profile.user.email}</Text>
                <View style={styles.separator} />

                <Text style={styles.textHead}>Login</Text>
                <Text style={styles.text}>{profile.user.login}</Text>
                <View style={styles.separator} />

                <Text style={styles.textHead}>Phone</Text>
                <Text style={styles.text}>{profile.user.phone}</Text>
                <View style={styles.separator} />

                <Text style={styles.textHead}>Created at</Text>
                <Text style={styles.text}>{profile.user.created_at}</Text>
                <View style={styles.separator} />

                <Text style={styles.textHead}>Updated at</Text>
                <Text style={styles.text}>{profile.user.updated_at}</Text>
                <View style={styles.separator} />

                <Text style={styles.textHead}>Last request at</Text>
                <Text style={styles.text}>{profile.user.last_request_at}</Text>
                <View style={styles.separator} />

            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    profileBlock: {
        backgroundColor: '#16202A'
    },

    textHead: {
        color: '#E68639',
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 5,
        fontSize: 16,
        fontWeight: '600'
    },

    separator: {
        backgroundColor: '#E68639',
        height: 2,
        borderRadius: 20
    },

    text: {
        textAlign: 'center',
        color: '#FEFFFF',
        paddingTop: 5,
        paddingBottom: 15,
        fontSize: 14,
        fontWeight: '500'
    },

    tableBlock: {
        marginVertical: 20,
        marginHorizontal: 10
    }
});

export default Profile