[![Issue Stats](http://issuestats.com/github/zinnjonas/ukon-infie/badge/pr)](http://issuestats.com/github/zinnjonas/ukon-infie)
[![Issue Stats](http://issuestats.com/github/zinnjonas/ukon-infie/badge/issue)](http://issuestats.com/github/zinnjonas/ukon-infie)

# General Info

This package is made for students of Information Engineering and Computer
Science at the University of Konstanz.

It contains useful commands for styling the assignments and generating
diagrams and graphs (not yet imported).

University and Department are hardcoded into the package but of course
changeable.

This package is still in an beta stage while our commands and functions
are integrated. So as always use at your own risk.

Feel free to use the Issue feature of Github to request features or give us
feedback or send bug reports.

Installation instructions and an example can be found on the [documentation pages](http://zinnjonas.github.com/ukon-infie/).

#List of Parameters
| Parameter     | Description                                       |
| ------------- |:-------------------------------------------------:|
| de            | german layout                                     |
| en            | english layout                                    |
| topTable      | place PointTable on top of first page             |
| bottomTable   | place PointTable on bottom of last page           |
| noTable       | don't draw the point table                        |
| topExercise   | place the *of Points* on the Exercise line        |
| noPoints      | no Point output is shown on the page              |
| bubble        | draw a bubble instead of [ ]                      |
| break         | draw a line after each exercise                   |
| mark          | draw a DRAFT-watermark if no "final" flag is used |

# List of global Commands
| Name of command | Parameters    | Description   | Example       |
| --------------- |:-------------:|:-------------:|:-------------:|
| \Names          | 1             | the student names for an assignment sheet| \Names{Jonas Zinn}|
| \Lecture        | 1(1)          | the name of the lecture | \Lecture{name}, \Lecture[short]{long name}|
| \Department     | 1             | the department of the lecture | \Department{Information Science} |
| \Term           | 1             | the current term | \Term{WS 12/13}|
| \Group          | 1             | a group id  | \Group{H12} |
| \University     | 1             | the name of the university | \University{Konstanz}|

#List of document commands
| Name of command | Parameters    | Description   | Example       |
| --------------- |:-------------:|:-------------:|:-------------:|
| \question       | 2(1)          | places a new question in a exercise environment | \question{question}{answer},\question[points]{question}{answer}|
| \Venn           | 1             | generates a Venn diagram with 2 Sets | \Venn{1010},\Venn[red,blue]{1020},\Venn[green,blue][H,M,T]{0102}|
| \bigVenn        | 1(2)          | generates a Venn diagram with 3 Sets | \bigVenn{10100101},\bigVenn[red,blue]{10100201},\bigVenn[green,blue][i,j,k,T]{10100102} |
| \Title          | 1(2)          | makes a Headline | \Title{test} |
| \loadJava       | 1             | loads a java file with syntax highlighting | \loadJava{hallo} |
| \loadCpp        | 1             | loads a cpp file with syntax highlighting| \loadCpp{hallo.cpp}  |
| \loadSource     | 1(1)          | loads a source file (with chosen highlighting) | \loadSource{hallo.html},\loadSource[HTML]{test.html}|
| \red            | 1             | displays text red (even in math)| \red{text red}|
| \blue           | 1             | displays text blue (even in math)| \blue{text blue}|
| \green          | 1             | displays text green (even in math)| \green{text green}|
| \darkRed        | 1             | displays text dark red (even in math)| \darkRed{you do not expect}|
| \darkBlue       | 1             | displays text dark blue (even in math)| \darkblue{so on}|
| \darkGreen      | 1             | displays text dark green (even in math)| \darkGreen{again}|
| \darkYellow     | 1             | displays text dark yellow (even in math)| \darkYellow{does something}|
| \yellow         | 1             | displays text yellow (even in math)| \yellow{last}|
| \correct        | 0             | displays a green check mark (text and math)| \correct|
| \wrong          | 0             | displays a red cross (text and math)| \wrong|
| \flash          | 0             | displays a yellow flash (text and math)| \flash|
| \setBText       | 1             | sets the induction base annotation | \setBText{$i = 0$}|
| \setAText       | 1             | same like \setBText ||
| \setSText       | 1             | sets the induction step annotation| \setSText{$i \leq 1$}|
| \induction      | 2             | write the induction without hypothesis| \induction{The Induction base}{The induction step}|
| \Induction      | 3             | write the induction| \induction{The Induction base}{The hypothesis}{The induction step}|
| \todo           | 1(1)          | insert a very visible TODO-note, optional could be "inline", "color=green" (or other colors), "linecolor=green", "noline", "fancyline" | \todo[inline]{Do something} |
| \missingfigure  | 1(1)          | inserts something to remind you of missing figures, optional could be "figurewidth=" | \missingfigure[figurewidth=6cm]{Insert a picture of a flower.} |

#List of Environments
| Environment name | parameter | description | example|
| ------------- |:------------:|:-------------:|:-------------:|
| ukon-infie | 1(1)            | defines the exercise | \begin{ukon-infie}[date]{Number of assignment} \end{ukon-infie}|
| exercise | 1(1)              | defines a Task       | \begin{exercise}[p=6,z=1]{Taskname} \end{exercise}|

#List of Exercise parameter
| parameter | description |
| ------------- |:-------------:|
| p | the points for this Task|
| z | the additional points for this task|
| top | place the *of Point* on the top|
| bottom | place the *of Point* on the top |
| bubble | draw a bubble instead of *[ ]*|
| text | draw *[]* instead of bubble|
| break | draw a line after this task|
| additional | don't draw nor count this task to the points|
| nobreak | don't draw a line after this task|
| num | label questions numeric|
| rom | label questions roman|
| Alph | label  questions with alphas|
| Rom | label questions Roman|
| none | don't label questions|
| col | create a 2 column multicol around the questions|
| cols | create a X column multicol around the questions|

#List of Colors
| name          | color |
| ------------- | ----- |
| dGreen        | <p background-color: #007D00>      </p>|
| dBlue         |<p background-color: #007D00>      </p>|
| dRed          |<p background-color: #007D00>      </p>|
| dYellow       |<p background-color: #007D00>      </p>|
| lYellow       |<p background-color: #007D00>      </p>|

# License

This work is licensed under the Creative Commons
Attribution-NonCommercial-ShareAlike 3.0 Germany License.
The licence can be found at https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode

# Other

Originally made by Jonas, Stephan, Morix and Manuel in the winter term of
2010, refined throughout numerous assignments and night shifts.

New Release since winter term 2012 by Jonas.

The layout was passed down to us from older fellow students, the origin
remains uncertain.
