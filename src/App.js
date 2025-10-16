"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
var Navigation_1 = require("./components/Navigation");
var HeroSlider_1 = require("./components/HeroSlider");
var Services_1 = require("./components/Services");
var Story_1 = require("./components/Story");
var ConnectBanner_1 = require("./components/ConnectBanner");
var Gallery_1 = require("./components/Gallery");
var Footer_1 = require("./components/Footer");
var aos_1 = require("aos");
require("aos/dist/aos.css");
function App() {
    return (<div className="min-h-screen bg-[#faf6f3]" id="home">
      <aos_1.default.init />
      <Navigation_1.Navigation />
      <HeroSlider_1.HeroSlider />
      <Services_1.Services />
      <Story_1.Story />
      <ConnectBanner_1.ConnectBanner />
      <Gallery_1.Gallery />
      <Footer_1.Footer />
    </div>);
}
