#!/bin/bash -e

exercise="$1"
echo "init $exercise"
cd "$exercise"
npm install
touch "$exercise.js"
cd -
