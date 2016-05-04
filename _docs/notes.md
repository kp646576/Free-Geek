### Key Value Pairs
##### Does not work
##
```
{{ site.data.highlight[surl[idx]] }}
```
##### Works
##
```
{% assign ex = surl[idx] %}
{{ site.data.highlight[ex] }}
```
#### Scraping last valid part of route  
```
{% assign surl = page.url | remove_first: ".html" | split: "/" %}
{% assign idx = surl | size | minus: 1 %}
{{ surl[idx] }}
```

#### Must have data-magellan-expedition exposed at top level, breaks when wrapped in a div
##
```
<div style="position: fixed;" data-magellan-expedition="fixed">
    <ul class="horizontal menu expanded" id="render-here">
        <li data-magellan-arrival="first"><a href="#first">First Arrival</a></li>
        <li data-magellan-arrival="second"><a href="#second">Second Arrival</a></li>
        <li data-magellan-arrival="third"><a href="#third">Third Arrival</a></li>-->
    </ul>
</div>
<div class="sections">
    <section id="first" data-magellan-destination="first">First Section</section>
    <section id="second" data-magellan-destination="second">Second Section</section>
    <section id="third" data-magellan-destination="third">Third Section</section>
</div>
```

#### Internship Descriptions Template
```
<div id="volunteer" class="section volunteer purple" data-magellan-destination="volunteer">
    <div class="row">
        <h2>Title</h2>
    </div>
    <div class="row">
        <div class="large-6 columns">
        <h3>About</h3>
        </div>
        <div class="large-6 columns">
        </div>
    </div>
</div>
```