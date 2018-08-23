# Chowdown

A simple, plaintext recipe database for hackers

[http://clarklab.github.io/chowdown](http://clarklab.github.io/chowdown)

# Getting Started

This is a Jekyll build. Make sure you have Jekyll [installed](https://jekyllrb.com/). To install:

```gem install bundler jekyll```

or to check if you've got it installed already:

```jekyll -v```

Clone or download this repo. Once inside, run:

```jekyll serve```

With default settings, you should be able to view the site locally at `http://127.0.0.1:4000/`

# Writing a Recipe

The recipes are stored in the collection "Recipes" (the folder /_recipes).

They are written in Markdown and contain a few special sections:

- The frontmatter, which contains:
- - Title, Image, and Layout (which is "recipe")
- - Ingredients (a list of things in the dish)
- - Directions (a list of steps for the dish)
- Body content (for intros, stories, written detail)