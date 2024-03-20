<template>
  <q-card clickable class="card">
    <q-card-section class="card-body">
      <q-avatar class="avatar">
        <img
          src="https://cdn.quasar.dev/img/boy-avatar.png"
          alt="User Avatar"
        />
      </q-avatar>

      <div class="user-info">
        <h3 class="user-name">
          {{ user.fname }}
        </h3>
        <p class="user-email">{{ user.email }}</p>
        <ul class="user-details">
          <li v-if="user.email">
            <q-icon name="phone" color="primary" />
            <span>{{ user.email }}</span>
          </li>
          <li v-if="user.points">
            <q-icon name="location_on" color="primary" />
            <span>{{ user.points }}</span>
          </li>
        </ul>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { User } from 'src/models/UserInterface';

defineProps<{
  user: User;
}>();

</script>

<style lang="css" scoped>
.card {
  margin-bottom: 10px;
  width: 100%;
}
.card-body {
  display: flex;
  align-items: center;
}

.avatar {
  float: left;
  margin-right: 15px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.user-name {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.user-email {
  margin: 5px 0;
  font-size: 14px;
  color: #888;
}

.user-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.user-details li {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
</style>
