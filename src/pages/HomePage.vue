<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Home Page</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <!-- {{ gifts }} -->
        <h2 v-for="gift in gifts" :key="gift.id" class="col-md-3 p-3"></h2>
        <GiftCard :gift="gift"/>
      </div>
    </div>
  </div>
</template>

<script>

import GiftCard from '../components/GiftCard.vue';
import Pop from '../utils/Pop.js';
import { giftsServices } from '../services/GiftsServices.js';
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';

export default {
    setup() {
        async function getGifts() {
            try {
                await giftsServices.getGifts();
            }
            catch (error) {
                Pop.error(error, "[Getting Gifts]");
            }
        }
        onMounted(() => {
            logger.log("HomePage Mounted");
            getGifts();
        });
        return {
            gifts: computed(() => AppState.gifts),
        };
    },
    components: { GiftCard }
}
</script>

<style scoped lang="scss">

</style>
