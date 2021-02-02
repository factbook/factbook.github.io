# World Factbook Country Profiles in "Chrome-Less" HTML

What's the World Factbook?

The World Factbook [1][2] published by the Central Intelligence Agency (CIA)
offers free country profiles in the public domain (that is, no copyright(s), no rights reserved).

- [1] [The World Factbook](https://www.cia.gov/the-world-factbook/)
- [2] [Wikipedia Article: The World Factbook](http://en.wikipedia.org/wiki/The_World_Factbook)


Note: This repo stores "chrome-less" copies of the official online "live" pages
(and not copies of the pages included in the archive for bulk download, for example).
Since the offical pages have a lot of chrome e.g. page decoration such as site
navigation headers, footers, scripts, etc. around the "core" country profile
a script cleans up the profile page and strips it down to the basics.

Using these "core" country profile pages without any extra headers, footers, scripts, etc.
should make it easier to keep track of changes and turn it into structured data (e.g. factbook.json)
even as some formatting and styles get rearranged on the official site.


## "Live" Browsing

See [`factbook.github.io`](http://factbook.github.io) for "live" browsing all
country profiles stored in the `_profiles/` folder.


## Format(ting) Notes


### Structure

#### Sections

Sections use `h2`'s. Examples:

``` html
<h2>Introduction</h2>        <!-- starts the section Introduction -->
...
<h2>Geography</h2>           <!-- starts the section Geography -->
...
<h2>People and Society</h2>
...
<h2>Government</h2>
...
```

#### Subsections

Subsections (fields) use `h3`'s. Examples:

``` html
<h3>Background:</h3> <!-- starts the subsection Background -->
...
<h3>Location:</h3>   <!-- starts the subsection Location -->
...
<h3>Geographic coordinates:</h3>
...
<h3>Map references:</h3>
...
<h3>Area:</h3>
...
```


#### Data Entries

Simple:

``` html
<div class=category_data>Central Europe, north of Italy and Slovenia</div>
...
<div class=category_data>1.46 children born/woman (2015 est.)</div>
```

Simple (with Note):

``` html
<div class=category_data>69.6%</div>
<div><span class=category>note: </span>
     <span class=category_data>percent of women aged 18-46 (2008/09)</span></div>
```

"Nested":

``` html
<div><span class=category>total population: </span>
     <span class=category_data>81.39 years</span></div>
<div><span class=category>male: </span>
     <span class=category_data>78.76 years</span></div>
<div><span class=category>female: </span>
     <span class=category_data>84.15 years (2015 est.)</span></div>
```




#### Cleanup

Note: All (style) classes get stripped except:

- `category`
- `category_data`

All country comparison links get stripped.
All field reference links and images get stripped.
The audio player (for the national anthem) gets stripped.


## Questions? Comments?

Send them along to the [Open World Database (world.db) and Friends Forum/Mailing List](http://groups.google.com/group/openmundi).
Thanks!
