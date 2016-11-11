
/**
  build table of contents (toc)
   uses heading 2 (h2) for sections and
        heading 3 (h3) for subsections e.g.

   1 Introduction
     1.1 Background
   2 Geography
     2.1 Location
     2.2 Geographic coordinates
     2.3 Map references
     2.4 Area
     ...
**/

function buildToc() {
    var toc = "";
    toc += "<div id='tocheader'>";
    toc += "<span id='toctitle'>Contents</span>";
  // todo: add hide/show toggle button
  // toc += "<span id='toctoggle'>&nbsp;[<a href='#'>hide</a>]&nbsp;</span>";
    toc += "</div>";
  
    toc += "<ul>";
    $( "h2" ).each( function(index) {
      var num1 = (index+1)+"";
      var text = $( this ).text();
      var id   = text.replace( / /g, "_" );
      $(this).attr( 'id', id );

      toc += "<li>";
      toc += "<a href='#"+ id +"'>" + num1 + " " + text + "</a>";
      toc += "<ul>";
      console.log( num1 + " " + text );
      $( this ).nextUntil( "h2", "h3" ).each( function(index) {
         var num2 = num1 + "."+(index+1);
         var text = $( this ).text();
         // remove trailing : e.g.  Coastline: => Coastline
         text = text.replace( /:$/, "");
         var id   = text.replace( / /g, "_" );
         $(this).attr( 'id', id );

         toc += "<li>";
         toc += "<a href='#"+ id +"'>" + num2 + " " + text + "</a>";
         toc += "</li>";
         console.log( num2 + " " + text );
      });
      toc += "</ul>";
      toc += "</li>";
    });

    toc += "</ul>";
    console.log( toc );
    $( "#toc" ).append( toc );
}
