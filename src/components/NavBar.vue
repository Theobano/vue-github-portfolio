<script setup allowjs>
import { RouterLink, RouterView } from 'vue-router'

import { useGithubDataStore } from '@/stores/githubData';
import { storeToRefs } from 'pinia';

const githubData = useGithubDataStore();

const {profile} = storeToRefs(githubData)



</script>

<template>
    <div>
             <img v-if="profile" :src="profile.avatar_url" alt="avatar" height="30"/>
             <div v-else></div>
             </div>
             
</template>