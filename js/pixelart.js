var myPixelDraw = {
    colorPicked: 0,
    cellColor: '#ecf0f1',
    defaultCells: 30,
    coloring: false,
    fns: {
        calcSize: function(cantidad) {
            if (typeof cantidad === 'undefined') {
                cantidad = myPixelDraw.defaultCells;
            }
            var cantidad = cantidad * cantidad;
            var container = myPixelDraw.container;
            var anchoContainer = container.width();
            container.empty();
            for (i = 0; i < cantidad; i++) {
                container.append('<div class="cell" draggable></div>');
            }
            var cell = $('.cell');
            var dimension = anchoContainer / 30;
            cell.width(dimension);
            cell.height(dimension);
            $(cell).css({"float":"left","outline":"1px solid white", "cursor":"pointer","background-color":"#ecf0f1"});;

        },
        reSize: function() {
            $("#sizeIt").click(function(){

            })
             var valorInput = $( "#input" ).val();
             if (valorInput == 0  && valorInput < 50){
                return calcSize;
             } else {
               // alert("El valor debe ser entre 0 y 50");
             }
        },
        detectMouseUp: function() {
        $(document).ready(function(){
            $(document).mouseup(function(){
                this.coloring === false
            })
        })
        },
        colorPalette: function() {
            $('.color-pick > *').each(function(i, ele) {
              var clase = $(ele).attr('class');
              $(ele).css('background-color', clase);
            });
        },
        pickColor: function() {
            $('.color-pick > *').click(function(){
                var clase = $(ele).attr('class');

            })
        },
        colorIt: function() {
            consol.log("colorIt")
        },
        colorOnDrag: function() {
            consol.log("colorOnDragr")
        },
        reset: function() {
            consol.log("reset")
        },
        toggleBorders: function() {
            consol.log("toggleBorders")
        },
        disableRightClick: function() {
            consol.log("disableRightClick")

        },
        grabImage: function() {
            consol.log("grabImage")
        },
    },
    init: function(container) {
        myPixelDraw.container = container;
        var fns = myPixelDraw.fns;
        for (var i = 0; i < Object.keys(fns).length; i++) {
            fns[Object.keys(fns)[i]]();
        }
    }
};


$(document).ready(function() {
    var container = $('#container');
    myPixelDraw.init(container);
});
