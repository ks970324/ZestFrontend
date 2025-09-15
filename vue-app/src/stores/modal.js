import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
    const isStartRuleOpen = ref(true)
    const isRuleOpen = ref(false)
    const isGameResultOpen = ref(false)

    function toggleRule() {
        isStartRuleOpen.value = !isStartRuleOpen.value
    }

    function checkRule() {
        isRuleOpen.value = !isRuleOpen.value
    }

    function toggleResult() {
        isGameResultOpen.value = !isGameResultOpen.value
    }

    return {
        isStartRuleOpen,
        isRuleOpen,
        isGameResultOpen,
        toggleRule,
        checkRule,
        toggleResult
    }
})
