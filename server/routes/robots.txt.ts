export default defineEventHandler((event) => {
    setResponseHeader(event, 'Content-Type', 'text/plain');
    return 'Clean-param: edit\nSitemap: ' + getSiteOrigin() + '/sitemap.txt';
});
