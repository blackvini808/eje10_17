function updateBreadcrumbs(section) {
    const breadcrumbsList = document.getElementById('breadcrumbs-list');
    const breadcrumbs = {
        home: '<li><a href="#" onclick="navigateTo(\'home\')">Inicio</a></li><li class="separador">></li><li class="active">Inicio</li>',
        catalog: '<li><a href="#" onclick="navigateTo(\'home\')">Inicio</a></li><li class="separador">></li><li class="active">Catálogo</li>',
        men: '<li><a href="#" onclick="navigateTo(\'home\')">Inicio</a></li><li class="separador">></li><li class="active">Caballeros</li>',
        women: '<li><a href="#" onclick="navigateTo(\'home\')">Inicio</a></li><li class="separador">></li><li class="active">Damas</li>',
        contact: '<li><a href="#" onclick="navigateTo(\'home\')">Inicio</a></li><li class="separador">></li><li class="active">Contáctanos</li>',
    }

}