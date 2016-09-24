supracademy.github.io
=====================

SuprAcademy website

## Usage

To run Jekyll in a way that matches the GitHub Pages build server, run Jekyll with Bundler. Use the command `bundle exec jekyll serve` in the root of your repository (after switching to the gh-pages branch for project repositories), and your site should be available at http://localhost:4000

## Setup

If you don't have RVM installed then install it and the required ruby

```bash
\curl -sSL https://get.rvm.io | bash -s stable --ruby=2.1.2 # installs RVM and ruby
gem install jekyll # installs jekyll
git clone git@github.com:SuprAcademy/supracademy.github.io.git
cd supracademy.github.io
jekyll serve
```

If you want to keep your browsers in sync with file changes you can use the following.
Based on [this](http://quick.as/5g9c1jx)

Install requirements as needed:

```bash
# install XCode if you don't have it <https://itunes.apple.com/us/app/xcode/id497799835?mt=12>
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" # installs Homebrew if you don't have it
brew update
brew doctor
brew install node
npm install -g grunt-cli # installs grunt
npm install -g localtunnel # installs local tunnel (not sure this was needed in the end)
npm install # installs the packages for this project
```

Build the site and watch for file changes:

`jekyll build --watch`

In another terminal window start the server:

`jekyll serve`

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
