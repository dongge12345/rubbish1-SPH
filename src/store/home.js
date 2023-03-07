const state = {
    count:100
}
const mutations = {
    COUNTADD(state,n){
        state.count += n
    }
}
const actions = {
    countAdd1(context){
        context.commit('COUNTADD',1)
    }
}

export default {
    state,
    mutations,
    actions
}