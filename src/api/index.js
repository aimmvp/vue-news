import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

const api = {
    news: `${config.baseUrl}news/1.json`,
    ask: `${config.baseUrl}ask/1.json`,
    jobs: `${config.baseUrl}jobs/1.json`,
    user: `${config.baseUrl}user/`,
    item: `${config.baseUrl}item/`,
};
function fetchNewsList() {
    return axios.get(api.news);
}

function fetchAskList() {
    return axios.get(api.ask);
}

function fetchJobsList() {
    return axios.get(api.jobs);
}

function fetchList(type) {
    // console.log(pageName)
    const url = `${config.baseUrl}${type}/1.json`;
    return axios.get(url);
}

function fetchUserInfo(username) {
    const url = `${api.user}${username}.json`;
    return axios.get(url);
}

function fetchItemInfo(itemid) {
    const url = `${config.baseUrl}item/${itemid}.json`;
    return axios.get(url);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchItemInfo,
}