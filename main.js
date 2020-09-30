const { getMergeRequests } = require('./core/util');
const { currentRepo } = require('github');

function complete() {
    return "Hacktoberfest 2020 completed!
}

function hacktoberfest() {
    const prs = getMergeRequests(currentRepo);
    if (prs > 4) {
        complete();
    }
}
