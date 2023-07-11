# DnDnDashboard

## What is this for?

The idea with this project started from me using Roll20 to play Dungeons and Dragons with some friends. The character sheet interface on there is not that bad, however I found myself wanting to have a whole _workspace_ where I could take notes during a campaign, as well as quickly see my stats and update them as needed.

<br />

## Priority Overhaul

I have decided that I want to do a bit of an overhaul.
1. Start implementing typescript
  - Doesn't need to be everything, but for things like components it will be extrememly useful
  - I don't necessarily plan to make it as strict as possible either, I will try my best but this will be my first time using TS so I will take it slow
3. Implement Radix UI
  - Pretty much all components shold be based on Radix. This shouldn't be too difficult and wil make for better practices throughout the app 

This will be very different (for the better) becuase using typescript will make the dx much better for making my components and their 'configuration' as I think it will allow me to more or less get rid of my `ConfigMap` element. As well, Radix UI will give me good experience for using UI libraries and ensuring accessibility for my app. 

It will be a fair amount of work but I think it is worth it (if only for learning experience even) and needs to be done ASAP.

<br />

## High Level Roadmap

- Learn how to use ~~`react-beautiful-dnd`~~ ~~`react-grid-layout`~~ `react-dnd-kit` to make draggable and droppable components
- Make custom components
  - `#Future` Maybe make it so the player can customize their own components?
- Make front end pretty
- Database :
  - Going to start with autosave to Locale Storage and manual file import/export
  - Go SQL Lite so I can ship it all as an Electron app?
  - Need to think of way to share data between devices
  - Could have everything work off of one DB that I host?

<br />

## Feature Wishlist

<input type="checkbox"> Customizable colors</input><br>
<input type="checkbox" checked> Edit existing cards</input><br>
<input type="checkbox" checked> Auto Save to Local Storage</input><br>
<input type="checkbox" checked> Export/Import Save</input><br>
<input type="checkbox"> Export/Import `txt` Save File (maybe `.dash` or something?)</input><br>
<input type="checkbox"> Drag Mode Toggle _This is needed_ (buttons wont work on cards if dragging is enabled)</input><br>
<input type="checkbox" checked> Edit Mode Toggle</input><br>
<input type="checkbox"> Custom Card Presets</input><br>
<input type="checkbox"> Custom Card Component</input><br>
<input type="checkbox"> Resizeable Cards</input><br>

## Components

<input type="checkbox" checked> Alert </input><br>
<input type="checkbox"> Cards</input>

- <input type="checkbox" checked> Ability Score</input>
- <input type="checkbox"> Ability Score Group</input>
- <input type="checkbox"> Skill</input>
- <input type="checkbox"> Skill Group</input>
- <input type="checkbox" checked> Armor Class</input>
- <input type="checkbox" checked> Health Points</input>
- <input type="checkbox" checked> Initiative</input>
- <input type="checkbox"> Proficiency Bonus</input>
- <input type="checkbox"> Hit Dice</input>
- <input type="checkbox"> Death Saves</input>
- <input type="checkbox"> Short Rest</input>
- <input type="checkbox"> Long Rest</input>
- <input type="checkbox"> Passive Wisdom</input>
- <input type="checkbox"> Player Details (partially done)</input>
- <input type="checkbox" checked> Player Name</input>
- <input type="checkbox"> Spell</input>
- <input type="checkbox"> Spell Group</input>
- <input type="checkbox"> Item</input>
- <input type="checkbox"> Item Group</input>
- <input type="checkbox"> Quickbar</input>
- <input type="checkbox"> Enemy Note</input>
- <input type="checkbox"> Enemy Graveyard</input>

## Wait, is someone other than me reading this?

Hey there! I am very much a beginner in React and I am not looking for suggestions, critiques, or collaborators at this time. Please feel free to take a look around though!
