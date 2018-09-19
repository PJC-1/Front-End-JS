
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
