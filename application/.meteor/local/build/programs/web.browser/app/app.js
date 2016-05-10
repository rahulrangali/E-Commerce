var require = meteorInstall({"client":{"main.html":["./template.main.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.html                                                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.main.js");                                                                     // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/template.main.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.body.addContent((function() {                                                                              // 2
  var view = this;                                                                                                  // 3
  return [ Spacebars.include(view.lookupTemplate("image_add_form")), "\n  \n  ", HTML.NAV({                         // 4
    "class": "navbar navbar-default navbar-fixed-top"                                                               // 5
  }, "\n    ", HTML.DIV({                                                                                           // 6
    "class": "container"                                                                                            // 7
  }, "\n      ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n    "), "\n  "), "\n  \n  ", HTML.DIV({
    "class": "container"                                                                                            // 9
  }, "\n    ", HTML.H1("Welcome to Image Share ", Blaze.View("lookup:username", function() {                        // 10
    return Spacebars.mustache(view.lookup("username"));                                                             // 11
  })), "\n    ", Spacebars.include(view.lookupTemplate("images")), "\n  ") ];                                       // 12
}));                                                                                                                // 13
Meteor.startup(Template.body.renderToDocument);                                                                     // 14
                                                                                                                    // 15
Template.__checkName("images");                                                                                     // 16
Template["images"] = new Template("Template.images", (function() {                                                  // 17
  var view = this;                                                                                                  // 18
  return [ Blaze.If(function() {                                                                                    // 19
    return Spacebars.call(view.lookup("currentUser"));                                                              // 20
  }, function() {                                                                                                   // 21
    return [ "\n    ", HTML.BUTTON({                                                                                // 22
      "class": "btn btn-success js-show-image-form"                                                                 // 23
    }, "Add Image"), "\n  " ];                                                                                      // 24
  }), "\n  \n  ", HTML.H2("\n    ", Blaze.If(function() {                                                           // 25
    return Spacebars.call(view.lookup("filtering_images"));                                                         // 26
  }, function() {                                                                                                   // 27
    return [ "\n      Showing images by user ", Blaze.View("lookup:getFilterUser", function() {                     // 28
      return Spacebars.mustache(view.lookup("getFilterUser"));                                                      // 29
    }), " ", HTML.A({                                                                                               // 30
      href: "#",                                                                                                    // 31
      "class": "js-unset-image-filter"                                                                              // 32
    }, "Show all images"), "\n    " ];                                                                              // 33
  }), "\n  "), "\n  \n  \n  ", HTML.DIV({                                                                           // 34
    "class": "row"                                                                                                  // 35
  }, "\n    ", Blaze.Each(function() {                                                                              // 36
    return Spacebars.call(view.lookup("images"));                                                                   // 37
  }, function() {                                                                                                   // 38
    return [ "\n    ", HTML.DIV({                                                                                   // 39
      "class": "col-xs-12 col-md-3",                                                                                // 40
      id: function() {                                                                                              // 41
        return Spacebars.mustache(view.lookup("_id"));                                                              // 42
      }                                                                                                             // 43
    }, "\n      ", HTML.DIV({                                                                                       // 44
      "class": "thumbnail"                                                                                          // 45
    }, "\n        \n          ", HTML.IMG({                                                                         // 46
      "class": "js-images thumbnail-img",                                                                           // 47
      src: function() {                                                                                             // 48
        return Spacebars.mustache(view.lookup("img_src"));                                                          // 49
      },                                                                                                            // 50
      alt: function() {                                                                                             // 51
        return Spacebars.mustache(view.lookup("img_alt"));                                                          // 52
      }                                                                                                             // 53
    }), "\n          \n          ", HTML.DIV({                                                                      // 54
      "class": "caption"                                                                                            // 55
    }, "\n              ", HTML.H3("Rating: ", Blaze.View("lookup:rating", function() {                             // 56
      return Spacebars.mustache(view.lookup("rating"));                                                             // 57
    })), "\n              ", HTML.P(Blaze.View("lookup:img_alt", function() {                                       // 58
      return Spacebars.mustache(view.lookup("img_alt"));                                                            // 59
    })), "\n              ", HTML.P("User: \n                ", HTML.A({                                            // 60
      href: "#",                                                                                                    // 61
      "class": "js-set-image-filter"                                                                                // 62
    }, Blaze.View("lookup:getUser", function() {                                                                    // 63
      return Spacebars.mustache(view.lookup("getUser"), view.lookup("createdBy"));                                  // 64
    })), "\n              "), "\n              \n              ", HTML.P("\n                ", Blaze._TemplateWith(function() {
      return {                                                                                                      // 66
        mutable: Spacebars.call(true),                                                                              // 67
        "class": Spacebars.call("js-rate-image"),                                                                   // 68
        id: Spacebars.call(view.lookup("_id"))                                                                      // 69
      };                                                                                                            // 70
    }, function() {                                                                                                 // 71
      return Spacebars.include(view.lookupTemplate("starsRating"));                                                 // 72
    }), "\n              "), "\n              \n              ", HTML.BUTTON({                                      // 73
      "class": "js-del-images btn btn-warning"                                                                      // 74
    }, "Delete"), "\n          "), "\n          \n       "), "\n     "), " ", HTML.Comment(" /col "), "\n    " ];   // 75
  }), "\n   "), HTML.Raw(" <!-- /row -->") ];                                                                       // 76
}));                                                                                                                // 77
                                                                                                                    // 78
Template.__checkName("image_add_form");                                                                             // 79
Template["image_add_form"] = new Template("Template.image_add_form", (function() {                                  // 80
  var view = this;                                                                                                  // 81
  return HTML.Raw('<div class="modal fade" id="image_add_form">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <div class="modal-title">\n          </div>\n        </div>\n        <div class="modal-body">\n          <form class="js-add-image">\n            <input type="text" name="img_src">\n            <br><input type="text" name="img_alt">\n            <button class="btn btn-success">Save</button>\n          </form>\n        </div>\n        <div class="modal-footer">\n          <button class="btn btn-warning" data-dismiss="modal">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>');
}));                                                                                                                // 83
                                                                                                                    // 84
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","./main.html",function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.js                                                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _templating = require('meteor/templating');                                                                     // 1
                                                                                                                    //
var _reactiveVar = require('meteor/reactive-var');                                                                  // 2
                                                                                                                    //
require('./main.html');                                                                                             // 4
                                                                                                                    //
/*                                                                                                                  //
var img_data = [                                                                                                    //
  {                                                                                                                 //
    img_src:"laptops.png",                                                                                          //
    img_alt:"some laptops"                                                                                          //
  },                                                                                                                //
  {                                                                                                                 //
    img_src:"ipad.jpg",                                                                                             //
    img_alt:"some ipad"                                                                                             //
  },                                                                                                                //
  {                                                                                                                 //
    img_src:"mobile.png",                                                                                           //
    img_alt:"some mobile"                                                                                           //
  },                                                                                                                //
];*/                                                                                                                //
                                                                                                                    //
//Template.images.helpers({images: img_data});                                                                      //
                                                                                                                    //
//Infinite scroll                                                                                                   //
Session.set("imageLimit", 12); // Setting the number of images to 8                                                 // 26
lastScrollTop = 0;                                                                                                  // 27
$(window).scroll(function (event) {                                                                                 // 28
  // test if we are near the bottom of the window                                                                   //
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {                                    // 30
    // where are we in the page?                                                                                    //
    var scrollTop = $(this).scrollTop();                                                                            // 32
    // test if we are going down                                                                                    //
    if (scrollTop > lastScrollTop) {                                                                                // 30
      // yes we are heading down...                                                                                 //
      Session.set("imageLimit", Session.get("imageLimit") + 4);                                                     // 36
    }                                                                                                               //
                                                                                                                    //
    lastScrollTop = scrollTop;                                                                                      // 39
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
Accounts.ui.config({                                                                                                // 45
  passwordSignupFields: "USERNAME_AND_EMAIL"                                                                        // 46
});                                                                                                                 //
                                                                                                                    //
_templating.Template.body.helpers({                                                                                 // 50
  username: function () {                                                                                           // 51
    function username() {                                                                                           // 51
      if (Meteor.user()) {                                                                                          // 52
        //return Meteor.user().emails[0].address;  -- Returns the current user's email ID                           //
        return Meteor.user().username;                                                                              // 54
      } else {                                                                                                      //
        return "Anonymous Internet User";                                                                           // 57
      }                                                                                                             //
    }                                                                                                               //
                                                                                                                    //
    return username;                                                                                                //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.images.helpers({                                                                               // 63
  images: function () {                                                                                             // 64
    function images() {                                                                                             // 64
      if (Session.get("userFilter")) {                                                                              // 65
        return Img.find({ createdBy: Session.get("userFilter") }, { sort: { createdOn: -1, rating: -1 } }); // Displaying the images created by a particular user
      } else {                                                                                                      // 65
          return Img.find({}, { sort: { createdOn: -1, rating: -1 }, limit: Session.get("imageLimit") }); // Displaying all the images
        }                                                                                                           // 68
    }                                                                                                               //
                                                                                                                    //
    return images;                                                                                                  //
  }(),                                                                                                              //
                                                                                                                    //
  filtering_images: function () {                                                                                   // 73
    function filtering_images() {                                                                                   // 73
      // Checking whether user has applied filter                                                                   //
      if (Session.get("userFilter")) {                                                                              // 74
        return true;                                                                                                // 75
      } else {                                                                                                      //
        return false;                                                                                               // 78
      }                                                                                                             //
    }                                                                                                               //
                                                                                                                    //
    return filtering_images;                                                                                        //
  }(),                                                                                                              //
                                                                                                                    //
  getFilterUser: function () {                                                                                      // 82
    function getFilterUser() {                                                                                      // 82
      // Get the filtered username                                                                                  //
      if (Session.get("userFilter")) {                                                                              // 83
        var user = Meteor.users.findOne({ _id: Session.get("userFilter") });                                        // 84
        return user.username;                                                                                       // 86
      } else {                                                                                                      //
        return false;                                                                                               // 89
      }                                                                                                             //
    }                                                                                                               //
                                                                                                                    //
    return getFilterUser;                                                                                           //
  }(),                                                                                                              //
                                                                                                                    //
  getUser: function () {                                                                                            // 93
    function getUser(user_id) {                                                                                     // 93
      // Displaying the user name based on the userId                                                               //
      var user = Meteor.users.findOne({ _id: user_id });                                                            // 94
      console.log("check::;" + user_id);                                                                            // 95
      if (user) {                                                                                                   // 96
        return user.username;                                                                                       // 97
      } else {                                                                                                      //
        return "anon";                                                                                              // 100
      }                                                                                                             //
    }                                                                                                               //
                                                                                                                    //
    return getUser;                                                                                                 //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.images.events({                                                                                // 106
  'click .js-images': function () {                                                                                 // 107
    function clickJsImages(event) {                                                                                 // 107
      $(event.target).css("width", "50px");                                                                         // 108
    }                                                                                                               //
                                                                                                                    //
    return clickJsImages;                                                                                           //
  }(),                                                                                                              //
                                                                                                                    //
  'click .js-del-images': function () {                                                                             // 111
    function clickJsDelImages(event) {                                                                              // 111
      var image_id = this._id;                                                                                      // 112
      console.log(image_id);                                                                                        // 113
      // use jquery to hide the image component                                                                     //
      // then remove it at the end of the animation                                                                 //
      $("#" + image_id).hide('slow', function () {                                                                  // 111
        Img.remove({ "_id": image_id });                                                                            // 117
      });                                                                                                           //
    }                                                                                                               //
                                                                                                                    //
    return clickJsDelImages;                                                                                        //
  }(),                                                                                                              //
                                                                                                                    //
  'click .js-rate-image': function () {                                                                             // 121
    function clickJsRateImage(event) {                                                                              // 121
      var rating = $(event.currentTarget).data("userrating");                                                       // 122
      console.log("You clicked  a star rate " + rating);                                                            // 123
      var image_id = this.id;                                                                                       // 124
      console.log("Image id is " + image_id);                                                                       // 125
                                                                                                                    //
      Img.update({ _id: image_id }, { $set: { rating: rating } });                                                  // 127
    }                                                                                                               //
                                                                                                                    //
    return clickJsRateImage;                                                                                        //
  }(),                                                                                                              //
                                                                                                                    //
  'click .js-show-image-form': function () {                                                                        // 131
    function clickJsShowImageForm(event) {                                                                          // 131
      $("#image_add_form").modal('show');                                                                           // 132
    }                                                                                                               //
                                                                                                                    //
    return clickJsShowImageForm;                                                                                    //
  }(),                                                                                                              //
                                                                                                                    //
  'click .js-set-image-filter': function () {                                                                       // 135
    function clickJsSetImageFilter(event) {                                                                         // 135
      Session.set("userFilter", this.createdBy);                                                                    // 136
    }                                                                                                               //
                                                                                                                    //
    return clickJsSetImageFilter;                                                                                   //
  }(),                                                                                                              //
                                                                                                                    //
  'click .js-unset-image-filter': function () {                                                                     // 139
    function clickJsUnsetImageFilter(event) {                                                                       // 139
      Session.set("userFilter", undefined);                                                                         // 140
    }                                                                                                               //
                                                                                                                    //
    return clickJsUnsetImageFilter;                                                                                 //
  }()                                                                                                               //
                                                                                                                    //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.image_add_form.events({                                                                        // 146
  'submit .js-add-image': function () {                                                                             // 147
    function submitJsAddImage(event) {                                                                              // 147
      var img_src, img_alt;                                                                                         // 148
      img_src = event.target.img_src.value;                                                                         // 149
      img_alt = event.target.img_alt.value;                                                                         // 150
      console.log("src :" + img_src + " alt:" + img_alt);                                                           // 151
      if (Meteor.user()) {                                                                                          // 152
        Img.insert({                                                                                                // 153
          img_src: img_src,                                                                                         // 154
          img_alt: img_alt,                                                                                         // 155
          createdOn: new Date(),                                                                                    // 156
          createdBy: Meteor.user()._id                                                                              // 157
        });                                                                                                         //
      }                                                                                                             //
                                                                                                                    //
      $("#image_add_form").modal('hide');                                                                           // 161
                                                                                                                    //
      return false;                                                                                                 // 163
    }                                                                                                               //
                                                                                                                    //
    return submitJsAddImage;                                                                                        //
  }()                                                                                                               //
});                                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"collections":{"collections.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// collections/collections.js                                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Employees = new Mongo.Collection("employees");                                                                      // 1
                                                                                                                    //
Img = new Mongo.Collection("img");                                                                                  // 3
//console.log("Number of images is: "+Img.find().count());                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./collections/collections.js");
require("./client/main.js");