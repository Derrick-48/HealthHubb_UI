import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const ProfileScreen = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user.profileImage }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.phone}>{user.phone}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton , {marginTop: 240,}]}>
          <Text style={[styles.actionText, { color: 'red'}]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "#555",
  },
  phone: {
    fontSize: 16,
    color: "#555",
  },
  actionsContainer: {
    marginTop: 20,
  },
  actionButton: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    alignItems: "center",
  },
  actionText: {
    fontSize: 18,
    color: "#007aff",
  },
});
