# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: Props are packets of information sent from a parent block to a child. Props are unidirectional but can be passed back 'up the river' using functional props. 

  Researched answer: Props, short for properties, can pass data from one component to another as parameters. Using props we're able to make the flow of data in an app dynamic. 



2. What is a DOM event?

  Your answer: A DOM (document object model) event is a signal that a user has done something on their web browser. It could be letters typed or deleted, a mouse click, a page reload etc etc. The DOM can be though of as a tree structure. Starting with the main element (root element) the tree branches out into nested elements.

  Researched answer: DOM events allow JavaScript to register different event handlers. They're useful because, generally functions won't be executed before a particular event happens e.g. a click on a button or hovering over pat of a page etc. The DOM represents how documents are read by a browser. It allows JS to manipulate, structure and style a website.  DOM is a type of API (programming interface). Document - file. Object - tags/elements. Model - layout/ structure.



3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming divides code up into functional blocks of code- everything in Ruby, for example, is an object. The idea comes from the way humans generally see things- we evaluate everything as an object. Procedures (functions, methods, etc.) can be passed into objects to manipulate data. Functional programming relies solely on input/ output and is more rambling/ verbose that OOP. OOP is clean and easy to maintain as functionality is contained or (encapsulated) in objects.

  Researched answer: Both FP and OOP are aimed at managing program states but while OOP relies on broken down objects to do this, FP relies on 2 fundamentals, input and output and functions depend entirely on the input data. FP and OPP are almost always used simultaneously. 



4. What is the difference between a Float and an Integer in Ruby?

  Your answer: In Ruby an integer is a whole number. A Float is a fraction - It could be > 1 or < 1

  Researched answer: Ruby will consider any number without a decimal point as an integer. As soon as it has a decimal it will be considered a float. For example, 97 would be considered an integer but 97.0 a float. 



5. Ruby has an implicit return. What does that mean?

  Your answer: Implicit return means every line will return the value of the last line automatically. It negates the need to write in the 'return' keyword. 

  Researched answer: If a return is the last expression in a path of exectuion there's no need for a return statement. This could potentially cause confusion in bigger methods. 



## Looking Ahead: Terms for Next Week

1. Instance Variable: In ruby an instance vairbale is a type of variable initiated with an @ symbol. It's used to give objects the ability to store data in their own private space. It's said that objects can either 'do' things or 'know' things. Instance variables, which store data, know things. 

2. PostgreSQL: PostgreSQL is the world's most advanced, open-source, relational database. It has official documentation to help developers and CS professionals navigate it. It succeeded another database called Ingres hence the name, Postgres - not sure what the elephant's about. Postgres seems to be more customizable than its competitors. You can specifiy data types, use KV pairs, and use several different programming languages. 

3. Ruby on Rails: Rails is a Ruby framework (fullstack). It is a model-view-controller framework and provides default structures for databases and web pages. It's popular with start-ups since its ease of use allows apps to be built quickly by small teams. 

4. ORM: ORM or Object-Relational Mapping is a programming technique used for converting data between type systems. It uses OOP languages and effectively creates a virtual object database. An ORM is an object which holds multiple fields of information and can contain subsets of data which are linked to from within the object. An ORM can declare classes which are mapped to relational tables and the ORM deals with updating, querying and deleting data in our tables.

5. Active Record: The active record pattern is an architectural pattern and it's found in software that stores in-memory object data in relational databases. There's an active record query interface which allows us to retrieve data from databases more easily. 
