import { Stack } from "expo-router";
import AuthContextProvider from "../src/contexts/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaperProvider } from "react-native-paper";
import { MenuProvider } from "react-native-popup-menu";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message";
import CustomeToast from "../src/components/Shared/CustomeToast";

const client = new QueryClient();

export default function RootLayout() {
  return (
    <PaperProvider>
      <QueryClientProvider client={client}>
        <AuthContextProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <MenuProvider>
                <Stack screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="index" />
                  <Stack.Screen name="(auth)" />
                  <Stack.Screen name="(main)" />
                  <Stack.Screen name="profileBuild" />
                  <Stack.Screen name="cardScreen" />
                  <Stack.Screen
                    name="periodCalenderScreen"
                    options={{ animation: "slide_from_bottom" }}
                  />
                  <Stack.Screen name="profileScreen" />
                  <Stack.Screen name="profileDetail" />
                  <Stack.Screen name="settingsScreen" />
                </Stack>
                <Toast
                  config={{
                    my_custome_toaste: (props) => <CustomeToast {...props} />,
                  }}
                />
              </MenuProvider>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </AuthContextProvider>
      </QueryClientProvider>
    </PaperProvider>
  );
}
