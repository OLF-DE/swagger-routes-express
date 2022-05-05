const normaliseRoute = route => route.replace(/\{/g, ':').replace(/\}/g, '').replace(/\/+/, '/');

module.exports = normaliseRoute
