#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# clear and re-create the out directory
rm -rf site || exit 0;
mkdir site;

# build site
bash makesite.sh

# go to the site directory and create a *new* git repo
cd site

# fix absolute links
OLD='/static/'
NEW='./static/'
sed -i 's/$OLD/$NEW/g' index.html

git init

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "stodyshev@gmail.com"

# The first and only commit to this new git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add .
git commit -m "Auto-deploy of site"

# Force push from the current repo's master branch to the remote
# repo's master branch. (All previous history on the master branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
# git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" > /dev/null 2>&1
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}"
