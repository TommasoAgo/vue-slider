var app = new Vue(
    {
        el : '#root',
        data : {
            // Setto la prima immagine da stampare come primo elemento dell'Array
            activeImage : 0,
            // Creo un Array di immagini
            images : [
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpeg',
                'img/montagne.webp',
            ]
        },
        methods : {
            // Funzione che andrà ad attivarsi all'evento click su Right Arrow
           nextImage() {
               if ( this.activeImage == this.images.length - 1 ) {
                   this.activeImage = 0;
               } else {
                   this.activeImage = this.activeImage + 1;
               }
           },
            // Funzione che andrà ad attivarsi all'evento click su Right Arrow
           prevImage() {
               if ( this.activeImage == 0 ) {
                   this.activeImage = this.images.length - 1;
               } else {
                   this.activeImage = this.activeImage - 1;
               }
           }
        },
        // Funzione che fa partire lo Slide Show ogni 3 secondi
        created() {
            setInterval(() => {
                this.nextImage()
            }, 3000);
        }
    }
);