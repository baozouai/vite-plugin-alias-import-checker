<script lang="ts" setup>
import { constValue } from '@common/const'
import { useCommon } from '@common/utils'
import { useMounted } from './hooks';
import Demo from './components/demo.vue'
import Log1 from './components/log1.vue'

const isMounted = useMounted()

useCommon()
</script>

<template>
  <h1>app.vue constValue: {{ constValue }}</h1>
  <h2>app.vue mounted: {{ isMounted }}</h2>
  <br/> 
  <demo /> 
  <log1 /> 
</template>

