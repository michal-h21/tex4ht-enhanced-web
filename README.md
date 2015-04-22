# Enhanced LaTeX to HTML conversion using `tex4ht`

This code was created for answer to [this question on
TeX.sx](http://tex.stackexchange.com/q/237566/2891). It shows how to use
Mathjax for math rendering, Hypothes.is for annotating, and custom Javascript
libraries for navigational sidebar and pop-up windows with bibliographic
references. [Scale.css](https://github.com/viljamis/Scale) by Viljami Salminen is used for responsive web typography.

You can see the result on my [Github
pages](http://michal-h21.github.io/reyman/thesis.html). Please note that this
is basically a proof of concept, so don't expect perfect design nor
functionality. In particular, the sidebar needs some polishing, the local TOC
can be collapsed and opened with some CSS animation, it also needs adaption to
responsive design, in order to support small screens. Bibliography pop-up is
placed on a fixed position, it should be more flexible. Fixes for these issues
are highly welcome.

## How to compile

You may use [make4ht](https://github.com/michal-h21/make4ht), build system for
`tex4ht`. Because browsers doesn't support loading of local web pages with
Javascript, you need to place the generated files on web server. Local server
suffices. On Linux, documents are usually placed in `/var/www/html/`. This
location is predefined in the build file, `thesis.mk4`. If you use a different
path, modify the `outdir` variable.

Compile with 

     make4ht -u -c enhanced.cfg thesis.tex

if you haven't modify the `outdir` variable and everything works well, you may open [the generated page](http://localhost/reyman/thesis.html)

