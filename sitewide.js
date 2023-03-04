
    function siteWide() {
     params = 'width='+Math.floor(screen.width*0.43);
     params += ', height='+Math.floor(screen.height*0.6);
     params += ', top=0, left=0'
     params += ', fullscreen=no';
     params += ', toolbar=no';
     params += ', status=no';
     params += ', menubar=no';
     params += ', location=center';
     params += ', scrollbars=yes';
     params += ', resizable=yes';
     oldy="toolbar=no,status=no,menubar=yes,location=center,scrollbars=yes,resizable=yes,height=60%,width=52%";
     $("#footer").html("Orignally sourced from Fred Swartz&apos;s public domain site <a href='http://www.fredosaurus.com/notes-java/index.html'>Java Notes</a>");
    }
