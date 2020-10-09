# react-stateevents-practice1

# Set Up

You are now given a simple JSON API. To Run it do the following: 

1. If you haven't already, install JSON Server: `npm install json-server'

2. In your top level directory run: `json-server -w db.json`

# Deliverables

This is going to be a full scale practice of everything we've learned so far: 

1. Create a Favorite Container

2. When a User clicks the `Bark` button the Dog should bark

3. When a User clicks on a Dog's image, the dog's `favorite` key should be flipped to `true`. This should persist, meaning when you refresh the page, the dog(s) that was favorited will continue to display in the favorites container

4. When a User clicks on a Dog's image from the Favorites Container, the dog should be removed from the Favorites Container

5. A User should be able to add a new Dog to the API. This should persist

6. A User should be able to Delete a dog from the API. Implement this whichever way you feel best but it must persist

7. A User can search for a dog by name in the Index but not the Favorites


![dog gif](state-pairing-gif.gif)
