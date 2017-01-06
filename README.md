Euclidean Algorithm
=============

Jquery plugin that calcutate euclidean algorithm

![Euclidean Algorithm](https://raw.githubusercontent.com/LaercioSantana/euclideanAlgorithm/master/example/imgs/example.png)


Usage
-----

```js
<script src='euclideanAlgorithm.js'></script>
<link rel='stylesheet' href='euclideanAlgorithm.css' />

<div id="container"></div>

<script>
    $("#container").euclideanAlgorithm({
        a: 75, b:36,
        remainderSymbol: "remainder",
        quotientSymbol: "quotient",
        showGcd: true,
    });
</script>
```

Build
------
 * Fix dependencies. In project folder root:
 
 ```
    npm install -g grunt-cli
    npm install
 ```
 
 * Build:
 
 ```
    grunt
 ```

Docs
----- 
**Initialize options**
    
```js
  $("#container").euclideanAlgorithm({
      a: 75, b:36,
      remainderSymbol: "remainder",
      quotientSymbol: "quotient",
      showGcd: true,
  });
```
    
* a <br />
  type: `Integer` <br />
  description: First operand

* b <br />
  type: `Integer` <br />
  description: Second operand

* remainderSymbol <br />
  type: `String` <br />
  description: Head text of the remainder row

* quotientSymbol <br />
  type: `String` <br />
  description: Head text of the quotient row
  
* showGcd <br />
  type: `boolean` <br />
  description: If true, show greatest common divisor, otherwise, not show.
    
License
-------
The MIT License.
