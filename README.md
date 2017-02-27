# kaomoji-maker

Create many types of kaomoji using an interactive CLI application run by Node.js.

* [x] Interactive CLI powered by [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/).
* [x] ES6 usage making heavy use of Promises

## But what is a kaomoji?

Kaomoji is a kind of emoticon. According to [Wikipedia](https://en.wikipedia.org/wiki/Emoticon#/media/File:Emoticon_Smile_Face.svg):

> An emoticon (ee-moht-i-kon), (/ᵻˈmoʊtᵻkɒn/, or /iˈmoʊtᵻkɒn/) is a pictorial representation of a facial expression using punctuation marks, numbers and letters, usually written to express a person's feelings or mood.

> In Western countries, emoticons are usually written at a right angle to the direction of the text. Users from Japan popularized a kind of emoticon called kaomoji (顔文字; lit. 顔(kao)=face, 文字(moji)=character(s); often confused with emoji in the West) that can be understood without tilting one's head to the left.

Also referred to as  dongers, text faces, emojicons, emotes or similar.

## Install

Install it through npm globally so it can be executed from anywhere in your terminal:

```
npm install -g kaomoji-maker
```

It also can be installed as a local module, or just cloning this repository and executing bin/kaomoji-maker through Node.js:

```
git clone https://github.com/antonvs2/kaomoji-maker.git
cd kaomoji-maker
npm install
node bin/kaomoji-maker
```

## Functionality

> Create kaomoji

Create a kaomoji choosing part by part

> Copy saved kaomoji

Check your saved list and copy to clipboard.

> Remove kaomoji

Remove multiple kaomoji from saved list.

> Exit

Exit CLI.

## Contribution

Pull requests with new parts (under `lib/parts`) are welcome. Of course, PR or issues with new functionality and bug fixes are more than welcome too.
