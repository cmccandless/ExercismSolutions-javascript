#!/bin/bash -e
# Run in exercise directory by exutil

exercise="$(basename $(pwd))"
# if [ -z "$exercise" ]; then
#     echo 'Error: must provide exercise'
#     exit 1
# fi
echo 'npm install'
npm install
eslint --init
echo "Creating $exercise.js..."
touch "$exercise.js"
