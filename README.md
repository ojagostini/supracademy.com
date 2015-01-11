supracademy.github.io
=====================

SuprAcademy website

## ToDo

* Mailchimp
  * Add name + phone number if possible
  * #428bca
* Fix triangle selection to make it more clear
    - could also add arrow to text box
    - fix size so doesn't jump when selecting different images
* Get rid of box in triangle section
* Remove robots.txt after DNS changed
* Fix 3 part image sizing for mobile

How it works positioning:
* jumping with scroll a section at a time


Banner Overlay Options:

1) Cover it with banner-verlay and add some text:
"Nurturing Students' Minds One Concept at a Time
SuprAcademy provides support to grade six to twelve students with their math and science academic work."
...followed by a "Find Out More" button.

2) Cover the banner with two banner-overlay's and have the text above in one section and contact form in the other.

I wanted to play around with both and see which one makes better sense.

## Setup

If you don't have RVM installed then install it and the required ruby

```bash
\curl -sSL https://get.rvm.io | bash -s stable --ruby=2.1.2
gem install jekyll
git clone git@github.com:SuprAcademy/supracademy.github.io.git
cd supracademy.github.io
jekyll serve
```

## How This App What Built

Javascript packages are managed by http://bower.io

```bash
bower install bootstrap
bower install bootstrapValidator
bower install font-awesome
bower install animate.css
bower install animo.js
```

Added `waypoints.min.js` to `js` directory from <http://imakewebthings.com/jquery-waypoints/>


## Resources

Adobe Kuler

https://color.adobe.com/create/color-wheel/?base=2&rule=Complementary&selected=4&name=My%20Color%20Theme&mode=rgb&rgbvalues=0.11158804115705692,0.31586395274478596,0.492156862745098,0.4267326732673268,0.7344423412929988,1,0.25882352941176473,0.5450980392156862,0.792156862745098,0.492156862745098,0.32580140881511127,0.06237235488254713,0.792156862745098,0.5857210626184123,0.25882352941176473&swatchOrder=0,1,2,3,4

http://getbootstrap.com/

http://fortawesome.github.io/Font-Awesome/icons/

http://bootstrapvalidator.com/getting-started/

http://labs.bigroomstudios.com/libraries/animo-js

http://daneden.github.io/animate.css/

http://blog.webbb.be/trigger-css-animation-scroll/

http://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css

### Images

Creative Commons:

https://www.flickr.com/photos/departmentofed/9608813574
https://www.flickr.com/photos/departmentofed/9610030584
https://www.flickr.com/photos/departmentofed/9605581943

Shutterstock

http://www.shutterstock.com/pic.mhtml?id=141101554&src=lb-31592221
