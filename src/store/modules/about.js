import axios from 'axios'

const state = {
    isLoadingUser: true,
    isErrorUser: false,
    isLoadingRepo: true,
    isErrorRepo: false,
    repoList: [],
    userData: [],
}

const getters = {}

const actions = {
    ABOUT_FETCH_USER({ commit }) {
        return new Promise((resolve, reject) => {
          axios
            .get('https://api.github.com/users/ladariugina')
            .then(response => {
              commit('ABOUT_SET_USER', response.data)
              resolve(response)
            })
            .catch(error => {
              commit('ABOUT_SET_USER')
              reject(error)
            })
        })
    },
    // ABOUT_FETCH_REPO({ commit }) {
    //     return new Promise((resolve, reject) => {
    //       axios
    //         .get('https://api.github.com/search/repositories')
    //         .then(response => {
    //           commit('ABOUT_SET_REPO', response.data)
    //           resolve(response)
    //         })
    //         .catch(error => {
    //           commit('ABOUT_ERROR_REPO')
    //           reject(error)
    //         })
    //     })
    // },
}

const mutations = {
    ABOUT_SET_USER(state, userData) {
        state.userData = userData
        state.isLoadingUser = !state.isLoadingUser
    },
    ABOUT_ERROR_USER(state) {
        state.isErrorUser = !state.isErrorUser
    },
    // https://octokit.github.io/rest.js/v17
    
    // ABOUT_SET_REPO(state, repoList) {
    //     state.repoList = repoList
    //     console.log(repoList)
    //     state.isLoadingRepo = !state.isLoadingRepo
    // },
    // ABOUT_ERROR_REPO(state) {
    //     console.log('ERROR')
    //     state.isErrorRepo = !state.isErrorRepo
    // },
}
  
export default {
    state,
    getters,
    actions,
    mutations,
}