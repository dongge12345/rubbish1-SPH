import {getBanner} from '@/api'
const state = {
    pictures:[]
}
const mutations = {
    async GETPICTURES(state){
        let result = await getBanner()
        state.pictures = result.data
    }
}

export default {
    state,
    mutations
}