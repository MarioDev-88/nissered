<template>
  <header class="main-header header-style-one">
    <div class="header-container">
            <!--Header Background Shape-->
            <div class="bg-shape-box"><div class="bg-shape"></div></div>
            <!-- Header Top -->
            <div class="header-top">
				<div class="inner clearfix">
                    <div class="top-left">
                        <div class="top-text">Nisse Red</div>
                    </div>
                    <div class="top-right">
                        <ul class="info clearfix">
                            <li><a href="tel:526621520091">+526621520091</a></li>
                            <li><a href="mailto:nisse.ignis@gmail.com">nisse.ignis@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Header Upper -->
            <div class="header-upper">
                <div class="inner-container clearfix">
                    <!--Logo-->
                    <div class="logo-box">
                        <div class="logo"><a href="index.html"><img src="images/logo.png" alt="Nisse Red" title="Nisse Red"></a></div>
                    </div>
                    <!--Nav Box-->
                    <div class="nav-outer clearfix">
                        <!--Mobile Navigation Toggler-->
                        <div class="mobile-nav-toggler"><span class="icon flaticon-menu-2"></span></div>
                        <!-- Main Menu -->
                        <nav class="main-menu navbar-expand-md navbar-light">
                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix">
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/">Inicio</router-link>
                                    </li>
									<li>
                                        <router-link active-class="current" exact-active-class="current" to="/about">Nosotros</router-link>
                                    </li>
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/ignisdancestudio">Ignis Dance Studio</router-link>
                                    </li>
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/galeria">Galeria</router-link>
                                    </li>
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/blog">Blog</router-link>
                                    </li>
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/contacto">Contacto</router-link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <!-- Main Menu End-->
                        <ul class="social-links clearfix">
                            <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                            <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                            <li><a href="#"><span class="fab fa-linkedin-in"></span></a></li>
                            <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <!--End Header Upper-->
        </div><!--End Header Container-->
        <!-- Sticky Header  -->
        <div class="sticky-header">
            <div class="auto-container clearfix">
                <!--Logo-->
                <div class="logo pull-left">
                    <a href="index.html" title=""><img src="images/sticky-logo.png" alt="" title=""></a>
                </div>
                <!--Right Col-->
                <div class="pull-right">
                    <!-- Main Menu -->
                    <nav class="main-menu clearfix">
                        <!--Keep This Empty / Menu will come through Javascript-->
                    
                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix">
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/">Inicio</router-link>
                                    </li>
									<li>
                                        <router-link active-class="current" exact-active-class="current" to="/about">Nosotros</router-link>
                                    </li>
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/ignisdancestudio">Ignis Dance Studio</router-link>
                                    </li>
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/galeria">Galeria</router-link>
                                    </li>
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/blog">Blog</router-link>
                                    </li>
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/contacto">Contacto</router-link>
                                    </li>
                                </ul>
                            </div>
                        </nav><!-- Main Menu End-->
                </div>
            </div>
        </div><!-- End Sticky Menu -->
        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><span class="icon flaticon-cancel"></span></div>
            <nav class="menu-box mCustomScrollbar _mCS_1"><div id="mCSB_1" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style="max-height: 472px;" tabindex="0"><div id="mCSB_1_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
                <div class="nav-logo"><a href="index.html"><img src="images/logo.png" alt="" title="" class="mCS_img_loaded"></a></div>
                <div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix">
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/">Inicio</router-link>
                                    </li>
									<li>
                                        <router-link active-class="current" exact-active-class="current" to="/about">Nosotros</router-link>
                                    </li>
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/ignisdancestudio">Ignis Dance Studio</router-link>
                                    </li>
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/galeria">Galeria</router-link>
                                    </li>
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/blog">Blog</router-link>
                                    </li>
                                    <li>
                                        <router-link active-class="current" exact-active-class="current" to="/contacto">Contacto</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                <!--Social Links-->
                <div class="social-links">
                    <ul class="clearfix">
                        <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                        <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                        <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                        <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </div><div id="mCSB_1_scrollbar_vertical" class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" style="display: block;"><div class="mCSB_draggerContainer"><div id="mCSB_1_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 30px; height: 420px; top: 0px; display: block; max-height: 462px;" oncontextmenu="return false;"><div class="mCSB_dragger_bar" style="line-height: 30px;"></div></div><div class="mCSB_draggerRail"></div></div></div></div></nav>
        </div><!-- End Mobile Menu -->
    </header>
	
</template>

<script>
export default {
    name:'Menu'
}
</script>

<style scoped>
li > .current {
    color:#c4781a !important;
    -webkit-text-shadow: 0px 0px 30px #c4781a, 0px 0px 30px #c4781a;
    -ms-text-shadow: 0px 0px 30px #c4781a, 0px 0px 30px #c4781a;
    text-shadow: 0px 0px 30px #c4781a, 0px 0px 30px #c4781a;
}
li .current::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    display: block;
    border-bottom: 3px solid #ff7a21;
    z-index: 5;
}
</style>