if [ "$TRAVIS_BRANCH" != "dev" ]; then
    exit 0;
fi
export GIT_COMMITTER_EMAIL="emashmagak@appslab.co.ke"
export GIT_COMMITTER_NAME="ManuEl Geek"
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit
git stash
git checkout master || exit
git merge --no-ff "$TRAVIS_COMMIT" || exit
git push https://"${GITHUB_TOKEN}"@github.com/manuelgeek/vue_travis_ci.git
