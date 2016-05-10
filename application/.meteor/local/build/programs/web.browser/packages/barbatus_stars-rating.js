//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// packages/barbatus_stars-rating/template.stars_rating.js                      //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
                                                                                // 1
Template.__checkName("starsRating");                                            // 2
Template["starsRating"] = new Template("Template.starsRating", (function() {    // 3
  var view = this;                                                              // 4
  return HTML.DIV({                                                             // 5
    id: function() {                                                            // 6
      return Spacebars.mustache(view.lookup("getId"));                          // 7
    },                                                                          // 8
    "class": function() {                                                       // 9
      return [ "stars-rating ", Spacebars.mustache(view.lookup("class")), " ", Spacebars.mustache(view.lookup("css"), view.lookup("size")) ];
    },                                                                          // 11
    style: function() {                                                         // 12
      return Spacebars.mustache(view.lookup("font"), view.lookup("size"));      // 13
    },                                                                          // 14
    "data-rating": function() {                                                 // 15
      return Spacebars.mustache(view.lookup("rating"));                         // 16
    },                                                                          // 17
    star: function() {                                                          // 18
      return Spacebars.mustache(view.lookup("star"));                           // 19
    }                                                                           // 20
  }, "\n        ", HTML.DIV({                                                   // 21
    "class": "stars-inner-wrap"                                                 // 22
  }, "\n            ", Blaze._TemplateWith(function() {                         // 23
    return {                                                                    // 24
      mutable: Spacebars.call(view.lookup("getMutable")),                       // 25
      size: Spacebars.call(5)                                                   // 26
    };                                                                          // 27
  }, function() {                                                               // 28
    return Spacebars.include(view.lookupTemplate("_stars"));                    // 29
  }), "\n            ", Blaze._TemplateWith(function() {                        // 30
    return {                                                                    // 31
      mutable: Spacebars.call(view.lookup("getMutable")),                       // 32
      size: Spacebars.call(4)                                                   // 33
    };                                                                          // 34
  }, function() {                                                               // 35
    return Spacebars.include(view.lookupTemplate("_stars"));                    // 36
  }), "\n            ", Blaze._TemplateWith(function() {                        // 37
    return {                                                                    // 38
      mutable: Spacebars.call(view.lookup("getMutable")),                       // 39
      size: Spacebars.call(3)                                                   // 40
    };                                                                          // 41
  }, function() {                                                               // 42
    return Spacebars.include(view.lookupTemplate("_stars"));                    // 43
  }), "\n            ", Blaze._TemplateWith(function() {                        // 44
    return {                                                                    // 45
      mutable: Spacebars.call(view.lookup("getMutable")),                       // 46
      size: Spacebars.call(2)                                                   // 47
    };                                                                          // 48
  }, function() {                                                               // 49
    return Spacebars.include(view.lookupTemplate("_stars"));                    // 50
  }), "\n            ", Blaze._TemplateWith(function() {                        // 51
    return {                                                                    // 52
      mutable: Spacebars.call(view.lookup("getMutable")),                       // 53
      size: Spacebars.call(1)                                                   // 54
    };                                                                          // 55
  }, function() {                                                               // 56
    return Spacebars.include(view.lookupTemplate("_stars"));                    // 57
  }), "\n        "), "\n    ");                                                 // 58
}));                                                                            // 59
                                                                                // 60
Template.__checkName("_stars");                                                 // 61
Template["_stars"] = new Template("Template._stars", (function() {              // 62
  var view = this;                                                              // 63
  return HTML.DIV({                                                             // 64
    "class": "stars",                                                           // 65
    "data-stars": function() {                                                  // 66
      return Spacebars.mustache(Spacebars.dot(view.lookup("stars"), "length"));
    }                                                                           // 68
  }, "\n        ", Blaze.Each(function() {                                      // 69
    return Spacebars.call(view.lookup("stars"));                                // 70
  }, function() {                                                               // 71
    return HTML.SPAN({                                                          // 72
      "class": function() {                                                     // 73
        return [ "star-", Spacebars.mustache(view.lookup(".")) ];               // 74
      }                                                                         // 75
    }, HTML.I({                                                                 // 76
      "class": "star-glyph"                                                     // 77
    }));                                                                        // 78
  }), "\n    ");                                                                // 79
}));                                                                            // 80
                                                                                // 81
//////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// packages/barbatus_stars-rating/stars_rating.js                               //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
var rtCss = 'current-rating';                                                   // 1
var prCss = 'percent';                                                          // 2
var hasUserCss = 'has-user-rating';                                             // 3
                                                                                // 4
function getStarsEl($parent, index) {                                           // 5
    return $parent.find('[data-stars="' + index + '"]');                        // 6
}                                                                               // 7
                                                                                // 8
function getStarEl($parent, index) {                                            // 9
    return getStarsEl($parent, index).find('.star-' + index);                   // 10
}                                                                               // 11
                                                                                // 12
function getStarColor($el) {                                                    // 13
    var span = $('<span>').addClass(rtCss).appendTo($el);                       // 14
    var starColor = span.css('color');                                          // 15
    span.remove();                                                              // 16
    return starColor;                                                           // 17
}                                                                               // 18
                                                                                // 19
function getStarGlyph($el) {                                                    // 20
    var starGlyph = $el.attr('star');                                           // 21
                                                                                // 22
    if (!starGlyph) {                                                           // 23
        // For compatibility with older versions.                               // 24
        //                                                                      // 25
        // If now star attr is set, take the star symbol                        // 26
        // from the upper CSS class (via content property).                     // 27
        // This will work in most browsers except IE.                           // 28
        starGlyph = $el.css('content');                                         // 29
                                                                                // 30
        if (!starGlyph || starGlyph === 'none') {                               // 31
            starGlyph = '\\2605';                                               // 32
        } else {                                                                // 33
            // if it's IE replace glyph with the default symbol.                // 34
            if (starGlyph === 'normal') {                                       // 35
                starGlyph = '\\2605';                                           // 36
            }                                                                   // 37
        }                                                                       // 38
    }                                                                           // 39
                                                                                // 40
    // Prepare glyph for styles.                                                // 41
    starGlyph = '"' + starGlyph.trim().replace(/[\',\"]/g, '') + '"';           // 42
                                                                                // 43
    return starGlyph;                                                           // 44
}                                                                               // 45
                                                                                // 46
function buildStyle(className, styles) {                                        // 47
    var styleStr = '';                                                          // 48
    for (var style in styles) {                                                 // 49
        styleStr += style + ':' + styles[style] + ';';                          // 50
    }                                                                           // 51
    return '.' + className + '{' + styleStr + '}';                              // 52
}                                                                               // 53
                                                                                // 54
function setRating($el, rating, isUser, starGlyph) {                            // 55
    var ceil = Math.ceil(rating);                                               // 56
    var floor = Math.floor(rating);                                             // 57
    var percent = rating - floor;                                               // 58
                                                                                // 59
    $el.find('.stars').removeClass(rtCss);                                      // 60
    $el.find('.stars').find('.percent').removeClass(prCss);                     // 61
                                                                                // 62
    $el.toggleClass(hasUserCss, isUser);                                        // 63
    for (var i = floor; i >= 0; i--) {                                          // 64
        getStarsEl($el, i).addClass(rtCss);                                     // 65
    }                                                                           // 66
                                                                                // 67
    if (percent) {                                                              // 68
        var $percentStar = getStarEl($el, ceil).addClass(prCss);                // 69
        var starColor = getStarColor($el);                                      // 70
        $percentStar.find('style').remove();                                    // 71
        var style = ['<style>#' + getOrSetTmplId(),                             // 72
            buildStyle('percent:before', {                                      // 73
                width: (percent * 100) + '% !important',                        // 74
                color: starColor,                                               // 75
                content: starGlyph}), '</style>'];                              // 76
        $percentStar.append(style.join(' '));                                   // 77
    }                                                                           // 78
    $el.trigger('change');                                                      // 79
}                                                                               // 80
                                                                                // 81
function getOrSetTmplId(opt_id) {                                               // 82
    if (!Template.instance()._id) {                                             // 83
        Template.instance()._id = opt_id || _.uniqueId('stars_');               // 84
    }                                                                           // 85
    return Template.instance()._id;                                             // 86
}                                                                               // 87
                                                                                // 88
Template.starsRating.helpers({                                                  // 89
    getId: function() {                                                         // 90
        return getOrSetTmplId(this.id);                                         // 91
    },                                                                          // 92
    css: function(size) {                                                       // 93
        if (_.isString(size)) {                                                 // 94
            return 'stars-rating-' + (size || 'sm');                            // 95
        }                                                                       // 96
    },                                                                          // 97
    font: function(size) {                                                      // 98
        if (_.isNumber(size)) {                                                 // 99
            return 'font-size:' + size + 'px';                                  // 100
        }                                                                       // 101
    }                                                                           // 102
});                                                                             // 103
                                                                                // 104
function onDataChange($el, rating, starGlyph) {                                 // 105
    setRating($el, rating, false, starGlyph);                                   // 106
}                                                                               // 107
                                                                                // 108
Template.starsRating.rendered = function() {                                    // 109
    var self = this;                                                            // 110
    var $el = $(self.firstNode);                                                // 111
                                                                                // 112
    var starGlyph = getStarGlyph($el);                                          // 113
                                                                                // 114
    // Adds all required styles to set new symbol for the internal              // 115
    // pseudo elements.                                                         // 116
    var style = ['<style>#' + getOrSetTmplId(),                                 // 117
        buildStyle('star-glyph:before', {                                       // 118
            content: starGlyph}), '</style>'];                                  // 119
    $el.append(style.join(' '));                                                // 120
                                                                                // 121
    this.autorun(function() {                                                   // 122
        var userData = Template.currentData();                                  // 123
        if (userData) {                                                         // 124
            var rating = userData.rating;                                       // 125
            if (rating) {                                                       // 126
                onDataChange($el, rating, starGlyph);                           // 127
            }                                                                   // 128
        }                                                                       // 129
    });                                                                         // 130
};                                                                              // 131
                                                                                // 132
Template.starsRating.events({                                                   // 133
    'mouseover .stars': function(event) {                                       // 134
        if (this.isMutable || this.mutable) {                                   // 135
            var $this = $(event.currentTarget);                                 // 136
            var rating = $this.data('stars');                                   // 137
                                                                                // 138
            for (var i = rating; i >= 0; i--) {                                 // 139
                getStarsEl($this.parent(), i).addClass('active');               // 140
            }                                                                   // 141
                                                                                // 142
            for (var i = rating + 1; i <= 5; i++) {                             // 143
                getStarsEl($this.parent(), i).removeClass('active');            // 144
            }                                                                   // 145
        }                                                                       // 146
    },                                                                          // 147
    'mouseleave .stars-rating': function(event) {                               // 148
        if (this.isMutable || this.mutable) {                                   // 149
            var $this = $(event.currentTarget);                                 // 150
            $this.find('.stars').removeClass('active');                         // 151
        }                                                                       // 152
    },                                                                          // 153
    'click .stars': function(event) {                                           // 154
        if (this.isMutable || this.mutable) {                                   // 155
            var $this = $(event.currentTarget);                                 // 156
            var userRating = $this.data('stars');                               // 157
            var $el = $this.parent().parent();                                  // 158
            $el.data('userrating', userRating);                                 // 159
                                                                                // 160
            var $starsWrap = $this.parent();                                    // 161
            setRating($starsWrap, userRating, true);                            // 162
                                                                                // 163
            $starsWrap.children().removeClass('active');                        // 164
        }                                                                       // 165
    }                                                                           // 166
});                                                                             // 167
                                                                                // 168
Template.starsRating.helpers({                                                  // 169
    getMutable: function(size) {                                                // 170
        return this.isMutable || this.mutable;                                  // 171
    }                                                                           // 172
});                                                                             // 173
                                                                                // 174
Template._stars.helpers({                                                       // 175
    stars: function() {                                                         // 176
        return _.range(1, this.size + 1);                                       // 177
    }                                                                           // 178
});                                                                             // 179
                                                                                // 180
//////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['barbatus:stars-rating'] = {};

})();
