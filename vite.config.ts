import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(() => {
    return {
        plugins: [vue(), vueDevTools()],
    }
})