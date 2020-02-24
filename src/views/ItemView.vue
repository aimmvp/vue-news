<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="far fa-user"></i>
        </div>
        <div class="user-description" >
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{fetchedItem.time_ago}}
          </div>
        </div>
      </div>
      <h2> {{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content">

      </div>

    </section>
<!-- 


    <p>title : {{fetchedItem.title}}</p>
    <div>content : {{fetchedItem.content}} </div> -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchedItem']),
  },

  created() {
    const itemId = this.$route.params.itemId;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
}
</script>

<style scopped>
  .user-container {
    padding: 0.5rem;
    display: flex;
    align-items: center;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-description {
    padding-left:8px;
  }
  .time {
    font-size: 0.7rem
  }

</style>