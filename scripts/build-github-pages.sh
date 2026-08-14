#!/usr/bin/env bash
set -euo pipefail

rm -rf dist
mkdir -p dist/images

cp docs/index.html dist/index.html
cp docs/styles.css dist/styles.css
cp public/favicon.svg dist/favicon.svg
cp public/images/stafford-bajiko-portrait.png dist/images/stafford-bajiko-portrait.png

# Prevent GitHub Pages from applying a Jekyll build to this static artifact.
touch dist/.nojekyll
