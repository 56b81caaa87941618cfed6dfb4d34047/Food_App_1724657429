/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1724657430", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-400 to-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg" style="min-height: 350px;"><div id="footer-container" class="max-w-screen-xl p-8 py-10 mx-auto lg:py-16 md:p-12 lg:p-14" style=""><hr id="footer-divider" class="my-8 border-pink-300 sm:mx-auto opacity-30 lg:my-10" style=""> <div id="footer-content" class="text-center"><div class="flex" style=""><a id="footer-logo-link" href="#" data-mf-new="true" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white hover:text-pink-200 transition duration-300" style=""><img id="footer-logo" src="https://makeinfinite-mentat-test.azurewebsites.net/get_image/Food_App_1724657429/logo.svg" alt="Landwind Logo" class="h-8 mr-4 sm:h-10">
                            FoodieFinding1</a></div></div> <div class="flex"><div id="footer-text" data-mf-new="true" class="flex-1 block text-lg text-center text-white opacity-80 hover:opacity-100 transition duration-300" style="">
                        © 2023 FoodieFind. Discover, share, and savor delicious experiences in a cosmic culinary journey.'s</div></div></div></footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
