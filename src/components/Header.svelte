<script>

    import { onMount } from "svelte";

    onMount(() => (
        
        const hamburger = document.querySelector(".hamburger");
        const nav = document.querySelector("nav");

        let state = true;

        window.addEventListener('resize', (event) => {
            if(event.currentTarget.innerWidth < 768) {
                hamburger.classList.remove("is-active");
                nav.classList.remove("is-active");
            }
        })

        hamburger.addEventListener("click", () => {

            if (state === true) {
                hamburger.classList.remove("is-active");
                nav.classList.remove("is-active");
                state = false;
            } else {
                hamburger.classList.add("is-active");
                nav.classList.add("is-active");
                state = true;
            }
        })
    ))
    
</script>


<header class="header">
	<div class="header-layout">
		<h3 class="header-heading">
			<!--  <img src="img/worker-fusko.png" alt=""> -->
			Zemní práce Augustin Fusko
		</h3>
		<div class="hamburger">
			<span class="stick1 stick" />
			<span class="stick2 stick" />
			<span class="stick3 stick" />
		</div>
	</div>
	<nav class="nav">
		<ul class="nav-list">
			<li><a class="nav-item" href="#todo">Hlavní stránka</a></li>
			<li><a class="nav-item" href="#todo">Ceník</a></li>
			<li><a class="nav-item" href="#todo">Kontakt</a></li>
		</ul>
	</nav>
</header>

<style lang="stylus">
    .header
        position relative
        z-index 1
        background white
        height 100px
        margin-bottom 12px
        box-shadow rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px
        border-radius 10px

        &-layout
            display flex
            align-items center
            position relative
            margin 0 auto
            height fit-content
            height 100px
            z-index 1
            border-radius 10px
            background rgb(75, 75, 75)
        

        &-heading
            display flex
            align-items center
            gap 12px
            position relative
            max-width 250px
            font-weight bold
            font-size 1.2rem
            color white
            line-height 1.8

            img
                height 80px

    .hero
        display flex
        position relative
        height 300px
        margin 0 auto
        box-shadow rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px

        @media only screen and (min-width: 768px)
            height 500px

        &-image
            position relative
            width 100%
            height 100%
            object-fit cover
            border-radius 10px
        
        &-arrowLeft, &-arrowRight
            position absolute
            display grid
            place-items center
            width 40px
            height 40px
            border-radius 50%
            background #FFF80
            cursor pointer

            svg
                height 25px

        
        &-arrowLeft
            top 50%
            left 48px
            transform translateY(-50%)

            svg
                position relative
                left -1.5px
        
        &-arrowRight
            top 50%
            right 48px
            transform translateY(-50%)

            svg
                position relative
                right -1.5px

    .nav
        position absolute
        padding 24px
        display flex
        flex-direction column
        align-items center
        justify-content center
        height 100px
        width 100%
        background rgb(75, 75, 75)
        border-radius 10px
        transform translateY(-100px)
        max-width 100%
        transition ease transform .3s
        box-shadow rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px

        @media only screen and (min-width: 768px)
            position relative
            flex-direction row
            justify-content flex-end
            top -100px
            z-index 2
            max-width 1300px
            transition none
            width 100%
            transform none
            background none

        &.is-active
            transform translateY(12px)

        &-list
            display flex
            justify-content space-around
            gap 48px
            list-style-type none
            padding-left 0
            width 100%

            @media only screen and (min-width: 768px)
                width unset
                gap 12px

        &-item
            text-align center
            text-decoration none
            font-weight 400
            color white
            cursor pointer
            padding 12px
            text-decoration underline
            text-decoration-color transparent
            text-decoration-thickness 2px
            text-underline-offset 2px
            transition ease text-decoration .3s

            &:hover
                text-decoration-color white
    
    .hamburger
        width 35px
        position absolute
        height 25px
        right 35px
        cursor pointer
        z-index 100

        @media only screen and (min-width: 768px)
            display none
        
        &.is-active
            .stick1
                transform: rotate(45deg) translate(8px,8px)
            

            .stick2
                opacity 0
            

            .stick3
                transform rotate(-45deg) translate(7px,-7px)       

        .stick
            position absolute
            display flex
            width 100%
            background white
            height 3px
            border-radius 5px
            opacity 1
            transition ease transform 0.3s, ease opacity .3s
            transform-origin 50% 50%

            &.stick1
                top 0
            
            &.stick2
                top 50%
                transform translateY(-50%)

            &.stick3
                bottom 0
</style>
