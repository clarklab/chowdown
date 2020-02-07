---
---
[
  {% for post in site.recipes %}
    {
    
	    "title"    : "{{ post.title | escape }}",
      {% if post.ingredients %}"ingredients"    : "{% for ingredient in post.ingredients %}{{ ingredient | escape }}, {% endfor %}",{% endif %}
      {% if post.tags %}"tags"    : "{% for tag in post.tags %}{{ tag | escape }} {% endfor %}",{% endif %}
      "image"	   : "{{ site.baseurl }}/images/{{ post.image }}",
	    "url"      : "{{ site.baseurl }}{{ post.url }}"
      
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
]

