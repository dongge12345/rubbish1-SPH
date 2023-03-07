import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
import home from './home'
import header from './header'
import listContainer from './listContainer'
import { getBaseCategoryList } from "@/api"
import search from './search'
import floor from './floor'
const state = {
    categoryList:[]
}
const mutations = {
    CHANGECATEGORYLIST(state,list){
        state.categoryList = list
    }
}
const actions = {
    async changeCategoryList(context){
        let list = await getBaseCategoryList()
        context.commit('CHANGECATEGORYLIST',list)
    }
}

let store =  new Vuex.Store({
    state,
    mutations,
    actions,
    modules:{
        home,
        header,
        listContainer,
        floor,
        search
    }
})
export {
    Vue,
    store
}
