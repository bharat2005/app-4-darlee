import { View, Text, Dimensions, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import ChatModal from "./ChatModal";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const ChatTopBar = () => {
    const [visible, setVisible] = useState(false);


  return (
    <View
      style={{
        height: 40,
        width: Dimensions.get("screen").width,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Chats</Text>

 
 <TouchableOpacity onPress={()=> setVisible(true)} style={{height:'75%', width:30, borderRadius:6, borderWidth:2, borderColor:'gray', justifyContent:'center', alignItems:'center', position:'absolute', right:0, marginHorizontal:18}}>
  <Ionicons name="information-sharp" size={24} color="gray" />
 </TouchableOpacity>


        <Modal
        visible={visible}
        backdropColor={1}
        animationType='fade'
        >
            <ChatModal setVisible={setVisible} />
        </Modal>

   


    </View>
  );
};

export default ChatTopBar;
