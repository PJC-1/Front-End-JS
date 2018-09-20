
Front End JS
===================
> Learning about *Front End Javascript* concepts.

Bower
-------------
> **Problem**:
> When attempting to run ```bower install``` to install **Bower** dependencies, I received the following error:
>
> ```
> $ bower install
>bower EINVRES Request to https://bower.herokuapp.com/packages/bootstrap failed with 502
> ```
>
> **Solution**:
> Bower depreciated their registry hosted with **heroku**. You can add the following data to the ```.bowerrc``` file (note: ```.bowerrc``` file can be located at the same folder where ```bower.json``` file is located. If it is not present already, you can create it):
>
> ```
>{
>  "registry": "https://registry.bower.io"
>}
> ```
>
> Link to a *stack overflow* [article](https://stackoverflow.com/questions/51020317/einvres-request-to-https-bower-herokuapp-com-packages-failed-with-502) with this solution.
>

Underscore Templates
-------------
>**Delimiters** are just one or more characters used to set a *boundary*, they are used with **Underscore** to separate the ```html``` from what will become the ```javascript variables```.
>
>**Example**:
>```
>  <script type="text/template" id="menuItem-template">
>    <td><a href="#detail/<%= menuItem.id %>"><%= menuItem.name %></a></td>
>    <td><%= menuItem.rating %></td>
>    <td><%= menuItem.calories %></td>
>    <td>
>      <button class="select-item">Select Item</button>
>    </td>
>  </script>
>```
>
>There are 2 parts to these delimiters: the **starting (opening) delimiter** ```<%=``` and the **ending (closing) delimiter** ```%>```
>
>Looking in the ```underscore.js``` file we see that **Underscore** uses *ERB-style* template delimiters.
>**Snippet**:
>```
>  _.templateSettings = {
>    evaluate: /<%([\s\S]+?)%>/g,
>    interpolate: /<%=([\s\S]+?)%>/g,
>    escape: /<%-([\s\S]+?)%>/g
>  };
>```
>

Constructor Function
-------------
>Generally, you are use to seeing the following code to create an object , an array, and a function:
>```
>var obj1 = {};                        // A new object via Object literal
>var arr1 = [];                        // A new array via Array literal
>var func1 = function() {};   // A new function via Function literal
>```
>
>You can get the same end result by doing the following:
>```
>var obj2 = new Object();         // A new object via Object constructor
>var arr2 = new Array();            // A new array via Array constructor
>var func2 = new Function();   // A new Function via Function Constructor
>```
>
>The *constructor format* is not recommended for several reasons:
>- It's not readable.
>- It can be harder to work with.
>- It's slower.
>
>One benefit of the **constructor function** over a **function literal**:
>- It can *dynamically* create a function at *run time*.
>
>Here is a function written in the *literal format* which takes ```two numbers``` and ```adds``` them together:
>```
>var adder1 = function(num1, num2) {
>    return num1 + num2;
>};
>```
>
>Here is the same function written in the *constructor format*, the last *argument* of the function is the **body** of the function, while any *arguments* before the last one will become *parameters* for the function:
>```
>var adder2 = new Function("num1", "num2", "return num1 + num2");
>```
>
>This becomes helpful because they can create functions with a **dynamically** supplied body.
>
>Here is an example of a function that will *return* a new Function constructor:
>```
>function make(adjective) {
>    return new Function('noun', "return noun[0].toUpperCase() + noun.slice(1) + ' is " + adjective + "!'");    
>}
>
>var isFun = make('fun');
>
>isFun('biking');       // 'Biking is fun!'
>isFun('climbing');   // 'Climbing is fun!'
>isFun('broccoli');   // 'Broccoli is fun!
>
>```
>
>You can see that ```isFun``` is set to the ```make()``` function passed the ```adjective``` "fun", and then ```isFun``` is able to pass in arguments for the ```noun``` parameter.
>
>
>
