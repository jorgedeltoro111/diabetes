<script>
    import {isLoggedIn, user} from '../../stores';


</script>

<main>
    <h1 class="flex justify-center">profile</h1>
    {#if $isLoggedIn}
        <h1>Logged in</h1>
        <h2>{$user.displayName}</h2>
    {/if}
</main>
