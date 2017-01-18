export default {
    getGallery(v) {
        return v.$http.get('http://example.com');
    }
}