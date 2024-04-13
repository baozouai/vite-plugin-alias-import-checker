import { onMounted, ref } from 'vue'

export function useMounted() {
  const isMounted = ref(false)

  onMounted(() => {
    isMounted.value = true
  })

  return isMounted
}
