const github = require('github');

module.exports = {
    function getMergeRequests(repo) {
        if (!repo) return 0;
        const prs = github.getRepo(repo).pullRequests.size;
        if prs > 0 ? return prs : return 0;
    }
}
