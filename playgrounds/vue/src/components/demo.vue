<script setup lang="ts">
import { constValue } from '@common/const'

// import { useMounted } from '../hooks';
import { useMounted } from '@hooks'
import Log1 from './log1.vue'

const isMounted = useMounted()
</script>

<template>
  <div>
    <h2>demo.vue: constValue: {{ constValue }}</h2>
    <h2>demo.vue:isMounted: {{ isMounted }}</h2>
    <Log1 />
  </div>
</template>
