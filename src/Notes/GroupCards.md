# Group Card Component

## Concept

The idea with the `Group Card` type of component is that it is it's own standalone card component that acts as a container for other cards. For example: Spell Group that contains a list of multiple spells.

## Features

### Phase I

- `#Decision` In the initial creation:
  - Allow to add multiple child cards
  - `#Chosen` Only allow one child card
- `#Decision` After it is created:
  - `#Chosen` Have an _add_ button showing at all times to create more child cards
  - Have to go into `Edit Mode` in order to add more child cards
- `#Decision` to edit existing child cards:
  - `#Chosen` Have an edit button shown at all times to choose which to edit
    - This makes the most sense I think. I imagine a pop up would show up with a dropdown of all the existing child cards and you choose which to edit
  - In edit mode you can choose which child to edit
- `#Configuration items`
  - Always show contents || Click to view contents
  - Always show contents? --> Display contents: vertical || horizontal
  - Click to view contents? --> Scrollable: vertical || horizontal
  - Container bg: \<colors\>
  - Container text: \<colors\>
  - Child bg: \<colors\>
  - Child text: \<colors\>
  - Child

### Phase II

- Allow these `Group Card` components to be draggable canvases themselves, actually using the ordering logic (_not_ the freely draggable type), not yet at least
