<template>
    <router-link :to="{name: 'gift', params: {giftId: gift.id}}">
        <img :src="gift.imgUrl" :alt="gift.name" class="img-fluid">
        <h2 class="text-light">{{ gift.name }}</h2>
    </router-link>
</template>


<script>
import { Gift } from '../models/Gift.js';

export default {
    props: {
        gift: {type: Gift, required: true}
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>