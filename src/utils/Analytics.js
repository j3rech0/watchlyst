import {
  createClient,
  AnalyticsProvider,
} from "@segment/analytics-react-native";
import { SEGMENT_KEY } from "@env";

export default function Analytics(props) {
  const segmentClient = createClient({
    writeKey: SEGMENT_KEY,
    trackAppLifecycleEvents: true,
  });
  segmentClient.screen(props.segmentClient);
  return (
    <AnalyticsProvider client={segmentClient}>
      {props?.children}
    </AnalyticsProvider>
  );
}
