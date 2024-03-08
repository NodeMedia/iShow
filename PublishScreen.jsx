import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { NodePublisher } from 'react-native-nodemediaclient';
import { FloatingAction } from "react-native-floating-action";

const actions = [
    {
        text: "Start",
        name: "bt_start",
        position: 1
    },
    {
        text: "Switch",
        name: "bt_switch",
        position: 2
    },
    {
        text: "Torch",
        name: "bt_torch",
        position: 3
    },
    {
        text: "Mute",
        name: "bt_mute",
        position: 4
    }
];

function PublishScreen({ route, navigation }) {
    const { url } = route.params;
    const [frontCamera, setFrontCamera] = useState(true);
    const [torchEnable, setTorchEnable] = useState(false);
    const [mute, setMute] = useState(false);
    const np = useRef(null);
    return (
        <View style={{ flex: 1 }}>
            <NodePublisher
                ref={np}
                style={{ flex: 1 }}
                url={url}
                audioParam={{
                    codecid: NodePublisher.NMC_CODEC_ID_AAC,
                    profile: NodePublisher.NMC_PROFILE_AUTO,
                    samplerate: 48000,
                    channels: 1,
                    bitrate: 64 * 1000,
                }}
                videoParam={{
                    codecid: NodePublisher.NMC_CODEC_ID_H264,
                    profile: NodePublisher.NMC_PROFILE_AUTO,
                    width: 720,
                    height: 1280,
                    fps: 30,
                    bitrate: 2000 * 1000,
                }}
                frontCamera={frontCamera}
                HWAccelEnable={true}
                denoiseEnable={true}
                torchEnable={torchEnable}
                keyFrameInterval={2}
                volume={mute ? 0.0 : 1.0}
                videoOrientation={NodePublisher.VIDEO_ORIENTATION_PORTRAIT}
            ></NodePublisher >
            <FloatingAction
                actions={actions}
                onPressItem={name => {
                    switch (name) {
                        case "bt_start":
                            np.current.start();
                            break;
                        case "bt_switch":
                            setFrontCamera(!frontCamera);
                            break;
                        case "bt_torch":
                            setTorchEnable(!torchEnable);
                            break;
                        case "bt_mute":
                            setMute(!mute);
                            break;
                    }
                }}
            />
        </View>

    )
}

export default PublishScreen;
