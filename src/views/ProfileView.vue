<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <span class="headline">{{ isEditing ? 'Edit Profile' : 'Profile Information' }}</span>
              <v-spacer></v-spacer>
              <v-btn icon @click="toggleEdit">
                <v-icon>{{ isEditing ? 'mdi-close' : 'mdi-pencil' }}</v-icon>
              </v-btn>

            </v-card-title>
            <v-card-text>
              <v-form v-if="isEditing">
                <!-- Text fields for editing -->
                <v-text-field label="Full Name" v-model="editableUser.name"></v-text-field>
                <v-text-field label="Email" v-model="editableUser.email"></v-text-field>
                <v-text-field label="Login" v-model="editableUser.login"></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="editableUser.password"
                  type="password"
                ></v-text-field>
                <v-btn color="success" class="text-primary" @click="saveChanges">Save</v-btn>
              </v-form>
              <v-list v-else>
                <!-- Text display for viewing -->
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Full Name</v-list-item-title>
                    <v-list-item-subtitle>{{ user.name }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Email</v-list-item-title>
                    <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Login</v-list-item-title>
                    <v-list-item-subtitle>{{ user.login }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
<script lang="ts">
import { defineComponent } from "vue";
import UserData from '@/components/Profile/UserDataInterface';
import { useTheme } from 'vuetify'

export default defineComponent({
    data() {
    return {
      isEditing: false,
      user: {
        full_name: 'John Doe',
        email: 'john.doe@example.com',
        login: 'johnnyd',
        password: 'password123', 
        user_type: 'admin'
      } as UserData,
      editableUser: {} as UserData
    };
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;

      if (this.isEditing) {
        // Copy user data to editableUser when entering edit mode
        this.editableUser = { ...this.user };
      }
    },
    saveChanges() {
      // Save changes made to editableUser back to user
      this.user = { ...this.editableUser };
      this.isEditing = false;
      // Here, you would also send the updated data to your backend
    },
  },
})
  </script>
  