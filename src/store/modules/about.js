import axios from 'axios'
import { Octokit } from '@octokit/rest'

const octokit = new Octokit();

const state = {
    isPreloader: true,
    isLoadedData: false,
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
              commit('STOP_PRELOADER')
              resolve(response)
            })
            .catch(error => {
              commit('STOP_PRELOADER')  
              commit('ABOUT_ERROR_USER')
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
        state.isLoadedData = true
    },
    ABOUT_ERROR_USER(state) {
        state.isErrorUser = true
    },
    

    ABOUT_SET_REPO(state, repoList) {
        state.repoList = repoList
    },
    ABOUT_ERROR_REPO(state) {
        state.isErrorRepo = true
    },

    STOP_PRELOADER(state) {
        state.isPreloader = false
      },
}
  
export default {
    state,
    getters,
    actions,
    mutations,
}