import React from 'react';
import {
    Button,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

function HomeScreen({ navigation }) {
    const [playUrl, onChangePlayUrl] = React.useState('rtmp://live.server.name/live/stream');
    const [publishUrl, onChangePublishUrl] = React.useState('rtmp://live.server.name/live/stream');

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={[styles.input, styles.sectionContainer]}
                value={playUrl}
                onChangeText={onChangePlayUrl}
            />
            <Button title='Start Play'
                onPress={() => {
                    navigation.navigate('Live Play', {
                        url: playUrl
                    })
                }}
            />
            <TextInput
                style={[styles.input, styles.sectionContainer]}
                value={publishUrl}
                onChangeText={onChangePublishUrl}
            />
            <Button title='Start Publish'
                onPress={() => {
                    navigation.navigate('Live Publish', {
                        url: publishUrl
                    })
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 36,
        fontWeight: '700',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});


export default HomeScreen;