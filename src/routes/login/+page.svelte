<script>
    //Importamos nuestra conexion auth de firebase
    import {auth} from '../../firebase';
    //importamos las variables de estado de nuestra aplicacion para poder utilizarlas libremente en cualquier otro archivo.
    import {isLoggedIn, user} from '../../stores';
    //importamos google provider para poder utilizar el inicio de sesion de google y que saldra una ventana tipo pop up
    import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
    //importamos la funcion de svelte que nos permite navegar a otra pagina de nuestras rutas que ya hemos creado anteriormente
    import {goto} from '$app/navigation';

    //Aqui creamos la funcion del boton de inicio de sesion con google
    const login = async () =>{
        //aqui instanciamos una variable provider
        try{ 
            const provider = new GoogleAuthProvider();
            //obtenemos la informacion del usuario al momento de hacer login
            const answer = await signInWithPopup(auth, provider);
            //actualizamos las variables que declaramos en el archivo store para poder utilizarlas a nuestro gusto en cualquier archivo
            $user = answer.user;
            $isLoggedIn = true;
            goto('/profile');
            console.log(answer);
        }catch(error){
            console.error(error);
        }
    }

</script>
<main>
    <h1>login</h1>

    <button on:click={login}>
        Iniciar sesión con Google
    </button>
    
</main>