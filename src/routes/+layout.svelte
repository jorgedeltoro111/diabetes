<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a class="navbar-brand" href="/">Diabetes360</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <!-- svelte-ignore a11y_invalid_attribute -->
                <a class="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="profile">Perfil</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="login">Iniciar sesión</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Salir</a>
            </li>
        </ul>
        </div>
    </div>
</nav>


<slot/>