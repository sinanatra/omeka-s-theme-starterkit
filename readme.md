# Omeka S Theme Starterkit

This repo is my own starterkit for Omeka S projects. It works with esbuild and it allows to work with SCSS and ES6. Featuring [SCSS Starterkit](https://github.com/sinanatra/scss-starterkit).

## Requirements

+ [Node.js](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable).

## Installation

1. In Terminal, go to your production folder:
```
cd path/to/my/folder
```

2. Clone this repository with the submodules
```
git clone https://github.com/sinanatra/omeka-s-theme-starterkit NAME-OF-MY-FOLDER
cd NAME-OF-MY-FOLDER
git clone --depth=1 https://github.com/sinanatra/scss-starterkit.git src/scss
rm -rf ./src/scss/.git
```

3. Install dependencies with yarn
```
yarn
```

4. Type yarn watch now and to start coding. 