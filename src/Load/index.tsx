import React from "react";

import { ActivityIndicator } from 'react-native'

export function Load() {
    return (
        <ActivityIndicator
            color="#148FCB"
            size="large"
            style={{flex: 1, marginTop: 200}}
        />
    )
}