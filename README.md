![Lyricfier Screenshot](screenshot.png?raw=true "Lyricfier Screenshot")

Lyricfier is an electron app that communicates  with Spotify Desktop Client to get the current song and then looks for a matching lyric scraping the web.

## Download pre-release

Go to [Lyricfier releases page](https://github.com/emilioastarita/lyricfier/releases) and download the zip file for your platform.


## Development setup

```
# clone the repo
git clone https://github.com/emilioastarita/lyricfier.git

# change dir
cd lyricfier

# take some coffee and download all the internet with yarn
yarn install

```

## Run dev

```
yarn start
```



## Known platform limitations

### Mac OS
 - fetching album cover does is not supported

## Scraping plugins

You can easily write a new scraping plugin. Just look at the folder `render/plugins` for some inspiration.




## Collaborators

Original Idea: [@fedeisas](https://github.com/fedeisas)

Bug fixes and lot of improvements [@mrkmndz](https://github.com/mrkmndz)

UI/Design: [@silvestreh](https://github.com/silvestreh)

#### License [CC0 (Public Domain)](LICENSE.md)
