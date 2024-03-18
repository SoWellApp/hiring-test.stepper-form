<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered padding>
        <q-item>
          <q-item-section>
            <q-item-label overline>MANAGERS</q-item-label>
            <q-item-label caption>Responsable</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption
              >{{ users.length }} pesonne{{
                users.length > 1 ? 's' : ''
              }}</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header>List d'utilisateurs</q-item-label>

        <q-item v-for="user of users" :key="user.email" clickable>
          <q-item-section top avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ user.fname }}</q-item-label>
            <q-item-label caption>{{ user.email }}</q-item-label>
          </q-item-section>

          <q-item-section side top v-if="user.points > 50">
            <q-badge label="master" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          fname: 'herifanantenana',
          email: 'fana@sowell.com',
          points: 2,
        },
        {
          fname: 'rakoto',
          email: 'koto@sowell.com',
          points: 2,
        },
        {
          fname: 'Jeni',
          email: 'jeni@sowell.com',
          points: 150,
        },
        {
          fname: 'zo',
          email: 'zo@sowell.com',
          points: 110,
        },
      ],
    };
  },
};
</script>
