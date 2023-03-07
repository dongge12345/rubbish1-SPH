import {getFloor} from '@/api'
const state = {
    floorMsg:[]
}
const mutations = {
    async GETFLOORMSG(state){
        let result = await getFloor()
        state.floorMsg = result.data
    }
}

export default {
    state,
    mutations
}