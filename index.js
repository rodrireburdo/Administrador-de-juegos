Vue.createApp({
    data() {
        return {
            listaVideojuegos: [],
            juegoSeleccionado: null,
            nombreJuego: '',
            plataforma: '',
            estado: '',
            puntaje: null,
            filtroTitulo: '',
            filtroPlataforma: '',
            filtroEstado: '',
            errorNombre: '',
            errorPlataforma: '' ,
            errorEstado: '',
            errorPuntaje: '',
            intentoCargar: false
          
        };
    },
    computed: {
        juegosFiltrados() {
            return this.listaVideojuegos.filter(videojuego => {
                const coincideTitulo = videojuego.nombre.toLowerCase().includes(this.filtroTitulo.toLowerCase());
                const coincidePlataforma = this.filtroPlataforma === '' || videojuego.plataforma === this.filtroPlataforma;
                const coincideEstado = this.filtroEstado === '' || videojuego.estado === this.filtroEstado;
                return coincideTitulo && coincidePlataforma && coincideEstado;
            });            
        },
        esNombreInvalido(){
            return this.nombreJuego.trim() === '' && this.intentoCargar
            
        },
        esPlataformaInvalida(){
            return this.plataforma === '' && this.intentoCargar
        },
        esEstadoinvalido(){
            return this.estado === "" && this.intentoCargar
        },
        esPuntajeInvalido(){
            return this.puntaje !== null && (this.puntaje < 1 || this.puntaje > 10) && this.intentoCargar
        }
       
    
    },
    methods: {
        registrarJuego() {
            
            this.intentoCargar = true;

           if(!this.esNombreInvalido && !this.esPlataformaInvalida && !this.esEstadoinvalido && !this.esPuntajeInvalido){
            const nuevoVideojuego = {
                nombre: this.nombreJuego,
                plataforma: this.plataforma,
                estado: this.estado,
                puntaje: this.puntaje
            }
            this.listaVideojuegos.push(nuevoVideojuego);

            this.nombreJuego = '';
            this.plataforma = '';
            this.estado = '';
            this.puntaje = null;
                    
            this.intentoCargar = false;
           }
           
                

            
        },
        mostrarMasInfo(videojuego) {
            this.juegoSeleccionado = videojuego;
        }
    }
}).mount('#app');