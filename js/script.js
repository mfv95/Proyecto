/*function my() {
    var name = prompt('Me quieres?');
    if(name=='si') 
    {
     alert('Awwww <3 ');
   }
   else if(name=='No') 
   {
     alert(':(');
   }

 }*/

 function n() {
      var nombre;
      var edad;
      var a;

      nombre=prompt('Ingrese su nombre:','');
      edad=alert('Ahora ingresalo pero de manera deletreada:');
      a=prompt('Ingrese la 1ra letra:','');
      b=prompt('Ingrese la 2da letra:','');
      c=prompt('Ingrese la 3ra letra:','');
      d=prompt('Ingrese la 4ra letra:','');
      e=prompt('Ingrese la 5ra letra:','');
      f=prompt('Ingrese su 6ta letra:','');
      fin=alert('Terminaste?','');

      document.write('mi amor,espero te guste ,');
      document.write(nombre);
      document.write("<br />");
      document.write("<br />");
      document.write(a);
      document.write('o se que hiciste pero cambiaste mi vida y aunque suene cursi de ');
      document.write("<br />");
      document.write(b);
      document.write('nmediato supe que eras especial,por eso eran mis ganas de ');
      document.write("<br />");
      document.write(c);
      document.write('uchar por ti y sabes que,por 1era vez no me equivoque');
      document.write("<br />"); 
      document.write(d);
      document.write('U eres como una estrella fugaz pasaste por mi vida derepente y te quedaste aqui,');
      document.write("<br />");
      document.write(e);
      document.write('casiones contigo son especiales,DIOS lo tiene decidido si ');
      document.write("<br />");
      document.write(f);
      document.write('o fueras para mi ni te hubiera conocido.');
      document.write("<br />");
      document.write('Y quiero que sean 1 y muchos años contigo ');
    }
 $(function() {

        var btn_movil = $('#nav-mobile'),
            menu = $('#menu').find('ul');

        // Al dar click agregar/quitar clases que permiten el despliegue del menú
        btn_movil.on('click', function (e) {
            e.preventDefault();

            var el = $(this);

            el.toggleClass('nav-active');
            menu.toggleClass('open-menu');
        })

    });
// sidebar toggle

$(function() {
    function responsiveView() {
        var wSize = $(window).width();
        if (wSize <= 768) {
            $('#container').addClass('sidebar-closed');
            $('#sidebar > ul').hide();
        }

        if (wSize > 768) {
            $('#container').removeClass('sidebar-closed');
            $('#sidebar > ul').show();
        }
    }
    $(window).on('load', responsiveView);
    $(window).on('resize', responsiveView);
});

$('.infinito').click(function () {
    if ($('#sidebar > ul').is(":visible") === true) {
        $('#main-content').css({
            'margin-left': '0px'
        });
        $('#sidebar').css({
            'margin-left': '-210px'
        });
        $('#sidebar > ul').hide();
        $("#container").addClass("sidebar-closed");
    } else {
        $('#main-content').css({
            'margin-left': '210px'
        });
        $('#sidebar > ul').show();
        $('#sidebar').css({
            'margin-left': '0'
        });
        $("#container").removeClass("sidebar-closed");
    }
});
