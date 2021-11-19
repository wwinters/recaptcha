<script type="text/javascript">
    var verifyCallback = function(response) {
        alert(response);
    };
    var guestWidget;
    var registerWidget;
    var onloadCallback = function() {
        // Renders the HTML element with id 'example1' as a reCAPTCHA widget.
        // The id of the reCAPTCHA widget is assigned to 'widgetId1'.
        grecaptcha.render('guestWidget', {
            'sitekey' : "{{sitekey}}",
            'callback' : verifyCallback
        });
        grecaptcha.render(document.getElementById('registerWidget'), {
            'sitekey' : "{{sitekey}}",
            'callback' : verifyCallback
        });
    };
</script>

<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async defer>
</script>



<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->