var g_ressources = (function () {
    var retval = [],
        imgs = ["bg", "platform", "bird", "enemigo", "sling1", "sling2", "sling3", "terreno", "wood1", "wood2", "smoke", "menu_refresh", "menu_back"];

    for (var i = 0; i < imgs.length; i++) {
        retval.push({
            type: "image",
            src: 'res/' + imgs[i] + '.png'
        });
    }

    return retval;
}());
