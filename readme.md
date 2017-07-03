# Chowdown

Hey folks!

My name's Clark and you've just stumbled into **Chowdown***, a plain text recipe
database for hackers. Over the years, I've tried dozens of recipe appsand 
services in an attempt to eat better and get more organized. With each app came
a new format and <em>recipe lock-in</em>, neither of which got me excited.

**Chowdown** is my attempt at fixing recipe app burnout, by moving my recipes 
out of closed services and into plain text. For example, here's [a recipe in 
plain text][1] that I've been working on for a while. It's a broccoli beer 
cheese soup inspired by Gourmand's, one of my favorite spots in Austin. Crazy 
delicious.

[Here's that same recipe processed with **Chowdown**.][2] It's a simple layout
with a photo, ingredient list, and directions.

The magic comes behind-the-scenes, with [recipe microdata via schema.org][3].
This process adds special tags around each bit of content, which is what let's 
other apps (list coming soon) read your recipes. Data portability!

**Chowdown** is definitely a work in progress. Active development is taking 
place. I'm new to Jekyll. Things might break. The recipes, however, are here 
to stay.
  
Go cook something rad,
    Clark
    [@clarklab][4]

[1]:https://raw.githubusercontent.com/clarklab/chowdown/gh-pages/_recipes/broccoli-cheese-soup.md
[2]:http://chowdown.io/recipes/broccoli-cheese-soup.html
[3]:http://schema.org/Recipe
[4]:http://twitter.com/clarklab

# Installing

This project uses the bundler gem to install all the dependicies.
Run 'bundler install' to get all the dependicies.

# TODO
- fix dependicies
