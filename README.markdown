# General Info

This package is made for students of Information Engineering and Computer
Science at the University of Constance.

It contains useful commands for styling the assignments and generating
diagrams and graphs (not yet imported).

University and Department are hardcoded into the package but of course
changeable.

This package is still in an early alpha stage while our commands and functions
are integrated. So as always use at your own risk.

Feel free to use the Issue feature of Github to request features or give us
feedback or send bug reports.

Installation instructions and an example can be found on the [documentation pages](http://zinnjonas.github.com/ukon-infie/).

| #List of Parameters |
| ------------- |:-------------:|
| de            | german layout |
| en      	    | english layout |
| topTable      | place PointTable on top of first page|
| bottomTable   | place PointTable on bottom of last page|
| noTable 	    | don't draw the point table|
| topExercise   | place the *of Points* on the Exercise line|
| bubble	    | draw a bubble instead of [ ]|
| break	        | draw a line after each exercise |

|# List of global Commands|
| Name of command | Parameters | Description | Example |
| ------------- |:-------------:|:-------------:|:-------------:|
| \Names | 1 | the student names for an assignment sheet| \Names{Jonas Zinn}|
| \Lecture| 1(1)| the name of the lecture | \Lecture{name}, \Lecture[short]{long name}|
| \Department| 1| the department of the lecture | \Department{Information Science} |
| \Fachbereich|1 | the german equality to \Department| \Fachbereich{Information Science}|
| \Term| 1| the current term | \Term{WS 12/13}|
| \Group| 1| a group id  | \Group{H12} |
| \University| 1 | the name of the university | \University{Constance}|

| #List of document commands |
| ------------ |:-----------:|
| \question| |
| \Venn| |
| \bigVenn| |
| \Title| |
| \loadJava| |
| \loadCpp| |
| \loadSource | |
| \red | |
| \blue| |
| \green | |
| \darkRed| |
| \darkBlue| |
| \darkGreen| |
| \darkYellow| |
| \yellow| |
| \correct| |
| \wrong| |
| \flash| |
| \setAText| |
| \setSText| |
| \induction| |
| \Induction| |

| #List of Environments|
| ------------- |:-------------:|
| ukon-infie | |
| exercise | |

| #List of Exercise parameter |
| ------------- |:-------------:|
| top | |
| bottom | |
| additional | |
| bubble | |
| text | |
| break | |
| nobreak | |
| num | |
| rom | |
| Alph | |
| Rom | |
| none | |

| #List of Colors |
| ------------- |
| dGreen|
| dBlue|
| dRed|
| dYellow |
|lYellow|

# License

This work is licensed under the Creative Commons
Attribution-NonCommercial-ShareAlike 3.0 Germany License.
The licence can be found at https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode

# Other

Originally made by Jonas, Stephan, Morix and Manuel in the winter term of
2010, refined throughout numerous assignments and night shifts.

The layout was passed down to us from older fellow students, the origin
remains uncertain.
