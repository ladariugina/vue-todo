import axios from 'axios'
import { Octokit } from '@octokit/rest'

const octokit = new Octokit();

const state = {
    isLoadingUser: true,
    isLoadingRepo: true,
    isErrorUser: false,
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

    ABOUT_FETCH_REPO({ commit }) {
        return new Promise((resolve, reject) => {
            octokit.repos.listForUser({
                username: 'ladariugina'
            })
            .then(response => {
                commit('ABOUT_SET_REPO', response.data)
                resolve(response)
            })
            .catch(error => {
                commit('ABOUT_ERROR_REPO')
                reject(error)
            })
        })
    }
}

const mutations = {
    ABOUT_SET_USER(state, userData) {
        state.userData = userData
        state.isLoadingUser = !state.isLoadingUser
    },
    ABOUT_ERROR_USER(state) {
        state.isErrorUser = !state.isErrorUser
    },
    
    ABOUT_SET_REPO(state, repoList) {
        state.repoList = repoList
        state.isLoadingRepo = !state.isLoadingRepo
    },
    ABOUT_ERROR_REPO(state) {
        console.log('ERROR')
        state.isErrorRepo = !state.isErrorRepo
    },
}
  
export default {
    state,
    getters,
    actions,
    mutations,
}