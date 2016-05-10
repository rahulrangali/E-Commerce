import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


/*
var img_data = [
  {
    img_src:"laptops.png",
    img_alt:"some laptops"
  },
  {
    img_src:"ipad.jpg",
    img_alt:"some ipad"
  },
  {
    img_src:"mobile.png",
    img_alt:"some mobile"
  },
];*/

//Template.images.helpers({images: img_data});

//Infinite scroll
Session.set("imageLimit",12);           // Setting the number of images to 8
lastScrollTop = 0;
$(window).scroll(function(event){
    // test if we are near the bottom of the window
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      // where are we in the page? 
      var scrollTop = $(this).scrollTop();
      // test if we are going down
      if (scrollTop > lastScrollTop){
        // yes we are heading down...
       Session.set("imageLimit", Session.get("imageLimit") + 4);
      }

      lastScrollTop = scrollTop;
    }
        
});


Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});


Template.body.helpers({
  username:function(){
    if(Meteor.user()){
      //return Meteor.user().emails[0].address;  -- Returns the current user's email ID
      return Meteor.user().username;
    }
    else {
      return "Anonymous Internet User";
    }
  }
});


Template.images.helpers({
  images: function(){
    if (Session.get("userFilter")){
      return Img.find({createdBy: Session.get("userFilter")}, {sort:{createdOn: -1, rating: -1}});    // Displaying the images created by a particular user
    }
    else {
      return Img.find({}, {sort:{createdOn: -1, rating:-1}, limit:Session.get("imageLimit")});       // Displaying all the images
    }
  },
  
  filtering_images: function(){                                 // Checking whether user has applied filter
    if (Session.get("userFilter")){
      return true;
    }
    else {
      return false;
    }
  },
  
  getFilterUser: function(){                                  // Get the filtered username
    if (Session.get("userFilter")){
      var user = Meteor.users.findOne(
        {_id:Session.get("userFilter")});
       return user.username;
    }
    else {
      return false;
    }
  },
  
  getUser:function(user_id){                                  // Displaying the user name based on the userId
      var user = Meteor.users.findOne({_id:user_id});
      console.log("check::;"+user_id);
      if (user){
        return user.username;
      }
      else {
        return "anon";
      }
    }
});


Template.images.events({
  'click .js-images': function(event){
    $(event.target).css("width","50px");
  },
  
  'click .js-del-images': function(event){
    var image_id = this._id;
    console.log(image_id);
    // use jquery to hide the image component
    // then remove it at the end of the animation
    $("#"+image_id).hide('slow', function(){
      Img.remove({"_id":image_id});
    })
  },
  
  'click .js-rate-image': function(event){
    var rating = $(event.currentTarget).data("userrating");
    console.log("You clicked  a star rate "+rating);
    var image_id = this.id;
    console.log("Image id is "+image_id);
    
    Img.update({_id:image_id},
                  {$set: {rating:rating}});
  },
  
  'click .js-show-image-form': function(event){
    $("#image_add_form").modal('show');
  },
  
  'click .js-set-image-filter': function(event){
    Session.set("userFilter", this.createdBy);
  },
  
  'click .js-unset-image-filter': function(event){
    Session.set("userFilter", undefined);
  }
  
});


Template.image_add_form.events({
  'submit .js-add-image': function(event){
    var img_src, img_alt;
    img_src = event.target.img_src.value;
    img_alt = event.target.img_alt.value;
    console.log("src :"+img_src+" alt:"+img_alt);
    if(Meteor.user()){
        Img.insert({
        img_src: img_src,
        img_alt: img_alt,
        createdOn: new Date(),
        createdBy: Meteor.user()._id,
      });
    }
    
    $("#image_add_form").modal('hide');
    
    return false;
  }
});
