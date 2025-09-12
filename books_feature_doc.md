To group recipes into cookbooks:

For each cookbook there needs to be an html file in the _books folder.
Example contents of a cookbook html file:

---
layout: book
title: Perfect Loaf
cover: perfect-loaf.jpg
description: How to bake the perfect loaf of bread.
covernotes: A longer covernote explaining the purpose of the book.
author: author name (as specified in _data/people.yml)
---

<p>Whatever long-ass story you want to write here</p>

To add a recipe to this example cookbook, in the recipe front matter, add:

books: [perfect-loaf]

One recipe can be part of several books.
