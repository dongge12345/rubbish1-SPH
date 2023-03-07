import {getList} from '@/api'
const state = {
    detailMsg:{}
}
const mutations = {
    async GETDETAILSMSG(state,data){
        let result = await getList(data)
        state.detailMsg = result.data
    }
}
const actions = {
    getDetailsMsg(context,data){
        context.commit('GETDETAILSMSG',data)
    }
}

export default {
    state,
    mutations,
    actions
}