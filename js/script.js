var app = new Vue(
    {
        el : '#root',
        data : {
            activeImage : 0,
            images : [
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpeg',
                'img/montagne.webp',
            ]
        },
        methods : {
           nextImage() {
               if ( this.activeImage == this.images.length - 1 ) {
                   this.activeImage = 0;
               } else {
                   this.activeImage = this.activeImage + 1;
               }
           },
           prevImage() {
               if ( this.activeImage == 0 ) {
                   this.activeImage = this.images.length - 1;
               } else {
                   this.activeImage = this.activeImage - 1;
               }
           }
        },
        created() {
            setInterval(() => {
                this.nextImage()
            }, 3000);
        }
    }
);