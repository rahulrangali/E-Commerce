import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup
  Employees.insert({"id": 1, "empid": "AC001", "firstName": "Matthew", "lastName": "Chiang", "department": "Executive", "cellPhone": "909-979-7668", "officePhone": "201", "email": "MChiang@ArtigenCorp.com ", "wechatid": "Artigen-Matt", "skypeid": "Matthew.Artigen", "pic": "1.jpg"});
  Employees.insert({"id": 2, "empid": "AC002", "firstName": "Tony", "lastName": "Tsai", "department": "Marketing & Sales", "cellPhone": "909-720-6668", "officePhone": "202", "email": "TTsai@ArtigenCorp.com", "wechatid": "9097206668", "skypeid": "Tony.Artigen", "pic": "2.jpg"});
  Employees.insert({"id": 3, "empid": "AC003", "firstName": "Teresa", "lastName": "Liu", "department": "Accounting ", "cellPhone": "909-632-8883", "officePhone": "203", "email": "TLiu@ArtigenCorp.com", "wechatid": "Teresa5118", "skypeid": "Teresa.Artigen", "pic": "3.jpg"});
  
  
  if(Img.find().count() == 0){
    
    for(var i=1;i<23;i++){
      Img.insert(
        {
          "img_src": "img_"+i+".jpg",
          "img_alt": "Image number "+i,
        }
      );
      console.log("value of i is "+i);
    }
    console.log("Number of images is "+Img.find().count());
    
    
    
  }
  
});
