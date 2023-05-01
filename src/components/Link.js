import React, { useCallback } from "react";
import { Alert, Pressable, Linking } from "react-native";
import { FlexInline, SVGContainer, Paragraph } from "../../style";
import { View } from "react-native";

const Link = ({ url, children, icon, color }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Invalid URL: ${url}`);
    }
  }, [url]);

  return (
    <Pressable onPress={handlePress}>
      <FlexInline>
        {icon ? (
          <View style={{ marginRight: 10 }}>
            <SVGContainer width={18} height={18} viewBox="0 0 18 18">
              {icon}
            </SVGContainer>
          </View>
        ) : null}
        <Paragraph color={color}>{children}</Paragraph>
      </FlexInline>
    </Pressable>
  );
};

export default Link;
