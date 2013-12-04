#Angular Sports Ticker Directive

##What is this?
An Angular directive that approximates a responsive (for screen sizes greater than 767px) sports news ticker (similar to a popular sports news network's "bottomline").

##Why?
This was a fun-side project I used to teach myself more about Angular and CSS animations. There are definitely some flaws and it's certainly not as polished as it could be, but I'm putting it out there anyway.

##How do I use it?

1. Include the sportsTicker.js and sportsTicker.css in your document
2. Add the "sportsTicker" module as a dependency in your Angular app
3. Add the ```<sportsticker>``` tag to your page's markup:<br/><br />
```<sportsticker feed="feed" message-delay="4000" scroll-speed-factor="6.25"></sportsticker>```<br/><br />
4. Have an Angular controller provide a JSON "feed" to the directive (see feed.json for examples of all item types)

<a href="http://paulpullen.github.io/sportsticker/">See the demo app for a complete example.</a>

##Caveats:
The ticker is hidden on mobile devices (i.e., for devices with a max-width of 767px), and performance on tablets is likely shaky at best.  I just didn't think I could provide a nice mobile experience with the limited screen real estate, and this code isn't optimized for the non-desktop experience (e.g., no hardware-acceleration on animations).  In fact, the code isn't really optimized at all.  As I stated, this was just a side-project, and should not be viewed as battle-tested, production-ready code.

I don't have any immediate plans to address these limitations, so feel free to clone and do with this what you wish, if anything.  Code is MIT licensed, so go crazy.

##Acknowledgements
- <a href="http://modernizr.com">modernizr</a>
- <a href="http://srobbin.com/jquery-plugins/backstretch/">backstretch</a>
- <a href="http://leaverou.github.io/prefixfree/">prefix-free</a>
- <a href="http://necolas.github.io/normalize.css/">normalize.css</a>
- <a href="https://github.com/ospreydawn/nfllogoredesign">very cool faux NFL logos</a>
