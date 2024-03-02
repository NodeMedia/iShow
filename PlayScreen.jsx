import React from 'react';
import { View } from 'react-native';
import { NodePlayer } from 'react-native-nodemediaclient';

function PlayScreen({ route, navigation }) {
    const { url } = route.params;
    return (
        <NodePlayer
            style={{ flex: 1 }}
            url={url}
            autoplay={true}
            scaleMode={1}
            bufferTime={500}
        ></NodePlayer>
    )
}

export default PlayScreen;