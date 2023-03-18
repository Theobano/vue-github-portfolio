import { ref, onMounted, onUnmounted } from 'vue'

export default function useWindowSize() {
    const fontSize = parseFloat(
        getComputedStyle(
            document.querySelector('html')
            )['font-size']
            )
            const windowWidth = ref(window.innerWidth/fontSize)
            const windowHeight = ref(window.innerHeight/fontSize)
    
    const onResize = () => {
        windowWidth.value = window.innerWidth/fontSize
        windowHeight.value = window.innerHeight/fontSize
    }
    
    onMounted(() => {
        window.addEventListener('resize', onResize)
    })
    
    onUnmounted(() => {
        window.removeEventListener('resize', onResize)
    })
    
    return { windowWidth, windowHeight }
    }