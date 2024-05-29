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
            filtroEstado: ''
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
        }
    },
    methods: {
        registrarJuego() {
            const nuevoVideojuego = {
                nombre: this.nombreJuego,
                plataforma: this.plataforma,
                estado: this.estado,
                puntaje: this.puntaje
            };

            this.listaVideojuegos.push(nuevoVideojuego);

            this.nombreJuego = '';
            this.plataforma = '';
            this.estado = '';
            this.puntaje = null;
        },
        mostrarMasInfo(videojuego) {
            this.juegoSeleccionado = videojuego;
        }
    }
}).mount('#app');