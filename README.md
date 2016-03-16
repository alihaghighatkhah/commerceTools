#Start
 Use these command to start project<br>
    `bower install`<br>
    `npm install`<br>
    `grunt serve`<br>
    
 Then navigate to <br>
   `http://127.0.0.1:9001/#/products/123`
  <br>
  This means you're navigating to the product with `id` equal to 123 in list of products
 
 
#Task Runner
 - Grunt: I've used Grunt for repeating tasks of integration and I have following task in my Grunt file:<br>
   - sass : This is a sass compiler written in C++ and is much more faster than regular Compass written in ruby. The performance of this compiler is remarkable while using frameworks in Bootstraps which contain many sass files
   - autoprefixer : instead of creating mixins for CSS3 properties and other vendor prefix needing porperties, this task adds the verndor prefeixes to CSS file directly.
   - concat : adds all [JS] files defines in source directory into a single file.
   - connect : creates a http local server. this task uses http-server node package.
   - watch : watches for changes that you make in source files and runs all task defined for it. I usually use this watcher for continuous concatenating and compiling styles.
   - usemin : minimizes all CSS files into a single file as defined in task options. makes CSS file lighter and faster to download and harder to abuse.
   - copy : Copies given files into given destination directory. used for production mode. it's create a build folder containing only release files.
   - clean : cleans some directory to paste files to it again.
   - jshint : gives good hints for writing a better and cleaner and bug-less JS programs.

#Frameworks used
 - AngularJs: Since the project is an online market, I'd preferred to use AngularJs and assume this is a complete market project. So you can see:
   - the is an Api service to manage all XHR requests needed for a REST-MV* application.
   - I'm getting the price as value/currency pair and the value is in number type. this helps me to create a multi-currency market easily.
   -the path to be called is [base]/product/id. meaning it's chosen from a list of products to see the detail for. of course, the "product" could be the name for category or a type of products.<br>
__No other dependencies__

 #Styling architecture
 There are many approaches like Atomic, BEM. But I decided to choose SMACSS. I made this decision because in larger projects, readability and scalability in SMACSS is much higher than others. A notable part of code is written as states and basics and modules. So by a small chane in layouts you can create a completely visually different view.
 Some file are:
 - base    : containing basic styles, like variables, reset files, typography.
 - layouts : holding codes related to overall structure of website. This tells header is fixed to top. sidebar style in right, grids are 16 parts, etc.
 - modules : every block of code which works as a separate functionality. like a menu, a color picker, a table for data are modules and must be here.
 - states  : a button is a module, but being wid e or narrow, being small or large is its state. modules may have many states to use for different positions in website.

#The matter of trade off!
You've seen the slight difference between the intended goal, the images, and the result. For a large scale project, like a market, CSS codes can easily reach to tens of thousands of lines. you need to make standards in sizes, margin, paddings and many other parts. This standards have some benefits:
 - reduces the code in a extremely remarkable number of lines, some times by 50%.
 - modules become very mobile to use in different pages, because they'll fit based on their sizes.
 - The view, look more uniform and more pleasant.
 - The code becomes meaningful for your collaborators to work on.
 

__This is not the best__<br>
There are some other options I have to make the project more scalable and better. But, Since I think you need to review many projects, I decided to keep it simpler.
 


